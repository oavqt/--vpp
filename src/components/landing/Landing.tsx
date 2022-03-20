import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import StyledLanding, { StyledLandingImagesContainer } from './Landing.styled';

const Landing: FC = () => {
  return (
    <StyledLanding>
      <StyledLandingImagesContainer>
        {assets.landing.images.map((image) => (
          <div key={uuidv4()}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </StyledLandingImagesContainer>
      <div>
        <h2>{assets.landing.welcome.title}</h2>
      </div>
    </StyledLanding>
  );
};

export default Landing;
