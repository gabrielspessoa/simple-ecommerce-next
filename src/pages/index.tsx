import { CatalogList } from '@/components/CatalogList';
import { Navbar } from '@/components/Navbar';
import { useEffect, useState } from 'react';
import * as S from '../styles/pages/index.styles';
const HomePage = () => {
  const [products, setProducts] = useState<Array<any>>([]);
  useEffect(() => {
    fetch('http://localhost:3001/products', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <>
      <Navbar />
      <S.Container>
        <CatalogList products={products} />
      </S.Container>
    </>
  );
};

export default HomePage;
