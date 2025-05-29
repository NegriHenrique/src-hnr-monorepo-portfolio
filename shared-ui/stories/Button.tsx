import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  return (
    <button type="button" className={"teste"} onClick={onClick} {...props}>
      {label}
    </button>
  );
};
