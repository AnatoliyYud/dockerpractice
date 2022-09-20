My actions from /home/devops/dockerpractice
mkdir api

git branch api
git switch api

cd api/
npm init
npm install express (*simple framework for nodejs)

Create .gitignore with node_modules (*dependencies with express framework)

mkdir src
cd src/
Create index.js with already known code
cd ..

Edit package.json:
  "scripts": {
    "start": "node src/index.js"

Checking:
npm run start

Going to browser:
host_ip:3001
hot_ip:3001/test
*port from src/index.js code

Api service is working correctly

-------------------------------------------
Сontainerization of spi service:

- Create Dockerfile:
FROM node:14.1.0-alpine  (my node version. alpine for smallest size of image)
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3001
COPY . .
CMD ["npm", "run", "start"]
*later it will be modifyed because of docker-compose practice

- create .dockerignore with node_modules because of it's local directory and we want to 
prohibit copy it to container in COPY . . command. Container will create npm dependinies itself, but with our package*.json and src/index.js.

docker build -t myapi:v0 .
docker run -p 3001:3001 myapi:v0

Checking again in browser:
host_ip:3001
hot_ip:3001/test

All is ok.