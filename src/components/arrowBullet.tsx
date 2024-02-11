import * as React from "react";

type ArrowBulletProps = {
  children?: React.ReactNode;
  dark?: boolean;
};

const ArrowBullet: React.FC<ArrowBulletProps> = ({ children, dark }) => {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <div
          className={`w-8 h-8 z-10 ${dark ? "bg-white" : "bg-dark-sienna"} [clip-path:polygon(0%_0%,_100%_50%,_0%_100%,_25%_50%)]`}
        />
        <div
          className={`absolute w-7 h-7 top-[6px] left-[7px] ${dark ? "bg-dark-sienna" : "bg-white"} [clip-path:polygon(0%_0%,_100%_50%,_0%_100%,_25%_50%)]`}
        />
      </div>
      <div
        className={`mx-3 ${dark ? "text-white" : "text-dark-sienna"} uppercase`}
      >
        {children}
      </div>
    </div>
  );
};

export default ArrowBullet;
