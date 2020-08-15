import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Formulario/Input/';
import Select from '../../components/Formulario/Select/';
import TextArea from '../../components/Formulario/TextArea/';

import warningIco from '../../assets/images/icons/warning.svg';

import './style.css';



function ProffyForm() {

    const[img_usuario,setImgUsuario]= useState('');
    const[nm_usuario,setNomeUsuario]= useState('');
    const[email_usuario,setEmailUsuario]= useState('');
    const[cpf_usuario,setCPFUsuario]= useState('');
    const[tel_usuario,setTelUsuario]= useState('');

    const[UF,setUF]= useState('');
    const[cidade,setCidade]= useState('');
    const[bairro,setBairro]= useState('');
    const[rua,setRua]= useState('');
    const[numero,setNumero]= useState('');

    const[img_servico,setImgServico]= useState('');
    const[nm_servico,setNmServico]= useState('');
    const[fk_id_area,setFkIdarea]= useState('');
    const[desc_servico,setDescServico]= useState('');
    const[valor_servico,setValorServico]= useState('');
    
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

    function setValorItem(indice: number, campo:string, valor:string){
        const horariosServicosAtualizado =  horariosServicos.map( (horario, posicao)=>{
            if(posicao === indice)
                return {...horariosServicos, [campo]:valor}
           
            return horariosServicos;
        })
        console.log(horariosServicosAtualizado)

    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        console.table({
            img_usuario,
            nm_usuario,
            email_usuario,
            cpf_usuario,
            tel_usuario,
        })
        console.table({
            UF,
            cidade,
            bairro,
            rua,
            numero,
        })

    }

    return (
        <div id="page-proffy-form" className="container">
            <PageHeader
                title="Ache o prossional perfeito para o seu serviço."
                description="O primeiro passso é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Dados pessoais</legend>
                        <Input
                            name="img_usuario"
                            label="Foto de perfil"
                            placeholder="https://url"
                            value={img_usuario}
                            onChange={ (e)=> {setImgUsuario(e.target.value) }}
                        />
                        <Input
                            name="nome_usuario"
                            label="Nome completo"
                            value={nm_usuario}
                            onChange={ (e)=> {setNomeUsuario(e.target.value) }}
                        />
                        <Input
                            name="email_usuario"
                            label="E-mail"
                            value={email_usuario}
                            onChange={ (e)=> {setEmailUsuario(e.target.value) }}
                        />
                        <Input
                            name="cpf_usuario"
                            label="CPF"
                            value={cpf_usuario}
                            onChange={ (e)=> {setCPFUsuario(e.target.value) }}
                        />
                        <Input
                            name="tel_usuario"
                            label="WhatsApp"
                            value={tel_usuario}
                            onChange={ (e)=> {setTelUsuario(e.target.value) }}
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
                                value={UF}
                                onChange={ (e)=> {setUF(e.target.value) }}
                                
                            />
                            <Input
                                name="cidade"
                                label="Cidade"
                                type="address"
                                placeholder="Nome da cidade"
                                value={cidade}
                                onChange={ (e)=> {setCidade(e.target.value) }}
                                
                            />
                        </div>

                        <Input
                            name="bairro"
                            label="Bairro"
                            placeholder="Nome do bairro"
                            value={bairro}
                            onChange={ (e)=> {setBairro(e.target.value) }}
                                
                        />
                        <Input
                            name="rua"
                            label="Rua/Avenida"
                            placeholder="Nome da rua/avenida"
                            value={rua}
                            onChange={ (e)=> {setRua(e.target.value) }}
                                
                        />
                        <div className="column-grid column-grid-2-3">
                            <Input
                                name="numero"
                                label="Número da sua residência"
                                type="number"
                                placeholder="Número "
                                value={numero}
                                onChange={ (e)=> {setNumero(e.target.value) }}
                            />
                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>Sobre o serviço</legend>
                        <Input
                            name="img_servico"
                            label="Foto de capa"
                            placeholder="https://url"
                            value={img_servico}
                            onChange={ (e)=> {setImgServico(e.target.value) }}
                            
                        />
                        <Input
                            name="nm_servico"
                            label="Nome"
                            value={nm_servico}
                            onChange={ (e)=> {setNmServico(e.target.value) }}
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
                            value={fk_id_area}
                            onChange={ (e)=> {setFkIdarea(e.target.value) }}
                            
                        />

                        <TextArea
                            name="desc_servico"
                            label="Descrição"
                            value={desc_servico}
                            onChange={ (e)=> {setDescServico(e.target.value) }}
                            

                        />
                        <Input
                            name="valor_servico"
                            label="Preço: R$"
                            value={valor_servico}
                            onChange={ (e)=> {setValorServico(e.target.value) }}
                            
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
                        horariosServicos.map( (horario, indice) => {
                            return(
                                <div key={horario.dia_semana} className="column-grid column-grid-2-1-1">
                                    <Select
                                        name="dia_semana"
                                        label="Dia da semanna"
                                        optionDefault="Seleciona um dia"
                                        value={horario.dia_semana}
                                        onChange={e => setValorItem(indice,'dia_semana',e.target.value)}
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
                                    <Input 
                                        type="time" 
                                        name="horario_inicio" label="Das" 
                                        value={horario.horario_inicio}
                                        onChange={e => setValorItem(indice,'horario_inicio',e.target.value)}

                                                                            
                                    />
                                    <Input 
                                        type="time" 
                                        name="horario_fim" 
                                        label="Até" 
                                        value={horario.horario_fim}
                                        onChange={e => setValorItem(indice,'horario_fim',e.target.value)}

                                    />
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
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default ProffyForm;