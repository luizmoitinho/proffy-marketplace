import React, {SelectHTMLAttributes} from 'react';
import '../style.css'


interface SelectProps extends  SelectHTMLAttributes<HTMLSelectElement>{
    name:string;
    label:string;
    options?:Array<{
        value:string,
        label:string
    }>
}

const Select: React.FC<SelectProps> = ({name,label,options,...rest}) =>{
    return(
        <div className="input-block">
            <label htmlFor="time">{label}</label>
            <select name={name} {...rest}>
                <option value="" disabled selected hidden>Selecione um tipo de serviço</option>
                {
                    options?.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                    })
                }
            </select>
        </div>
    );
}

export default Select;
