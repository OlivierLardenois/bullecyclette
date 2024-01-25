import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";

import Card from "./card";

type CarouselProps = {
  cards: {
    alt: string;
    image: IGatsbyImageData;
  }[];
};

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  return (
    <div className="flex justify-center space-x-5">
      {cards.map(({ alt, image }) => {
        return (
          <Card>
            <GatsbyImage image={image} alt={alt} />
          </Card>
        );
      })}
    </div>
  );
};

export default Carousel;
