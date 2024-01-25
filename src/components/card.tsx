import * as React from "react";

type CardProps = {
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-white px-3 pt-3 pb-10 max-w-64">{children}</div>;
};

export default Card;
