"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  fullWidth,
  secondary,
  danger,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        `,
        disabled && "cursor-default opacity-50",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-500",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
