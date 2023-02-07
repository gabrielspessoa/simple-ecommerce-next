import { Righteous } from '@next/font/google';
import Link from 'next/link';
import styled from 'styled-components';

const righteous = Righteous({ subsets: ['latin'], weight: '400' });

export const Container = styled.div`
  background-color: var(--color-bg-lighter);
  box-shadow: var(--shadow-elevation-medium);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
  }
`;

export const Brand = styled.span`
  font-size: 22px;
  font-family: ${righteous.style.fontFamily};
  margin-right: 24px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ItemGroup = styled.div`
  display: none;
  gap: 12px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Item = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  border-radius: 4px;
  padding: 6px 8px;

  &:hover {
    background-color: var(--button-icon-hover-bg);
  }
`;

export const ProfileDropdownButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 4px;
  padding: 8px 12px;

  &:hover {
    background-color: var(--button-icon-hover-bg);
  }
`;
