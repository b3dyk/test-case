import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const newsAPI = axios.create({
  baseURL: "https://content.guardianapis.com",
});

interface INews {
  id: string;
  title: string;
  url: string;
}

export const fetchNews = createAsyncThunk(
  "news/get",
  async (page: number, thunkAPI) => {
    try {
      const { data } = await newsAPI.get("/search", {
        params: {
          "api-key": "2e7e609f-60c0-4a89-a416-d5c3b63f7d43",
          "show-elements": "all",
          q: "ukraine",
          page,
        },
      });

      const news: INews[] = data.response.results.map((item: any) => {
        return {
          id: item.id,
          title: item.webTitle,
          url: item.webUrl,
        };
      });
      return news;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
