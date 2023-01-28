import { createGlobalStyle } from 'styled-components';
import { sand, sandDark } from '@radix-ui/colors';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-inter: ${inter.style.fontFamily};
    --body-bg: ${sand.sand3};
    --body-text: ${sandDark.sand6};

    --foreground-1: ${sand.sand1};

    --button-icon-hover-bg: ${sand.sand6};

    --shadow-color: 60deg 5% 63%;
    --shadow-elevation-low:
    0px 0.4px 0.5px hsl(var(--shadow-color) / 0.1),
    0px 0.6px 0.7px -1.2px hsl(var(--shadow-color) / 0.1),
    0px 1.6px 1.8px -2.5px hsl(var(--shadow-color) / 0.1);

    --shadow-elevation-medium:
    0px 0.4px 0.5px hsl(var(--shadow-color) / 0.11),
    0px 1.3px 1.5px -0.8px hsl(var(--shadow-color) / 0.11),
    0px 3.2px 3.6px -1.7px hsl(var(--shadow-color) / 0.11),
    0px 7.8px 8.8px -2.5px hsl(var(--shadow-color) / 0.11);
    
    --shadow-elevation-high:
    0px 0.4px 0.5px hsl(var(--shadow-color) / 0.1),
    0px 2.3px 2.6px -0.4px hsl(var(--shadow-color) / 0.1),
    0px 4.3px 4.8px -0.7px hsl(var(--shadow-color) / 0.1),
    0px 7px 7.9px -1.1px hsl(var(--shadow-color) / 0.1),
    -0.1px 11.2px 12.6px -1.4px hsl(var(--shadow-color) / 0.1),
    -0.1px 17.5px 19.7px -1.8px hsl(var(--shadow-color) / 0.1),
    -0.1px 26.6px 29.9px -2.1px hsl(var(--shadow-color) / 0.1),
    -0.2px 39.2px 44.1px -2.5px hsl(var(--shadow-color) / 0.1);
  }

  [data-theme="dark"] {
    --body-bg: ${sandDark.sand1};
    --body-text: ${sand.sand6};

    --foreground-1: ${sandDark.sand4};

    --shadow-color: 60deg 5% 1%;

    --button-icon-hover-bg: ${sandDark.sand6};
  }

  body {
    font-family: var(--font-inter);
    font-size: 14px;
    background-color: var(--body-bg);
    color: var(--body-text);
  }
`;
