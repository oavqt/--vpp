import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledHomeLanding, {
  StyledHomeLandingImage,
  StyledHomeLandingImageContainer
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
      <StyledHomeLandingImageContainer>
        {props.landing.images.map((image) => (
          <div key={uuidv4()}>
            <StyledHomeLandingImage alt={image.alt} src={image.src} />
          </div>
        ))}
      </StyledHomeLandingImageContainer>
      <div>
        <h2>{props.landing.message.primary}</h2>
      </div>
    </StyledHomeLanding>
  );
};

export default HomeLanding;
