// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { config as reactConfig } from '@hfsa/eslint-config/react';

export default [...reactConfig, {
  ignores: ['dist/**', 'node_modules/**', '**/*.d.ts', 'coverage/**'],
}, ...storybook.configs["flat/recommended"], ...storybook.configs["flat/recommended"]];
