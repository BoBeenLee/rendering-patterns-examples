import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StreamingSsrWithReactServerComponentProps {}

const StyledStreamingSsrWithReactServerComponent = styled.div`
  color: black;
`;

export function StreamingSsrWithReactServerComponent(
  props: StreamingSsrWithReactServerComponentProps
) {
  return (
    <StyledStreamingSsrWithReactServerComponent>
      <h1>Welcome to StreamingSsrWithReactServerComponent!</h1>
    </StyledStreamingSsrWithReactServerComponent>
  );
}

export default StreamingSsrWithReactServerComponent;
