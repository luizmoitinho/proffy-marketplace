## Funcionalidades
---
## Observações
1. Para ver os serviços não há a necessidade de estar autenticado.
2. Para cadastrar um serviço e torná-lo disponível, e preciso ser cadastrado.

## Conexoẽs
1. Método para pegar o total de conexões/cadastros realizados na plataforma

## Rotas
1. CRUD Usuário
2. CRUD Serviço
> - Filtrar por: Nome profissional, Área e preço

## Casos de uso
1. Autenticar
2. Meus serviços
3. 


## Entidades

1. Nivel Acesso  (ok)
 - id_nv_acesso
 - nm_nv_acesso 
 > - 1, Root
 > - 2, Profissional
 > - 3, Usuário

2. Àrea (ok)
 - id_área 
 - nm_área 
 - desc_area

2. Endereco (ok)
 - id_endereco
 - UF
 - cidade
 - bairro
 - rua
 - numero
 - fk_id_usuario

3. Usuário
 - id_usuario
 - img_usuario
 - nm_usuario
 - cpf_usuario
 - email_usuario
 - tel_usuario
 - bio_usuario
 - login_usuario
 - senha_usuario
 - fk_id_nv_acesso 
 - fk_id_endereco

4. Servico (ok)
 - id_servico
 - img_servico
 - nm_servico
 - desc_servico
 - valor_servico

 - fk_id_profissional
 - fk_id_area

5. Favoritos
 - id_favorito
 - fk_id_usuario
 - fk_id_profissional 
 - fk_id_servico 
 
 - status

6. avaliacao
 - id_avaliacao
 - fk_id_usuario
 - fk_id_profissional
 - fk_id_servico

 - num_strela
 - desc_avaliacao


