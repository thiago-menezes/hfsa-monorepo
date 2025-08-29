import type { Preview } from '@storybook/react-vite';
import '../dist/styles.css';

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
