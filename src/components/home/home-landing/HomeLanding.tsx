import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledHomeLanding, {
  StyledHomeLandingImagesContainer
} from './HomeLanding.styled';

const HomeLanding: FC = () => {
  return (
    <StyledHomeLanding>
      <StyledHomeLandingImagesContainer>
        {assets.pages.home.landing.images.map((image) => (
          <div key={uuidv4()}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </StyledHomeLandingImagesContainer>
      <div>
        <h2>{assets.pages.home.landing.message.primary}</h2>
      </div>
    </StyledHomeLanding>
  );
};

export default HomeLanding;
