import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_avaliacao', table => {
        table.increments('id_avaliacao').primary();

        table.integer('fk_id_usuario').notNullable();
        table.integer('fk_id_profissional').notNullable();
        table.integer('fk_id_servico').notNullable();
        table.integer('num_estrela').notNullable();
        table.string('desc_avaliacao',400).notNullable()

        table.foreign('fk_id_usuario').references('tb_usuario.id_usuario')
                                      .onDelete('CASCADE')
                                      .onUpdate('CASCADE')

        table.foreign('fk_id_profissional').references('tb_usuario.id_usuario')
                                           .onDelete('CASCADE')
                                           .onUpdate('CASCADE')
                                           
        table.foreign('fk_id_servico').references('tb_servico.id_servico')
                                      .onDelete('CASCADE')
                                      .onUpdate('CASCADE')
    
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_avaliacao')
}
