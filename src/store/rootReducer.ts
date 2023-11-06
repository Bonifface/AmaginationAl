import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsType {
  _id?: string;
  name: string;
  image: string;
  prompt: string;
}
interface InitialStateType {
  isLoading: boolean;
  posts: PostsType[];
}

export const initialState: InitialStateType = {
  isLoading: false,
  posts: [],
};

export const rootSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createImg: (state, action: PayloadAction<PostsType>) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
    getPosts: (state, action: PayloadAction<PostsType>) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
  },
});

export const { createImg,getPosts } = rootSlice.actions;
