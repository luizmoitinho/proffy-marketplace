import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_conexao', table => {
        table.increments('id_conexao').primary();

        table.integer('fk_id_profissional').notNullable();
        table.timestamp('dt_conexao').defaultTo(
                                       knex.raw('CURRENT_TIMESTAMP')
                                      )
                                     .notNullable();

        table.foreign('fk_id_profissional').references('tb_usuario.id_usuario')
                                           .onDelete('CASCADE')
                                           .onUpdate('CASCADE'); 
        
    
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_conexao')
}
