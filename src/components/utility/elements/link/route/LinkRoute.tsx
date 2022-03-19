import { FC } from 'react';
import StyledLinkRoute from './LinkRoute.styled';

interface LinkRouteProps {
  path: string;
}

const LinkRoute: FC<LinkRouteProps> = (props) => {
  return <StyledLinkRoute to={props.path}>{props.children}</StyledLinkRoute>;
};

export default LinkRoute;
