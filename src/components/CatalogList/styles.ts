import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  background-color: red;
  /* height: auto; */

  transform: height 2s ease;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductItemImage = styled.img``;

export const ProductItemTitle = styled.div``;

export const ProductItemDescription = styled.div``;
