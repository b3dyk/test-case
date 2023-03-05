import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchStateNews, INews } from "../../services/news.service";
import {
  Author,
  Button,
  Heading,
  List,
  NewsLink,
  Wrapper,
} from "./NewsPage.styled";

/**For execution via redux */

// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { fetchNews } from "../../redux/news/news.operations";
// import { selectIsLoading, selectNews } from "../../redux/news/news.selectors";

const newsInitState: INews[] = [];

const NewsPage: React.FC = () => {
  const [news, setNews] = useState(newsInitState);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  /**For execution via redux */

  // const news = useAppSelector(selectNews);
  // const isLoading = useAppSelector(selectIsLoading);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTrendNews = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await fetchStateNews(page);

        setNews((prev) => [...prev, ...result]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.log(error);
      }
    };

    fetchTrendNews();
  }, [page]);

  const handleDelete = (id: string): void => {
    const filteredNews = news.filter((item) => item.id !== id);
    setNews(filteredNews);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  return (
    <Wrapper>
      <Heading>{t("newsHeading")}</Heading>
      <List>
        {news &&
          news.map(({ id, url, title }: INews) => (
            <li key={id}>
              <NewsLink href={url} target="_blank">
                {title}
                <Author> - Guardian</Author>
              </NewsLink>

              <IconButton aria-label="delete" onClick={() => handleDelete(id)}>
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
      </List>
      {isLoading && <p>{t("loading")}</p>}
      <Button type="button" onClick={handleLoadMore}>
        {t("more")}
      </Button>
    </Wrapper>
  );
};

export default NewsPage;
