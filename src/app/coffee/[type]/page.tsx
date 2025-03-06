import { CoffeeCarousel } from "@/components/CoffeeCarousel";
import { fakeFetch } from "@/utils/fakeTimer";

const COMPONENT_MULTIPLIER = 1

interface Props {
  params: { type: string };
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const CoffeeDetailPage = async ({
  params: { type },
  searchParams
}: Props) => {
  const queryParams = await searchParams || {};

  const { component_multiplier: componentMultiplier } = queryParams || {}

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
      {[...new Array(Number(componentMultiplier) || COMPONENT_MULTIPLIER).fill('')].map((_, index) =>
        <CoffeeCarousel key={index} coffee={coffeeData} />
      )}
    </>
  );
};

export default CoffeeDetailPage;