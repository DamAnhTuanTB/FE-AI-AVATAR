import { HomeWrapper } from './style';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <HomeWrapper>Home</HomeWrapper>
    </>
  );
};

export default Home;
