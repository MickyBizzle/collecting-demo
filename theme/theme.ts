import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      blue: string;
      red: string;
    };
  }
}

export const theme = {
  colors: {
    blue: '#0d2638',
    red: '#913036',
  },
};
