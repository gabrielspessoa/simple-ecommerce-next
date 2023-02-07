import * as Dialog from '@radix-ui/react-dialog';
import styled, { css } from 'styled-components';

export const Root = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)<{ hideOn: number }>`
  display: flex;
  ${({ hideOn }) =>
    hideOn
      ? css`
          @media screen and (min-width: ${hideOn}px) {
            display: none;
          }
        `
      : null}
`;

export const Portal = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Content = styled(Dialog.Content)`
  background-color: var(--color-bg-light);
  box-shadow: var(--shadow-elevation-high);
  position: fixed;
  inset: 0 0 0 auto;
  max-width: 300px;
  width: 70%;
  /* margin-left: 40px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 120;
  padding: 30px 12px;
  gap: 12px;
`;

export const Item = styled(Dialog.Close)`
  padding: 12px 12px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  color: ${({ color }) => color && color};

  &:hover {
    outline: none;
    background-color: var(--sidebar-item-hover-bg);
    -webkit-tap-highlight-color: transparent;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const FloatingIcon = styled.div`
  margin: -12px auto 12px auto;
`;
