import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ServerSideRenderingProps {}

const StyledServerSideRendering = styled.div`
  color: pink;
`;

export function ServerSideRendering(props: ServerSideRenderingProps) {
  return (
    <StyledServerSideRendering>
      <h1>Welcome to ServerSideRendering!</h1>
    </StyledServerSideRendering>
  );
}

export default ServerSideRendering;
