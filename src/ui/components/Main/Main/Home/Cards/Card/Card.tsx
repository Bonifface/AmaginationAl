import { download } from "../../../../../../../assets/index.js";
import { downloadImage } from "../../../../../utils/downloadImage.ts";
import { styles } from "./Card.styles.ts";
import { useInView } from "react-intersection-observer";

interface CardProps {
  _id: string;
  name: string[];
  prompt: string;
  photo: string;
  index: number;
}

console.log('test git');
export const Card = ({ _id, name, prompt, photo, index }: CardProps) => {
  const classes = styles();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const gridFilter = () => {
    const lastDigit = index % 10;
    return lastDigit === 0 || lastDigit === 7 ;
  };

  return (
    <div css={gridFilter() ? classes.container : classes.container1}>
      <img ref={ref} src={inView ? photo : ""} alt={prompt} css={classes.img} />
      <div css={classes.wrapper}>

        <div css={classes.section}>
          <h4 css={classes.title}>{prompt}</h4>
          <div>
            <div>{name[0]}</div>
            <p>{name}</p>
          </div>
          <button type="button" onClick={() => downloadImage({ _id, photo })}>
            <img src={download} alt="download" css={classes.imgDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};
