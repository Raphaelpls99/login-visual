import React from 'react';

// Assets
import './styles.css'
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export default function Home() {
    return (
        <div className="container">
            <div className="content">
                <h1>Dev Insano</h1>
                <h2>Seu perfil de Tecnologia!</h2>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/dev_insano/?hl=pt-br" target="blank">
                    <img src={instagram} alt="Logo do Instagram" />
                </a>
                <a href="https://github.com/hique023" target="blank">
                    <img src={github} alt="Logo do GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/pedro-henrique-s-de-camargo-343808117/" target="blank">
                    <img src={linkedin} alt="Logo do LinkedIn" />
                </a>
            </div>
        </div>
    )
}