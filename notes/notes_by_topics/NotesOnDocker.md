## Notes du cours Pluralsight  + ajouts :

Initialement lancé en 2013, Docker est devenu l'une des principales plateformes de conteneurs (83 % des conteneurs en 2018)
- install Docker Desktop
- Docker Hub account (hub.docker.com) + play with Docker (labs.play-with-docker.com (4 hours sessions)
- 8000:8080 is host mapping, i.e host port: container port
- If you don't stick the url of a different registry in front of the image, Docker will assume we mean Docker hub; it will look for a local copy first. If not available, Docker will download it from the hub.
- Long id of the running container, shorten when we look if it's running with Docker container ls
- $ docker container stop theNameOfMyContainer (here is is called"web") ->
- $ docker container ls -a, it is now listed as existed
- docker container start NameOfMyContainer -> ça tourne sur le port alloué
- docker container rm NameOfMyContainer -> deleted
- -it is for interactiv and give me a terminal please.
  The terminal will give live commands to the live terminal, if you simply quit it you will also end the container (cause shell is here the main app for the container ?).
  So to simply quit the terminal : ctrl+P+Q
- docker container rm nameOfTheApp -f
  If the container is not stopped, you need to force the delete
- Recap :
  $ docker image build
  $ docker image push
  $ docker container run
  $ docker container stop
  $ docker container start
  $ docker container rm
- container is visualizing operating system
- Docker packages the app plus all dependencies. So if it works on your laptop, it works in production. code portability, yeh !
- vocabulary :
  - containerize an app
  - push to a registry
  - run as a container
  + Declarative : describe an application in a config file used to deploy the app (here the Compose file is a .yaml) -> Desired state
- We need to be in compose, where the yaml file is, so:
  $ cd compose
  $ docker compose up --detach (runs in the background so it doesn't tire up my terminal)
  $ docker compose down --volumes
  (flag facultatif, check uses)
- Vocabulary:
  cluster = one or more machines that we call nodes (physical servers, virtual machines, cloud instances...)
- a cluster is a bunch of nodes with Docker installed and network connectivity. Can be called a "swam" (essaim) 
- Every node has to be either a Worker (business app) or a Manager (control plane).
- Managers are always in odd number, in case there's a conflict to solve
