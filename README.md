# Carápio digital
## Objetivo:
Desenvolver uma API REST utilizando arquitetura em camadas para servir o frontend com os
dados armazenados no banco, como também receber novos dados do frontend.
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
#### Frontend:
* **React + Typescript**
  * **Tanstack Query**: biblioteca utilizada para gerenciar o estado assíncrono de dados 
                        no React, ou seja: buscar dados da API, cache automático, revalidação
                        automática e controle de carregamento.
  * **Axios**: biblioteca utilizada para fazer requisições HTTP (GET, POST, PUT, DELETE) de forma simples.

