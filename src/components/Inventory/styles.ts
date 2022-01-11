import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Product = styled.div`
  width: 310px;
  margin: 10px 20px;
  padding: 20px;
  border: 3px solid #010101;
  border-radius: 5px;

  .product__title {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .product__image {
    display: flex;
    justify-content: center;
    height: 350px;
  }

  .product__price {
    font-size: 1.2rem;
    font-weight: 800;
  }

  .product__button {
    display: flex;
    justify-content: center;
  }

  img {
  }

  button {
    margin: 10px 0;
    padding: 10px;
    border: 2px solid #010101;
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #fff;
  }

  button:hover {
    background-color: #010101;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;
  }

  button:not(:hover) {
    transition: 0.3s;
  }
`;

export { Container, Product };
