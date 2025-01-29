# Escolha a imagem base com Node.js
FROM node:18-alpine

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código
COPY . .

# Compile o código TypeScript para o diretório dist
RUN npm run build

# Exponha a porta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:dev"]
