import { CoffeeCarousel } from "@/components/CoffeeCarousel";

interface Props {
  params: { type: string };
}

const CoffeeDetailPage = async ({
  params: { type },
}: Props) => {
  const getCoffee = async () => {
    const response = await fetch(`https://api.sampleapis.com/coffee/${type}`);
    return await response.json();
  };

  const coffeeData = await getCoffee();

  return (
    <>
      <a href={`/coffee/${type === "hot" ? "iced" : "hot"}`}>
        <button>{`Go to ${type === "hot" ? "iced" : "hot"}`}</button>
      </a>
      <CoffeeCarousel coffee={coffeeData} />
    </>
  );
};

export default CoffeeDetailPage;