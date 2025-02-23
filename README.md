# 🍔 Donald’s - Plataforma de Pedidos Online

O Donald’s é uma plataforma web de pedidos de comida desenvolvida com a abordagem **Mobile-First**, mas totalmente responsiva para desktop. Os usuários podem navegar pelos restaurantes, adicionar produtos ao carrinho e finalizar pedidos de forma intuitiva.

## 🚀 Funcionalidades

- 🏪 **Escolha do Restaurante**: O usuário pode selecionar um restaurante e optar por **comer no local** ou **retirar a comida**.  
- 📂 **Pedidos por Categoria**: Os produtos são organizados por categorias para facilitar a navegação.  
- 🛒 **Carrinho de Compras (CartSheet)**: Interface para visualizar e gerenciar os itens antes da finalização.  
- ✅ **Validação de Pedidos**: Impede entradas inválidas (ex.: não permite pedir -5 hambúrgueres).  
- 📌 **Histórico de Pedidos**: Exibe todos os pedidos feitos pelo usuário autenticado via CPF.  
- 💾 **Integração com Banco de Dados**: Armazena pedidos, produtos e usuários de forma estruturada.  

## 🛠 Tecnologias Utilizadas

- **Next.js** – Framework para renderização no servidor e frontend  
- **Prisma** – ORM para gerenciamento do banco de dados  
- **Context API** – Gerenciamento de estado do carrinho de compras  
- **Zod & useForm** – Validação de formulários e dados  
- **Validação de CPF** – Função personalizada para garantir autenticidade do usuário  
- **TypeScript** – Desenvolvimento com tipagem forte  

## 📂 Estrutura do Banco de Dados

- **Usuários** – Armazena informações dos clientes (identificados pelo CPF)  
- **Restaurantes** – Contém detalhes dos restaurantes cadastrados  
- **Produtos** – Itens do cardápio organizados por categoria  
- **Pedidos** – Registro de pedidos, vinculando o usuário, restaurante e produtos

## 👀 Como posso testar?
= **Link para o Site** - https://donalds-project.vercel.app/fsw-donalds
