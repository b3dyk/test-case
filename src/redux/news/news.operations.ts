import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const newsAPI = axios.create({
  baseURL: "https://content.guardianapis.com",
});

interface INews {
  author: string;
  title: string;
  url: string;
}

export const fetchNews = createAsyncThunk(
  "news/get",
  async (page: number, thunkAPI) => {
    const { data } = await newsAPI.get("/search", {
      params: {
        "api-key": "2e7e609f-60c0-4a89-a416-d5c3b63f7d43",
        q: "ukraine",
        page,
      },
    });
    console.log(data.response.results);
    const news: INews[] = data.response.results.map((item: any) => {
      return {
        author: item.author,
        title: item.webTitle,
        url: item.webUrl,
      };
    });
    return news;
  }
);
