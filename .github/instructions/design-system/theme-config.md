---
applyTo: "**"
---

# Theme Config e Textos Personalizáveis

O Design system utiliza tailwind para suas classes utilitárias, permitindo uma personalização rápida e eficiente do layout e estilo dos componentes.

### Exemplo de configuração do `theme`do tailwind:

```ts
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
};
```
