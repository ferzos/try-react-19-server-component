import { CoffeeCarouselClient } from "@/components/CoffeeCarousel";
import { fakeFetch } from "@/utils/fakeTimer";

interface Props {
  params: { type: string };
}

const CoffeeDetailPage = async ({
  params: { type },
}: Props) => {
  const getCoffee = async () => {
    await fakeFetch(3000)
    const response = await fetch(`https://api.sampleapis.com/coffee/${type}`);
    return await response.json();
  };

  const coffeeData = await getCoffee();

  return (
    <>
      <a href={`/coffee/${type === "hot" ? "iced" : "hot"}`}>
        <button>{`Go to ${type === "hot" ? "iced" : "hot"}`}</button>
      </a>
      {[...new Array(100).fill('')].map((_, index) =>
        <CoffeeCarouselClient key={index} coffee={coffeeData} />
      )}
    </>
  );
};

export default CoffeeDetailPage;