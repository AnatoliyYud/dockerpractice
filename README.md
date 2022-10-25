So I created a 3 services with using 3 branches (api, frontend, englesh-cards). And merged it on this stage.

Please check README files in below folders in this order:

/api

/frontend

/english-cards

After merging these branches with main I want to merge all services in one docker-compose.all.yml with one network.

docker-compose.all.yml:


![m1](https://user-images.githubusercontent.com/103497695/197725436-2185e3e3-ae4f-4ba8-abae-ec5caee2b6da.png)



docker-compose -f docker-compose.all.yml up –build


![m2](https://user-images.githubusercontent.com/103497695/197725669-6977e967-0534-468f-8cee-7a2964c28200.png)


![m3](https://user-images.githubusercontent.com/103497695/197725695-899ddd59-67f2-46a9-87e1-ac1560bba08e.png)


![m4](https://user-images.githubusercontent.com/103497695/197725740-fcf5e01f-0e76-45a8-844b-4ed0c4bceaae.png)



And as a result:

 


So we can see that all services are upping correctly. Without any errors.

------------------------------------------------------------------------------------------------------------

So next step is to configure remote hosts with ansible.

(rconfig branch, rconfig_with_ansible folder)




