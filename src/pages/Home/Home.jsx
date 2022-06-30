import styled from "styled-components";

// Hooks
import { useFetch } from "../../hooks/useFetch"

// Components
import CardProduct from "../../components/CardProduct";
import Container from "../../components/Container";
import { useContext } from "react";
import { CartListContext } from "../../context/CartListContext";

const Home = () => {
  const url = "http://localhost:4000/products";
  const { data: products, loading, error } = useFetch(url);

  const { listProducts, setListProducts } = useContext(CartListContext);

  console.log(listProducts)

  return (
    <div>
      <Title>Lista de Produtos</Title>
      <Container>
        {error && <p>{error}</p>}
        {loading && <p>Carregando Produtos...</p>}
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

export default Home;