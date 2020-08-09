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