import { FC } from 'react';
import HomeLanding from '../../components/home/home-landing/HomeLanding';
import StyledHome from './Home.styled';

const Home: FC = () => {
  return (
    <StyledHome>
      <HomeLanding />
    </StyledHome>
  );
};

export default Home;
