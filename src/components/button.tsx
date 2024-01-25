import * as React from "react";

type ButtonProps = {
  children: React.ReactNode;
  dark?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, dark }) => {
  return (
    <button
      className={`${dark ? "bg-liberty" : "bg-white"} ${dark ? "text-white" : "text-liberty"} rounded-lg px-6 py-2`}
    >
      {children}
    </button>
  );
};

export default Button;
