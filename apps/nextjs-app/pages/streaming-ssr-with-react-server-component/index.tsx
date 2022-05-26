import styled from '@emotion/styled';
import { Suspense } from 'react';
import Header from '../../components/header.client';
import Footer from '../../components/footer.client';
import Content from '../../components/content.server';

/* eslint-disable-next-line */
export interface StreamingSsrWithReactServerComponentProps {}

const StyledStreamingSsrWithReactServerComponent = styled.div`
  color: black;
`;

export function StreamingSsrWithReactServerComponent(
  props: StreamingSsrWithReactServerComponentProps
) {
  return (
    <StyledStreamingSsrWithReactServerComponent>
      <Header name={`StreamingSsrWithReactServerComponent`} />
      <Suspense fallback={'Loading...'}>
        <Content />
      </Suspense>
      <Footer />
    </StyledStreamingSsrWithReactServerComponent>
  );
}

export default StreamingSsrWithReactServerComponent;
