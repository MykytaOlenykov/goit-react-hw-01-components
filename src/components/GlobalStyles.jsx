import { Global, css } from '@emotion/react';
import { ModernNormalize } from 'emotion-modern-normalize';

export const GlobalStyles = () => (
  <>
    <ModernNormalize />
    <Global
      styles={css`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }

        ul,
        ol {
          margin: 0;
          padding: 0;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        body {
          margin: 0;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: rgb(229, 229, 229);
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
      `}
    />
  </>
);
