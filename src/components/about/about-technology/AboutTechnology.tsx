import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledAboutTechnology, {
  StyledAboutTechnologyArticle,
  StyledAboutTechnologyHeading,
  StyledAboutTechnologyImageContainer,
  StyledAboutTechnologyParagraph
} from './AboutTechnology.styled';

const AboutTechnology: FC = () => {
  return (
    <StyledAboutTechnology>
      <StyledAboutTechnologyArticle>
        <div>
          <StyledAboutTechnologyHeading>
            {assets.pages.about.technology.description.title}
          </StyledAboutTechnologyHeading>
          <StyledAboutTechnologyParagraph>
            {assets.pages.about.technology.description.body}
          </StyledAboutTechnologyParagraph>
        </div>
        <StyledAboutTechnologyImageContainer>
          {assets.pages.about.technology.images.map((item) => (
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
