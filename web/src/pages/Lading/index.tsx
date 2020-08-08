import React from "react";
import {Link} from 'react-router-dom';

import './style.css';

//================== IMAGENS ==================
import logoImg  from '../../assets/images/logo.svg';
import landingImg  from '../../assets/images/landing.svg';
//================== ICONES ==================
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
function Landing(){

    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Navegue e encontre um profissional para o seu 
                        serviço
                    </h2>
                </div>
                
                <img 
                    src={landingImg} 
                    alt="Pré-vestibular gratuito" 
                    className="hero-image"
                />
              
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        Contratar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        Criar serviço
                    </Link>
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