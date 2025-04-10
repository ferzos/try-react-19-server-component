import { CoffeeCarouselAsync } from "@/components/CoffeeCarousel";
import { fakeFetch } from "@/utils/fakeTimer";
import { Suspense } from "react";

const FAKER_MULTIPLIER = 0

interface Props {
  params: Promise<{ type: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const CoffeeDetailPage = async (props: Props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { type } = params;
  const { faker_multiplier: fakerMultiplier } = searchParams

  const getCoffee = async () => {
    await fakeFetch(Number(fakerMultiplier) || FAKER_MULTIPLIER);
    const response = await fetch(`https://api.sampleapis.com/coffee/${type}`);
    return await response.json();
  };

  return (
    <>
      <a href={`/coffee/${type === "hot" ? "iced" : "hot"}`}>
        <button>{`Go to ${type === "hot" ? "iced" : "hot"}`}</button>
      </a>
      <Suspense fallback={<p>Brewing Coffees...</p>}>
        <CoffeeCarouselAsync coffeePromise={getCoffee()} />
      </Suspense>
    </>
  );
};

export default CoffeeDetailPage;