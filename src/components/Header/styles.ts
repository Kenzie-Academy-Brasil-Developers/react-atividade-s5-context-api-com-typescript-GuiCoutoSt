import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #010101;
  color: #fff;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
  }

  a {
    display: flex;
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-weight: 800;
    font-size: 0.8rem;
    background-color: tomato;
  }
`;

export default Container;
