import styled from "styled-components";
import Loading  from "../../assets/loading.svg";

// Hooks
import { useFetch } from "../../hooks/useFetch"

// Components
import CardProduct from "../../components/CardProduct";
import Container from "../../components/Container";
import { useContext, useState } from "react";
import { CartListContext } from "../../context/CartListContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const url = "http://localhost:4000/products";
  const { data: products, loading, error } = useFetch(url);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { listProducts, setListProducts } = useContext(CartListContext);

  const handleFormSubmit = e => {
    e.preventDefault();

    if(query) {
      return navigate(`/search/${query}`)
    }
    
  }


  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          placeholder="Pesquisar produtos..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          required
        />
        <button>Pesquisar</button>
      </Form>
      <Title>Lista de Produtos</Title>
      <Container>
        {error && <p>{error}</p>}
        {loading && <img src={Loading} alt="Página em estado de carregamento" /> }
        {products && products.map(product => (
          <CardProduct 
            key={product.id} 
            item={product} 
          />
        ))}
      </Container>
    </div>
  )
}

const Title = styled.h1`
  text-align: center;
  margin: .5rem 0;
`

const Form = styled.form`
  text-align: center;
  margin: 1.5rem 0;
  
  input {
    margin-right: .5rem;  
    padding: .3rem .5rem;
    border: none;
    border-bottom: 2px solid green;
    outline: none;
  }

  button {
    padding: .5rem .5rem;
    background-color: #c8f2c8;
    border: none;
    border-radius: .2rem;
    cursor: pointer;
    transition: .3s linear;
  }

  button:hover {
    filter: saturate(2);
  }
`

export default Products;