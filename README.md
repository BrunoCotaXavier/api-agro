# api-rural

# Como está a estrutura?
Separei as instâncias em microsserviços, cada um com suas próprias dependências e repositórios. Seguindo o padrão do @Nest, utilizei o @Prisma como ORM, o que facilitou inclusive a criação das migrations.

# Estrutura de pastas?
/db carrega /scripts para iniciar o banco assim que o compose for rodado. </br>
docker-compose.yml arquivo compose responsavel para iniciar os serviços. </br>
Na raiz do projeto cada instancia é uma pasta /culture /producer ... </br>
Cada instância possui suas configurações individuais porem com o mesmo padrão. </br>




# Como rodar o projeto?

1. primeiro instale o [Docker](https://www.docker.com/get-started/). </br>

2. Depois o [Node](https://nodejs.org/en/download/current) </br>

3. clone o projeto. </br>

Após clonar acesse a raiz do projeto e rode:
    
    $ cd api-rural
    $ docker compose up --build

4. Após os ambientes rodando vamos rodar as migrations com prisma, cada servisso possui sua migration </br>

Obs: Faça isso consecutivamente nos próximos serviços, alterando no .env a variável DATABASE_URL de 'host.docker.internal' para 'localhost'. Essa alteração é apenas para rodar a migration; depois, retorne ao padrão 'host.docker.internal'.</br>

    $ cd producer 
    $ npx migrate dev --name initProducer 
    $ cd .. 
    $ cd culture
    $ npx migrate dev --name initCulture 

5. Após subir as migrations e voltar a configuração padrão reinicie a aplicação</br>

Rodando na raiz do projeto:

    $ docker compose down
    $ docker compose up --build

6. Caso queira testar apenas um serviço especifico, altere no .env dele para localhost e da um STOP na instância dele no docker.

# Como acesso o projeto no Swager?

Você pode acessar a documentação do @Swagger atraves deste link: http://localhost:3001/api#/ </br>
obs: caso estiver rodando localmente a porta é 3000, caso estiver no docker a porta vai ser a mesma do docker-compose.yml (cada seriviço possui sua doc na sua respectiva porta)

# api-agro
