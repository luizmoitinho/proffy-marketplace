import React from 'react';

import PageHeader from '../../components/PageHeader';
import  './style.css';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader  title="Estes são os proffys disponíveis.">
                <form id="search-teachers">  
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" placeholder=""/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day" placeholder=""/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" placeholder=""/>
                    </div>
                </form>

            </PageHeader>
        </div>
    );
}

export default TeacherList;