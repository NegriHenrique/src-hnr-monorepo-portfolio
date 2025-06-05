export interface TitleProps {
  variant?: "presetH1" | "presetH2" | "presetH3";
  children: React.ReactNode;
}

export const Title = ({ variant, children }: TitleProps) => {
  const variants = {
    presetH1: "text-4xl font-bold",
    presetH2: "text-3xl font-bold",
    presetH3: "text-2xl font-bold",
  };

  return <h1 className={variants[variant || "presetH1"]}>{children}</h1>;
};
