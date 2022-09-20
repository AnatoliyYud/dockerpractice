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
