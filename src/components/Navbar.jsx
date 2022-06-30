import styled from "styled-components";
import LogoImg from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo src={LogoImg} alt="Logo do site" />
      </Link>
      <List>
        <ItemList>
          <Link to="/">
            Home
          </Link>
        </ItemList>
        <ItemList>
          <Link to="/login">
            Entrar
          </Link>
        </ItemList>
        <ItemList>
          <Link to="/register">
            Cadastrar
          </Link>
        </ItemList>
        <ItemList>
          <Link to="/products">
            Produtos
          </Link>
        </ItemList>
        <ItemList>
          <Link to="/about">
            Sobre
          </Link>
        </ItemList>
      </List>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: #189418;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 537px) {
    justify-content: center;
  }
` 

const Logo = styled.img `
  max-width: 60px;
  border-radius: 50%;
  transition: all .2s ease;
  &:hover {
    transform: scale(1.03) ;
  }
`

const List = styled.ul`
  display: flex;
  align-items: center;  
  list-style: none;
`
const ItemList = styled.li`
  a {
    margin: 0 .5rem;
    font-size: .9rem;
    text-decoration: none;
    color: #FFF;
    padding: .4rem .6rem; 
    border-radius: .5rem;
    transition: all .2s linear;
    font-weight: bold;
  }

  a:hover {
    background-color: #FFF;
    color: #000;
  }
`

export default Navbar;