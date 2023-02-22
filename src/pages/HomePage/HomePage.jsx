import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLoginToken } from 'redux/auth/auth.selectors';

const HomePage = () => {
  const token = useSelector(selectLoginToken);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsApi = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=ua&apiKey=ca5dbcc276e7435884fde9c13a27e17f'
        );
        console.log(newsApi);
        const guardianApi = await axios.get(
          'https://content.guardianapis.com/search?page=1&q=ukraine&api-key=2e7e609f-60c0-4a89-a416-d5c3b63f7d43'
        );
        console.log(guardianApi);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);
  return (
    <Container>
      <h1>Hello World!</h1>
      {!token && (
        <>
          <p>
            In order to use this app please <Link to="register">Register</Link>
          </p>
          <p>
            Or <Link to="login">Log In</Link> if you already have an account
          </p>
        </>
      )}
    </Container>
  );
};

export default HomePage;
