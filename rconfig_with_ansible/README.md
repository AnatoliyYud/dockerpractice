So in this step I will create two new servers. And will configure them from my main-srv through the ansible.

git branch rconfig 

1)	I created two new servers (2vCPU, 2Gb RAM, 30Gb disk space, Ubuntu 20.04) with already added ssh public key from my main-srv (~/.ssh/id_rsa.pub). Each of them has static ip (like my main-srv).
	
So now we have:

main-srv

ubuntu1

ubuntu2

On main-srv I created ansible folder with below files:

inventory.ini  with my new servers static ips:

![a1](https://user-images.githubusercontent.com/103497695/197732008-bdd709ce-4834-4e6c-a156-6c3f1182cbeb.png)


Now I want to check connect to servers:
 
![a2](https://user-images.githubusercontent.com/103497695/197732080-fa3b9102-e2e8-4641-9fa2-2e4c927473be.png)


And with ansible:

ansible all -i inventory.ini -u devops -m ping

![a3](https://user-images.githubusercontent.com/103497695/197732160-1eb10291-2492-441e-8b8f-1cc444f5daf0.png)

2)	So now I need a playbook file for configure docker and docker-compose on remote servers.

You can check it in playbook.docker.yml

ansible-playbook playbook.docker.yml -i inventory.ini

![a4](https://user-images.githubusercontent.com/103497695/197732290-6c341e59-7478-4f47-99c7-b7058c7b23a4.png)
 
And checking:
 
![a5](https://user-images.githubusercontent.com/103497695/197732375-aeeba91f-f1aa-4074-86a5-40e301a11bbf.png)


So all is ok.

In the end I decided to rename folder:

mv ansible/ rconfig_with_ansible/

-------------------------------------------------------------------

Next step is to merge this branch with main and start practice with deployment, monitoring tools, logging tools.
