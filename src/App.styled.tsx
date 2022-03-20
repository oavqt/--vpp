import { FC, Fragment } from 'react';
import StyledMain from './styled/Main.styled';
import StyledReset from './styled/Reset.styled';

const StyledApp: FC = (props) => {
  return (
    <Fragment>
      <StyledReset />
      <StyledMain />
      {props.children}
    </Fragment>
  );
};

export default StyledApp;
