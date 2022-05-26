import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  color: black;
`;

export function Footer(
  props: FooterProps
) {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}

export default Footer;
