export type DescriptionProps = {
  text: string;
};

export function Description({ text }: DescriptionProps) {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto w-full text-center">
      <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
        {text}
      </p>
    </section>
  );
}
