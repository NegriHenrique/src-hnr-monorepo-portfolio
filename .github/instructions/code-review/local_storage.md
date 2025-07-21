<instructions>
  <directive>Instruções para Uso Correto do LocalStorage</directive>

  <note>
    Esta diretriz deve ser aplicada sempre que o código fizer uso de <code>localStorage</code>.  
    Considere os critérios abaixo ao analisar, revisar ou sugerir implementações.
  </note>

  <section>
    Uso Apropriado

    - Utilize <code>localStorage</code> apenas quando houver necessidade de persistência entre sessões.
    - Considere <code>sessionStorage</code> para dados temporários limitados à sessão.
    - Armazene apenas informações simples, temporárias e relacionadas à interface.
  </section>

  <section>
    Limpeza de Dados

    - Após recuperar os dados, remova a chave imediatamente se não houver reutilização.
    - Evite manter informações desnecessárias no armazenamento.
  </section>

  <section>
    Estrutura de Armazenamento

    - Serialize os dados como objetos JSON ou arrays.
    - Não armazene strings complexas ou sem estrutura definida.
  </section>

  <section>
    Nomenclatura de Chaves

    - Use um padrão consistente, como: <code>@nome_da_jornada</code>.
    - Evite nomes genéricos ou duplicados entre jornadas distintas.
  </section>

  <section>
    Validação de Dados

    - Valide a estrutura e conteúdo antes de utilizar valores recuperados.
    - Nunca envie dados diretamente do <code>localStorage</code> para o BFF sem validação explícita.
  </section>

  <section>
    Comportamento Esperado

    - Geração de código com uso intencional e controlado de <code>localStorage</code>.
    - Garantia de limpeza após uso.
    - Tipagem segura e validação prévia ao acoplamento com back-end.
  </section>
</instructions>