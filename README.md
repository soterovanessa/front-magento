


# Projeto de Testes Automatizados de E-commerce com Cypress
Este projeto de testes automatizados foi desenvolvido para um e-commerce, utilizando o framework Cypress para automação de testes end-to-end. Para a geração de dados falsos, foi empregada a biblioteca Chance.js.


## Descrição
Este projeto tem como objetivo garantir a qualidade de um sistema de e-commerce através da automação dos principais fluxos de uso. Os testes foram organizados de maneira sequencial para assegurar que cada etapa seja validada corretamente, seguindo a ordem: Cadastro do Usuário, Login, e Adição de Produto ao Carrinho.

## Estrutura dos Testes
**Cadastro de Usuário:**  Testa o processo de criação de um novo usuário com dados fixos e outros gerados dinamicamente usando Chance.js.
**Login:** Verifica a autenticação de um usuário registrado.
**Adicionar Produto ao Carrinho:** Avalia a funcionalidade de adição de produtos ao carrinho de compras.


## Tecnologias Utilizadas
*Cypress:* Framework para automação de testes end-to-end.
*Chance.js:* Biblioteca para geração de dados falsos.
*Node.js:* Ambiente de execução JavaScript necessário para o Cypress.


## Configuração e Execução dos Testes
Para configurar e executar os testes, siga as etapas abaixo:

### Clone o repositório para o seu ambiente local:

git clone https://github.com/soterovanessa/front-magento.git

### Navegue até a pasta raiz do projeto no terminal:
cd seu-repositorio

### Instale as dependências listadas no arquivo package.json:
npm install

## Execute os testes de diferentes maneiras:

### Para executar todos os testes no terminal:
npm test

### Para executar os testes no navegador:
npx cypress open


## Após abrir o Cypress, você pode escolher os testes individuais para execução, seguindo a ordem recomendada:

1. Cadastro de Usuário
2. Login
3. Adicionar Produto ao Carrinho
