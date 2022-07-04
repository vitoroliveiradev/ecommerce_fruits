import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import { fadeIn } from "react-animations";
import { useNavigate } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { auth, createUser, error: authError, loading } = useAuthentication();
  console.log(authError);

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError])

  const handleSubmit = async e => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    if(email !== confirmEmail) {
      setError("Os e-mails precisam ser iguais!");
      return;
    }

    const res = await createUser(user);

    console.log(res);

    // navigate("/");
  }

  return (
    <RegisterContainer>
      <h1>Cadastre-se para usar o sistema</h1>
      <form onSubmit={handleSubmit}>
        <h2>Bem Vindo</h2>
        <label>
          <input 
            type="text"
            name="name"
            placeholder="Nome do usuário"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          <input 
            type="email"
            name="email"
            placeholder="E-mail do usuário"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          <input 
            type="email"
            name="confirmEmail"
            placeholder="Digite o E-mail novamente"
            required
            value={confirmEmail}
            onChange={e => setConfirmEmail(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          <input 
            type="password"
            name="password"
            placeholder="Digite sua senha"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          <input 
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
        {!loading && (
          <label>
            <button>
              Cadastrar
            </button>
          </label>
        )}
        {loading && (
          <label>
            <button disabled>
              Cadastrando...
            </button>
          </label>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </RegisterContainer>
  )
}

const fade = keyframes`${fadeIn}`;

const RegisterContainer = styled.div`
  h1 {
    margin: 1rem 0;
    text-align: center;
  }

  form {
    width: 90%;
    max-width: 24.875rem;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem;
    box-shadow: 0px 10px 13px -7px #000000;
    border-radius: 4px;
    animation: 1s ${fade};

    h2 {
      text-align: center;
      margin: 1rem 0;
    }
  }

  label {    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem; 

    span {
      margin: .3rem 0;
      
    }

    input {
      width: 80%;
      height: 30px;
      padding: 4px;
      outline: none;
      border: none;
      border-bottom: 1px solid #CCC;
    }

    input::placeholder {
      color: #8d8d8d;
    }
    
    button {
      width: 70%;
      height: 35px;
      cursor: pointer;
      background-color: #6fb454;
      transition: all .2s linear;
      border: none;
      border-radius: 10px;
      color: #FFF;
      font-weight: bold;
      font-size: 1.1rem;
    }

    button:hover {
      background-color: #2a7d09;
    }

    button[disabled] {
      background-color: #CCC;
      cursor: not-allowed;
    }
    animation: 1s ${fade};
  }
    
`

const ErrorMessage = styled.div`
  background-color: #f35b5b;
  color: #FFF;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  padding: .4rem 0;
  border-radius: 10px;
  font-weight: normal;
  transition: all .2s linear;
`


export default Register;