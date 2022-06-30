import { Link } from "react-router-dom";
import styled from "styled-components";

const CardProduct = ({ item }) => {
  return (
    <Product>
      <h2>{item.name}</h2>
      <img src={item.img} alt="teste" />
      <p>R$ <span>{item.price}</span>.</p>
        <ButtonDetail>
          <Link to={`/products/${item.id}`}>
            Ver Detalhes
          </Link>
        </ButtonDetail>
    </Product>
  )
}

const Product = styled.div`

  h2 {
    margin-bottom: .4rem;
    color: #049fb7;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ddf2f5;
  padding: 1.5rem;
  margin: .6rem;
  width: 200px;
  position: relative;
  border-radius: .3rem; 

  img {
    max-width: 170px;
    height: 120px;
    margin: .2rem 0;
  }

  p {
    padding: .7rem 0;
    color: #049fb7;
  }

  span {
    color: #000;
  }
`

const ButtonDetail = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: .4rem 0;
  background-color: #72dd72;
  color: #FFF;
  border: none;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    background-color: #089b08;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }
`

export default CardProduct;