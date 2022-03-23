import { OurTeam } from "./styles";

import { AiFillLinkedin } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const AboutUs = () => {
  const team = [
    {
      name: "Cayo Rodrigues",
      job: "Tech Lead",
      linkedin: "https://www.linkedin.com/in/cayo-rodrigues/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02AFBZVCMD-b844c0054447-512",
    },
    {
      name: "Igor Souza",
      job: "Project Owner",
      linkedin: "https://www.linkedin.com/in/sousa-igor/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02ARJSS0FR-a52854ef7ff6-512",
    },
    {
      name: "Gabriel Rocha",
      job: "Scrum Master",
      linkedin: "https://www.linkedin.com/in/gabriel-da-rocha-de-souza/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02BSSD4M1Q-73b0d8433e45-512",
    },
    {
      name: "Gustavo",
      job: "Quality Assurance",
      linkedin: "https://www.linkedin.com/in/gustavo-mouravs/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02BAE1JRQE-2d85ec48cc78-512",
    },
    {
      name: "Thiago",
      job: "Quality Assurance",
      linkedin:
        "https://www.linkedin.com/in/thiago-henrique-monserrat-rezende-83562b213/",
      img: "https://ca.slack-edge.com/TQZR39SET-U028KLN08DA-296580f3d02b-512",
    },
    {
      name: "Christian Bezerra",
      job: "Quality Assurance",
      linkedin: "https://www.linkedin.com/in/christian-bezerra-332a36130/",
      img: "https://ca.slack-edge.com/TQZR39SET-U02F16XAA3F-313a0452ff59-512",
    },
  ];

  return (
    <>
      <OurTeam>
        <h1 data-aos="fade-in" data-aos-delay="150">
          Sobre nós
        </h1>
        <div data-aos="fade-in" data-aos-delay="1050" className="linha"></div>
        <p data-aos="fade-up">
          O projeto ProWorking foi criado para agilizar e facilitar a
          contratação de pessoas em serviços informais. O projeto foi criado
          pelos os estudantes em desenvolvimento web da Kenzie Academy Brasil, e
          representa o projeto final do módulo M3 do curso fullstack.
        </p>
        <h3 data-aos="fade-up" data-aos-delay="150">
          Nosso Time Dev
        </h3>
        <div data-aos="fade-in" data-aos-delay="1050" className="linha"></div>
        <div>
          <ul>
            {team.map((member, index) => (
              <li data-aos="fade-up" data-aos-delay={index * 30} key={index}>
                <img src={member.img} alt={member.name} />
                <div>
                  <h4>{member.name}</h4>
                  <p>{member.job}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="linkedin"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </OurTeam>
    </>
  );
};

export default AboutUs;
