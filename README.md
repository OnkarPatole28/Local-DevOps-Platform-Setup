# Local-DevOps-Platform-Setup

```Architecture overview```

- This is Local-DevOps-Platform-Setup for node.js application. In this setup we created a node.js application with 3 endpoints. Then we dockerized the application using dockerfile. Later we deployed these docker image on kubernetes cluster created using k3s.


```prerequisite```

1: Check the version of your mac: `uname-m`

2: Check if brew is installed on you mac: `brew --version`

3: If brew is not installed then install using `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

4 Install Vagrant and qemu using below commands
- `brew install qemu`
- `vagrant plugin install vagrant-qemu`
- `brew install --cask vagrant`
- `vagrant init -m perk/ubuntu-22.10-arm64`
- `vagrant up --provider`
- `vagrant ssh`

5: After successfully installing Vagrant and qemu run below commands to install docker and  node
- `sudo snap install docker`
- `sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash`
- `\. "$HOME/.nvm/nvm.sh"`
- nvm install 24

6: Confirm if docker and node is install
- `docker --version`
- `node -v`
- `npm -v`

7: Create kubernetes cluster using k3s using below command:
- `curl -sfL https://get.k3s.io | sh -`

8: Confirm cluster is created using below command:
- `sudo kuectl get nodes`

9: Create Docker image using below command:
- `sudo docker build -t <image-name> .`
- `sudo docker images` 

10: Test the docker image locally

11: Tag docker image with your dockerhub username and then push docker image to you repo (keep it public). Make sure to login to dockerhub
- `docker image tag <image-name> <username>/<image-name>`
- `docker push image-name<>`

12: Cretaed kubernetes foler and add deployment.yaml and service.yaml file in it. Use below commands to create deployment and service to save time
- `sudo kubectl create deployment my-app --image=<docerhub-username>/<image-name> --replicas=2 --dry-run=client -o yaml > deployment.yaml`
- `sudo kubectl apply -f deployment.yaml`
- `sudo kubectl expose deployment my-app --port=3000 --target-port=3000 --dry-run=client -o yaml > service.yaml`
- Update service.yaml file to add type = NodePort
- `sudo kuebctl apply -f service.yaml`

 
