// Função utilitária para extrair o dado real do array de resposta do Strapi
export function extractArray<T>(arr: unknown[] | undefined): T[] {
  if (!Array.isArray(arr)) return [];
  // Se o item tem .data, retorna o .data, senão retorna o próprio item
  return arr.map((item) =>
    item && typeof item === "object" && "data" in item
      ? (item as { data: T }).data
      : (item as T)
  );
}
