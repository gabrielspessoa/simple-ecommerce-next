import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export const Root = styled(DropdownMenu.Root)``;

export const Trigger = styled(DropdownMenu.Trigger)``;

export const Portal = styled(DropdownMenu.Portal)``;

export const Content = styled(DropdownMenu.Content)`
  background-color: var(--dropdown-bg);
  padding: 10px;
  min-width: 100px;
  border: 1px solid var(--color-border-lighter);
  border-radius: 6px;
  box-shadow: var(--shadow-elevation-high);
  display: flex;
  flex-direction: column;
`;

export const Label = styled(DropdownMenu.Label)``;

export const Item = styled(DropdownMenu.Item)<{ color?: string }>`
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ color }) => color && color};

  &[data-highlighted] {
    outline: none;
    background-color: var(--dropdown-item-hover-bg);
  }
`;

export const Group = styled(DropdownMenu.Group)``;

export const CheckboxItem = styled(DropdownMenu.CheckboxItem)``;

export const ItemIndicator = styled(DropdownMenu.ItemIndicator)``;

export const RadioGroup = styled(DropdownMenu.RadioGroup)``;

export const RadioItem = styled(DropdownMenu.RadioItem)``;

export const Sub = styled(DropdownMenu.Sub)``;

export const SubTrigger = styled(DropdownMenu.SubTrigger)``;

export const SubContent = styled(DropdownMenu.SubContent)``;

export const Separator = styled(DropdownMenu.Separator)`
  height: 1px;
  background-color: var(--dropdown-separator-bg);
  margin: 4px 0;
`;

export const Arrow = styled(DropdownMenu.Arrow)``;
