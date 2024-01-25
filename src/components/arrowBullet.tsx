import * as React from "react";

type arrowBulletProps = {
  desc?: string;
  color?: string;
  bgcolor?: string;
};

const ArrowBullet: React.FC<arrowBulletProps> = ({ desc, color, bgcolor }) => {
  return (
    <div className="columns-2 flex my-5">
      <div className="flex justify-center -space-x-9 -space-y-1">
        <div
          className={`w-7 h-7 bg-${bgcolor} [clip-path:polygon(0%_0%,_100%_50%,_0%_100%,_25%_50%)]`}
        ></div>
        <div
          className={`w-8 h-8 bg-${color} [clip-path:polygon(0%_0%,_100%_50%,_0%_100%,_25%_50%)]`}
        ></div>
      </div>
      <div className={`mx-3 font-medium text-${color} text-base uppercase`}>
        {desc}
      </div>
    </div>
  );
};

export default ArrowBullet;
