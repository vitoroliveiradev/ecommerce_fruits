import { useQuery } from "../../hooks/useQuery";
import { useFetch } from "../../hooks/useFetch";
import Container from "../../components/Container";
import Loading from "../../assets/loading.svg";
import CardProduct from "../../components/CardProduct";
import { useParams } from "react-router-dom";

export const Search = () => {
  const { q } = useParams();
  console.log(q);
  
  const url = `http://localhost:4000/products/?${q}`;

  const { data: products, loading, error } = useFetch(url);

  console.log(products)
  

  return (
    <div>
      <h2>Resultado da busca.</h2>
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