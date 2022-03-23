import { Container } from "./styles";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import DefaultUserImg from "../../assets/profile 1.png";
import { Link } from "react-router-dom";

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -45%)",
//     width: "96%",
//     maxWidth: "600px",
//     height: "500px",
//     display: "flex",
//     justifyContent: "space-around",
//     flexDirection: "column",
//     alignItems: "center",
//   },
// };

const Card = ({ nome, img, especialidades=[], locais=[], id }) => {
  // const [ setIsOpen] = useState(false);

  // function openModal(e) {
  //   if (e.target.tagName === "SECTION") {
  //     setIsOpen(true);
  //   } else if (
  //     e.target.tagName === "LI" ||
  //     e.target.tagName === "IMG" ||
  //     e.target.tagName === "H2"
  //   ) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(true);
  //   }
  // }
  return (
    <Container>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer id={id} onClick={(e) => openModal(e)}>
          <div>
            <h2>{especialidades.join(', ')}</h2>
            <Imagem src={DefaultUserImg} alt="Imagem" />
          </Div>

          <ul>
            <h3>Especialidade:</h3>

            <li>{especialidades}</li>
            <div className="link">
              <Link
                to={`/services/${id}/${nome}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Ver o perfil completo
              </Link>
            </div>
          </ul>
          <span>
            <button
              onClick={() => {
                const subject = "Anúncio do site Proworking";
                const body = "Gostaria de conversar sobre...";
                window.open(`mailto:${email}?subject=${subject}&body=${body}`);
              }}
            >
              <Imagem src={email} alt="" />
            </button>
            <button
              onClick={() => {
                const text =
                  "Vi seu perfil na Proworking, gostaria de conversar sobre o trabalho";
                const tel = whatsapp
                  .split("")
                  .filter((letter) => !isNaN(letter) && letter !== " ")
                  .join("");

                window.open(`https://wa.me/${tel}?text=${text}`);
              }}
            >
              <Imagem src={whatsapp} alt="" />
            </button>
          </span>
        </ModalContainer>

      </Modal> */}
      <section
        data-aos="fade-in"
        data-aos-delay="150"
        id={id}
        // onClick={(e) => openModal(e)}
      >
        <div className="titleAndImg">
          <h2 className="title">{nome}</h2>
          <img src={DefaultUserImg} alt="Imagem" />
        </div>

        <ul className="occupation_areas">
          {especialidades.slice(0, 2).map((especialidade, index) => (
            <li key={index}>{especialidade}</li>
          ))}
          {especialidades.length > 2 && <li>...</li>}
        </ul>

        <ul className="location">
          <p>Locais de atendimento:</p>
          {locais.slice(0, 2).map((local, index) => (
            <li className="locationDiv" key={`${local}-${index}`}>
              {local.state}- {local.city}
            </li>
          ))}
        </ul>
        <p className="link">
          <Link
            to={`/services/${id}/${nome}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Ver o perfil Completo
          </Link>
        </p>
        {/* <span>
          <button>
            <img src={email} alt="" />
          </button>
          <button>
            <img src={whatsapp} alt="" />
          </button>
        </span> */}
      </section>
    </Container>
  );
};

export default Card;
