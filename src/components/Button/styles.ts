import { orange, orangeDark } from '@radix-ui/colors';
import styled, { css } from 'styled-components';

const variants: any = {
  brand: css`
    background-color: ${orange.orange9};
    border: 0;
    border-radius: 999px;
    height: 42px;
    cursor: pointer;
    color: white;
    padding: 0 18px;

    &:hover {
      background-color: ${orangeDark.orange10};
    }

    &:active {
      background-color: ${orange.orange10};
    }
  `,
  icon: css<{ size?: string }>`
    border-radius: 999px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 8px;

    & svg {
      display: block;
    }

    &:hover {
      background-color: var(--button-icon-hover-bg);
    }

    &:active {
      background-color: var(--button-icon-active-bg);
    }
  `,
};

const selectVariant = (variant: any = 'brand') => variants[variant];

export const Button = styled.button<{ variant?: any }>`
  box-sizing: border-box;
  ${(props) => selectVariant(props.variant)}
`;
