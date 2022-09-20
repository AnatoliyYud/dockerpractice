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
-Now we can join our branches (main and api)
git switch main
git merge api
git push

-And continue with api branch
git switch api

----------------------------------------------------------------
Docker-compose. Now we will test docker-compose in root directory of our project.

/home/devops/dockerpactice

Create docker-compose.yml:
version: '3'
services:
  api:
    build: ./api
    command: npm run start
    restart: unless-stopped
    ports:
      - "3001:3001"

So now we can see command and ports in docker-compose.yml, so we can delete this config in api/Dockerfile:
FROM node:14.1.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

And test:
docker-compose up --build

Check in browser. Api service is working correctly.

----------------------------------------------------
Let's test environments in docker-compose. We can use theese environments in project code (api/src/index.js).
So it's very comfortable but need to edit api/src/index.js code for this.

Adding environments to docker-compose.yml:
version: '3'
services:
  api:
    build: ./api
    command: npm run start
    restart: unless-stopped
    ports:
      - "3001:3001"
    environment:
      - PORT=3001
      - HOST=http://mydockerproject.com

And now edit api/src/index.js for theese environments. You can see theese changes with commit history.Or look at image below:
![dev](https://user-images.githubusercontent.com/103497695/191286412-6133043a-67c3-4ff2-afe9-6f816395f6df.png)



