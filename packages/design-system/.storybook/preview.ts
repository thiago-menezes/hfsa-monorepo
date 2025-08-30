import type { Preview } from '@storybook/react-vite';
import '../dist/styles.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  interactions: {
    // Configuração para testes de interação
    testRunner: {
      enabled: true,
    },
  },
  // Configuração para testes
  test: {
    // Restaurar mocks automaticamente
    restoreMocks: true,
  },
};

const preview: Preview = { parameters };

export default preview;
