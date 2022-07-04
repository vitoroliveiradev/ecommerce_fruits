import styled from "styled-components";
import LogoImg from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <Nav>
      <Link to="/products">
        <Logo src={LogoImg} alt="Logo do site" />
      </Link>
      <List>
        <ItemList>
          <Link to="/products">
            Produtos
          </Link>
        </ItemList>
        {!user && (
          <>
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
          </>
        )}
        <ItemList>
          <Link to="/myproducts">
            Meus Produtos
          </Link>
        </ItemList>
        <ItemList>
          <Link to="/about">
            Sobre
          </Link>
        </ItemList>
        {user && (
          <ItemList>
            <button 
              className="logout"
              onClick={logout}
            >
              Sair
            </button>
        </ItemList>
        )}
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
  outline: none;
`

const List = styled.ul`
  display: flex;
  align-items: center;  
  list-style: none;
`
const ItemList = styled.li`
  a, .logout {
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

  .logout {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: block;
    margin: 0 1rem;
    box-sizing: content-box;
  }

  .logout:hover {
    color: red;
  }
`

export default Navbar;