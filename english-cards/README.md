I downloaded project from github and will check it just in PROD mode.
git branch english-cards

git switch english-cards

git branch

git clone git@github.com:farlongy/english-cards

rm -Rf english-cards/.git

1)	Checking opensource project locally
cd english-crads/

nvm use 14.16.1 (already checked version for correct work)

npm install

npm run build

After that we have:

![e1](https://user-images.githubusercontent.com/103497695/193581775-c28305d7-70e8-4cb6-ac5f-8c70db4e808f.png)

 
npm install -g serve
serve -s build


![e2](https://user-images.githubusercontent.com/103497695/193581808-d9b1ea4b-f0e7-4a01-91fb-7e6781d10a7a.png)


1)	Dockerization of this project

Creating of Dockerfile:


![e3](https://user-images.githubusercontent.com/103497695/193581938-bf60d94f-349a-424a-8e07-4174d81d5839.png)


And create docker-compose.englishcards.yml file on root directory of our project
 

![e4](https://user-images.githubusercontent.com/103497695/193581990-571ef6be-32ae-48d5-b636-98bc7d377ed9.png)


docker-compose -f docker-compose.englishcards.yml up –build


![e5](https://user-images.githubusercontent.com/103497695/193582148-ecb16bb8-36c9-4d48-9b3e-38c60a8ad817.png)

 

![e6](https://user-images.githubusercontent.com/103497695/193582166-5286601f-2b0f-4880-8bfd-e0041b270abd.png)



![e7](https://user-images.githubusercontent.com/103497695/193582178-98ea5d79-cf58-4ee8-8416-65a3f7d9e9ff.png)



So the third-party app is working well. We can finish the actions for this branch.

