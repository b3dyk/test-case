import { Button, List } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchNews } from "../../redux/news/news.operations";
import { selectNews } from "../../redux/news/news.selectors";

const NewsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const news = useAppSelector(selectNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews(page));
  }, [dispatch, page]);

  const handleClick = (): void => {
    setPage(page + 1);
  };
  return (
    <>
      <List>
        {news &&
          news.map((item: any, idx: number) => (
            <li key={idx}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
      </List>
      <Button type="button" onClick={handleClick}>
        Get More
      </Button>
    </>
  );
};

export default NewsPage;
