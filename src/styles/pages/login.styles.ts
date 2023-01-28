import { red } from '@radix-ui/colors';
import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  display: flex;

  & * {
    /* border: solid 1px red; */
  }
`;

export const Section = styled.div<{ padding?: string }>`
  flex: 1;
  box-sizing: border-box;
  padding: ${({ padding }) => padding && padding};
  overflow: hidden;
  position: relative;
`;

export const Separator = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: linear-gradient(90deg, transparent, var(--body-bg));
`;

export const FormTitle = styled.h2`
  margin: 0 0 24px 0;
  text-align: center;
`;

export const FormContainter = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: var(--foreground-1);
  padding: 24px 18px;
  box-shadow: var(--shadow-elevation-medium);
  border-radius: 6px;
  box-sizing: border-box;
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
