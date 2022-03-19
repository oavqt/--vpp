import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import assets from '../../assets/assets';
import StyledLanding from './Landing.styled';

const Landing: FC = () => {
  return (
    <StyledLanding>
      <article>
        {assets.landing.images.map((image) => (
          <div key={uuidv4()}>
            <img alt={image.alt} src={image.src} />
          </div>
        ))}
      </article>
      <article>
        <div>
          <h2>{assets.landing.welcome.title}</h2>
        </div>
      </article>
    </StyledLanding>
  );
};

export default Landing;
