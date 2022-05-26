import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StaticRenderingWithClientSideFetchProps {}

const StyledStaticRenderingWithClientSideFetch = styled.div`
  color: pink;
`;

export function StaticRenderingWithClientSideFetch(
  props: StaticRenderingWithClientSideFetchProps
) {
  return (
    <StyledStaticRenderingWithClientSideFetch>
      <h1>Welcome to StaticRenderingWithClientSideFetch!</h1>
    </StyledStaticRenderingWithClientSideFetch>
  );
}

export default StaticRenderingWithClientSideFetch;
