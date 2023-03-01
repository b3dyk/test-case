import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const newsAPI = axios.create({
  baseURL: "https://newsapi.org/v2",
});

interface INews {
  author: string;
  title: string;
  url: string;
}

export const fetchNews = createAsyncThunk(
  "news/get",
  async (page: number, thunkAPI) => {
    const { data } = await newsAPI.get("/top-headlines", {
      params: {
        apiKey: "ca5dbcc276e7435884fde9c13a27e17f",
        country: "ua",
        pageSize: 5,
        page,
      },
    });

    const news: INews[] = data.articles.map((item: any) => {
      return {
        author: item.author,
        title: item.title,
        url: item.url,
      };
    });
    return news;
  }
);
