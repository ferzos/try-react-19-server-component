interface Props {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}

const CoffeeCard = (props: Props) => {
  const { image, title } = props;

  return (
    <div style={{ cursor: "pointer" }}>
      <img src={image} alt={title} width="320" height={"320"} />
      <h3>{title}</h3>
    </div>
  );
};

export default CoffeeCard;
