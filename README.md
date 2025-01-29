# Como está a estrutura? 👷🏽
- Separei as instâncias em modulos, seguindo o padrão do @Nest, utilizei o @Prisma como ORM. <br>
- O docker compose se responsabiliza para criar a aplicação, banco de dados e um administrador DB web.<br>
- Dentro do diretorio: `/src`, possui todos os modulos separadamentes em pastas, cada um segregado com suas dependencias. <br>
- Cada modulo possui seus DTO's responsaveis também pela veracidade de cada dado. <br>
- Quando necessário o modulo possui o diretorio: `/decorators`, responsável por decorators customizaveis do @Nest. <br>

# Como rodar o projeto localmente? 👨🏽‍💻

1. primeiro instale o [Docker](https://www.docker.com/get-started/). </br>

2. Depois o [Node](https://nodejs.org/en/download/current) </br>

3. clone o projeto. </br>

Após clonar e ter certeza que o docker está rodando acesse a raiz do projeto e rode:<br>
obs: não esqueca de ajustar o nome do .env <br>
    
    $ cd api-agro
    $ npm install
    $ npx prisma generate
    $ docker compose up --build

4. Com isso feito o compose ja preparou o banco postgree e também um servidor web para visualizar o banco na porta localhost:8080.</br>
Também ja está acessivel a documentação da API acessando: localhost:3000/api.</br>

Agora vamos rodar as migrations, primeiro vai no .env e mude apenas para rodar a migration de `db:5432` para `localhost:5432` <br> 
Acesse um novo terminal e rode na raiz do projeto:</br>

    $ npx prisma migrate dev --name init 

Agora ja pode voltar no arquivo .env de `localhost:5432` para `db:5432`. <br>
Isso ocorre porque quando executa a migration você está fora do docker. <br> 

# Como testar o projeto? 🧙🏼‍♂️

Você ja pode acessar a documentação da API criada com o @Swagger atraves deste link: localhost:3000/api/ </br>
Lá vai ter todos os modulos e os respectivos Dto's que os representam.  <br>
Você também pode acessar o @Adminer passando as credenciais do banco para visualizar os dados e as tabelas a partir deste link: localhost:8080.  <br>


# Como rodar fora do docker? 🐳

Como ja haviamos comentado, altere o .env de `db:5432` para `localhost:5432`. <br>
Agora só executar na raiz do projeto. <br> 

    $ docker ps 

Copie o ID da sua aplicação que está rodando no container @docker e cole aqui.

    $ docker stop seuIdContainer

Agora só iniciar ela localmente rodando na raiz do projeto: 

    $ npm start


# Como executar os testes com Jest? ✅

Com os containers rodando execute:

    $ docker exec -it <container_id> sh
    $ npm run test:e2e
