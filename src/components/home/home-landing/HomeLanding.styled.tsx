import styled from 'styled-components';

//HomeLanding
const StyledHomeLanding = styled.section.attrs(() => ({
  role: 'home-landing'
}))`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default StyledHomeLanding;
//

//HomeLanding Elements
const StyledHomeLandingGraphic = styled.span`
  background: #ffb7c3;
  display: block;
  height: 0.2em;
  margin-top: 1em;
  width: 100%;
`;
const StyledHomeLandingImage = styled.img`
  margin: 0 0.2em;
`;
const StyledHomeLandingImageContainer = styled.div`
  display: flex;

  @media screen and (max-width: 969px) {
    flex-direction: column;
  }

  @media screen and (max-width: 969px) and (max-height: 469px) {
    flex-direction: row;
  }

  @media screen and (max-width: 969px) and (max-height: 969px) {
    div:nth-child(1) {
      display: none;
    }
  }

  @media screen and (max-width: 769px) and (min-height: 269px) and (max-height: 769px) {
    div:nth-child(n + 1):nth-child(-n + 3) {
      display: none;
    }
  }
`;

export {
  StyledHomeLandingGraphic,
  StyledHomeLandingImage,
  StyledHomeLandingImageContainer
};
//
