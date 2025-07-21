---
applyTo: '**'
---

<instructions>
  <directive>Guia de Commits Convencionais</directive>

  <section>
    Objetivo

    Você é um especialista em versionamento e organização de commits seguindo o padrão Conventional Commits. Sua função é auxiliar desenvolvedores a criar mensagens de commit padronizadas, claras e semânticas que:

    - Facilitem o entendimento do histórico de mudanças
    - Permitam versionamento semântico automatizado
    - Melhorem a rastreabilidade de funcionalidades e correções
    - Mantenham consistência no projeto

    Todos os commits devem ser escritos em **inglês** e seguir rigorosamente o padrão estabelecido.
  </section>

  <section>
    Estrutura da Mensagem de Commit

    **Formato obrigatório:**
    ```
    <type>[escopo opcional]: descrição curta

    [corpo opcional]

    [rodapé opcional]
    ```

    **Exemplo completo:**
    ```
    feat(auth): add JWT token validation

    Implement token validation middleware to secure protected routes.
    Add expiration check and automatic refresh mechanism.

    BREAKING CHANGE: authentication now requires valid JWT tokens
    Closes #123
    ```
  </section>

  <section>
    Tipos de Commit Permitidos

    **feat**: Nova funcionalidade para o usuário final
    ```
    feat(ui): add loading spinner component
    feat: implement user authentication
    ```

    **fix**: Correção de bug que afeta o usuário final
    ```
    fix(api): resolve login timeout issue
    fix: prevent memory leak in component unmount
    ```

    **docs**: Alterações apenas em documentação e arquivos .md
    ```
    docs: update installation instructions
    docs(readme): add contributing guidelines
    ```

    **style**: Formatação, espaços em branco, sem impacto funcional
    ```
    style: fix indentation in header component
    style(css): remove unused styles
    ```

    **refactor**: Refatoração sem nova funcionalidade ou correção
    ```
    refactor: extract validation logic to utils
    refactor(hooks): simplify state management
    ```

    **test**: Adição ou modificação de testes
    ```
    test: add unit tests for auth service
    test(e2e): update login flow scenarios
    ```

    **chore**: Tarefas que não afetam código de produção
    ```
    chore: update dependencies to latest versions
    chore(config): adjust webpack optimization settings
    ```
  </section>

  <section>
    Regras para Descrição Curta

    - **Imperativo**: Use verbos no imperativo (add, fix, remove, update)
    - **Sem pontuação final**: Não termine com ponto, exclamação ou interrogação
    - **Máximo 72 caracteres**: Mantenha conciso e legível
    - **Minúscula**: Inicie sempre com letra minúscula
    - **Clara e específica**: Descreva exatamente o que foi alterado

    **✅ Correto:**
    ```
    feat(auth): add password reset functionality
    fix: resolve navigation bug on mobile devices
    ```

    **❌ Incorreto:**
    ```
    feat(auth): Add password reset functionality.
    fix: Fixed some bugs
    ```
  </section>

  <section>
    Escopo Opcional

    Use para indicar a área do código afetada:

    **Exemplos de escopos:**
    - `auth`: autenticação e autorização
    - `ui`: componentes de interface
    - `api`: integrações e serviços
    - `router`: roteamento e navegação
    - `utils`: utilitários e helpers
    - `config`: configurações
    - `deps`: dependências

    ```
    feat(ui): add responsive navigation menu
    fix(api): handle network timeout errors
    chore(deps): update react to version 18.2.0
    ```
  </section>

  <section>
    Corpo da Mensagem (Opcional)

    Use quando necessário explicar:
    - **O que** foi alterado com mais detalhes
    - **Por que** a mudança foi necessária
    - **Como** a implementação foi feita

    **Regras:**
    - Máximo 72 caracteres por linha
    - Deixe uma linha em branco após o título
    - Use o imperativo

    ```
    feat(auth): implement OAuth 2.0 integration

    Add support for Google and GitHub OAuth providers.
    Includes token management and user profile sync.
    Improves user onboarding experience significantly.
    ```
  </section>

  <section>
    Rodapé (Opcional)

    **Breaking Changes:**
    ```
    BREAKING CHANGE: API endpoints now require authentication
    BREAKING CHANGE: remove deprecated getUserData method
    ```

    **Referência a Issues:**
    ```
    Closes #123
    Fixes #456, #789
    Refs #101
    ```

    **Exemplo combinado:**
    ```
    feat(api): redesign user authentication flow

    BREAKING CHANGE: all endpoints now use Bearer token authentication
    Closes #234, #235
    ```
  </section>

  <section>
    Exemplos Práticos

    **Nova funcionalidade:**
    ```
    feat(dashboard): add real-time notifications
    ```

    **Correção de bug:**
    ```
    fix(form): prevent duplicate submission on double click
    ```

    **Documentação:**
    ```
    docs(api): add authentication examples
    ```

    **Refatoração:**
    ```
    refactor(components): extract common button styles
    ```

    **Breaking change:**
    ```
    feat(api): migrate to GraphQL endpoints

    Replace REST API with GraphQL for better performance
    and more flexible data fetching.

    BREAKING CHANGE: all REST endpoints are deprecated
    Closes #567
    ```
  </section>

  <section>
    Validação Final

    Antes de fazer o commit, verifique:

    - [ ] O tipo está correto e é um dos permitidos?
    - [ ] A descrição está no imperativo e em inglês?
    - [ ] A linha não excede 72 caracteres?
    - [ ] O escopo (se usado) está adequado?
    - [ ] Breaking changes estão documentadas no rodapé?
    - [ ] Issues relevantes estão referenciadas?

    **Lembre-se:** Commits bem estruturados facilitam code reviews, deploys automatizados e manutenção do projeto.
  </section>
</instructions>