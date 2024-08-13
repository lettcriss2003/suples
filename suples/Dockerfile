FROM python:latest 

WORKDIR /app 
# 
#RUN mkdir ./ root/app   -> crea una carpeta simplemente 
# . al principio cuando el requirements esta en otra carpeta 
# . al final para donde lo quiero copiarlo, la que aco de crear 
#COPY ./migraciones/ requirements . -> en caso de que este dentro de una carpeta 

#COPY . . -> copia todos los archivos en la carpeta creada 
#COPY requirements.txt ./ root/app -> para la carpeta que cree

COPY requirements.txt .

# pip para python npm para node 
# el comando y el archivo donde se necesita que se instalen las dependencias 
#RUN pip install requirements.txt

# no almacena la cache, sino que las instala 
# secreto para cuando no funcione el pip instal 
RUN pip install --no-cache-dir -r requirements.txt
# otra forma RUN pip install -r requirements.txt

COPY . .

# RUN solo para especificar un comando que se debe ejecutar antes de la ejecucion del proyecto en si
# CMD es para levantar el proyecto, necesario 
#ENV -> Para variables de entorno siempre en mayuscula (Es para el proyecto en si)

ENV NUEVA_VARIABLE = 5
# los de django se suelen correr en el 8000, revisar en los settings 

EXPOSE 8000

#para correr el archivo principal de la aplicacion, suelen ser manage, index, app siempre .py
#para node seria un index, app .js (mas general es el app)
# siempre con que voy a correrlo 
# si tengo el package json
# CMD ["npm", "start"]
# CDM ["npm", "run", "dev"] -> 
#CMD ["node","app.js"] -> para cuando no tenga el package.json

# este no levanta el proyecto como tal 
# CMD ["python","manage.py"]

# para levantar el proyecto 
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]

# docker pull mysql -> imagen para la base de datos 
# primero crear una red -> docker network create my_network
                                              #  el nombre que quiera
# Se configura la imagen de la base de datos con las variables de settings -> docker run -d --name bd --network my_network -e MYSQL_ROOT_PASSWORD=123456789 -e MYSQL_DATABASE=practica9 -p 4000:3306 mysql:latest
# para que se pueda reconocer se debe poner el host (nombre del contenedor de la bd)y este debe estar en la misma red, como se creo en la parte de arriba 
# docker build . -t app:latest -> para crear la imagen, no la instancia 
# docker rm app:latest  -> para borrar un contenedor 
#docker rmi app:latest  -> para borrar una imagen 
# crear un contenedor sin correrlo docker create --name primero -p 4000:8000 app:latest
# docker create --name primero -p 4001:8000 --network my_network app:latest -> esto para cuando ya creemos la network 
# crear y correr un contenedor ->  docker run -d --name primero -p 4001:8000 --network my_network app:latest
# para correr el contenedor -> docker start primero 

# mi puerto de mysql es : 3309