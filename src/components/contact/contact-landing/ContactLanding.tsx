import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledContactLanding, {
  StyledContactLandingImagesContainer
} from './ContactLanding.styled';

interface ContactLandingProps {
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

const ContactLanding: FC<ContactLandingProps> = (props) => {
  return (
    <StyledContactLanding>
      <div>
        <h2>{props.landing.message.primary}</h2>
      </div>
      <StyledContactLandingImagesContainer>
        {props.landing.images.map((item) => (
          <div key={uuidv4()}>
            <img alt={item.alt} src={item.src} />
          </div>
        ))}
      </StyledContactLandingImagesContainer>
    </StyledContactLanding>
  );
};

export default ContactLanding;
