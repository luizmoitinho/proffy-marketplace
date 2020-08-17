import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';
import api from '../../services/api';


export interface Proffy{
    id_usuario:number,
    id_servico:number,
    img_usuario:string,
    nm_usuario:string,
    tel_usuario:string
    nm_servico:string,
    desc_servico:string;
    valor_servico:number
}
interface PorffyItemProps {
    proffy:Proffy
}

const ProffyItem: React .FC<PorffyItemProps> = ({proffy}) => {

    function novaConexao(){
        api.post('/connections',{
            id_profissional:proffy.id_usuario
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={proffy.img_usuario}
                    alt={proffy.nm_usuario} />
                <div>
                    <strong>{proffy.nm_servico}</strong>
                    <span>{proffy.nm_servico} </span>
                </div>
            </header>
            <p> {proffy.desc_servico} </p>
            <footer>
                <p>
                    Preço<strong >R$ {proffy.valor_servico}</strong>
                </p>
                <a href={`https://wa.me/${proffy.tel_usuario}`} 
                   target="_blank" 
                   onClick={novaConexao}>
                       
                    <img src={whatsAppIcon} alt="Entrar em contato" />
                    Entrar em contato
                </a>
            </footer>
        </article>

    );
}

export default ProffyItem;