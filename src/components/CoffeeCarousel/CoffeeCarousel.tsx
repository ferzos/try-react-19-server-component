import React from "react";
import CoffeeCard from "./components/CoffeeCard";
import { Coffee } from "./types";

interface Props {
  coffee: Coffee[];
}

const CoffeeCarousel = (props: Props) => {
  const { coffee } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 8,
        overflowX: "auto",
      }}
    >
      {coffee.map(({ title, description, ingredients, image, id }, index) => (
        <CoffeeCard
          key={`${id}-${index}`}
          description={description}
          image={image}
          ingredients={ingredients}
          title={title}
        />
      ))}
    </div>
  );
};

export default CoffeeCarousel;
