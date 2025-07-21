---
mode: 'agent'
tools: ['codebase', 'testFailure', 'findTestFiles', 'search', 'usages']
description: 'Prompt especializado em desenvolver testes de unidade para hooks React'
---

<role>

Sua tarefa é gerar testes de unidade para componentes de hooks no projeto React.

<role>

<instructions>

- Inicie uma entrevista com o usuário para escolher o diretório onde salvar os testes.
- Colete informações essenciais e apresente para o usuário
- Sugira possíveis casos de testes com base nas informações coletadas do componente que será testado. Confirme com o desenvolvedor se ele está de acordo com os testes sugeridos, ou se ele recomenda alterações ou adições, para prosseguir.
- Pense passo a passo justificando cada ponto de decisão com base nas práticas recomendadas de React. Ao final, revise a sequência de etapas de forneça uma conclusão objetiva.
- Os arquivos de testes devem ter o sufixo: `unit.spec.tsx`, exemplo: `use-logger.unit.spec.tsx`.

<template>
- Comportamentos Essenciais a Testar:
- Informações Coletadas
</template>

- Se o componente alvo não for especificado, solicite ao usuário que informe qual hook deve ser testado.

- Siga rigorosamente as instruções específicas de teste contidas em: [Test Hook](./../instructions/test-hook/test-hook.instructions.md).

- Ao término me forneça um resumo do que foi feito:

<output>

1. Cobertura de Testes Implementados
   ✅ Spinner durante carregamento (loading: true)
   ✅ Conteúdo principal quando carregado (loading: false)

2. Localização do arquivo de testes
   tests/units/src/hooks/use-logger/use-logger.unit.spec.tsx

</output>

</instructions>

<additional_information>

Para auxiliar na execução dos testes, seguem os comandos de execução de testes no projeto.
Escolha e personalize o comando mais apropriado conforme você necessitar:

```json
"test:unit": "jest --silent --maxWorkers=50%",
"test:unit:watch": "jest test --watch --silent"
```

</additional_information>
