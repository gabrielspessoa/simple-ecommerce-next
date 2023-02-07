import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const Root = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const List = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;
export const Item = styled(NavigationMenu.Item)``;
export const Trigger = styled(NavigationMenu.Trigger)`
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  color: inherit;

  &:hover {
    background-color: var(--button-icon-hover-bg);
  }
`;
export const Content = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 300px;
  width: auto;
  animation-duration: 250ms;
  animation-timing-function: ease;
  padding: 12px;

  &[data-motion='from-start'] {
    animation-name: enterFromLeft;
  }
  &[data-motion='from-end'] {
    animation-name: enterFromRight;
  }
  &[data-motion='to-start'] {
    animation-name: exitToLeft;
  }
  &[data-motion='to-end'] {
    animation-name: exitToRight;
  }
`;
export const Link = styled(NavigationMenu.Link)`
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  display: block;
  color: inherit;
  cursor: pointer;

  &:hover {
    background-color: var(--button-icon-hover-bg);
  }
`;

export const SubContent = styled(NavigationMenu.Content)`
  white-space: nowrap;
`;

export const Sub = styled(NavigationMenu.Sub)`
  list-style: none;
  position: relative;
`;

export const ViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: calc(100% + 8px);
  left: 0;
  /* perspective: 2000px; */
`;
export const Viewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: var(--radix-navigation-menu-viewport-width);
  background-color: var(--dropdown-bg);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--shadow-elevation-high);
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: scaleIn 200ms ease;
  }
  &[data-state='closed'] {
    animation: scaleOut 200ms ease;
  }
`;

export const SubViewportPosition = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
`;

export const SubViewport = styled(NavigationMenu.Viewport)`
  position: relative;
  width: var(--radix-navigation-menu-viewport-width);
  height: var(--radix-navigation-menu-viewport-height);
`;

export const Indicator = styled(NavigationMenu.Indicator)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: calc(100% + 8px);
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;
`;

export const Arrow = styled.div`
  position: relative;
  top: 70%;
  background-color: var(--dropdown-bg);
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
`;
