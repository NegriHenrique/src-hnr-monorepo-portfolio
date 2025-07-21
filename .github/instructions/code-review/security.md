<instructions>
  <directive>Segurança</directive>

  <section>
    Critérios

    - Verifique se entradas do usuário estão sendo validadas adequadamente.
    - Certifique-se de que dados sensíveis não estão expostos (ex.: senhas ou chaves de API no código).
    - Garanta que exceções estão sendo tratadas corretamente, sem capturar exceções genéricas como `catch (Exception)`.
  </section>

  <section>
    Problemas Comuns a Identificar

    - Uso de dados do usuário diretamente sem validação.
    - Falta de tratamento de erros.
    - Exposição de dados sensíveis em logs ou mensagens de erro.
  </section>
</instructions>