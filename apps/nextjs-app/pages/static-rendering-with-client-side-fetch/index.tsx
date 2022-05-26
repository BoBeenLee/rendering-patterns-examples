import styled from '@emotion/styled';
import { getUser, User } from '../../apis/user';
import { useState, useEffect } from 'react';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StaticRenderingWithClientSideFetchProps {}

const StyledStaticRenderingWithClientSideFetch = styled.div`
  color: black;
`;

export function StaticRenderingWithClientSideFetch(
  props: StaticRenderingWithClientSideFetchProps
) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <StyledStaticRenderingWithClientSideFetch>
      <h1>Welcome to StaticRenderingWithClientSideFetch!</h1>
      {user ? (
        <>
          <h2>User</h2>
          <ul>
            <li>{`name: ${user.name}`}</li>
          </ul>
        </>
      ) : (
        <h2>loading</h2>
      )}
    </StyledStaticRenderingWithClientSideFetch>
  );
}

export default StaticRenderingWithClientSideFetch;
