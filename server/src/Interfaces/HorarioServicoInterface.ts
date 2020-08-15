interface HorarioServicoInterface{
    id_horario_servico : number;
    dia_semana:number;
    horario_inicio: string;
    horario_fim: string;
    fk_id_servico:number;
    
}

export default HorarioServicoInterface;