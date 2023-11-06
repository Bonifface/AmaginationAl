import { Card } from "./Card/Card.tsx";
import { styles } from "./Cards.styles.ts";
interface DataType {
  _id: string;
  name: string[];
  prompt: string;
  photo: string;
}
interface CardsType {
  data: DataType[] | null;
  title: string;
}

export const Cards = ({ data, title }: CardsType) => {
  const classes = styles();

  return (
    <div css={classes.container}>
      {data?.length ? (
        data.map((post, index) => (
          <Card key={post._id} {...post} index={index} />
        ))
      ) : (
        <h2>{title}</h2>
      )}
    </div>
  );
};
