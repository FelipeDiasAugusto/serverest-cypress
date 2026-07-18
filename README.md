# ServeRest Cypress Automation

## Sobre o projeto

Projeto ServeRest, criado para avaliação técnica.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome
- GitHub Actions

## Cobertura de testes

###WEB

Login
  Deve realizar login com usuário administrador
  Deve realizar login com usuário não administrador
  Não deve realizar login com senha incorreta
  Não deve realizar login com e-mail inexistente
  Deve validar os campos obrigatórios

Cadastro de usuários
  Deve cadastrar um usuário não administrador
  Deve cadastrar um usuário administrador
  Não deve cadastrar um e-mail já existente
  Deve validar os campos obrigatórios
  Não deve cadastrar um e-mail em formato inválido


Produto
  Deve cadastrar um novo produto com sucesso
  Deve cadastrar e excluir um produto com sucesso

###API

Usuários
  Deve criar um usuário comum com sucesso
  Deve criar um usuário administrador com sucesso
  Não deve criar um usuário com e-mail duplicado
  Não deve criar um usuário sem os campos obrigatórios
  Deve excluir um usuário comum com sucesso
  Deve excluir um usuário administrador com sucesso
  Deve alterar somente a senha do usuário com sucesso
  Deve alterar somente o nome do usuário com sucesso
  Deve alterar somente o e-mail do usuário com sucesso
  Deve alterar somente o perfil de usuário comum para administrador
  Deve alterar somente o perfil de administrador para usuário comum

## Arquitetura do projeto

- Page Objects
- Services
- Factories
- Selectors
- Routes
- Hooks e limpeza de dados

## Estrutura de diretórios
Árvore simplificada e fiel ao projeto.

## Pré-requisitos
Versões necessárias de Node.js e npm.

## Execução dos Testes
npm run cy:open
npm run test:web
npm run test:api
npm run test:report

## Instalação

```bash
git clone ...
cd ...
npm ci

```markdown
English | [Português](README.pt-BR.md)
