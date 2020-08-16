import React, {SelectHTMLAttributes} from 'react';
import '../style.css'


interface SelectProps extends  SelectHTMLAttributes<HTMLSelectElement>{
    name:string;
    label:string;
    optionDefault?:string;
    options?:Array<{
        value:string,
        label:string
    }>
}

const Select: React.FC<SelectProps> = ({name, label, options, optionDefault, ...rest}) =>{
    return(
        <div className="input-block select">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option  value="" disabled hidden>{optionDefault}</option>
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
