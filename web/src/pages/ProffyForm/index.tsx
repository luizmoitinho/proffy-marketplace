import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Formulario/Input/';
import Select from '../../components/Formulario/Select/';
import TextArea from '../../components/Formulario/TextArea/';

import warningIco from '../../assets/images/icons/warning.svg';

import './style.css';



function ProffyForm() {
    const [horariosServicos, setHorarioServico] = useState(
        [
            {dia_semana: 0, horario_inicio: '', horario_fim :'' },
        ]
    );

    function novoHorariosServico(){
        setHorarioServico([
            ...horariosServicos,
            {dia_semana: 0, horario_inicio: '', horario_fim :'' },
      
        ]);
    }

    return (
        <div id="page-proffy-form" className="container">
            <PageHeader
                title="Ache o prossional perfeito para o seu serviço."
                description="O primeiro passso é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Dados pessoais</legend>
                    <Input
                        name="img_usuario"
                        label="Foto de perfil"
                        placeholder="https://url"
                    />
                    <Input
                        name="nome_usuario"
                        label="Nome completo"
                    />
                    <Input
                        name="email_usuario"
                        label="E-mail"
                    />
                    <Input
                        name="CPF"
                        label="CPF"
                    />
                    <Input
                        name="tel_usuario"
                        label="WhatsApp"
                    />
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>
                    <div className="column-grid column-grid-1-3 ">
                        <Select
                            name="UF"
                            label="UF"
                            optionDefault="UF"
                            options={[
                                { value: '1', label: 'AL' },
                                { value: '2', label: 'BA' },
                                { value: '3', label: 'SE' },
                                { value: '4', label: 'PB' },
                                { value: '5', label: 'CE' },
                            ]}
                        />
                        <Input
                            name="cidade"
                            label="Cidade"
                            type="address"
                            placeholder="Nome da cidade"
                        />
                    </div>

                    <Input
                        name="bairro"
                        label="Bairro"
                        placeholder="Nome do bairro"
                    />
                    <Input
                        name="rua"
                        label="Rua/Avenida"
                        placeholder="Nome da rua/avenida"
                    />
                    <div className="column-grid column-grid-2-3">
                        <Input
                            name="numero"
                            label="Número da sua residência"
                            type="number"
                            placeholder="Número "
                        />
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Sobre o serviço</legend>
                    <Input
                        name="img_servico"
                        label="Foto de capa"
                        placeholder="https://url"
                    />
                    <Input
                        name="Nome"
                        label="Nome"
                    />
                    <Select
                        name="fk_id_area"
                        label="Tipo"
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

                    <TextArea
                        name="desc_servico"
                        label="Descrição"

                    />
                    <Input
                        name="valor_servico"
                        label="Preço: R$"
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={novoHorariosServico} >
                            + Novo horário
                        </button>
                    </legend>
                   {
                    horariosServicos.map(horario => {
                        return(
                            <div key={horario.dia_semana} className="column-grid column-grid-2-1-1">
                                <Select
                                    name="dia_semana"
                                    label="Dia da semanna"
                                    optionDefault="Seleciona um dia"
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
                                <Input type="time" name="horario_inicio" label="Das" />
                                <Input type="time" name="horario_fim" label="Até" />
                            </div>  
                        );
                    })
                   }
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIco} alt="aviso importante" />
                        <span>
                            Importante!<br />
                           Preencha todos os dados.
                       </span>
                    </p>
                    <button>
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default ProffyForm;