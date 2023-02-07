import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const UserInfo = styled.pre`
  background-color: var(--color-bg-lighter);
  box-shadow: var(--shadow-elevation-medium);
  border: solid 1px var(--color-border-lighter);
  padding: 12px;
  border-radius: 8px;
`;
