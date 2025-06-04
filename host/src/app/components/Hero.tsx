import Image from "next/image";

export type HeroProps = {
  name: string;
  title: string;
  subtitle: string;
  image: string;
};

export function Hero({ name, title, subtitle, image }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-24 gap-6 text-center bg-white dark:bg-black">
      <Image
        src={image}
        alt={name}
        width={160}
        height={160}
        className="rounded-full border-2 border-black/10 dark:border-white/10 shadow-xl mb-6 object-cover"
        priority
      />
      <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-black dark:text-white leading-tight mb-2">
        {name}
      </h1>
      <h2 className="text-2xl sm:text-3xl font-medium text-zinc-700 dark:text-zinc-300 mb-2">
        {title}
      </h2>
      <p className="max-w-2xl text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 mb-4">
        {subtitle}
      </p>
      {/* Espaço para links sociais ou contato, se desejar */}
    </section>
  );
}
