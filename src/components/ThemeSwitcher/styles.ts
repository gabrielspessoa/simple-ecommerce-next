import styled from 'styled-components';

export const Button = styled.button<{
  margin?: string;
  absolute?: boolean;
  inset?: string;
}>`
  border-radius: 999px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  margin: ${({ margin }) => margin && margin};
  position: ${({ absolute }) => absolute && 'absolute'};
  inset: ${({ inset }) => inset && inset};

  -webkit-tap-highlight-color: transparent;

  & svg {
    display: block;
  }

  &:hover {
    background-color: var(--button-icon-hover-bg);
  }

  &:active {
    background-color: var(--button-icon-active-bg);
  }
`;

export const Placeholder = styled.button<{ margin?: string }>`
  height: 34px;
  width: 34px;
  margin: ${({ margin }) => margin && margin};
  visibility: hidden;
`;
