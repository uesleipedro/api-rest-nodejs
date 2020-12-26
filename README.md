# API Rest para gerenciamento de estoque em Nodejs

API Rest que permite gerenciamento simples de um estoque, possibilitando cadastro, atualização, busca personalizada e exclusão de usuários, produtos e pedidos.
Utiliza-se do banco Mysql para armazenamento das informações.
Os produtos e pedidos só podem ser visualizadas pelo usuário que os cadastraram. Por esse motivo, há um controle de login, sendo possível realizar esse cadastro apenas com um token - JWT - válido.
Para se obter o token, é necessário efetuar o cadastro e login.

## Tecnologias utilizadas

- Nodejs;
- Express;
- Mysql;
- Bcrypt;
- JWT;
- Nodemon;

## Como Utilizar

- Com o Node.js devidamente instalado, execute o seguinte comando na raiz do projeto para que as dependências sejam instaladas:

```shell
npm install
```

- O banco de dados Mysql deve estar instalado e rodando localmente. 

Para rodar a aplicação, basta executar:

```
npm start
```


## Explicação geral de uso

Após o projeto estar rodando, estará disponível na porta 3000. É necessário, primeiramente, efetuar o cadastro do usuário, só então será possível efetuar a autenticação e obter o token.
Em posse do token, é necessário coloca-lo no Header da requisição - como Authorization - para que seja possível efetuar o cadastro e listagem dos produtos e pedidos, como no seguinte exemplo:
```
Authorization Bearer token-fornecido
```

## Rotas

| Rota                   | Requisição | Função                                 | Body                                                                                                                                                                       | Auteticação por Token? |
| ---------------------- | ---- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| /cadastro                 | POST | Cadastro de usuário                           | email(string), senha(string)                                                                                                                                             | Não         |
| /login               | POST  | Efetua o login do usuário          | email(String), senha(String)                                                                                                                                                                        | Sim          |
| /produto | POST  | Cadastra produtor      | produto(String), preço(Float), imagem(Imagem) }                                                                                                                                                                        | Sim          |
| /pedido             | POST  | retorna todosos pedidos cadastrados             | quantidade(numeric) id_produto(numeric), produto(String), preco(Float)                                                                                                                                                                       | Sim          |
