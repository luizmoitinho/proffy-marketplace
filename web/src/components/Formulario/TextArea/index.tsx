import React, {TextareaHTMLAttributes} from 'react';
import '../style.css'


interface TextAreaProps  extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name:string;
    label:string;
    placeholder?:string
}

const TextArea: React.FC<TextAreaProps> = ({name,label,placeholder, ...rest}) =>{
    return(
        <div className="input-block">
            <label htmlFor="time">{label}</label>
            <textarea name={name} placeholder={placeholder} { ...rest}>
                
            </textarea>
        </div>  
    );
}

export default TextArea;
