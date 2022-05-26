import styled from '@emotion/styled';

interface RenderingItem {
  name: string;
  path: string;
}

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const items: RenderingItem[] = [
    {
      name: 'plain statuc rendering',
      path: '/plain-static-rendering',
    },
    {
      name: 'server side rendering',
      path: '/server-side-rendering',
    },
    {
      name: 'static rendering with client side fetch',
      path: '/static-rendering-with-client-side-fetch',
    },
    {
      name: 'static rendering with increment static regeneration',
      path: '/static-rendering-with-increment-static-regeneration/1',
    },
    {
      name: 'static rendering with static props',
      path: '/static-rendering-with-static-props',
    },
    {
      name: 'streaming ssr with react server component',
      path: '/streaming-ssr-with-react-server-component',
    },
  ];
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>Rendering Patterns</h1>
          </div>

          <div id="commands" className="rounded shadow">
            <h2>Here are some things you can do with rendering patterns:</h2>

            <br />
            {items.map((item) => {
              return (
                <a key={item.name} href={item.path}>
                  <summary>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {item.name}
                  </summary>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
