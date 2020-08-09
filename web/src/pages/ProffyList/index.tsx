import React from 'react';

import PageHeader from '../../components/PageHeader';


import './style.css';
import ProffyItem from '../../components/ProffyItem';
import Input from '../../components/Formulario/Input';
import Select from '../../components/Formulario/Select';


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

                <Select
                        name="fk_id_area"
                        label="Tipo"
                        options={[
                            {value:'1',label:'Alimentação'},
                            {value:'2',label:'Fitness'    },
                            {value:'3',label:'Móveis'     },
                            {value:'4',label:'Aluguéis'   },
                            {value:'5',label:'Eletricista'},
                            {value:'6',label:'Mecânico'   },
                            {value:'7',label:'Programador'},
                        ]}
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