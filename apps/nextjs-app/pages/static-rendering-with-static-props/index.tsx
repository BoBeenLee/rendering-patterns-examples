import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import { getUser, User } from '../../apis/user';

export interface StaticRenderingWithStatisPropsProps {
  user: User;
}

const StyledStaticRenderingWithStatisProps = styled.div`
  color: pink;
`;

export const getStaticProps: GetStaticProps = async () => {
  const user = await getUser();

  return {
    props: {
      user,
    },
  };
};

export function StaticRenderingWithStatisProps(
  props: StaticRenderingWithStatisPropsProps
) {
  const { user } = props;
  return (
    <StyledStaticRenderingWithStatisProps>
      <h1>Welcome to StaticRenderingWithStatisProps!</h1>
      <h2>User</h2>
      <ul>
        <li>{`name: ${user.name}`}</li>
      </ul>
    </StyledStaticRenderingWithStatisProps>
  );
}

export default StaticRenderingWithStatisProps;
