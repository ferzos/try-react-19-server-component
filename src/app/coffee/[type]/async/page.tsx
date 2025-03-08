import { CoffeeCarouselAsync } from "@/components/CoffeeCarousel";
import { fakeFetch } from "@/utils/fakeTimer";
import { Suspense } from "react";

interface Props {
  params: Promise<{ type: string }>;
}

const CoffeeDetailPage = async (props: Props) => {
  const params = await props.params;
  const { type } = params;
  const getCoffee = async () => {
    await fakeFetch(3000)
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