import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}

export const theme = {
  colors: {
    primary: '#0d2638',
    secondary: '#913036',
  },
};
