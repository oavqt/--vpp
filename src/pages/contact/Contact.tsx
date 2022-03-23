import { FC } from 'react';
import ContactLanding from '../../components/contact/contact-landing/ContactLanding';
import StyledContact from './Contact.styled';

const Contact: FC = () => {
  return (
    <StyledContact>
      <ContactLanding />
    </StyledContact>
  );
};

export default Contact;
