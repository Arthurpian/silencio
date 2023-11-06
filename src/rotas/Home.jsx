import style from '../styles/home/home.module.css';
import banner from '../imgs/banner.jpg';
import data from "../json/livros.json"

function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.banner}>
          <img src={banner} alt="banner" />
        </div>
        <div className={style.galeria}>
          <div className={style.titulo}>
            <h1>Mais vendidos</h1>
          </div>
          <div className={style.livro}>
            <div className={style.carrosel}>
                {data.map((item) => (
                        <div className={style.id} key={item.id}>
                        <div className={style.card}>
                        <img src={item.capa} alt={item.nome} />
                        </div>
                        <div className={style.info}>
                            <h1>{item.nome}</h1>
                            <h2>{item.autor}</h2>
                        </div>
                        </div>
                    ))}
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
