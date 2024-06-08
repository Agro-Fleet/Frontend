# Frontend


## Descrição
Este projeto é uma aplicação que contém diversas telas desenvolvidas em React. As telas foram criadas, mas as rotas ainda não foram implementadas. Para visualizar cada tela, você precisará descomentar manualmente as importações e os componentes no arquivo `page.tsx`.

## Estrutura do Projeto
```
/src/app
  /components
  /pages
    /dash
        - dashboard.tsx
    /dash_user
        - dashUser.tsx
    /dash_vehicle
        - dashVehicle.tsx
    /home
        - home.tsx
    /login
        - login.tsx
    /Operation
        - operationDetails.tsx
    ...
  - page.tsx
```

## Pré-requisitos
- Node.js (versão 20.14.0)
- npm (versão 10.7.0)

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/Agro-Fleet/Frontend.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd agro-fleet
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar
Para visualizar as diferentes telas, siga os passos abaixo:

1. Abra o arquivo `src/app/page.tsx` em seu editor de texto favorito.

2. Descomente as importações e o código referente à tela que deseja visualizar. Por exemplo, para visualizar `Tela1`, descomente as seguintes linhas:

   ```tsx
   // import Home from './pages/home/home';
   // <Home />
   ```

   Deve ficar assim:

   ```tsx
   import Home from './pages/home/home';
   <Home />
   ```

3. Salve o arquivo e inicie a aplicação:

   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000` para ver a tela descomentada.

## Notas
- Este projeto está em processo de conclusão e as rotas entre as telas ainda não foram implementadas.
- Ao descomentar múltiplas telas, elas serão exibidas simultaneamente na mesma página, portanto, recomendo descomentar apenas uma tela por vez.
