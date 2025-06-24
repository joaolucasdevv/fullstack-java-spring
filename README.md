# Carápio digital
## Objetivo:
Desenvolver uma aplicação **fullstack**, onde nossa **API REST** serve o frontend com os
dados armazenados no banco, como também recebe novos dados do frontend.
### Ferramentas utilizadas:
#### Backend:
* **Java**
* **Spring com Spring Initializr**
  * **Spring Boot DevTolls**: utilizado para realizarmos o reloading automático da nossa aplicação.
  * **Spring Web**: utilizado para construir nossa aplicação web.
  * **Lombok**: biblioteca que serve para, através de anotações, reduzir a necessidade de escrever código boilerplate, 
                como getters, setters e constructors.
  * **Spring Data JPA**:  utilizado para fazer a persistência e manuzeio de dados SQL com Java Spring
  * **PostgreSQL Driver**: utilizado para conseguirmos conectar a nossa aplicação com o banco de dados PostgreSQL.
* **PostgreSQL**
* **Postman**
#### Frontend:
* **React + Typescript**
  * **Tanstack Query**: biblioteca utilizada para gerenciar o estado assíncrono de dados 
                        no React, ou seja: buscar dados da API, cache automático, revalidação
                        automática e controle de carregamento.
  * **Axios**: biblioteca utilizada para fazer requisições HTTP (GET, POST, PUT, DELETE) de forma simples.

### Estrutura das pastas no backend:
![estrutura das pastas](/img/estruturapastasback.png)
Veja que para criarmos nossos DTO's utilizamos Record em vez de Classes, o Record é imutável por padrão
ele gera automáticamente os getters, equals, hashCodes, constructors, logo, fica com menos código e mais limpo
ótimo para objetos que servem para carregar dados como o DTO.

Eu desenvolvi essa aplicação somente com os métodos de **GET** e **POST**, pois, a intenção era justamente realizar
a integração entre o backend e o frontend.

### Método GET:
![GET](/img/sempizza.png)
Aqui já podemos obervar a aplicação WEB rodando e sendo servida pela nossa API, veja que o método **GET**
é realizado assim que carregamos nossa aplicação.

### Método POST:
No nosso frontend colocamos um botão "novo" no canto inferior direito, clicando nele abrimos este formulário
onde podemos preencher os dados de uma nova comida para ser inserida no cardápio com o método POST
![POST](/img/metodoPOST.png)
Veja que podemos inserir o "title" que será o nome da comida, o "price" que é o preço e a "img" que é onde
colocaremos um link de alguma imagem para ser inserida no banco de dados juntamente com os outros dados
![pizza inserida](/img/compizza.png)
Método POST realizado com sucesso e inserido no nosso backend, veja que assim que inserimos a nossa aplicação
já mostra esse novo dado, utilizamos a biblioteca Tanstack React justamente para isso: assim que inserimos um
novo dado, ela invalida o GET anterior e já realiza um novo e atualiza a página em tempo real, mostrando os
dados atualizados.

### Olhando mais a fundo através do Postman:
