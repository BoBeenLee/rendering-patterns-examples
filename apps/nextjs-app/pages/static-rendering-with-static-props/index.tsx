import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StaticRenderingWithStatisPropsProps {}

const StyledStaticRenderingWithStatisProps = styled.div`
  color: pink;
`;

export function StaticRenderingWithStatisProps(
  props: StaticRenderingWithStatisPropsProps
) {
  return (
    <StyledStaticRenderingWithStatisProps>
      <h1>Welcome to StaticRenderingWithStatisProps!</h1>
    </StyledStaticRenderingWithStatisProps>
  );
}

export default StaticRenderingWithStatisProps;
