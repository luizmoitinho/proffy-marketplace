import React from 'react';

import PageHeader from '../../components/PageHeader';


import './style.css';
import ProffyItem from '../../components/ProffyItem';
import Input from '../../components/Formulario/Input';


function ProffyList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input 
                        name="subject" 
                        label="Profissional"
                        placeholder="ex: Luiz Moitinho "
                    />
                    <Input
                      name="servico" 
                      label="Tipo de serviço<"
                      placeholder="Ex: eletricista"                  
                    />
                   
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