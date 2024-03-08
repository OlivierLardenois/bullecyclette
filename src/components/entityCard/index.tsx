import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

type EntityCardProps = {
  title: string;
  image?: IGatsbyImageData;
  children?: React.ReactNode;
};

const EntityCard: React.FC<EntityCardProps> = ({ children, title, image }) => {
  return (
    <div className="flex flex-col items-center text-center w-full space-y-4">
      <p className="bg-white px-2 rounded-md text-liberty text-center w-full py-2 font-semibold text-lg">
        {title}
      </p>
      {children}
      {image && <GatsbyImage image={image} alt={""} />}
    </div>
  );
};

export default EntityCard;
