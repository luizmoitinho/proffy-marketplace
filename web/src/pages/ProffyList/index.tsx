import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';


import './style.css';
import ProffyItem, {Proffy} from '../../components/ProffyItem';
import Input from '../../components/Formulario/Input';
import Select from '../../components/Formulario/Select';
import api from '../../services/api';


function ProffyList() {

    const [proffys, setProffys] = useState([]);
    const [dia_semana, setDiaSemana] = useState('');
    const [nome, setNome] = useState('');
    const [servico , setServico] = useState('');

   async function searchPorffys( e : FormEvent){
        e.preventDefault();
        const response = await api.get('/users',{
            params:{
                dia_semana,
                nome,
                servico
            }
        });
        console.log(response.data)
        setProffys(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchPorffys}>
                    <Input 
                        name="profissional" 
                        label="Profissional"
                        value={nome}
                        onChange = {e => { setNome(e.target.value) }}
                        placeholder="ex: Luiz Moitinho "
                    />

                <Select
                        name="dia_semana"
                        label="Tipo"
                        optionDefault="Dia da semana"
                        value={dia_semana}
                        onChange = {e => { setDiaSemana(e.target.value) }}
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
                        value={servico}
                        onChange = {e => { setServico(e.target.value) }}
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
                <button type="submit">
                        Procurar
                </button>

                </form>
            </PageHeader>
            <main>
                {proffys.map( (proffy: Proffy) => {
                        return  <ProffyItem key={proffy.id_usuario} proffy={proffy}/> ;
                    })
                }
               
            </main>
        </div>
    );
}

export default ProffyList;