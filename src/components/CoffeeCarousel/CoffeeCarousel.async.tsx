"use client";

import { use } from "react";
import { Coffee } from "./types";
import { CoffeeCard } from "./components";

interface Props {
  coffeePromise: Promise<Coffee[]>;
}

const CoffeeCarouselAsync = (props: Props) => {
  const { coffeePromise } = props;

  const coffee = use(coffeePromise);

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
          title={`${title}-client`}
        />
      ))}
    </div>
  );
};

export default CoffeeCarouselAsync;
