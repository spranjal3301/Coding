//! Docker:
//* Docker is an open-source platform that automates the deployment, scaling, and management of applications in lightweight,
//* portable containers.


//! Docker Containers:
//* Containers are a form of operating system virtualization that that includes everything needed to run a piece of 
//* software, including the code, runtime, libraries, and environment variables.


//!Image: 
//* A read-only template with instructions for creating a Docker container.
//* Images are built from a set of instructions written in a Dockerfile.

//! Dockerfile:
//* A text file that contains a series of instructions on how to build a Docker image.
//* It defines the environment in which the application will run and specifies all the steps needed to create the image.


//! Docker Engine:
//* The runtime that runs and manages Docker containers.

//! Docker Compose:
//* A tool for defining and running multi-container Docker applications. 




//` Docker provides several benefits, including:
//? Consistency:
//? Isolation: 
//? Scalability:
//? Portability: 
//? CI/CD pipelines

//!Why use Docker?
//* Docker simplifies the process of building, shipping, and running applications.
//* Docker containers are lightweight portable and fast due to cached, making them easy to deploy across different environments.
//* Docker provides a consistent environment for running applications,
//* reducing the risk of errors caused by differences between development and production environments.
//* Its make it easy to scale applications horizontally by running multiple instances of a container across different hosts.
//* Helps to automate the deployment process, making it easier to integrate with CI/CD pipelines.


//! Docker Commands:
//- docker run <container>: Creates a new container.
//- docker ps: List running containers.
//- docker kill <container_id>: kill a container.
//- docker build <path>: Build an image from a Dockerfile.
//* docker ps -a: List all containers.
//* docker exec <container_id> <cmd>: Runs additional commands inside an existing container without stopping it..
//* docker exec -it <container_id> bin/bash: SSH into running container.
//* docker run --name <container_name> <image>: Run a container with a specific name. 
//* docker logs <container>: View logs from a container.
//* docker start <container>: Start a container.
//* docker stop <container>: Stop a container.
//* docker rm <container>: Remove a container.
//* docker pull <image>: Pull an image from a registry.
//* docker push <image>: Push an image to a registry.
//* docker images: List images.
//* docker rmi <image_name> --force: Remove an image.
//* docker volume ls: List volumes.


//- docker run -d <container>: Run a container in detached mode(in background).
//- docker run -it <container>: Run a container in interactive mode.
//- docker run -p <host_port>:<container_port> <container_name>: Map a container port to a host port.       
//- docker run -e <key="value">: Set an environment variable in a container. 




//! Layers in Docker
//* Docker images are built in layers, with each layer representing a change to the image.
//* Every instruction in a Dockerfile creates a new layer in the image.
//* Layers are cached, which allows for faster image builds when only a fNetworks

//package.json not changed frequently so it is at the top
//? COPY package* .   
//? COPY ./prisma .
  
//only when package.json changes then npm install will run 
//? RUN npm install
//? RUN npx prisma generate

//? COPY src .

//? EXPOSE 3000

//? CMD ["node", "dist/index.js", ]


//! Volumes
//* Need to persist data across docker Container restarts
//* Volumes allow data to be stored outside the container's filesystem, ensuring it is preserved even if the container is deleted.
//* Volumes can be shared between containers.
//?eg: use volumes to store database data, logs, or configuration files.
//- docker volume create <volume_name> : Create a volume.
//- docker volume ls: List volumes.
//- docker volume rm <volume_name>: Remove a volume.
//- docker run -v <volume_name>:<container_path>: Mount a volume to a container.
//? docker run -v volume_database:/data/db -p 27017:27017 mongo

//! Networks
//* Docker networks allow containers to communicate with each other.
//* Docker containers can’t talk to each other by default.


//` How to make containers talk to each other?

// Create a brige network
//- docker network create <network_name>

// Check the network
//- docker network ls

// Connect containers to the network
//- docker run --network <network_name> <container_name>
//?docker run -d -p 3000:3000 --name <backend> --network <my_custom_network> <image_tag>
//?docker run -d -v volume_database:/data/db -p 27017:27017 --name <mongo_network> --network <my_custom_network> mongo
//mongodb://<mongo_network>:27017



//! Docker Compose
//* Docker Compose is a tool for defining and running multi-container Docker applications.
//* It uses a YAML file to configure the application's services, networks, and volumes.
//* Docker Compose simplifies the process of managing multiple containers and their dependencies.

//- docker-compose up: Create and start containers.
//- docker-compose down: Stop and remove containers.

//` docker-compose.yaml:
//* A YAML file that defines the services, networks, and volumes for a Docker Compose application.
//~ yamlfile: version(3.8), services(mongodb,backend22), networks(automatic created), volumes(mongodb_data).


//? version: '3.8'   
//? services:
//?   mongodb:
//?     image: mongo
//?     container_name: mongodb
//?     ports:
//?       - "27017:27017"
//?     volumes:
//?       - mongodb_data:/data/db

//?   backend22:
//?     image: backend
//?     container_name: backend_app
//?     depends_on:
//?       - mongodb
//?     ports:
//?       - "3000:3000"
//?     environment:
//?       MONGO_URL: "mongodb://mongodb:27017"

//?   backend:
//?     build: .
//?     container_name: backend_app
//?     depends_on:
//?       - mongodb
//?     ports:
//?       - "3000:3000"
//?     environment:
//?       MONGO_URL: "mongodb://mongodb:27017"

//? volumes:
//?   mongodb_data:


//! Docker Bind Mounts
//* Bind mounts allow you to mount a host file or directory into a container.
//* This allows you to share files between the host and the container.
//` Used in Hot Reloading(any code change reflect), if App(React/NEXT) is Run inside Container.

//- docker run -v <host_path>:<container_path>: Bind mount a host directory into a container.
//? docker run -v $(pwd):/app -p 3000:3000 <image_name>