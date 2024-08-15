# Desafio Conseiller-Wegga

Este projeto é a solução para o desafio proposto pela empresa Conseiller-Wegga. O desafio envolve a criação de uma aplicação completa com backend e frontend, utilizando tecnologias modernas.
De acordo com a proposta do desafio apos o login bem sucedido vai ser direcionado para uma tela home onde a mensagem vai ser de acordo com o genero desse usuario cadastrado. 

![Exemplo de Imagem](https://i.ibb.co/RQ4Yt1J/Captura-de-Tela-2024-08-15-s-14-00-30.png)


## Estrutura do Projeto

O projeto é dividido em duas partes principais:
- **Backend:** Desenvolvido com Java e Spring Boot.
- **Frontend:** Desenvolvido com Vite.

## Tecnologias Utilizadas

- **Backend:**
  - Java
  - Spring Boot
  - IDE: VSCode

- **Frontend:**
  - Vite
  - IDE: VSCode

## Requisitos

Antes de iniciar o projeto, certifique-se de ter as seguintes ferramentas instaladas:
- JDK 11 ou superior
- Maven (para o backend)
- Node.js e npm (para o frontend)

## Como Executar o Backend

1. Navegue até o diretório do backend:
   ```bash
   cd path/to/backend
   ```
2. Compile o projeto 
   ```bash
    mvn spring-boot:run
    ```
- Isso iniciará o servidor Spring Boot na porta padrão (geralmente 8080).

## Como Executar no frontend

1. Navegue até o diretório do frontend:
   ```bash
    cd /frontend
    ```
2. Instale as dependências 
```bash
  yarn install
```
3. Inicie o servidor de desenvolvimento:
```bash
yarn dev
```

Isso iniciará o servidor Vite e abrirá a aplicação no seu navegador padrão.

## Endpoints da API

O backend expõe os seguintes endpoints principais:

- POST /auth/login: Faz o login recebendo o username e o password do usuario.
- POST /auth/register: Cria um novo usuario recebendo o username, password e o genre.


















