import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

type CardProps = {
  alt: string;
  image: IGatsbyImageData;
};

const Card: React.FC<CardProps> = ({ alt, image }) => {
  return (
    <div className="bg-white px-3 pt-3 pb-10 max-w-64">
      <GatsbyImage className="bg-blue-500" image={image} alt={alt} />
    </div>
  );
};

export default Card;
