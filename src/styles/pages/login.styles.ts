import { red } from '@radix-ui/colors';
import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;

  display: flex;

  & * {
    /* border: solid 1px red; */
  }
`;

export const Section = styled.section<{
  padding?: string;
  align?: string;
  flex?: number;
}>`
  flex: ${({ flex }) => (flex ? flex : 1)};
  flex-direction: column;
  display: flex;
  justify-content: ${({ align }) => align && align};
  box-sizing: border-box;
  padding: ${({ padding }) => padding && padding};
  overflow: hidden;
  position: relative;

  &.md-only {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

export const Separator = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: linear-gradient(90deg, transparent 0%, var(--color-bg) 85%);
`;

export const FormTitle = styled.h2`
  margin: 0 0 24px 0;
  text-align: center;
`;

export const FormContainter = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-bg-light);
  padding: 24px 18px;
  box-shadow: var(--shadow-elevation-high);
  border: solid 1px var(--color-border-light);
  border-radius: 6px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Error = styled.div`
  color: ${red.red9};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
