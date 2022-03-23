import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledContactLanding, {
  StyledContactLandingImagesContainer
} from './ContactLanding.styled';

const ContactLanding: FC = () => {
  return (
    <StyledContactLanding>
      <StyledContactLandingImagesContainer>
        {assets.pages.contact.landing.images.map((image) => (
          <div key={uuidv4()}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </StyledContactLandingImagesContainer>
      <div>
        <h2>{assets.pages.contact.landing.welcome.title}</h2>
      </div>
    </StyledContactLanding>
  );
};

export default ContactLanding;
