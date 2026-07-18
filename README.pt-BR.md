# 🚀 Automação de Testes - ServeRest

Projeto de automação de testes desenvolvido para demonstrar boas práticas em testes automatizados utilizando **Cypress**, contemplando testes **Web** e **API**, arquitetura escalável, geração de relatórios e integração contínua com **GitHub Actions**.

---

## 📋 Sobre o projeto

O objetivo deste projeto é validar as principais funcionalidades da aplicação **ServeRest**, automatizando fluxos críticos da interface Web e da API REST.

A estrutura foi desenvolvida seguindo princípios de organização, reutilização de código e facilidade de manutenção, simulando um projeto utilizado em ambiente corporativo.

---

## 🛠 Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome Reporter
- GitHub Actions
- Git
- GitHub

---

## 📁 Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   └── web/
│   │
│   ├── fixtures/
│   ├── pages/
│   ├── selectors/
│   ├── services/
│   ├── support/
│   └── utils/
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🌐 Funcionalidades automatizadas

### Web

### Login

- ✅ Login com usuário administrador
- ✅ Login com usuário comum
- ✅ Login com senha inválida
- ✅ Login com e-mail inválido
- ✅ Validação de campos obrigatórios

---

### Cadastro de Usuários

- ✅ Cadastro de usuário comum
- ✅ Cadastro de administrador
- ✅ Validação de e-mail duplicado
- ✅ Validação de campos obrigatórios
- ✅ Validação de e-mail inválido

---

### Produtos

- ✅ Cadastro de produto
- ✅ Exclusão de produto

---

## 🔌 Testes de API

### Usuários

### POST /usuarios

- ✅ Cadastro de usuário comum
- ✅ Cadastro de administrador
- ✅ Validação de e-mail duplicado
- ✅ Validação de campos obrigatórios

---

### GET /usuarios

- ✅ Consulta de usuário por ID
- ✅ Consulta de usuário por e-mail

---

### PUT /usuarios/{id}

- ✅ Alteração de nome
- ✅ Alteração de e-mail
- ✅ Alteração de senha
- ✅ Promoção para administrador
- ✅ Alteração para usuário comum

---

### DELETE /usuarios/{id}

- ✅ Exclusão de usuário comum
- ✅ Exclusão de administrador

---

## ▶️ Executando o projeto

### Clonar o repositório

```bash
git clone https://github.com/FelipeDiasAugusto/serverest-cypress.git

cd serverest-cypress
```

---

### Instalar as dependências

```bash
npm ci
```

---

### Executar todos os testes

```bash
npm test
```

ou

```bash
npm run test:report
```

---

### Executar apenas os testes Web

```bash
npm run test:web
```

---

### Executar apenas os testes de API

```bash
npm run test:api
```

---

### Abrir o Cypress

```bash
npm run cy:open
```

---

## 📊 Relatórios

O projeto utiliza o **Mochawesome Reporter** para geração dos relatórios em HTML.

Após a execução dos testes, os relatórios são gerados automaticamente.

Durante a execução da pipeline no GitHub Actions, o relatório também é disponibilizado como artefato para download.

---

## ⚙️ Integração Contínua (CI)

O projeto possui integração contínua utilizando **GitHub Actions**.

A pipeline realiza automaticamente:

- Instalação das dependências
- Execução dos testes Web e API
- Geração do relatório HTML
- Upload do relatório como artefato
- Upload de screenshots em caso de falha
- Upload de vídeos em caso de falha

---

## 🏗 Arquitetura

O projeto foi organizado utilizando os seguintes padrões:

- Page Objects
- Service Layer
- Factory para geração de dados
- Centralização de rotas
- Centralização de seletores
- Hooks para preparação e limpeza dos testes
- Dados dinâmicos para evitar conflitos
- Reutilização de código
- Estrutura escalável

---

## 📷 Evidências

Durante a execução dos testes são gerados automaticamente:

- Relatório HTML
- Screenshots em caso de falha
- Vídeos em caso de falha

---

## 👨‍💻 Autor

**Felipe Dias**

QA Automation Engineer

- LinkedIn: https://www.linkedin.com/in/felipediasaugusto
- GitHub: https://github.com/FelipeDiasAugusto