import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('tb_horario_servico', table =>{
            table.increments('id_horario_servico').primary()
            table.integer('dia_semana').notNullable()
            table.integer('horario_inicio').notNullable()
            table.integer('horario_fim').notNullable()
            table.integer('fk_id_servico').notNullable()
            table.foreign('fk_id_servico').references('tb_servico.id_servico')
                                               .onDelete('CASCADE')
                                               .onUpdate('CASCADE'); 


    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_horario_servico')
}
