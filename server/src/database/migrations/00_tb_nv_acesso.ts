import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_nv_acesso', table => {
            table.increments('id_nv_acesso').primary();
            table.string('nm_nv_acesso',255).notNullable();
        }).then(function(){
            return knex('tb_nv_acesso').insert([
                {nm_nv_acesso:"Administrador"},
                {nm_nv_acesso:"Profissional"},
                {nm_nv_acesso:"Usuário"},
            ])
        });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_nv_acesso')
}
