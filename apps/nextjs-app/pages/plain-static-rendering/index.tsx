import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface PlainStaticRenderingProps {}

const StyledPlainStaticRendering = styled.div`
  color: black;
`;

export function PlainStaticRendering(props: PlainStaticRenderingProps) {
  return (
    <StyledPlainStaticRendering>
      <h1>Welcome to PlainStaticRendering!</h1>
    </StyledPlainStaticRendering>
  );
}

export default PlainStaticRendering;
