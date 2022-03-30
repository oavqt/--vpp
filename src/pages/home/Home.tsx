import { FC } from 'react';
import assets from '../../assets/assets';
import HomeLanding from '../../components/home/home-landing/HomeLanding';
import StyledHome from './Home.styled';

const Home: FC = () => {
  return (
    <StyledHome>
      <HomeLanding landing={{ ...assets.pages.home.landing }} />
    </StyledHome>
  );
};

export default Home;
