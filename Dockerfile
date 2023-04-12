# Imagem base do Node.js
FROM node:latest

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json do frontend e instala as dependências
COPY frontend/package*.json ./
RUN npm install

# Copia o código do frontend
COPY frontend/ .

# Copia o package.json e o package-lock.json do backend e instala as dependências
COPY backend/package*.json ./
RUN npm install

# Copia o código do backend
COPY backend/ .

# Variáveis de ambiente para o banco de dados PostgreSQL
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydb

# Instala o PostgreSQL
RUN apt-get update && apt-get install -y postgresql postgresql-contrib

# Cria um diretório para o arquivo de inicialização do banco de dados
RUN mkdir -p /docker-entrypoint-initdb.d

# Copia o arquivo SQL de inicialização para o diretório criado
COPY init.sql /docker-entrypoint-initdb.d/

# Executa o comando de inicialização do banco de dados
RUN service postgresql start && \
    psql --command "CREATE USER $POSTGRES_USER WITH SUPERUSER PASSWORD '$POSTGRES_PASSWORD';" && \
    createdb -O $POSTGRES_USER $POSTGRES_DB && \
    psql -d $POSTGRES_DB -f /docker-entrypoint-initdb.d/init.sql

# Expõe as portas do frontend e do backend
EXPOSE 3000
EXPOSE 3333

# Inicia o servidor do frontend e do backend
CMD ["npm" "run" "dev", "node" "ace" "serve" "--watch"]