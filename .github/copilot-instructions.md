# Contexto Geral do Projeto

> Este projeto segue diretrizes modernas de desenvolvimento front-end e está orientado a componentes, escalabilidade, testabilidade e modularização. Todas as respostas do GitHub Copilot devem ser fornecidas em **português (PT-BR)** e sem uso de emojis.
> Este projeto é um monolito que utiliza **Single SPA** para compartilhar micro frontends, permitindo uma arquitetura modular e escalável.
> O Host é construído com **Next.js** e os micro frontends são desenvolvidos com **React**. A comunicação entre eles é feita via `props`, `context` e `zustand`, sem uso de Redux ou MobX.

---

## Tecnologias Utilizadas

- **Linguagens e Frameworks:** React, TypeScript, Node.js, JavaScript
- **Gerenciamento de Estado:** Zustand, React Context, React Query
- **Validação de Schemas:** Zod
- **Formulários:** React Hook Form
- **Animações**: Magic UI
- **Internacionalização:** react-i18next
- **Testes:** Vitest, Cypress (BDD e E2E)
- **Empacotamento e Módulos:** Webpack, Single SPA
- **Design System:** Hnr Design system (shared-ui)
- **Documentação de UI:** Storybook
- **Roteamento:** Next.js (host) e React Router (micro frontends)
- **Acessibilidade:** WCAG 2.1, ARIA
- **Performance:** Lazy loading, Code splitting, Tree shaking
- **Segurança:** Proteção contra XSS/CSRF, validação de entradas

---

## Estrutura Arquitetural

> O Host (pasta `host`), feito em Nextjs, é responsável por gerenciar a aplicação como um todo, incluindo roteamento, autenticação e estado global.
> Os micro frontends (pasta `mfes`), feitos em React, são componentes independentes que podem ser desenvolvidos, testados e implantados separadamente.
> O Design System (pasta `shared-ui`) contém componentes reutilizáveis, tokens e estilos compartilhados entre os micro frontends.

- Os projetos são baseados na separação entre:

  ### `*.controller.tsx` — **Container Components**

  - Responsáveis por lógica de negócio, integração com APIs, controle de estado e manipulação de dados.
  - Gerenciam formulários com `React Hook Form` e validam dados com `Zod`.
  - Não devem conter elementos visuais.
  - **Skeletons não devem ser usados aqui.**

  ### `*.view.tsx` — **Presentational Components**

  - Responsáveis exclusivamente pela interface e exibição de dados.
  - Recebem dados e callbacks via `props`, sem acessar lógica ou estado global.
  - Podem conter animações, traduções e efeitos visuais.
  - **Skeletons são utilizados exclusivamente aqui.**

- O projeto do shared-ui contém componentes reutilizáveis, tokens e estilos compartilhados entre os micro frontends:

  - **Componentes:** Botões, formulários, modais, tabelas, etc.
  - **Tokens:** Cores, espaçamentos, tipografia, etc.
  - **Estilos:** Utilitários de estilo como Tailwind CSS.

---

## 🧩 Padrões de Codificação

### TypeScript

- Todo novo código deve ser escrito em TypeScript.
- Seguir princípios de imutabilidade (`const`, `readonly`) e composição funcional.
- Usar interfaces para modelar estruturas de dados e contratos de tipos.
- Utilizar operadores como `?.` e `??` para segurança de acesso.

### Next.js

- Utilizar `getServerSideProps` para dados dinâmicos e `getStaticProps` para dados estáticos.
- Utilizar `getStaticPaths` para rotas dinâmicas.
- Utilizar `next/router` para navegação e manipulação de rotas.

### React

- Utilizar exclusivamente **componentes funcionais com hooks**.
- Evitar hooks condicionais ou fora da ordem declarativa.
- Preferir `function declaration` ao invés de `const = () =>`. Exemplo: `export function doThing() {...}` Ou para componentes React: `export function MyComponent() {...}`
- Utilizar os componentes visuais do design system.

### Shared UI

- Criar componentes reutilizáveis seguindo as diretrizes do Design System.
- Utilizar tokens de estilo e tipografia do Design System.
- Utilizar tailwind para estilos utilitários, evitando CSS inline.
- Utilizar tailwind para definir tokens de espaçamento, cores e tipografia.

### Nomenclatura

- **PascalCase**: componentes, interfaces, aliases de tipos
- **camelCase**: variáveis, funções, métodos
- **ALL_CAPS**: constantes
- **\_underscore**: prefixo para membros privados

---

## Princípios Gerais do Projeto

- Aplicação construída com foco em responsividade e performance para webviews móveis.
- Modularização com `Single SPA`, permitindo compartilhamento de micro frontends.
- **Acessibilidade:** Aderência às diretrizes WCAG.
- **Performance:** Uso de técnicas como fragmentação de bundles e carregamento preguiçoso (lazy).
- **Segurança:** Validação rigorosa de entradas e proteção contra XSS/CSRF.
- **Armazenamento local:** `localStorage` ou `sessionStorage` para persistência leve de dados.

---

## Documentação e Componentização

- A UI é documentada via **Storybook**, permitindo preview e testes isolados de componentes.
- O Design System fornece os principais componentes visuais, promovendo padronização estética e responsiva.

---

# Orientações adicionais

[Desenvolvimento](./instructions/dev/dev.instructions.md)
