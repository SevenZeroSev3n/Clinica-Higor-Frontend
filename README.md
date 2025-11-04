# Clinica Odontológica Dr. Higor - FRONTEND

Este repositório contém o código-fonte da interface de usuário (UI) da Clínica Odontológica Dr. Higor. O projeto foi construído sobre uma base React moderna, utilizando Tailwind CSS para uma estilização eficiente e responsiva.

## Arquitetura Técnica

* **Framework:** React (Vite)
* **Estilização:** Tailwind CSS (Utilitários)
* **Comunicação API:** Axios
* **Estratégia de Rotas:** Custom Router (Client-side rendering)

## Guia de Inicialização Local

Para executar o Front-end em seu ambiente local, siga as instruções abaixo. Certifique-se de que o servidor Backend (Clinica-Higor-Backend) esteja ativo na porta 5000.

1.  **Instalação de Dependências:**
    ```bash
    npm install
    ```

2.  **Início do Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo será iniciado em http://localhost:5173 (ou porta similar).

## Deploy e CI/CD

O deploy deste Front-end está configurado para ocorrer de forma contínua (CI/CD) a partir da branch main após a homologação bem-sucedida no ambiente de staging.