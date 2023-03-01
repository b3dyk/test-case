import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "./news.operations";

interface INews {
  author: string;
  title: string;
  url: string;
}

export type InitState = {
  items: INews[];
  isLoading: boolean;
};

const initialState: InitState = {
  items: [],
  isLoading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<INews[]>) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const newsReducer = newsSlice.reducer;
