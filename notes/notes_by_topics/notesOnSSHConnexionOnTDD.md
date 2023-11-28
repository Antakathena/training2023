Il ne faut pas retirer des éléments de la composition d'un environnement TDD après l'avoir lancé, sinon il y aura des orphelins,
car pour executer les commandes docker d'arrêt des containers, le TDD se base sur la liste dans composition.
Donc il n'arrêtera pas ceux qu'on a retirer de la liste après avoir lancé l'environnement.

Pour tomber manuellement un environnement du TDD si ça ne marche pas avec la UI:

Il est indispensable de se connecter en SSH au TDD pour pouvoir acceder à son contenu.
(Pas besoin de se connecter à azure à moins de vouloir récupérer des fichiers.)

Pour se connecter en ssh et se retrouver sur la machine du TDD (serveur distant) ça se fait avec :
ssh micloud@ FR1SLTRKQA00283
+
mot de passe (dans les notes de Cédric)

sauf que ma vbox a un problème de résolution des noms de domaine de finastra. Sûrement un réglage à faire
On peut du coup employer l'adresse IP directement si on la connait:

ssh micloud@10.21.229.101

IL faudrait que je demande à quelqu'un qui a une VBox quel est l'adresse du serveur de Finastra qui fait la résolution DNS.

Ensuite il faut aller dans ~/fenix-ci-cd/fenix/envs

Avec ll (deux fois L) on voit une liste bien lisible de tous les docker containers

On va dans le bon avec par exemple : cd FNX-3219/
Et pour l'arrêter : docker-compose -f ./fnx-compose-dev.yml down -v
Si ça ne marche pas car il y a des orphelins, on rajoute le flag ----remove-orphans

Ensuite le remove dans la UI devrait remarcher.


Pour voir le contenu du compose par exemple :
vi fnx-compose-dev.yml

Pour sortir, exit

Et nous revoilà sur notre machine.



