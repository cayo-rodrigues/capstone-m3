import { Container, Imagem, ModalContainer } from "./styles";
import whatsapp from "../../assets/Whatsapp.png";
import email from "../../assets/Email.png";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "500px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Card = ({ nome, img, especialidades, id }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    if (e.target.tagName === "SECTION") {
      setIsOpen(true);
      console.log(e.target);
    } else if (
      e.target.tagName === "LI" ||
      e.target.tagName === "IMG" ||
      e.target.tagName === "H2"
    ) {
      console.log(e.target.parentElement.parentElement);
      setIsOpen(true);
    } else {
      setIsOpen(true);
      console.log(e.target.parentElement);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer id={id} onClick={(e) => openModal(e)}>
          <div>
            <h2>{nome}</h2>
            <Imagem src={img} alt="Imagem" />
          </div>

          <ul>
            {especialidades.map((especialidade) => (
              <li>{especialidade}</li>
            ))}
          </ul>
          <span>
            <button>
              <Imagem src={email} alt="" />
            </button>
            <button>
              <Imagem src={whatsapp} alt="" />
            </button>
          </span>
        </ModalContainer>
      </Modal>
      <section id={id} onClick={(e) => openModal(e)}>
        <div>
          <h2>{nome}</h2>
          <img src={img} alt="Imagem" />
        </div>

        <ul>
          {especialidades.map((especialidade) => (
            <li>{especialidade}</li>
          ))}
        </ul>
        <span>
          <button>
            <img src={email} alt="" />
          </button>
          <button>
            <img src={whatsapp} alt="" />
          </button>
        </span>
      </section>
    </Container>
  );
};

export default Card;
