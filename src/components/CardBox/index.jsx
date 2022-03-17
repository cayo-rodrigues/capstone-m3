import Card from "../Card";
import { Container } from "./styles";

const CardBox = () => {
    const pessoas = [
        {
            nome: "Cirilão",
            img: "https://i.pinimg.com/originals/b7/be/37/b7be372c86fb3e0c05c903a590cb97cc.jpg",
            especialidades: ["Trabalhador", "Jogador de Futebol", "Policia"],
        },
        {
            nome: "Jason",
            img: "https://rollingstone.uol.com.br/media/uploads/jason_sexta_feira_13_repdod.jpg",
            especialidades: ["Matador de alguel", "Corno mal amado", "Sei lá"],
        },
        {
            nome: "Perry",
            img: "https://i.pinimg.com/236x/93/59/7a/93597a5739534c1d24945c44c4081b56--cutest-baby-animals-adorable-animals.jpg",
            especialidades: ["Espião", "Fofo", "Heroi"],
        },
        {
            nome: "Zubumafu",
            img: "https://i.ytimg.com/vi/ERz6eli2WDk/maxresdefault.jpg",
            especialidades: ["Comedor de banana"],
        },
        {
            nome: "Vegeta",
            img: "https://criticalhits.com.br/wp-content/uploads/2021/07/20200904-20200217-dragon-ball-super-vegeta-1200x675-1-1024x576-1.jpg",
            especialidades: ["Verme Maldito", "É MAIS DE 8000"],
        },
        {
            nome: "Impostor",
            img: "https://static1.purepeople.com.br/articles/8/33/44/28/@/3793770-encontro-das-tres-geracoes-de-homem-aran-624x0-1.jpg",
            especialidades: ["Ele é um impostor"],
        },
        {
            nome: "Super Choque",
            img: "https://www.atrevida.com.br/wp-content/uploads/2021/03/24340-dc-confirma-live-action-do-super-choque.jpg",
            especialidades: [
                "Bateria de carro",
                "Carregador portatil",
                "Não aperte a mão dele",
                "Vou dar choque no seu sistema",
            ],
        },
        {
            nome: "DeadPool",
            img: "https://rollingstone.uol.com.br/media/uploads/deadpool.jpg",
            especialidades: ["Faz piadas de Qualidade"],
        },
        {
            nome: "Rick",
            img: "https://uploads.metropoles.com/wp-content/uploads/2017/12/28161806/rick7.jpg",
            especialidades: ["Pq eu to aqui?!"],
        },
    ];

  return (
    <Container>
      {pessoas.map((pessoa, index) => (
        <Card
          id={index}
          key={index}
          nome={pessoa.nome}
          img={pessoa.img}
          especialidades={pessoa.especialidades}
        />
      ))}
    </Container>
  );
};

export default CardBox;
