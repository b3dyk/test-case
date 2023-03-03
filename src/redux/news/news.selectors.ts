import { RootState } from "../store";

export const selectNews = (state: RootState) => state.news.items;
export const selectIsLoading = (state: RootState) => state.news.isLoading;
