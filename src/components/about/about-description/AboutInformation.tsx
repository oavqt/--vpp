import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import StyledAboutInformation, {
  StyledAboutInformationArticle,
  StyledAboutInformationHeading,
  StyledAboutInformationImageContainer,
  StyledAboutInformationParagraph
} from './AboutInformation.styled';

interface AboutInformationProps {
  information: {
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

const AboutInformation: FC<AboutInformationProps> = (props) => {
  return (
    <StyledAboutInformation>
      <StyledAboutInformationArticle>
        <div>
          <StyledAboutInformationHeading>
            {props.information.description.title}
          </StyledAboutInformationHeading>
        </div>
        <div>
          <StyledAboutInformationImageContainer>
            {props.information.images.map((item) => (
              <div key={uuidv4()}>
                <img alt={item.alt} src={item.src} />
              </div>
            ))}
          </StyledAboutInformationImageContainer>
          <div>
            <StyledAboutInformationParagraph>
              {props.information.description.body}
            </StyledAboutInformationParagraph>
          </div>
        </div>
      </StyledAboutInformationArticle>
    </StyledAboutInformation>
  );
};

export default AboutInformation;
