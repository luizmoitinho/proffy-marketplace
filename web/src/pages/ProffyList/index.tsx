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
                        name="profissional" 
                        label="Profissional"
                        placeholder="ex: Luiz Moitinho "
                    />

                <Select
                        name="dia_semana"
                        label="Tipo"
                        optionDefault="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                />

                <Select
                        name="servico"
                        label="Serviço"
                        optionDefault="Tipos de serviços"
                        options={[
                            { value: '1', label: 'Beleza' },
                            { value: '2', label: 'Alimentação' },
                            { value: '3', label: 'Fitness' },
                            { value: '4', label: 'Móveis' },
                            { value: '5', label: 'Aluguéis' },
                            { value: '6', label: 'Eletricista' },
                            { value: '7', label: 'Mecânico' },
                            { value: '8', label: 'Programador' },
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