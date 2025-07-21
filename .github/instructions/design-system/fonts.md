---
applyTo: "**"
---

# Fontes

Este guia fornece instruções oficiais para configuração e uso de fontes com os componentes, considerando compatibilidade com iOS, Android e navegadores modernos. O foco é garantir legibilidade, escalabilidade e fidelidade visual às diretrizes de design.

---

## Font Family

Por padrão, o projeto utiliza as fontes do sistema (San Francisco no iOS, Roboto no Android). É possível utilizar fontes do google fonts, como a Montserrat.

### Fontes do sistema: Roboto / San Francisco

Configure a fonte base do `body` com fallback para diversas plataformas:

```css
body {
  font-family: -apple-system, "Roboto", "Helvetica", "Arial", sans-serif;
}
```

### Exemplo de declaração da Montserrat em navegadores desktop:

```css
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  src:
    local("Montserrat Light"),
    local("Montserrat-Light"),
    url("/static/fonts/montserrat-v18-latin_latin-ext-300.woff2")
      format("woff2");
}
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src:
    local("Montserrat"),
    local("Montserrat-Regular"),
    url("/static/fonts/montserrat-v18-latin_latin-ext-regular.woff2")
      format("woff2");
}
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  src:
    local("Montserrat Medium"),
    local("Montserrat-Medium"),
    url("/static/fonts/montserrat-v18-latin_latin-ext-500.woff2")
      format("woff2");
}
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  src:
    local("Montserrat Bold"),
    local("Montserrat-Bold"),
    url("/static/fonts/montserrat-v18-latin_latin-ext-700.woff2")
      format("woff2");
}
```

⚠️ Altere os caminhos dos arquivos conforme sua hospedagem.

## ✏️ Corrigir fontes impostas pelo navegador

Alguns elementos como `input`, `textarea`, `pre`, `code` podem ter fontes nativas impostas pelo navegador. Para unificar:

### Opção 1: Estilizar explicitamente

```css
body {
  font-family: -apple-system, "Roboto", "Helvetica", "Arial", sans-serif;
}

input,
textarea,
pre,
code {
  font: inherit;
}
```

### Opção 2: Usar seletor global

```css
* {
  font-family: -apple-system, "Roboto", "Helvetica", "Arial", sans-serif;
}
```

### Opção 3: Usar reset.css

Recomenda-se utilizar um reset como o [reset.css de Eric Meyer](https://meyerweb.com/eric/tools/css/reset/).

---

## Fontes Dinâmicas e Acessibilidade

Os componentes se adaptam a configurações de acessibilidade (Dynamic Type) de sistemas operacionais.

### Recomendação:

```css
html {
  font-size: 16px; /* ou 100% */
}
```

### Suporte ao iOS para Dynamic Type:

```css
@supports (font: -apple-system-body) {
  html {
    font: -apple-system-body !important;
  }
}
```

---

## Observações para IA com RAG

- Use sempre `font-family` conforme os exemplos documentados.
- Replique exatamente os pesos (300, 400, 500, 700).
- Nunca invente nomes de fontes, pesos ou formatações não descritas aqui.
- Priorize `-apple-system` e `Montserrat` como padrão se nenhuma fonte personalizada for aplicada.
