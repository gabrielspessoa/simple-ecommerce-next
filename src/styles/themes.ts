import { Inter, Righteous } from '@next/font/google';
import { sand, sandDark } from '@radix-ui/colors';
import { css } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export const lightTheme = css`
  /* GENERAL */
  --font-inter: ${inter.style.fontFamily};
  --body-text: ${sandDark.sand6};
  --color-bg-lighter: ${sand.sand1};
  --color-bg-light: ${sand.sand1};
  --color-bg: ${sand.sand3};
  --color-bg-dark: ${sand.sand5};
  --color-bg-darker: ${sand.sand7};

  --color-border-lighter: ${sand.sand5};
  --color-border-light: ${sand.sand6};
  --color-border: ${sand.sand7};
  --color-border-dark: ${sand.sand8};
  --color-border-darker: ${sand.sand8};

  /* COMPONENTS */

  /* Button */
  --button-icon-hover-bg: ${sand.sand6};
  --button-icon-active-bg: ${sand.sand7};

  /* DropdownMenu */
  --dropdown-bg: var(--color-bg-lighter);
  --dropdown-item-hover-bg: ${sand.sand5};
  --dropdown-separator-bg: ${sand.sand6};

  /* SidebarMenu */
  --sidebar-bg: var(--color-bg-lighter);
  --sidebar-item-hover-bg: ${sand.sand4};

  /* SHADOWS */
  --shadow-color: 60deg 5% 63%;
  --shadow-elevation-low: 0px 0.4px 0.5px hsl(var(--shadow-color) / 0.1),
    0px 0.6px 0.7px -1.2px hsl(var(--shadow-color) / 0.1),
    0px 1.6px 1.8px -2.5px hsl(var(--shadow-color) / 0.1);

  --shadow-elevation-medium: 0px 0.4px 0.5px hsl(var(--shadow-color) / 0.11),
    0px 1.3px 1.5px -0.8px hsl(var(--shadow-color) / 0.11),
    0px 3.2px 3.6px -1.7px hsl(var(--shadow-color) / 0.11),
    0px 7.8px 8.8px -2.5px hsl(var(--shadow-color) / 0.11);

  --shadow-elevation-high: 0px 0.4px 0.5px hsl(var(--shadow-color) / 0.1),
    0px 2.3px 2.6px -0.4px hsl(var(--shadow-color) / 0.1),
    0px 4.3px 4.8px -0.7px hsl(var(--shadow-color) / 0.1),
    0px 7px 7.9px -1.1px hsl(var(--shadow-color) / 0.1),
    -0.1px 11.2px 12.6px -1.4px hsl(var(--shadow-color) / 0.1),
    -0.1px 17.5px 19.7px -1.8px hsl(var(--shadow-color) / 0.1),
    -0.1px 26.6px 29.9px -2.1px hsl(var(--shadow-color) / 0.1),
    -0.2px 39.2px 44.1px -2.5px hsl(var(--shadow-color) / 0.1);
`;

export const darkTheme = css`
  /* GENERAL */
  --body-text: ${sand.sand6};
  --color-bg-lighter: ${sandDark.sand7};
  --color-bg-light: ${sandDark.sand5};
  --color-bg: ${sandDark.sand3};
  --color-bg-dark: ${sandDark.sand2};
  --color-bg-darker: ${sandDark.sand1};

  --color-border-lighter: transparent;
  --color-border-light: transparent;
  --color-border: transparent;
  --color-border-dark: transparent;
  --color-border-darker: transparent;

  /* COMPONENTS */

  /* Button */
  --button-icon-hover-bg: ${sandDark.sand6};
  --button-icon-active-bg: ${sandDark.sand7};

  /* DropdownMenu */
  --dropdown-bg: ${sandDark.sand6};
  --dropdown-item-hover-bg: ${sandDark.sand8};
  --dropdown-separator-bg: ${sandDark.sand8};

  /* SidebarMenu */
  --sidebar-bg: var(--color-bg-lighter);
  --sidebar-item-hover-bg: ${sandDark.sand7};

  /* SHADOWS */
  --shadow-color: 60deg 5% 1%;
`;
