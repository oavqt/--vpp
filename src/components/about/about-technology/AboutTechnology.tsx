import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledAboutTechnology, {
  StyledAboutTechnologyArticle,
  StyledAboutTechnologyHeading,
  StyledAboutTechnologyImageContainer,
  StyledAboutTechnologyParagraph
} from './AboutTechnology.styled';

interface AboutTechnologyProps {
  technology: {
    description: {
      body: string;
      title: string;
    };
    images: {
      alt: string;
      src: string;
    }[];
  };
}

const AboutTechnology: FC<AboutTechnologyProps> = (props) => {
  return (
    <StyledAboutTechnology>
      <StyledAboutTechnologyArticle>
        <div>
          <StyledAboutTechnologyHeading>
            {props.technology.description.title}
          </StyledAboutTechnologyHeading>
          <StyledAboutTechnologyParagraph>
            {props.technology.description.body}
          </StyledAboutTechnologyParagraph>
        </div>
        <StyledAboutTechnologyImageContainer>
          {props.technology.images.map((item) => (
            <div key={uuidv4()}>
              <img alt={item.alt} src={item.src} />
            </div>
          ))}
        </StyledAboutTechnologyImageContainer>
      </StyledAboutTechnologyArticle>
    </StyledAboutTechnology>
  );
};

export default AboutTechnology;
