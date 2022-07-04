// Styled Components
import styled from 'styled-components';
import Loading  from "../../assets/loading.svg";

// Hooks
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

// Components
import Container from '../../components/Container'
import { useState } from 'react';
import { useContext } from 'react';
import { CartListContext } from '../../context/CartListContext';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const url = `http://localhost:4000/products/${id}`;
  const { data: product, loading, error } = useFetch(url);  
  const [itemQty, setItemQty] = useState("");
  let navigate = useNavigate();

  const { listProducts, setListProducts } = useContext(CartListContext);

  
  const handleSubmit = e => {
    e.preventDefault();
    // ${product.name}/${product.price}/${itemQty}
    
    const name = product.name;
    const price = product.price;
    
    const data = {
      name,
      price,
      itemQty
    }
    
    console.log(listProducts)
    navigate(`/myproducts/cart/`);
  }

  return (
    <Container>
      <Product>
        {loading && <img src={Loading} alt="Página em estado de carregamento" /> }
        {error && <p>{error}</p>}
        {product && (
          <>
           <h2>{product.name}</h2>
           <h2>{product.price}</h2>
           <h3>Quantidade: {product.qtd}.</h3>
           <form onSubmit={handleSubmit}>
            <p>quantidade</p>
            <input 
              type="number"
              value={itemQty}
              onChange={e => setItemQty(e.target.value)}
              placeholder="0"
              min={1}
              required
            />
            <ButtonDetail>
              Adicionar ao Carrinho
            </ButtonDetail>
           </form>
          </>
        )}
      </Product>
    </Container>
  )
}

const Product = styled.div`

  h2, h3 {
    margin: .4rem 0;
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

  form {
    text-align: center;
  }

  input {
    margin-bottom: .3rem;
    text-align: center;
    padding: .3rem 0;
    max-width: 3rem;
    border: 2px solid #abecf6;
    outline: none;
  }
`

const ButtonDetail = styled.button`

  width: 100%;
  padding: .5rem 0;
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


export default ProductDetail