import { FC } from 'react';
import assets from '../../assets/assets';
import ContactLanding from '../../components/contact/contact-landing/ContactLanding';
import StyledContact from './Contact.styled';

const Contact: FC = () => {
  return (
    <StyledContact>
      <ContactLanding landing={{ ...assets.pages.contact.landing }} />
    </StyledContact>
  );
};

export default Contact;
