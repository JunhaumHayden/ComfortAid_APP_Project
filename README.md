# ConfortAid SPA Project

Bem-vindo ao projeto ConfortAid SPA! Este repositório contém o código-fonte e a documentação para o desenvolvimento do nosso sistema de gerenciamento de SPA.


## Descrição

O ConfortAid SPA é uma aplicação projetada para gerenciar as operações diárias de um SPA, incluindo agendamentos, gerenciamento de clientes, e serviços oferecidos.
O projeto ComfortAid é uma aplicação móvel desenvolvida para fornecer assistência e conforto aos usuários em diversas situações. A aplicação oferece funcionalidades como...

## Funcionalidades

- Agendamento de serviços
- Gerenciamento de clientes
- Listagem de serviços
- Relatórios e análises

## Tecnologias Utilizadas

- Frontend: html,css e javascript
- Backend: java
- Banco de Dados: H2

## Função de Cada Arquivo

- **comfortaid_profissional_show.html**: Arquivo principal da aplicação que inicializa o app e configura as rotas.
- **comfortaid_profissional_env**: Contém as dependências e scripts do projeto.
- **ind0101.html**: Arquivo HTML teste (deveria ter sido o index).
- **/components**: Diretório que contém os componentes reutilizáveis da aplicação.
    - **presentation.html**: Componente de cabeçalho da aplicação.
    - **Footer.js**: Componente de rodapé da aplicação.
- **/assets**: Diretório que contém os componentes reutilizáveis da aplicação e os recursos estáticos como imagens e fontes.
    - **/css**: Arquivos de estilos CSS 
        - **style.css**: Arquivo CSS com os estilos principais da aplicação para a interface do usuário (principalmete os estilos para o header e footer).
    - **/html**: Diretório que contém os componentes reutilizáveis da aplicação.
        - **presentation.html**: Arquivo HTML com a pagina home da aplicaçao. É a primeira página vista pelo usuário.

## Esquema da Árvore de Diretórios

```
/confortaid_project
├── comfortaid_profissional_show.html
├── comfortaid_profissional_env
├── ind0101.html
├── /components
│   ├── Header.js
│   └── Footer.js
├── /assets
│   ├── css
|   ├── html
│   |  └── presentation.html
│   └── js
│      └── script.js
└── /utils
        └── ...
```

## Como Executar o Projeto

### BackEnd do projeto

1. No repositório:
    ```bash
    [backend java](https://github.com/JunhaumHayden/ComfortAid_API_Project)
    ```
2. Baixe o executável Java:
    ```bash
    ./target/comfortaid-0.0.4-SNAPSHOT.jar
    ```
3. Inicie o servidor:
    ```bash
    java -jar comfortaid-0.0.4-SNAPSHOT.jar
    ```
> Por padrão o servidor opera na porta 5000, caso necessite alterar use:
>    ```bash
>    java -jar comfortaid-0.0.1-SNAPSHOT.jar --server.port=80
>    ```

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com [seu-email@dominio.com](mailto:seu-email@dominio.com).
