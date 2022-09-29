Create-react-app

npm init react-app frontend
cd frontend/
npm run start


![f1](https://user-images.githubusercontent.com/103497695/193040989-7800b3d0-6b3c-4edd-98bb-3a57bb8638c0.png)




![f2](https://user-images.githubusercontent.com/103497695/193041033-028d9b77-1349-4cd1-aeb3-14907bed11e2.png)





And we can edit index.js file and frontend will be updated through the sockets.

So next step is to dockerization of this process. 
I will work in frontend directory. With new docker-compose.yml
And later there will be a merge with docker-compose files in one main file.

1)	Checking frontend in docker with DEV mode.
We need Dockerfile:

![f3](https://user-images.githubusercontent.com/103497695/193041276-8a193913-edf3-4844-861d-e283cdf3d581.png)

And docker-compose.front.yml :


![f4](https://user-images.githubusercontent.com/103497695/193041296-61750ef6-e522-4c8e-9bea-936dc3103b57.png)


Because of problem with create-react-app in docker (because of interactive console), the solution was found through the docker-compose. So we need stdin_open and tty parameters with “true”.
*https://github.com/facebook/create-react-app/issues/8688?ysclid=l8myczecm7860872291

docker-compose -f docker.compose.front.yml up --build
And it’s working. But if we want to have online changes in DEV mode we need to add volume in docker-compose.
 

![f5](https://user-images.githubusercontent.com/103497695/193041539-e23123f5-8aed-4d79-b579-08126274c7cb.png)


docker-compose -f docker.compose.front.yml up --build

Now we can see:


![f6](https://user-images.githubusercontent.com/103497695/193041741-54dd906d-5f0b-41f3-b099-2502914e512c.png)


And if we will change src/App.js


![f7](https://user-images.githubusercontent.com/103497695/193041830-fe78eb77-5168-4000-b6ef-7a3854501d33.png)

And save the file.  The browser page will be update itself:



![f8](https://user-images.githubusercontent.com/103497695/193041871-c53e4986-9ce2-4599-9f2e-01ed3bb85e74.png)



So it’s ok and we deleted changes in App. js

2)	Now I want to check it in PROD mode.
cd frontend/
npm run build
npm install -g serve
serve -s build
*Here I met a problem. And it’s not work correctly with my node:14.1.0.
So I perform nvm use 14.16.1 and and the commands above were executed successfully:


![f9](https://user-images.githubusercontent.com/103497695/193042037-5dfb7bd0-3647-4439-8a30-784c15d8aed5.png)


So next step is dockerization:
We need to add to dockerfile two commands npm run build and npm install -g serve and use node:14.16.1-alpine
 

![f10](https://user-images.githubusercontent.com/103497695/193042236-19694afc-861b-42ae-a8b9-b07994544bf5.png)


And edit docker-compose.frontend.yml with new command and comments.


![f11](https://user-images.githubusercontent.com/103497695/193042282-755817b1-65f7-4bd4-9a9f-71d352bc3d04.png)


docker-compose -f docker-compose.frontend.yml up –build


![f12](https://user-images.githubusercontent.com/103497695/193042355-e0db6b3b-4acc-4356-a44a-7e2a2fcdbce5.png)


So it’s ok. Now we can switch to main branch for merging.
