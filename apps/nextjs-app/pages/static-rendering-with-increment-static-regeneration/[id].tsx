import styled from '@emotion/styled';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getUsers } from '../../apis/user';

/* eslint-disable-next-line */
export interface StaticRenderingWithIncrementStaticRegenerationProps {
  name: string;
  createdAt: string;
}

const StyledStaticRenderingWithIncrementStaticRegeneration = styled.div`
  color: black;
`;

export const getStaticProps: GetStaticProps<
  StaticRenderingWithIncrementStaticRegenerationProps,
  { id: string }
> = ({ params }) => {
  return {
    props: {
      name: params.id,
      createdAt: new Date().toISOString(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export function StaticRenderingWithIncrementStaticRegenerationById(
  props: StaticRenderingWithIncrementStaticRegenerationProps
) {
  const { name, createdAt } = props;
  return (
    <StyledStaticRenderingWithIncrementStaticRegeneration>
      <h1>Welcome to StaticRenderingWithIncrementStaticRegenerationById!</h1>
      <h2>User</h2>
      <ul>
        <li>{`name: ${name}`}</li>
        <li>{`createdAt: ${createdAt}`}</li>
      </ul>
    </StyledStaticRenderingWithIncrementStaticRegeneration>
  );
}

export default StaticRenderingWithIncrementStaticRegenerationById;
