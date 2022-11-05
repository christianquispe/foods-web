interface FoodCardProps {
  name: string;
  tags: string[];
  description: string;
  img: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  name,
  tags,
  description,
  img,
}: FoodCardProps) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={img} alt="" />
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </article>
  );
};

export default FoodCard;
