import React from 'react';
import '../style.css'


interface SelectProps{
    name:string;
    label:string;
}

const Select: React.FC<SelectProps> = ({name,label}) =>{
    return(
        <div className="input-block">
            <label htmlFor="time">{label}</label>
            <select name={name}>
                <option value="1">Beleza</option>
                <option value="2">Alimentação</option>
                <option value="3">Fitness</option>
                <option value="4">Móveis</option>
                <option value="5">Aluguéis</option>
                <option value="6">Eletricista</option>
                <option value="7">Mecânico </option>
                <option value="8">Programador</option>
            </select>
        </div>
    );
}

export default Select;
