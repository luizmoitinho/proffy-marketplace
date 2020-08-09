import React from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Formulario/Input/';
import Select from '../../components/Formulario/Select/';
import TextArea from '../../components/Formulario/TextArea/';

import warningIco from '../../assets/images/icons/warning.svg';

import './style.css';

function ProffyForm() {
    return (
        <div id="page-proffy-form" className="container">
            <PageHeader
                title="Ache o prossional perfeito para o seu serviço."
                description="O primeiro passso é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input
                        name="img_usuario"
                        label="Foto de perfil"
                        placeholder="https://url"
                    />
                    <Input
                        name="Nome"
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
                <footer>
                    <p>
                        <img src={warningIco} alt="aviso importante"/>
                       <span>
                           Importante!<br/>
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