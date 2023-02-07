import { ReactNode } from 'react';
import * as S from './styles';

const NavigationMenu = (props: { children?: ReactNode }) => (
  <S.Root>
    <S.List>
      {props.children}
      {/* <S.Item>
        <S.Trigger />
        <S.Content>
          <S.Link />
        </S.Content>
      </S.Item>

      <S.Item>
        <S.Link />
      </S.Item>

      <S.Item>
        <S.Trigger />
        <S.Content>
          <S.Sub>
            <S.List />
            <S.Viewport />
          </S.Sub>
        </S.Content>
      </S.Item>

      <S.Indicator /> */}
    </S.List>
    <S.Indicator>
      <S.Arrow />
    </S.Indicator>
    <S.ViewportPosition>
      <S.Viewport />
    </S.ViewportPosition>
  </S.Root>
);

NavigationMenu.List = S.Item;
NavigationMenu.Item = S.Item;
NavigationMenu.Trigger = S.Trigger;
NavigationMenu.Content = S.Content;
NavigationMenu.SubContent = S.SubContent;
NavigationMenu.Link = S.Link;
NavigationMenu.Sub = S.Sub;
NavigationMenu.Viewport = S.Viewport;
NavigationMenu.SubViewportPosition = S.SubViewportPosition;
NavigationMenu.SubViewport = S.SubViewport;
NavigationMenu.Indicator = S.Indicator;

export { NavigationMenu };
