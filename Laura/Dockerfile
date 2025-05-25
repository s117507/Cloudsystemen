# 1. Kies een kleine Node-image
FROM node:18-alpine

# 2. Zet /app als werkdirectory
WORKDIR /app

# 3. Kopieer package.json & lockfile, en installeer álle deps (inclusief devDeps)
COPY package*.json ./
RUN npm install

# 4. Kopieer de rest van je code
COPY . .

# 5. Expose de port waarop je Express luistert
EXPOSE 3000

# 6. Start via je “start” script (nodemon index.ts)
CMD ["npm","start"]
