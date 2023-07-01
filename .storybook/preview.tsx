import React from 'react';
import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-styling';

/* TODO: update import to your tailwind styles file */
import '../src/app/globals.css';
import '../src/app/index.css';

import { Provider } from 'react-redux';
import { store } from '../src/redux/rootStore';

// Storybook の機能やアドオンの振る舞いをコントロールするのに使用
const preview: Preview = {
  parameters: {
    // アクション (呼び出しのモック) がどのように扱われるかを設定
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
