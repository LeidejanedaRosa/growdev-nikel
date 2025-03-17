# 💰 Nikel - Gerenciamento Financeiro Pessoal

Nikel é uma aplicação web para gerenciamento financeiro pessoal. Com ela, você pode organizar suas finanças, controlar entradas e saídas de dinheiro e acompanhar o saldo total de forma simples e intuitiva.

---
  
## 📌 Introdução  
Este projeto foi desenvolvido como parte do processo seletivo do programa **Starter+ | Elas no Front** da [GROWDEV](https://https://www.growdev.com.br/).  

O objetivo é proporcionar uma experiência prática em desenvolvimento web, reforçando conceitos de HTML, CSS e JavaScript.

---

## 🚀 Funcionalidades

### 🔑 Login e Cadastro
- Login com validação de e-mail e senha.
- Opção de permanecer logado utilizando `localStorage` e `sessionStorage`.
- Criação de conta com validação de e-mail e senha.

### 💸 Gerenciamento de Lançamentos
- Adicionar lançamentos financeiros com:
  - Valor
  - Descrição
  - Data
  - Tipo (entrada ou saída)
- Visualizar lista de lançamentos na página de transações.
- Resumo financeiro na página inicial:
  - Entradas recentes.
  - Saídas recentes.
  - Saldo total.

### 💾 Persistência de Dados
- Armazenamento dos dados do usuário (conta e lançamentos) no `localStorage`.

---

## 🏗️ Estrutura do Projeto

```
nikel/
├── public/
│   ├── home.html
│   ├── index.html
│   ├── transactions.html
│   │
│   ├── assets/
│   │   ├── images/      # Pasta para armazenar imagens
│   │
│   ├── css/
│   │   ├── styles.css   # Arquivo de estilos
│   │
│   ├── js/
│   │   ├── home.js         # Lógica da página inicial
│   │   ├── index.js        # Lógica para login e criação de conta
│   │   ├── transactions.js # Gerenciamento de lançamentos financeiros

```

---

## 🛠️ Tecnologias Utilizadas

### 🎨 **Frontend**
- HTML5, CSS3 e JavaScript
- Bootstrap 5 para estilização e componentes responsivos
- Ícones do [Bootstrap Icons](https://icons.getbootstrap.com/)

### 💾 **Armazenamento**
- `localStorage` e `sessionStorage` para persistência de dados no navegador

---

## 🚀 Como Executar o Projeto

1️⃣ Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2️⃣ Acesse o diretório do projeto:
   ```bash
   cd growdev-nikel
   ```

3️⃣ Abra o arquivo `index.html` no navegador:
   - **Linux:**
     ```bash
     xdg-open index.html
     ```
   - **Windows:**
     ```bash
     start index.html
     ```

---

📌 **Desenvolvido por [Leidejane da Rosa](https://github.com/LeidejanedaRosa)**  
🎯 Programa: **Starter+ | Elas no Front - GrowDev**
