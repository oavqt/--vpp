import { FC } from 'react';
import Landing from '../../components/home/landing/Landing';
import StyledHome from './Home.styled';

const Home: FC = () => {
  return (
    <StyledHome>
      <Landing />
    </StyledHome>
  );
};

export default Home;
