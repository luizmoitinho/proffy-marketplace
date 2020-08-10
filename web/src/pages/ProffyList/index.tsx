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
                        optionDefault="Selecione um tipo de serviço"
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

                <Select
                        name="estrelas"
                        label="Estrelas"
                        optionDefault="Selecione o número de estrelas"
                        options={[
                            {value:'0',label:'0'},
                            {value:'1',label:'1'},
                            {value:'2',label:'2'},
                            {value:'3',label:'3'},
                            {value:'4',label:'4'},
                            {value:'5',label:'5'},
                        ]}
                />

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