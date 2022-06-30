import "./Modal.css";
import { useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <>
      <button onClick={toggleModal}>Mostrar Modal</button>
      {modal && (
        <ContainerModal>
          <p>Modal</p>
        </ContainerModal>
      )}
    </>
  )
}

const ContainerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  width: 400px;
  height: 250px;
  color: #FFF;
`

export default Modal;