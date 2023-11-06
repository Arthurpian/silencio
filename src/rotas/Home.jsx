import style from '../styles/home/home.module.css'
import banner from '../imgs/banner.jpg'
function Home(){
    return(
        <>
        <div className={style.container}>
            <div className={style.banner}>
                <img src={banner}></img>
            </div>
            <div className={style.galeria}>
                <div className={style.titulo}>
                    <h1>Mais vendidos</h1>
                </div>
                <div className={style.livros}>
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Home