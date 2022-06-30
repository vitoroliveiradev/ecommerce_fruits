import styled from "styled-components"
import Container from "./Container"
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartListContext } from "../context/CartListContext";

const Cart = () => {
  const data = useParams();

  const { listProducts, setListProducts } = useContext(CartListContext);



  return (
    <Container>
      <Content>
        <p>Valor: {listProducts}</p>
        <Left>
          {/* <p>{name}</p> */}
        </Left>
        <Center>
          {/* <p>Quantidade: {qty}</p> */}
        </Center>
        <Right>
          <Link to="/">
            <FaTrash className="trash"/>
          </Link>
          <Link to="/">
            <FaEdit className="edit" />
          </Link>
          {/* <p>Subtotal: R$ {subtotal}.</p> */}
        </Right>
      </Content>
    </Container>
  )
}

const Content = styled.div`
  background-color: #84e7b1;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem .4rem;
  
  .trash, .edit {
    font-size: 1.2rem;
    margin: 0 .6rem;
    cursor: pointer;
  }

  .trash {
    color: #b80d0d;
    transition: all .3s ease-in-out;
  }

  .edit {
    color: green;
    transition: all .3s ease-in-out;  
  }

  .edit:hover {
    color: #03db03;
    transform: scale(1.05);
  }

  .trash:hover {
    transform: scale(1.1);
    color: #ff0000;
  }



`

const Left = styled.div`

`

const Center = styled.div`


`



export default Cart