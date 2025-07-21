---
applyTo: "**"
---

# Componentes de Layout

> Guia completo para construção de layouts com componentes.  
> Voltado para sistemas assistidos por IA com RAG, com exemplos reais e regras que evitam ambiguidade e alucinações.

## Box

O componente `Box` fornece opções de `padding` interno (espaçamento dentro do container).

### Props aceitas:

- `padding`
- `paddingX`, `paddingY`
- `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`

### Exemplo:

```tsx
<Box paddingX={16} paddingY={32}>
  <Child />
</Box>
```

**Nunca use `Box` para espaçamento externo entre elementos. Use `Stack` ou `Inline`.**

---

## Stack

Distribui seus filhos verticalmente com o espaçamento definido via `space`.

### Exemplo:

```tsx
<Stack space={24}>
  <Child1 />
  <Child2 />
  <Child3 />
</Stack>
```

---

## Inline

Distribui elementos horizontalmente. Pode ser considerado um `Stack` horizontal.

### Exemplo com `space` numérico:

```tsx
<Inline space={16}>
  <Child1 />
  <Child2 />
  <Child3 />
</Inline>
```

### Modos de espaçamento semântico:

#### `space="between"`

```tsx
<Inline space="between">
  <Child1 />
  <Child2 />
  <Child3 />
</Inline>
```

#### `space="around"`

```tsx
<Inline space="around">
  <Child1 />
  <Child2 />
  <Child3 />
</Inline>
```

#### `space="evenly"`

```tsx
<Inline space="evenly">
  <Child1 />
  <Child2 />
  <Child3 />
</Inline>
```

🔍 Os itens podem ser alinhados verticalmente conforme a documentação do Storybook.

---

## ResponsiveLayout

Layout base da tela. Define largura máxima responsiva.

```tsx
<ResponsiveLayout>
  <MyFeature />
</ResponsiveLayout>
```

🔒 Este layout define largura máxima com base em breakpoints padrão. Não use `ResponsiveLayout` dentro de outro `ResponsiveLayout`.

---

### Title

Define textos de título com tipografia consistente.

### Props aceitas:

- `variant`: Define o estilo do título (presetH1, presetH2, presetH3, presetH4, presetH5, presetH6).

### Exemplo de uso:

```tsx
<Title variant="presetH1">texto</Title>
```

## Dúvidas?

Sempre consulte o Storybook para obter informações oficiais sobre props e variações dos componentes:  
[https://negrihenrique.github.io/src-hnr-monorepo-portfolio](https://negrihenrique.github.io/src-hnr-monorepo-portfolio)

---

## Observações para IA com RAG:

- Apenas utilize componentes e props documentados.
- Não invente novas props ou variações que não existam no design system.
- Prefira exemplos já validados ou forneça apenas o que é 100% suportado.
