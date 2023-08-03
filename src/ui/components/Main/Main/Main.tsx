import { styles } from "./Main.styles.ts";
import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./CreatePost/CreatePost.tsx";
import { Home } from "./Home/Home.tsx";

export const Main = () => {

  const classes = styles();
  return (
    <div css={classes.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
};
