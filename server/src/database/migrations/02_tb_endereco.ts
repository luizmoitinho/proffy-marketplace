import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_endereco', table => {
        table.increments('id_endereco').primary();
        table.string('UF',2).notNullable();
        table.string('cidade',200).notNullable();
        table.string('bairro',200).notNullable();
        table.string('rua',200).notNullable();
        table.integer('numero').notNullable();
        table.integer('fk_id_usuario').notNullable();

        table.foreign('fk_id_usuario').references('tb_usuario.id_usuario')
                                      .onDelete('CASCADE')
                                      .onUpdate('CASCADE')
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_endereco')
}
