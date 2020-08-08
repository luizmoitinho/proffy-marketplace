import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_nv_acesso', table => {
            table.increments('id_nv_acesso').primary();
            table.string('nm_nv_acesso',255).notNullable();
        });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_nv_acesso')
}
