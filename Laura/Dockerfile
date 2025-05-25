FROM node:18-alpine
WORKDIR /app

# Copy package files and install everything (incl. devDeps)
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

EXPOSE 3000

# Use your start script (nodemon index.ts)
CMD ["npm","start"]
