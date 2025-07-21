---
applyTo: '**'
---

> Contém um exemplo de teste de Hook com boas práticas e soluções para desafios comuns.
> Pode utilizar como base e complemento auxiliar para testes de hooks React.

<context>

Aprendizados e Desafios na Implementação dos Testes do Hook useNavigation
Após analisar e implementar os testes para o hook `useNavigation`, gostaria de compartilhar os principais aprendizados, desafios enfrentados e as soluções aplicadas para garantir que todos os testes fossem bem-sucedidos seguindo as melhores práticas.

</context>

<insights>

## Estrutura do Hook
O hook `useNavigation` é um custom hook que:

- Gerencia navegação interna da SPA usando react-router-dom
- Lida com navegação externa usando window.location
- Suporta tanto strings de rota quanto objetos com query parameters
- Oferece funcionalidades de redirect, replace e navegação para trás
- Abstrai a lógica de decisão entre navegação interna e externa

## Principais Aprendizados

### 1. Mocking Estratégico de Dependências Externas
Aprendi a importância de mockar apenas as dependências externas necessárias, mantendo a lógica interna do hook intacta:

```typescript
// Mock apenas do useNavigate do react-router-dom
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock das APIs do window.location
const mockLocation = {
  assign: jest.fn(),
  replace: jest.fn(),
};
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});
```

Este approach permite testar o comportamento real do hook sem depender de implementações externas.

### 2. Uso Correto do renderHook com Wrapper
O hook depende do contexto do react-router, então foi necessário criar um wrapper apropriado:

```typescript
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const { result } = renderHook(() => useNavigation(), { wrapper });
```

### 3. Teste de Contratos Públicos, Não Implementação
Foquei em testar o que o hook retorna e seus efeitos colaterais, não como ele funciona internamente:

```typescript
// ✅ Testo o que o hook retorna
expect(result.current).toEqual({
  redirect: expect.any(Function),
  back: expect.any(Function),
  replace: expect.any(Function),
  replaceOutsideSPA: expect.any(Function),
  redirectOutsideSPA: expect.any(Function),
});

// ✅ Testo os efeitos das funções
expect(mockNavigate).toHaveBeenCalledWith({
  pathname: '/home',
  search: '',
});
```

## Desafios Enfrentados e Soluções

### 1. Gerenciamento de Parâmetros Opcionais no navigate()
**Desafio**: O hook `useNavigation` chama `navigate()` com um segundo parâmetro que pode ser `undefined`, mas os testes iniciais não esperavam isso.

**Problema Inicial**:
```typescript
// ❌ Teste falhava porque esperava apenas um parâmetro
expect(mockNavigate).toHaveBeenCalledWith({
  pathname: '/home',
  search: '',
});
```

**Solução**: Analisei o código do hook e descobri que `handleNavigate` sempre passa o parâmetro `options`, mesmo quando é `undefined`:

```typescript
// ✅ Ajustei os testes para refletir o comportamento real
expect(mockNavigate).toHaveBeenCalledWith(
  {
    pathname: '/home',
    search: '',
  },
  undefined, // O hook sempre passa este parâmetro
);
```

### 2. Mock Adequado do window.origin
**Desafio**: As funções helper `transformPathObjectToURL` e `transformRouteUrlToURL` dependem de `window.origin` para construir URLs absolutas.

**Solução**: Mockei `window.origin` para garantir URLs consistentes nos testes:

```typescript
Object.defineProperty(window, 'origin', {
  value: 'http://localhost:3000',
  writable: true,
});
```

### 3. Teste de Lógica Condicional (URLs Internas vs Externas)
**Desafio**: O hook tem lógica complexa para decidir entre navegação interna (react-router) e externa (window.location).

**Solução**: Criei testes específicos para cada cenário:

```typescript
// Teste para URLs internas
it('should handle internal route navigation with string path', () => {
  act(() => {
    result.current.redirect('/home' as RouteUrl);
  });
  expect(mockNavigate).toHaveBeenCalled();
  expect(mockLocation.assign).not.toHaveBeenCalled();
});

// Teste para URLs externas
it('should handle external URL navigation with string', () => {
  act(() => {
    result.current.redirect('https://external.com');
  });
  expect(mockLocation.assign).toHaveBeenCalledWith('https://external.com');
  expect(mockNavigate).not.toHaveBeenCalled();
});
```

### 4. Tratamento de Query Parameters
**Desafio**: Testar a construção correta de URLs com query parameters usando `createSearchParams`.

**Solução**: Testei tanto objetos PathObject com query quanto sem query:

```typescript
// Com query parameters
const pathObject = {
  pathname: '/search' as RouteUrl,
  query: { term: 'test', category: 'all' },
};

act(() => {
  result.current.redirect(pathObject);
});

expect(mockNavigate).toHaveBeenCalledWith(
  {
    pathname: '/search',
    search: '?term=test&category=all',
  },
  undefined,
);
```

### 5. Reset de Mocks Entre Testes
**Desafio**: Garantir que os mocks não interferissem entre si nos diferentes testes.

**Solução**: Implementei reset adequado no `beforeEach`:

```typescript
beforeEach(() => {
  jest.clearAllMocks();
});
```

## Técnicas de Teste Utilizadas

### 1. Uso Correto do act()
Utilizei `act()` para todas as ações que alteram estado ou causam side effects:

```typescript
act(() => {
  result.current.redirect('/home' as RouteUrl);
});
```

### 2. Teste de Edge Cases
Incluí testes para cenários extremos:

```typescript
// URLs malformadas
it('should handle malformed URLs gracefully', () => {
  act(() => {
    result.current.redirect('not-a-valid-url');
  });
  
  expect(mockNavigate).toHaveBeenCalledWith({
    pathname: '/not-a-valid-url',
    search: '',
  });
});

// Query parameters vazios
it('should handle empty query parameters', () => {
  const pathObject = {
    pathname: '/empty-query' as RouteUrl,
    query: {},
  };
  // ... teste
});
```

### 3. Verificação de Não-Chamadas
Verifiquei que funções não deveriam ser chamadas em cenários específicos:

```typescript
expect(mockNavigate).not.toHaveBeenCalled();
expect(mockLocation.assign).not.toHaveBeenCalled();
```

### 4. Teste de Diferentes Tipos de Entrada
O hook aceita tanto strings quanto objetos `PathObject`:

```typescript
// String simples
result.current.redirect('/home' as RouteUrl);

// PathObject complexo
result.current.redirect({
  pathname: '/search' as RouteUrl,
  query: { term: 'test' },
});
```

## Lições Importantes

### Diferenças entre Testes de Hooks e Componentes
- **renderHook()** ao invés de `render()`
- Foco em **side effects** ao invés de DOM
- **act()** para ações síncronas
- **Wrapper** apenas quando necessário para contextos

### Mock Inteligente
- Mock apenas dependências externas
- Preserve a lógica interna do hook
- Configure mocks realistas

### Teste de Comportamento
- Teste o contrato público do hook
- Verifique side effects esperados
- Inclua edge cases e cenários de erro

### Estrutura de Testes Hierárquica
```typescript
describe('useNavigation', () => {
  describe('when initialized', () => {});
  describe('when redirect is called', () => {});
  describe('when replace is called', () => {});
  describe('edge cases', () => {});
});
```

</insights>

<conclusion>

## Conclusão
Os testes para o hook `useNavigation` foram desenvolvidos seguindo as melhores práticas para testes de hooks React, com foco em:

- **Comportamento sobre implementação**
- **Mocking estratégico** de dependências externas
- **Side effects** e efeitos colaterais
- **Edge cases** e cenários extremos
- **Tipagem TypeScript** completa
- **Estrutura hierárquica** clara

Este padrão de testes garante que o hook continuará funcionando conforme esperado mesmo com futuras mudanças em sua implementação interna, mantendo a confiabilidade e robustez do código.

</conclusion>

<code_example>

```typescript
import { renderHook, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { useNavigation } from '../index';
import { RouteUrl } from '../../../utils/enums/routes-url';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockLocation = {
  assign: jest.fn(),
  replace: jest.fn(),
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

Object.defineProperty(window, 'origin', {
  value: 'http://localhost:3000',
  writable: true,
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('useNavigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when initialized', () => {
    it('should return navigation functions', () => {
      const { result } = renderHook(() => useNavigation(), { wrapper });

      expect(result.current).toEqual({
        redirect: expect.any(Function),
        back: expect.any(Function),
        replace: expect.any(Function),
        replaceOutsideSPA: expect.any(Function),
        redirectOutsideSPA: expect.any(Function),
      });
    });
  });

  describe('when redirect is called', () => {
    it('should handle internal route navigation with string path', () => {
      const { result } = renderHook(() => useNavigation(), { wrapper });

      act(() => {
        result.current.redirect('/home' as RouteUrl);
      });

      expect(mockNavigate).toHaveBeenCalledWith(
        {
          pathname: '/home',
          search: '',
        },
        undefined,
      );
    });

    it('should handle internal route navigation with PathObject', () => {
      const { result } = renderHook(() => useNavigation(), { wrapper });
      const pathObject = {
        pathname: '/search' as RouteUrl,
        query: { term: 'test', category: 'all' },
      };

      act(() => {
        result.current.redirect(pathObject);
      });

      expect(mockNavigate).toHaveBeenCalledWith(
        {
          pathname: '/search',
          search: '?term=test&category=all',
        },
        undefined,
      );
    });

    it('should handle external URL navigation with string', () => {
      const { result } = renderHook(() => useNavigation(), { wrapper });

      act(() => {
        result.current.redirect('https://external.com');
      });

      expect(mockLocation.assign).toHaveBeenCalledWith('https://external.com');
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  describe('when replace is called', () => {
    it('should handle internal route replacement with string path', () => {
      const { result } = renderHook(() => useNavigation(), { wrapper });

      act(() => {
        result.current.replace('/dashboard' as RouteUrl);
      });

      expect(mockNavigate).toHaveBeenCalledWith(
        {
          pathname: '/dashboard',
          search: '',
        },
        { replace: true },
      );
    });
  });

  describe('edge cases', () => {
    it('should handle malformed URLs gracefully', () => {
      const { result } = renderHook(() => useNavigation(), { wrapper });

      act(() => {
        result.current.redirect('not-a-valid-url');
      });

      expect(mockNavigate).toHaveBeenCalledWith(
        {
          pathname: '/not-a-valid-url',
          search: '',
        },
        undefined,
      );
      expect(mockLocation.assign).not.toHaveBeenCalled();
    });
  });
});
```

</code_example>
