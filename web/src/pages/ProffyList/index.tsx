import React from 'react';

import PageHeader from '../../components/PageHeader';


import './style.css';
import ProffyItem from '../../components/ProffyItem';


function ProffyList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Profissional</label>
                        <input type="text" id="subject" placeholder="Nome do profissional" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Tipo de serviço</label>
                        <input type="text" id="week-day" placeholder="Ex: eletricista, garçom, encanador" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Estrelas</label>
                        <select>
                            <option >Selecione o número de estrelas</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>5</option>
                        </select>
                    </div>
                </form>
            </PageHeader>
            <main>
                <ProffyItem/>
                <ProffyItem/>
                <ProffyItem/>
                <ProffyItem/>
            </main>
        </div>
    );
}

export default ProffyList;