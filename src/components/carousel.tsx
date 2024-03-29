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
    <div className="flex flex-wrap justify-between gap-x-5 gap-y-10 [&>*]:mx-auto [&>*:not(:first-child)]:hidden md:[&>*:not(:first-child)]:block">
      {cards.map(({ alt, image }) => {
        return (
          <div className="first:">
            <Card>
              <GatsbyImage image={image} alt={alt} />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
