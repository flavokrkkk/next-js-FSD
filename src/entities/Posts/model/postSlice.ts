import { $host } from "@/app/api";
import {
  asyncThunkCreator,
  buildCreateSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IPost } from "../lib/IPost";

interface PostState {
  posts: IPost[];
  filterPost: IPost[];
  post: IPost | null;
  isLoading: boolean;
  error: string;
}

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState: PostState = {
  posts: [],
  filterPost: [],
  post: null,
  isLoading: false,
  error: "",
};

export const postSlice = createSliceWithThunks({
  name: "post",
  initialState,
  reducers: (create) => ({
    searchPosts: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.filterPost = state.posts.filter((post) =>
        post.title.toLowerCase().includes(payload.toLowerCase())
      );
    }),
    getAsyncPosts: create.asyncThunk<IPost[], void, { rejectValue: string }>(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $host.get<IPost[]>("/posts");
          // , {
          //   params: { _limit: 10 },
          // }
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IPost[]>) => {
          state.posts = payload;
          state.filterPost = payload;
          state.isLoading = false;
          state.error = "";
        },
        rejected: (state, { payload }) => {
          state.isLoading = false;
          state.error = "Не удалось получить посты!";
        },
      }
    ),
    getAsyncSearchPosts: create.asyncThunk<
      IPost[],
      string,
      { rejectValue: string }
    >(
      async (search, { rejectWithValue }) => {
        try {
          const { data } = await $host.get(`/posts/?q=${search}`);
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IPost[]>) => {
          state.filterPost = payload;
        },
        rejected: (state, { payload }) => {
          state.error = "Не удалось получить посты!";
        },
      }
    ),
    getAsyncPostById: create.asyncThunk<IPost, string, { rejectValue: string }>(
      async (id, { rejectWithValue }) => {
        try {
          const { data } = await $host.get<IPost>(`/posts/${id}`);
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IPost>) => {
          state.post = payload;
          state.isLoading = false;
          state.error = "";
        },
        rejected: (state) => {
          state.error = "Не удалось получить пост!";
          state.isLoading = false;
        },
      }
    ),
    deletePost: create.reducer((state, { payload }: PayloadAction<number>) => {
      state.filterPost = state.filterPost.filter((post) => post.id !== payload);
    }),
  }),
});

export const postReducer = postSlice.reducer;
export const postActions = postSlice.actions;
