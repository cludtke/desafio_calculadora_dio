# 🧮 Calculadora em React

Projeto desenvolvido como desafio prático da trilha de **React** da [DIO](https://www.dio.me/). O objetivo foi replicar e evoluir a calculadora apresentada em aula, colocando em prática conceitos como componentização, estado com `useState` e estilização com Styled Components.

## ✨ Funcionalidades

- ➕ Soma, ➖ subtração, ✖️ multiplicação e ➗ divisão
- **%** Porcentagem (divide o número atual por 100)
- **,** Números decimais, exibidos com vírgula no padrão brasileiro
- **=** Resultado da operação
- **C** Limpa tudo e recomeça
- Contas encadeadas: ao digitar `2 + 3 -`, a calculadora já resolve `2 + 3` antes de seguir
- Tratamento de divisão por zero, que exibe `Erro`

## 🚀 Melhorias em relação ao projeto original

- Uma única função `handleOperation` para todas as operações, no lugar de uma função para cada botão
- Uma função `calculate` centraliza as contas com `switch`, o que facilita adicionar novas operações
- Uso de `null` para indicar que ainda não há primeiro número, o que evita erros quando o primeiro número é `0`
- Bloqueio de vírgulas duplicadas no mesmo número
- Comparações estritas (`===` / `!==`)

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Styled Components](https://styled-components.com/)
- JavaScript (ES6+)

## 📁 Estrutura

```
src/
├── components/
│   ├── Button/      # Botão reutilizável da calculadora
│   └── Input/       # Display que mostra o número atual
├── App.js           # Lógica da calculadora
├── style.js         # Estilos do layout principal
└── index.js
```

## ▶️ Como rodar o projeto

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/cludtke/desafio_calculadora_dio.git

# Entre na pasta
cd desafio_calculadora_dio

# Instale as dependências
npm install

# Rode o projeto
npm start
```

Depois é só acessar `http://localhost:3000` no navegador.

## 📚 Referência

Projeto baseado no repositório oficial do desafio:
[digitalinnovationone/trilha-react-desafio01-calculadora](https://github.com/digitalinnovationone/trilha-react-desafio01-calculadora)

## 👩‍💻 Autoria

Desenvolvido por **Cristchie** como parte da trilha de React da DIO.

[![GitHub](https://img.shields.io/badge/GitHub-cludtke-181717?style=flat&logo=github)](https://github.com/cludtke)
