import { Button, List } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchNews } from "../../redux/news/news.operations";
import { selectIsLoading, selectNews } from "../../redux/news/news.selectors";

const NewsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const news = useAppSelector(selectNews);
  const isLoading = useAppSelector(selectIsLoading);
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
      {isLoading && <p>{t("loading")}</p>}
      <Button type="button" onClick={handleClick}>
        {t("more")}
      </Button>
    </>
  );
};

export default NewsPage;
