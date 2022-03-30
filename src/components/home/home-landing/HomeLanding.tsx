import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledHomeLanding, {
  StyledHomeLandingImagesContainer
} from './HomeLanding.styled';

interface HomeLandingProps {
  landing: {
    images: {
      alt: string;
      src: string;
    }[];
    message: {
      primary: string;
    };
  };
}

const HomeLanding: FC<HomeLandingProps> = (props) => {
  return (
    <StyledHomeLanding>
      <StyledHomeLandingImagesContainer>
        {props.landing.images.map((image) => (
          <div key={uuidv4()}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </StyledHomeLandingImagesContainer>
      <div>
        <h2>{props.landing.message.primary}</h2>
      </div>
    </StyledHomeLanding>
  );
};

export default HomeLanding;
