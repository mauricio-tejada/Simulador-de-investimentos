🚧 EM CONSTRUÇÃO 🚧

# Simulador de investimentos

Esta é a solução do desafio front-end da EQI Investimentos.

O objetivo é construir um front-end para um Simulador de Investimentos seguindo as especificações que estão no [repositório do desafio](https://github.com/eqi-investimentos/desafio-frontend).

# Como executar

## Iniciando a API fake
* A API fake está disponível neste [link](https://github.com/eqi-investimentos/desafio-fake-api), baixe e inicie a API seguindo as instruções que estão no repositório.

## Executando a aplicação
* Baixe este repositório e, após ter iniciado a API, execute o arquivo index.

# Como a aplicação funciona

O usuário irá selecionar o tipo de rendimento e indexação e preencher o formulário. <br>Ao clicar em "Simular" será feita uma validação dos tipos de dados que estão nos campos, caso esteja tudo OK, será feito um GET na API fake, filtrando pelo tipo de rendimento e indexação que estão selecionados (os dados preenchidos nos campos de texto não são considerados).<br>
Os dados retornados serão exibidos em um dashboard lateral.





