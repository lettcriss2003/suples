/*
Primero se debe tagear la imagen al repos 
docker tag app:latest lcris2003/app:latest
Se sube la imagen a docker hub 
 docker push lcris2003/frontapp:latest

 Entrar al gitbash 
 cd ..
 cd ..
 docker-machine -v

 para crear el worker, manager o cualquier nodo 
 docker-machine create --manager virtualbox my-docker-vm
 ya tienes creado 
 
 verificar que se hayan creado 
 docker-machine ls
 entramos al nodo manager 
 docker-machine ssh "manager"
 iniciamos el manager para obtener el token 
 docker swarm init --advertise-addr 192.168.99.118
copiamos en token en los worker 

Ahora necesitamos pasar el docker-compose al nodo manager 
primero subir el docker-compose al gist hub 
ponerlo como maker public 
y presionar raw 
copiar el enlace  y pegar en el nodo manager 
curl -O https://gist.githubusercontent.com/lettcriss2003/46032a9280b356b691e0e54f491ad883/raw/3fa7bc4db110d5c94a473b7bb407a82c5d553929/docker-compose.yml


Necesitamos crear una carpeta en el lugar donde esta el docker-compose 
metemos en la carpeta otro docker compose, donde modifican los nombres de los contenedores 
y el driver de la red a overlay 

 
 
 
 
 */
