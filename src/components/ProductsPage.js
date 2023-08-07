import React from "react";
import styled from "styled-components";
import productsData from "./productsData";

const ProductsPageWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
`;

const ProductsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

const ProductBox = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
`;

const ProductIcon = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 1rem;
`;

const ProductName = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const ProductsPage = () => {
  return (
    <ProductsPageWrapper>
      <ProductsTitle>Our Products</ProductsTitle>
      <ProductsGrid>
        {productsData.map((product, index) => (
          <ProductBox key={index}>
            <ProductIcon src={product.iconUrl} alt={product.name} />
            <ProductName>{product.name}</ProductName>
          </ProductBox>
        ))}
      </ProductsGrid>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;