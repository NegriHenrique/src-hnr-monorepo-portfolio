<instructions>
  <directive>Performance — Diretrizes de Code Review</directive>

  <note>
    Esta diretriz auxilia a identificar e corrigir problemas de performance em aplicações React com foco em hooks, renderizações e formulários.
  </note>

  <section>
    Critérios de Melhoria

    - Use `useCallback`, `useMemo` ou `useRef` para memoizar funções ou objetos pesados.
    - Use `useCallback` apenas quando:
      - A função for passada para um componente com `React.memo`
      - A função vier de um custom hook
      - A função for usada dentro de um `useEffect`
    - Separe responsabilidades dentro do `useEffect`.
    - Evite `eslint-disable` sem justificativa explícita.
    - Prefira `useRef` para valores que não disparam renderizações.
    - Reduza o uso de `useState` excessivo em formulários grandes.
  </section>

  <section>
    Avaliações a Realizar

    - Hooks com dependências incorretas ou ausentes.
    - Reuso de funções pesadas dentro de `useEffect` ou JSX.
    - Loops ou cálculos desnecessários em renderizações.
    - `eslint-ignore-next-line` usado sem motivo válido.
    - Múltiplas responsabilidades no mesmo `useEffect`.
    - Muitos `useState` em vez de uma abordagem estruturada.
  </section>

  <section>
    Recomendação para Formulários Complexos

    Utilize:
    - [`react-hook-form`](https://react-hook-form.com/) para evitar re-renderizações desnecessárias.
    - [`zod`](https://zod.dev/) para validação declarativa.

    ```tsx
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    });
    ```

    Essa abordagem reduz re-renderizações e facilita a manutenção.
  </section>

  <section>
    Problemas Comuns

    - Uso injustificado de `eslint-ignore-next-line`.
    - Arrays de dependência com erros.
    - `useEffect` sobrecarregado.
    - Funções duplicadas em renderizações.
    - `useState` ineficiente.
    - Algoritmos com complexidade excessiva.
  </section>

  <section>
    Boas Práticas Finais

    - Avalie performance também por economia de renderizações.
    - Considere ciclo de vida de componentes e reatividade.
    - Use ferramentas como React DevTools Profiler, logs e benchmarks.
  </section>
</instructions>