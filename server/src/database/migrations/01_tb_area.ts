import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('tb_area', table => {
        table.increments('id_area').primary();
        table.string('nm_area',255).notNullable();
        // table.string('desc_area',255).notNullable();
    }).then(function(){
        return knex('tb_area').insert([
            {nm_area:'Beleza'},
            {nm_area:'Alimentação'},
            {nm_area:'Fitness'},
            {nm_area:'Móveis'},
            {nm_area:'Alguéis'},
            {nm_area:'Eletrcista'},
            {nm_area:'Encanador'},
            {nm_area:'Mecânico'},
            {nm_area:'Programador'},
        ])
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_area')
}
