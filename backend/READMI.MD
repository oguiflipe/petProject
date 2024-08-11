#### LIBS


> Iniciando o backEnd;
    node --watch src/server/server.js

> Criação do backEnd;
    npm install express

> Criação do Prisma para se conectar com o banco de dados;
    npm install prisma
        > Realizando as migrations;
            npx prisma migrate dev --name init
            ou
            npx prisma db push
                > Após aplicar o comando;
                    npm install @prisma/client

