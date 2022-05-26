import styled from '@emotion/styled';
import { getUser } from '../apis/user';
import useData from '../libs/use-data';

const StyledContent = styled.div`
  color: black;
`;

export function Content() {
  const { data: user } = useData(`user`, () => getUser());
  return (
    <StyledContent>
      <h2>User</h2>
      <ul>
        <li>{`name : ${user.name}`}</li>
      </ul>
    </StyledContent>
  );
}

export default Content;
