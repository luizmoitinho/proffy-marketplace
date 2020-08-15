import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './style.css';

//================== IMAGENS ==================
import logoImg  from '../../assets/images/logo.svg';
import landingImg  from '../../assets/images/landing.svg';
//================== ICONES ==================
// import studyIcon from '../../assets/images/icons/study.svg';
// import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import api from '../../services/api';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
function Landing(){

    const [totalConexoes, setTotalConexoes] = useState(0);

    useEffect( () => {
        api.get('connections').then( (response) => {
            const { total } = response.data;
            setTotalConexoes(total);
        })
    }, []);

    
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
                    <Link to="/services" className="contact">
                        Contratar
                    </Link>
                    <Link to="/create" className="create-service">
                        Criar serviço
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConexoes} conexões realizadas
                    <img src={purpleHeartIcon} alt="Coração roxo" className="src"/>
                </span>

            </div>
        </div>

    ); 

}

export default Landing;