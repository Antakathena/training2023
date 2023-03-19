3- check git status et mettre à jour les repo si besoin : 
        git fetch --all
        git checkout develop
        # si on a des modif de notre côté :
        git stash
        git pull
        git stash pop

     ( bien prepa config git aver rerere et faire git rebase develop régulièrement pour éviter les conflits. cf also : git)

https://scm-git-eur.misys.global.ad/projects/FNX/repos/documentation/browse/commits ; exemple :
        fix(view manager): (FNX-223) fixes view manager container)

VS code : installer extension Eslint et Gitlens

[X] lire la doc sur gitflow workflow envoyée par Thanh (nb : le workflow a évolué < équipe grandissante)

**gitconfig :** in .git changed config [remote origin] from :  
url = https://u730750@scm-git-eur.misys.global.ad/scm/fnx/fenix-launcher.git  
to  
url = ssh://git@scm-git-eur.misys.global.ad:7999/fnx/fenix-launcher.git  

Ca ne marche pas mieux ? (edit 5 secondes plus tard : si, ça marche, c'est juste que la Vbox s'était déconnecté entre temps.)
    sophie@Antakathena:~/Workspace/fenix-launcher$ git pull
    fatal: unable to access 'https://scm-git-eur.misys.global.ad/scm/fnx/fenix-launcher.git/': Could not resolve host: scm-git-eur.misys.global.ad

    sophie@Antakathena:~/Workspace/fenix-launcher$ git pull
    ssh: Could not resolve hostname scm-git-eur.misys.global.ad: Name or service not known
    fatal: Could not read from remote repository.

    Please make sure you have the correct access rights
    and the repository exists.

sophie@Antakathena:~/Workspace/fnx-pegasus-reporting$ git checkout develop
error: Your local changes to the following files would be overwritten by checkout:
        package-lock.json
Please commit your changes or stash them before you switch branches.
Aborting

Notes sur les tips de Cédric pour les Git crédentials (ne pas avoir à rentrer le mp etc...:
[user]
email = <name>.<surname>@finastra.com //i.e. john.doe@finastra.com
name = <name and surname>        //i.e. John Doe
- $ git config --global credential.helper store
- https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git

NB dans le terminal :
```
$ git branch
```

## Créer un stash, méthode de Nabil:
    
    ```
    git add .
    git stash save "nom de mon stash"
    git stash list
    git stash apply
    stash@{idStash}
    ```
## **Erreur: commit non souhaité :**  

un commit avec le workspace (les paths) de VSCode fait par erreur et avec un mauvais nom  
Cédric m'a fait le retirer grâce à un ``git rebase interactif`` 
```$ git rebase -i HEAD~1``` (HEAD c'est pour le dernier et ~1 c'est pour remonter de 1 en arrière)  
ça ouvre nano -> choisir l'option voulue, ici drop au lieu de pick sur le commit pour le retirer puis ctrl+O, enter, ctrl+x pour exit  

NB : Enregistrer le fichier de sauvegarde du workspace VSCode plus haut dans l'arbre (dans le dossier workspace) pour éviter qu'il soit prit en compte par git.

Avant de faire rebase, pull etc, faire table rase des changements (changes) en cours (discard all changes ou autre)

## rebase :
 on peut choisir n'importe quel point de l'histoire de n'importe quelle branche, pas forcément develop aujourd'hui
on peut rebase sur une branche remote -> git rebase origin/develop
ou en local sur notre branche mais avant on fait le git fetch --all et git pull ou git fetch origin develop:develop -> git rebase develop (préconisé par Thanh)

## Branche Bitbucket
voir ma branche dans Bitbucket en rapport avec les autres branches : gris = commits en retard et bleu = commits d'avance
branche fix/FNX-XXX/bidulchose :  ////|####

Les convention de nommage pour la branche son dans :
https://scm-git-eur.misys.global.ad/projects/FNX/repos/documentation/browse/git

**Sur la branche du ticket :**

```git fetch --all```
```git fetch origin develop:develop``` si on est pas sur develop. Depuis develop : ```git pull```
```git stash```
```git rebase develop```
```git stash pop```
vérif test fait vendredi soir
check lint, si besoin :```npm run lint.fix```
commit et push
vérif PR et remettre les dev en partage

## commit naming
{action}({subject}): ({jira code}) {message}  
exemple: fix(view manager): (FNX-223) fixes view manager container

actions : functional = [feat, fix], technical = [ refactor, chore, test, doc...]  
 NB : incohérence dans la doc entre les deux listes de noms d'action  
 https://scm-git-eur.misys.global.ad/projects/FNX/repos/documentation/browse/commits 

subject = [component name, jira title, epic title]


### 2/11/22_Mercredi
**Important**: Après un ```git commit --amend``` faire un ```git push -f```/push force, car on a réécrit l'historique

PB de version de l'extension Gitlens, qui était une version "preview" 18.0 :
j'ai récupéré la version 13.0 qui est celle de Cédric, le fichier vsix, installé avec :  
```code --install-extension /home/sophie/SharedFiles/gitlens-13.0.3.vsix```






NB : prendre du temps pour enrichir la doc, notamment pour expliquer à quoi sert le rerere etc dans Git dans le repo documentation
    le repo Bootstrapping dans la documentation a aussi des infos sur Git
    + faire une formation Git sur linkedin