import Knex from 'knex';

export async function up(knex: Knex){

    return knex.schema.createTable('tb_usuario', table => {
        table.increments('id_usuario').primary();
        table.string('nm_usuario',255).notNullable();
        table.string('img_usuario',255).notNullable();
        table.string('cpf_usuario',14).unique().notNullable();
        table.string('email_usuario',45).unique().notNullable();
        table.string('tel_usuario',14).unique().notNullable();
        table.text('bio_usuario');
        table.string('login_usuario',50).unique();
        table.string('senha_usuario',255);

        table.integer('fk_id_nv_acesso').notNullable();

        table.foreign('fk_id_nv_acesso').references('tb_nv_acesso.id_acesso');
        
    });

}

export async function down(knex: Knex){
    return knex.schema.dropTable('tb_usuario')
}
