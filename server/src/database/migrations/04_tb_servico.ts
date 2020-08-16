import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_servico', table => {
        table.increments('id_servico').primary();
        table.string('nm_servico',155).notNullable();
        table.text('desc_servico').notNullable();
        table.decimal('valor_servico').notNullable();

        table.integer('fk_id_profissional').notNullable();
        table.integer('fk_id_area').notNullable();
        
        table.foreign('fk_id_profissional').references('tb_usuario.id_usuario')
                                           .onDelete('CASCADE')
                                           .onUpdate('CASCADE')
                                           
        table.foreign('fk_id_area').references('tb_area.id_area')
    
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_servico')
}
