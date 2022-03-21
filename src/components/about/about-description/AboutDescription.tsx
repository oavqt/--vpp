import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../../assets/assets';
import StyledAboutDescription, {
  StyledAboutDescriptionArticle,
  StyledAboutDescriptionHeading,
  StyledAboutDescriptionImageContainer,
  StyledAboutDescriptionParagraph
} from './AboutDescription.styled';

const AboutDescription: FC = () => {
  return (
    <StyledAboutDescription>
      <StyledAboutDescriptionArticle>
        <StyledAboutDescriptionImageContainer>
          {assets.pages.about.images.map((item) => (
            <div key={uuidv4()}>
              <img alt={item.alt} src={item.src} />
            </div>
          ))}
        </StyledAboutDescriptionImageContainer>
        <div>
          <StyledAboutDescriptionHeading>
            {assets.pages.about.description.title}
          </StyledAboutDescriptionHeading>
          <StyledAboutDescriptionParagraph>
            {assets.pages.about.description.body}
          </StyledAboutDescriptionParagraph>
        </div>
      </StyledAboutDescriptionArticle>
    </StyledAboutDescription>
  );
};

export default AboutDescription;
