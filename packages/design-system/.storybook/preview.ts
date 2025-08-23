import type { Preview } from '@storybook/react-vite';
import '../styled-system/styles.css';
import '../src/styles/index.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

const preview: Preview = { parameters };

export default preview;
