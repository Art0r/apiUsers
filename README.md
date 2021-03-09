# apiUsers
API em typescript com express e mongoDB

## Endpoints
O que cada rota irá retornar

### GET
#### /user
Retorna um array contendo objetos referentes aos usuários. Caso não haja nenhum usuário retornará um erro.

#### /user/:id
Retorna um objeto de um usuário específico. Caso o Id não seja informado retornará um erro.

#### /user/email/:email
Retorna um objeto de um usuário específico. Caso o Email não seja informado retornará um erro.

### POST
#### /user
Cria um usuário com nome, email e idade, retorna uma mensagem de sucesso e o objeto criado. A ausência de algum dos itens retornará um erro, emails iguais também retornarão erro. 

### PUT 
#### /user/:id
Modifica um usuário, não enviar ou deixar em branco atributos do objeto fará com que o mesmo atributo não seja modificado. Caso o Id não seja informado retornará um erro.

### DELETE 
#### /user/:id
Deleta um usuário. Caso o Id não seja informado retornará um erro, caso o id não corresponda a nenhum usuário também retornará um erro.