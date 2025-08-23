import { setProjectAnnotations } from '@storybook/react';
import { beforeAll } from 'vitest';

beforeAll(async () => {
  const projectAnnotations = {
    parameters: {
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/i,
        },
      },
    },
  };
  
  setProjectAnnotations([projectAnnotations]);
});