import React from "react";
import './style.css';
import warningIcon from '../../assets/images/icons/warning.svg';

interface PrroffyEmptyProps{
    isEmpty:boolean
}

const ProffyEmpty:React.FC<PrroffyEmptyProps> = (props) => {
  if(props.isEmpty){  
    return (
        <article id="msg-empty">
            <p>
                <img src={warningIcon} alt="aviso importante" />
                <span>
                    Nenhum proffy foi localizado.
                </span>
            </p>
        </article>
    );
  }
  return null

};

export default ProffyEmpty;