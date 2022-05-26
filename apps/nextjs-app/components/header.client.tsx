import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeaderProps {
  name: string;
}

const StyledHeader = styled.div`
  color: black;
`;

export function Header(props: HeaderProps) {
  const { name } = props;
  return (
    <StyledHeader>
      <h1>Welcome to {name}!</h1>
    </StyledHeader>
  );
}

export default Header;
