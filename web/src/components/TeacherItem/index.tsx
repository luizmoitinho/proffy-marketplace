import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/27688422?s=460&u=c82ab6ab0093cdbbfe156f04d5b115922f29a6d4&v=4"
                    alt="Luiz Moitinho" />
                <div>
                    <strong>Luiz Carlos Costa Moitinho</strong>
                    <span>Desenvolvedor Back e Front-end </span>
                </div>
            </header>
            <p>
                É um fato estabelecido há muito tempo que um leitor se distrai com o conteúdo legível <br />
                de uma página ao examinar seu layout. O objetivo de usar Lorem Ipsum é que ele tem <br />
                uma distribuição de letras mais ou menos normal, em vez de usar 'Conteúdo aqui, conteúdo aqui',
            </p>
            <footer>
                <p>
                    Preço/hora<strong >R$ 80,00</strong>
                </p>
                <button>
                    <img src={whatsAppIcon} alt="Entrar em contato" />
                    Entrar em contato
            </button>
            </footer>
        </article>

    );
}

export default TeacherItem;