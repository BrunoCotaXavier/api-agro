# Como está a estrutura? 👷🏽
Separei as instâncias em modulos, seguindo o padrão do @Nest, utilizei o @Prisma como ORM, o que facilitou inclusive a criação das migrations.

# Como rodar o projeto localmente? 👨🏽‍💻

1. primeiro instale o [Docker](https://www.docker.com/get-started/). </br>

2. Depois o [Node](https://nodejs.org/en/download/current) </br>

3. clone o projeto. </br>

Após clonar e ter certeza que o docker está rodando acesse a raiz do projeto e rode:<br>
obs: não ensquece de configurar o .env <br>
    
    $ cd api-agro
    $ docker compose up 

4. Com isso feito o compose ja preparou o postgree e também um servidor web para visualizar o banco na porta localhost:8080</br>

Agora vamos rodar as migrations, acesse um novo terminal e rode na raiz do projeto:</br>

    $ npx migrate dev --name init

5. Após subir as migrations podemos finalmente iniciar o projeto</br>

Rodando na raiz do projeto:

    $ npm start

Agora a API ja está disponivel em localhost:3000

# Como acesso o projeto no Swager? 🧙🏼‍♂️

Você pode acessar a documentação do @Swagger atraves deste link: http://localhost:3000/api/#/ </br>
Lá vai ter todos os modulos e os respectivos Dto's que os representam.  
