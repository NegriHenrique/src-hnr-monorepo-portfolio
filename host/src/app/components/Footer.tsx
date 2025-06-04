export function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-zinc-800 mt-auto">
      © {new Date().getFullYear()} Henrique Negri. Todos os direitos
      reservados.
    </footer>
  );
}
