# Simulador de investimentos

Esta é a solução do desafio front-end da EQI Investimentos.

O objetivo é construir um front-end para um Simulador de Investimentos, que consumirá os dados de uma API fake, seguindo as especificações que estão no [repositório do desafio](https://github.com/eqi-investimentos/desafio-frontend).

# Como executar

Para executar a aplicação será necessário baixar dois repositórios, o da API e o da aplicação.
## Iniciando a API fake
 A API fake está disponível neste [link](https://github.com/eqi-investimentos/desafio-fake-api)<br> Baixe o repositório, instale as dependencias e inicie a API seguindo as instruções que estão no repositório.

## Executando a aplicação
 Baixe este repositório e, após ter iniciado a API, execute o arquivo index.

# Como a aplicação funciona

O usuário irá selecionar o tipo de rendimento e indexação e preencher o formulário. <br>Ao clicar em "Simular" será feita uma validação dos tipos de dados que estão nos campos, caso esteja tudo OK, será feito um GET na API fake, filtrando pelo tipo de rendimento e indexação que estão selecionados (os dados preenchidos nos campos de texto não são considerados).<br>
Os dados retornados serão exibidos em um dashboard lateral.

# Construção

A aplicação foi feita utilizando HTML e Javascript puro, na estilização utilizei o preprocessador SASS para dar mais agilidade e melhorar a legibilidade no código. Na parte do Javascript fiz o máximo para escrever um código limpo, legivel e testavel. O código é todo comentado, as funções e variaveis tem nomes sugestivos e a cada função atribui uma responsabilidade, facilitando para futuros testes unitários e reaproveitamento de código.

# Autor

- Perfil Github - [Mauricio Tejada](https://github.com/mauricio-tejada)
- Perfil Frontend Mentor - [Mauricio Fernandes](https://www.frontendmentor.io/profile/mauricio-tejada)
- Linkedin - [Mauricio Fernandes Tejada](https://www.linkedin.com/in/mauricio-tfernandes/)


