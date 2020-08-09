import React, {InputHTMLAttributes} from 'react';
import '../style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name:string;
    label: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({name,label,placeholder, ...rest})=>{
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} placeholder={placeholder} />
        </div>
    );
}

export default Input
