import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StaticRenderingWithIncrementStaticRegenerationProps {}

const StyledStaticRenderingWithIncrementStaticRegeneration = styled.div`
  color: pink;
`;

export function StaticRenderingWithIncrementStaticRegeneration(
  props: StaticRenderingWithIncrementStaticRegenerationProps
) {
  return (
    <StyledStaticRenderingWithIncrementStaticRegeneration>
      <h1>Welcome to StaticRenderingWithIncrementStaticRegeneration!</h1>
    </StyledStaticRenderingWithIncrementStaticRegeneration>
  );
}

export default StaticRenderingWithIncrementStaticRegeneration;
