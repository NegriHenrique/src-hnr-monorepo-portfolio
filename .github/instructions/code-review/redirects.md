<instructions>
  <directive>Redirecionamentos</directive>

  <section>
    Critérios:

    - Em componentes como `ErrorAreaController`, `FeedbackError`, `FeedbackFailure`, verifique como o redirecionamento é feito.
    - O redirecionamento deve utilizar a função `replace` obtida via hook `useNavigation()`:
      `import { useNavigation } from '@hooks/use-navigation';`
    - Se estiver usando `redirect`, oriente a substituição por `replace`.
    - Isso deve ser feito apenas para componentes onde a semântica exige que o `replace` da API window.location.replace seja utilizado. Como telas de final de fluxo, onde a opção de voltar para a tela anterior prejudica a experiência do fluxo de navegação. Portanto, componentes/telas que não possuem necessidades de impedir o redirect, exemplo: `NotLoggedView`, podem fazer o uso do `redirect`.
  </section>

  <section>
    Justificativa 

    A função `replace` utiliza internamente `window.location.replace`, removendo a tela de erro da pilha do navegador. Isso evita que o usuário retorne à página de erro ao usar o botão "voltar".
  </section>
</instructions>