import styled from '@emotion/styled';
import { getUser, User } from '../../apis/user';
import { GetServerSideProps } from 'next';

export interface ServerSideRenderingProps {
  user: User;
}

const StyledServerSideRendering = styled.div`
  color: black;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await getUser();
  return {
    props: {
      user,
    },
  };
};

export function ServerSideRendering(props: ServerSideRenderingProps) {
  const { user } = props;
  return (
    <StyledServerSideRendering>
      <h1>Welcome to ServerSideRendering!</h1>
      <h2>User</h2>
      <ul>
        <li>{`name : ${user.name}`}</li>
      </ul>
    </StyledServerSideRendering>
  );
}

export default ServerSideRendering;
