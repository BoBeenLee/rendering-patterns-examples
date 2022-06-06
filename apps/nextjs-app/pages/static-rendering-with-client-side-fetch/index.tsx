import styled from '@emotion/styled';
import { getUser, User } from '../../apis/user';
import { useState, useEffect, Suspense } from 'react';
import OrganizationUser from "../../organizations/user.client";


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
      <Suspense fallback={<h2>loading</h2>}>
        <OrganizationUser />
      </Suspense>
    </StyledStaticRenderingWithClientSideFetch>
  );
}

export default StaticRenderingWithClientSideFetch;
