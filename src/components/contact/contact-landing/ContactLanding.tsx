import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledContactLanding, {
  StyledContactLandingGraphic,
  StyledContactLandingLink,
  StyledContactLandingLinkContainer,
  StyledContactLandingMessage
} from './ContactLanding.styled';

interface ContactLandingProps {
  landing: {
    message: {
      primary: string;
    };
    social: {
      title: string;
      path: string;
    }[];
  };
}

const ContactLanding: FC<ContactLandingProps> = (props) => {
  return (
    <StyledContactLanding>
      <div>
        <StyledContactLandingMessage>
          {props.landing.message.primary}
        </StyledContactLandingMessage>
      </div>
      <StyledContactLandingGraphic />
      <StyledContactLandingLinkContainer>
        {props.landing.social.map((item) => (
          <div key={uuidv4()}>
            <StyledContactLandingLink href={item.path} target='_blank'>
              {item.title}
            </StyledContactLandingLink>
          </div>
        ))}
      </StyledContactLandingLinkContainer>
    </StyledContactLanding>
  );
};

export default ContactLanding;
