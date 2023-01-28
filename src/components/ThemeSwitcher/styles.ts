import styled from 'styled-components';

export const Button = styled.button<{ margin?: string }>`
  border-radius: 999px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  margin: ${({ margin }) => margin && margin};

  -webkit-tap-highlight-color: transparent;

  & svg {
    display: block;
  }

  &:hover {
    background-color: var(--button-icon-hover-bg);
  }
`;

export const Placeholder = styled.button<{ margin?: string }>`
  height: 34px;
  width: 34px;
  margin: ${({ margin }) => margin && margin};
  visibility: hidden;
`;
