<div align="center">
<img src="./assets/img/LogoComfortAid-removebg500.png" alt="Logo Comfortaid" width="200">
</div>


<h1 align="center"> ComfortAid APP Project </h1>

![Powered by Bootstrap](https://img.shields.io/badge/Powered_by-Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Powered by Axios](https://img.shields.io/badge/Powered_by-Axios-671ddf?style=for-the-badge)
![Powered by SPA](https://img.shields.io/badge/Powered_by-SPA-blue?style=for-the-badge)  
![Powered by PWA](https://img.shields.io/badge/Powered_by-PWA-5a0fc8?style=for-the-badge)
![Powered by JavaScript](https://img.shields.io/badge/Powered_by-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![Powered by HTML5](https://img.shields.io/badge/Powered_by-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![Powered by CSS3](https://img.shields.io/badge/Powered_by-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Powered by Service Workers](https://img.shields.io/badge/Powered_by-Service_Workers-008080?style=for-the-badge)

## Descrição do Projeto

> A aplicação pode ser acessada pela [Web page](https://junhaumhayden.github.io/ComfortAid_APP_Project/)

> Um pequeno um vídeo de demonstração do aplicativo pode ser visualizado no [odysee](https://odysee.com/ComfortAid_App:2?r=CYtiAyuSYZPVsUt53EfSEgfPJCaJULPb)

### 📌 Sobre o Projeto

ComfortAid é uma aplicação desenvolvida para conectar clientes a profissionais que oferecem serviços de massagem terapêutica e estética domiciliar. O aplicativo permite que os usuários busquem serviços por região, agendem atendimentos e avaliem os profissionais cadastrados. Além disso, possibilita que profissionais da área divulguem seus serviços, incluindo especialistas em conhecimentos tradicionais, como parteiras e curandeiras.

### 🔍 Comportamento Esperado

- Os usuários podem se cadastrar como clientes ou profissionais.

- Clientes podem navegar pelos serviços disponíveis, visualizar avaliações, cadastrar-se e agendar atendimentos com profissionais.

- Os profissionais podem gerenciar seu perfil, cadastrar novos serviços e receber agendamentos, definir horários de atendimento e receber avaliações dos clientes.

- Ambas as categorias podem acessar o histórico de avaliações e modificar seus dados pessoais.

- O sistema utiliza autenticação por sessão para garantir que cada usuário acesse apenas as funcionalidades adequadas ao seu perfil.

- O aplicativo funciona como uma SPA (Single Page Application) para navegação dinâmica e fluida.

- Implementação de PWA (Progressive Web App) para permitir instalação no dispositivo e uso offline parcial.

### 🛠️ Tecnologias Utilizadas

- `Frontend`: HTML, CSS, JavaScript (ES6+), Bootstrap

- `Frameworks e Bibliotecas`: Axios para requisições HTTP, FontAwesome para ícones

- `Arquitetura`: SPA (Single Page Application), PWA (Progressive Web App), LocalStorage / SessionStorage (persistência de autenticação)

- `Backend`: API REST desenvolvida em Java com Spring Boot, JPA/Hibernate (persistência de dados)

- `Banco de Dados`: H2 (ambiente de desenvolvimento) e MySQL (ambiente de produção)

#### Ferramentas de Desenvolvimento

- Git e GitHub (controle de versão)

- VS Code / IntelliJ IDEA

- Postman (testes de API)

###  🔀 Fluxo de Navegação das Telas
``` mermaid
graph TD;
    A[Home] -->|Acessa| B[Serviços];
    A -->|Acessa| C[Profissionais];
    A -->|Acessa| D[Avaliações];
    A -->|Login| E[Autenticar];
    E -->|Novo Usuário| F[Auto Cadastro];
    E -->|Login| G[Usuário Freguês];
    E -->|Login| H[Usuário Profissional];
    G -->|Acessa| I[Freguês Home];
    G -->|Gerenciar| J[Atualizar Dados];
    G -->|Avaliar| K[Avaliações];
    G -->|Sair| L[Logout];
    H -->|Acessa| M[Profissional Home];
    H -->|Gerenciar| N[Atualizar Dados];
    H -->|Novo Serviço| O[Novo Serviço];
    H -->|Avaliar| P[Avaliações];
    H -->|Sair| Q[Logout];
```


### 📂 Estrutura do Projeto
```
/confortaid_project
├── index.html              # Página principal
├── comfortaid_user_env.html # Página de login/cadastro
├── /assets                 # Recursos do projeto
│   ├── /css                # Estilos CSS
│   ├── /html               # Páginas secundárias
│   │   └── presentation.html # Página de apresentação
│   └── /js                 # Scripts JavaScript
│       └── script.js       # Lógica de frontend
```


### Função de Cada Arquivo


- **index.html**: Página principal da aplicação, redireciona usuários não autenticados para login.

- **comfortaid_user_env.html**: Interface para login e cadastro de usuários.

- **/assets/css**: Contém os estilos da aplicação.

- **/assets/html/presentation.html**: Arquivo HTML que representa a página de apresentação do serviço.

- **/assets/js/script.js**: Lida com funcionalidades da interface, como eventos e interações do usuário.

- **/assets/js/main.js**: Controla a inicialização da aplicação e manipulação de sessões.

- **/assets/js/service-worker.js**: Implementa funcionalidades de PWA, como cache offline e melhoria de desempenho.

- **manifest.json**: Define as configurações da aplicação como PWA, incluindo ícones e configurações de exibição.


# Author

| [<img src="https://avatars.githubusercontent.com/u/79289647?v=4" width=115><br><sub>Carlos Hayden</sub>](https://github.com/JunhaumHayden) |
| :---: |
