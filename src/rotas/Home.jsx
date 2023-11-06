import style from '../styles/home/home.module.css'
import banner from '../imgs/banner.jpg'
import { useEffect, useState, useRef } from "react";

function Home(){

    fetch('http://localhost:5173/src/json/livros.json')
    .then((Response) => Response.json())
    .then(setData)
    .catch((error) => {
        console.error("Erro ao carregar os dados", error);
    });

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
                    <div className={style.carrosel}>
                        {data.map((item) => {
                            const { id, name, autor, capa } = item;
                            return (
                                <div className={style.id} key={id}>
                                    <div className={style.card}>
                                        <img src={capa} alt='capa' />
                                    </div>
                                    <div className={style.info}>
                                        <h1>{name}</h1>
                                        <h2>{autor}</h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home