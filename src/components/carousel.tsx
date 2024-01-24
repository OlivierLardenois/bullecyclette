import * as React from "react";

import Card, { CardProps } from "./card";

type CarouselProps = {
  cards: CardProps[];
};

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  return (
    <div className="flex justify-center space-x-5">
      {cards.map(({ alt, image }) => {
        return <Card alt={alt} image={image} />;
      })}
    </div>
  );
};

export default Carousel;
