import { useEffect } from 'react';
import * as S from './styles';

interface CatalogListProps {
  products: Array<any>;
}

export const CatalogList = (props: CatalogListProps) => {
  if (props.products.length === 0) {
    return <S.Container>Carregando...</S.Container>;
  }

  return (
    <S.Container>
      {props.products.map((product, index) => {
        return <ProductItem key={index} productData={product} />;
      })}
    </S.Container>
  );
};

const ProductItem = (props: { productData: any }) => {
  return (
    <S.ProductItemContainer>
      <S.ProductItemImage src='/product-placeholder.png'></S.ProductItemImage>
      <S.ProductItemTitle>{props.productData.title}</S.ProductItemTitle>
      <S.ProductItemDescription>
        {props.productData.description}
      </S.ProductItemDescription>
    </S.ProductItemContainer>
  );
};
