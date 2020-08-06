import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_area', table => {
        table.increments('id_area').primary();
        table.string('nm_área',255).notNullable();
        table.string('desc_área',255).notNullable();
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_area')
}
