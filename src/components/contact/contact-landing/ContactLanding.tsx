import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledContactLanding, {
  StyledContactLandingImagesContainer
} from './ContactLanding.styled';

const ContactLanding: FC = () => {
  return (
    <StyledContactLanding>
      <div>
        <h2>{assets.pages.contact.landing.message.primary}</h2>
      </div>
      <StyledContactLandingImagesContainer>
        {assets.pages.contact.landing.images.map((image) => (
          <div key={uuidv4()}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </StyledContactLandingImagesContainer>
    </StyledContactLanding>
  );
};

export default ContactLanding;
