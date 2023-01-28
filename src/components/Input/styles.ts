import { orange, sand, sandDark } from '@radix-ui/colors';
import styled from 'styled-components';

export const Input = styled.input`
  --input-border: ${sand.sand7};

  [data-theme='dark'] & {
    --input-border: ${sandDark.sand8};
  }

  &:focus-visible {
    outline: 0;
    --input-border: ${orange.orange8};
  }

  background-color: var(--input-bg);
  border: solid 1px var(--input-border);
  height: 42px;
  border-radius: 8px;
  padding: 0 12px;
  box-sizing: border-box;
`;
