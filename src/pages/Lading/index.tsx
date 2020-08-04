import React from "react";


//================== IMAGENS ==================
import logoImg  from '../../assets/images/logo.svg';
import landingImg  from '../../assets/images/landing.svg';
//================== ICONES ==================
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/study.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './style.css';

function Landing(){

    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Seu pré-vestibular gratuito</h2>
                </div>
                
                <img 
                    src={landingImg} 
                    alt="Pré-vestibular gratuito" 
                    className="hero-image"
                />
              
                <div className="buttons-container">
                    <a href="http://" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>
                    <a href="http://" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula" />
                        Dar aula
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões realizadas
                    <img src={purpleHeartIcon} alt="Coração roxo" className="src"/>
                </span>

            </div>
        </div>

    ); 

}

export default Landing;