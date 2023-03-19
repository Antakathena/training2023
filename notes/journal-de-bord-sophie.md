
# Journal de bord de Sophie à Finastra_#1_2022

## Description du journal de bord:
Notes prises au fil des jours à Finastra. Aide-mémoire pour tout qui permettra de relever les sujets importants pour faire des fiches techniques ensuite.

### 03/10/2022_lundi -> 07/10/2022_vendredi
Première Semaine, sur site

Avant : Papiers remplis sur le dashboard d'accueil mais tout est demandé en double exemplaire (pb ds le code de la récup?)
Echanges RH avec Irina et Gabriella (Rounamie)
NB : certains papiers sont redemandés sur Workday ensuite...

### -----lundi 03/10-----
1er jour :
Accueil Thanh 10h à l'accueil du bâtiment (suite échange de textos avec Thanh);

**Récup ordi pour travailler** :
    Passage au desk...? en bas (Abdelhakim) pour récup poste (ordi, souris, adaptateur souris, dock, micro-casque);
    création du mot de passe général pour u730750 (que Thanh appelle mot de passe Windows):
    A..........#........... à changer tous les 3 mois (donc plus court la prochaine fois?)
    souris_pile morte, piles de rechangedonnée par carole à l'accueil.

    Au niveau des bureaux :
        Un dock et deux écrans à chaque bureau. Pour étendre aux autres écran : settings > system > display pour dire à l'ordi comment sont disposés les écrans (nb, avant, on peut voir le curseur aller à gauche en s'attendant à ce qu'il apparaisse à droite et être bloqué dans l'autre sens) +  ["windows" + P] et choisir "étendre" dans le menu qui apparaît à droite
        Il faut réserver sur l'app "Office App" (logo A bleu dans un cercle) un bureau au premier pour chaque jour où on veut travailler sur le site; edit (17/10): bureau 5568 ok (au bout, dos au mur, côté fenêtre), 5556 ok (plus central, côté fenêtre)
 

Tickets faits sur **Finastra portal** "ask something" https://finastra.service-now.com/pour avoir accès à :
    - bitbucket (leur Github)
    - jira ( pour le suivi agile : tickets, sprints, scrums...); scrum master = Cédric Waniez
    - Nexus
    - Jenkins (équivalent de CircleCI, pipeline)
    - Kubernetes

    TODO: Ajouter la liste des adresses envoyées par Thanh sur Teams

A récupérer :  
    - **badge** (photo à envoyer à l'accueil...) ; badge temporaire fourni par Carole. edit : photo prise à l'accueil 2 jours après  
    - **carte repas**("Swag") arrivera par la poste  
    - **Kimble** à remplir tlj pour envoyer en fin de semaine  (comptes rendus d'activité = CRA ou timesheet en anglais); down pour le moment jusqu'au 13. Edit (17/10): Droits créés mais il faut que j'ai des activités dans ma liste de choix.  
    - **casier** : demander à l'accueil à avoir un. Attention à la technique pour enregistrer le code. Bien valider avant de scrumbler

Installés :  
    - **slack** + canal dev, canal FNX_team + teammates
        NB : les tailles de T-shirt pour voter correspondent à la difficulté des stories, les tailles grandissent d'après une suite de Fibonacci. XS la plus facile à XL plus compliqué (temps/difficulté/pénibilité...)  
    - **teams** + teams FX Treasury et Treasury UX Initiative + review calendar  
    - **outlook** + penser à créer des règles de tri auto

### -----mardi 4/10------
2ème jour

## **Agile** pour l'équipe TCM:  
    Scrum master = Cédric Vaniez  
    Tous les jours :  
        - **daily scrum** à 10h15 (important, équipe large avec PO, QA, en anglais)  
        - **end of day call** à 17h (facultatif, équipe réduite)  
    Le mardi 14h en général :  
        **technical grooming** : l'équipe réduite aborde les détails techniques des stories (un ticket par story dans jira)
        between sprints, new technical grooming  
    **functional grooming** : c'est le PO qui présente les stories à toute l'équipe. C'est le moment où on essaye de comprendre le besoin. Les stories sont censées être déjà élaborées en amont. On pose des questions sur le besoin, on essaye de bien comprendre ce qui est demandé, on identifie des éventuels oublis/manques et si c'est tout bon, on estime grossièrement la story en taille de t-shirt. Sinon, elle repart chez le PO pour qu'il revoit sa copie.
    Entre les sprints: PI = **ProjectIncrements** planning < made according to the dependencies between teams (for ex if a frontend features needs a backend feature developed first)
    Un sprint dure 3 semaines, les sprints sont regroupés dans un PI
    edit 14/10 : **retro outcome** (dans le Teams de Treasury UX Initiative -> Meeting notes -> Retro Whiteboard) = des post it avec START/STOP/CONTINUE
    
## Les Projets:  
    Bitbucket comporte tous les projets de Finastra
    UXP est un legacy framework gradualy replaced by the FNX  
    TODO: Notes qui est PO de quoi (Betina PO de SACCR?)

Template generator in Fenix - using plop
PWA template
Voc : XSS vulnerability = faiblesse/intrusion entre le client et le serveur qui peut récup info des deux côté et laisser croire qu'il n'y a pas eu d'intrusion en renvoyant aux deux les infos voulues ou autre chose.

Package.json = équivalent de requirements.txt dans un projet python; c'est l'ensemble des dépendances nécessaires au projet et c'est ce qui est installé quand on fait npm install ($ npm i); qd on pull de nouveaux commits, ils demandent parfois de nouvelles dépendances, donc toujours mettre à jour les packages installés avec un npm i après un pull.

Changé < Diego dans package.json:
    "ts-jest": "~26.1.3"
    "typescript": "~4.3.5"
    à retenir : il s'agissait d'uniformiser les version entre package.json et ...? pour que ça marche;

NB : Noter les fichiers à changer pour mettre à jour le proxy: port utilisé par le TDD pour pouvoir ouvrir l'app;
attention aux protocoles : si https, http ne marchera pas


### 10/10/2022_Lundi

récupéré : Docker
Nb : toujours pb de connexions depuis la Vbox

### 11/10/2022_Mardi

Pour mettre à jour les repo, j'ai noté :

    git fetch --all
    git checkout develop
    // si on a des modif de notre côté :
    git stash
    git pull
    git stash pop

    // pour vérifier qu'on a les dépendances, npm install avec :

    npm i

    /*edit du 21/10:
    Faire tous les matin un rebase et push pour résoudre les conflits
    (C'est beaucoup plus facile de la faire au fur et à mesure et en ayant connaissance des PR pour savoir ce qui a été modifié)*/


12/10/2022_mardi

Vu avec Saurav sa façon d'enrichir de **commentaires les tickets** qu'il prend:
- ajouter les points importants/à tester au ticket pour faciliter l'analyse d'un "done"
     avec par ex : GIVEN/WHEN/THEN
- create Branch (depuis Bitbusket ou git) : see naming convention in doc : custom...
- then cd project
- git status -> actu si necessaire
- checkout develop
- git fetch
- git pull
- git checkout new branch

## Notes du Scrum/Grooming:
Blotter....
QNyu needs to find a way to transform reports into PDF. Solutions?
PDF Make library : check Whitesource stats and legal department, **?  checkmarx  ?**
host
callback
media_queries
class-wrapper for printing
alk-windows-manager: écrit par Thanh, permet d'ouvrir une seule window dans le browser comme avec Openfin ailleurs

## Problème de zscaler, CA certificate: 
Vbox devrait passer par le proxy (zscaler ici, qui modifie les clés d'authentification) et là il ne le fait pas.
SSL certificate pb : unable to get local issuer certificate error
bypass certificate?
could not handshake - the certificate is NOT trusted - the certificate issuer is unknown

CA = certificate AUthority
ca-certificate
sudo nano/etc/apt/sources.list.d/docker.list
sudo apt-get upgrade
sudo apt-get install ca-certificates

usr/local/share/... ?

community.scaler.com/t./installing-tls-ssl-root-certificates-to-non-standard-environment
crt
dossier certificate cert.zscale -> copier comme zscale.crt ?
cat ?


### 12/10/2022_mercredi

first time remote : install office at home
FNX-2649  No more COllapse/Expand all in the grouping column:
    échanges avec Thanh et Cédric
    - Read ag-grid documentation

### 13/10/2022_jeudi

- imprimé cheatsheet terminal linux : **à parcourir**

- paramétrer + extensions VScode pour : 
    - ne pas taper mot de passe à chaque fois (dans le terminal de base aussi):
    'https://u730750@scm-git-our-misys.global.ad': monmotdepasse
    - debuging js/tx
    - autres pour travail ac js, jest, eslint, ...
    - m'y retrouver avec 3 terminaux ouverts/app en même temps
    - trouver automatiquement les fichiers avec des conflits
    - ouvrir les conflits avec un écran split avant-après
    
- installé zsh pour remplacer bash et terminal pour Linux recommandés par Thanh (cf message MP d'hier sur slack 4:16 PM )?
    - zsh  : trop sensible pour le moment, revoir fichier de config de l'autocomplétion? -> retour à bash pour le moment
    https://doc.ubuntu-fr.org/zsh
    - terminator : intallé avec apt install terminator, **à tester**
    https://doc.ubuntu-fr.org/terminator

- KIMBLE CRA/timesheet

- pull reviews: focus Thanh/doc and Saurav/enum

- trouver le bug dans pegasus qui fait que le menu contextuel supérieur ne s'affiche pas quand on clic-droit sur le titre d'une colonne autre que format monnaitaire :
    fichier component responsable :
    /home/sophie/Workspace/fnx-pegasus-reporting/src/components/peg-table/peg-table.utils.ts
    const responsable : gridActionsToAgGridContextMenuItems ?
    bug depuis que : absolute sorting donc check aussi les deux fonctions suivantes

étudier aussi:
https://www.ag-grid.com/archive/27.0.0/javascript-data-grid/context-menu/
https://jira.finastra.com/browse/FNX-2456

nb : survenu pdt exploration pour debugg : écran noir avec "system output is loading - please wait"


    To DO :
    1- ouvrir Vbox,
    2- update
    3- check git status et mettre à jour les repo si besoin : 
        git fetch --all
        git checkout develop
        # si on a des modif de notre côté :
        git stash
        git pull
        git stash pop
    4- ouvrir deux terminaux : un pour fenix launcher et un pour fnx-pegasus-reporting
    5- lancer les applications. Si inaccessible, vérifier d'abord le port sur le TDD et le changer si besoin dans launcher (ts les"proxy")

## TLJ Vérif :
- notes : taper, si besoin avec explications, et organiser
- pull reviews : 1h? : 11h, prendre des notes pour grouper mes questions
- workday, dashboard?, emails : 15mn, 14h quand pas de réunion
- Code : explorer/comprendre/tickets

TLJ + aujourd'hui :
- cours VSCode
- trouver bug du context Menu de Pegasus et solution
- training webcomponent and ag-grid

## Infos fonctionnement JIRA
JIRA's Treasury UI Agile Board = https://jira.finastra.com/secure/RapidBoard.jspa?rapidView=3939
Pour accéder à un ticket précis, cliquer sur son nom Projet-numéro du ticket (ex : FNX-2733) -> adresse = https://jira.finastra.com/browse/FNX-2733,
il suffit de changer le nom du ticket dans l'url pour en retrouver un autre.
( + j'ai fait un dossier favori "tickets" sur google chrome)

En haut, les onglets des projets en cours de sprint, dont "my issues" pour celles qui vous ont été assignées
- la coccinelle indique un bug, l'encrier avec la plume un nouveau feature à créer ?
- les flèches vers le haut ou bas, le drapeau, indiquent las priorité
- les couleurs des surlignements indiquent le sprint ?
- les stories pour les futurs sprints sont dans le backlog (icone "pile de livre")
Pour faire passer un ticket du backlog dans le sprint actuel, clic droit sur le ticket -> sprint -> indiquer la version

## Cycle de vie, Exemple du Ticket FNX-2649  
    - s'assigner le ticket
    - creer une nouvelle branche (depuis le ticket jira d'après Cédric, via git dixit Diego et Thanh)  
     ( bien prepa config git aver rerere et faire git rebase develop régulièrement pour éviter les conflits. cf also : git)
    - lancer l'appli (en local run start ... choisir l'environnement et la config en fonction de ce qui marche. cf )  
    - tu verifies que ta correction fonctionne en local( + npm run lint.fix)  
    - tu fais tes tests unitaires (demande à philippe) (modif .specs + npm run test)  
    - tu push sur le serveur (sur quel serveur?): 
    1- verif changes ds IDE puis vue source control : stage changes
    2- saisir nom du commit selon la règle:
        https://scm-git-eur.misys.global.ad/projects/FNX/repos/documentation/browse/commits ; exemple :
        fix(view manager): (FNX-223) fixes view manager container)
    3- commit and push
        ou :   
        si besoin : fondre les commit etc dans ... > commit
        commit puis bouton "cycle" pour push and pull
    - tu crees ta PR, en mettant tous les devs en review (depuis bitbucket):
        nom de la PR : nature(precision):(nom-du-ticket) titre explicite
        -Vaniez, Cédric
        -Catarino, Philippe
        -SLITI, Nabil
        -Tan, Huynh Nhu
        -Bose, Saurav
        -BEN GAIED, Amira
        -Nguyen, Thanh
        -Vallarta Mendez, Diego
        -Gulyas, Adam
        -Trébatius, Sophie (edited)
        NB : si modif importantes après des validations,
        il faut retirer et remettre les gens sur la PR en review pour qu'ils voient les modifs
    - tu deploies  sur le serveur TDD :
        -faire un clone de compose (en général),
        -nom à donner = nom-du-ticket,
        -edit composition : ne laisser que le nécessaire,
        -changer le :develop pour :le nom-du-ticket,
        -start
    - après validation (3/4 ?) et si pas work to be done ou autre,
    - mettre à jour le ticket jira et le passer dans la colonne ready for PO. On l'assigne au PO (Philippe Escoffier), qui assigne à QA qui assigne à toi, puis merge puis retour à QA. Si ok on ferme.


### 17/10/2022_Lundi
Semaine 3

Au Washington Plaza, en cie de Saurav et Nabil, 
bureau 5568 très bien placé

1 commentaire sur ma pull request -> faire de "Default Items" une variable car répétée 4 fois?
    -> plus facile à changer, plus facile à reprérer si quelqu'un veut prendre en main le code

PR Saurav/ le bouton export vers excell dans FRX:
    Notes : 
    Fusion Risk = FRX
    stress-test est un terme business
    le $ dans $grid par exemple signifie "de type Element"
    la modif esty dans src > components > app-stress-test > app-stress-testsummary-grid.tsx
    ref -> put a reference to an element
    ref = { el => this.stressTestSummaryGridHeaderElement = el }
    FileAsBlobMetaData -> aller lire sur "Blob"
    Any request to server may take time (here the service GetExportData) so it must be async

VS code : installer extension Eslint et Gitlens

### 18/10/2022_Mardi  
grève des transports
matin : Scrum puis HR induction, puis rejoindre le tech. grooming dès que possible
aprèm : rdv atelier zéro déchet Linda équipe ESG (nb :Cédric a rejoint l'équipe ESG)

mettre à jour les repo
ajouter la variable "default items" à peg.

ranger dev down donc passer sur le serveur de compose -> changer config dans les iodc.json files et les app.json dans les repos
Faire un stash de chaque config pour la retrouver facilement.
Fait pour Fenix-launcher avec Cédric : un stash pour la config compose, un autre pour la config ranger dev.
Plus facile avec l'extension Gitlens sur VSCode qui affiche les stash.
Faire les stash config pour les autres repos demain.

### 19/10/2022_Mercredi

- mutuelle Hélium : remplir le papier
- add my picture to workday, teams etc
- suivre le cours d'intro sur Finlearn (cf mails)
- installer Gitlens et autres extensions VSCode recommandées dans:
    **Teams de Treasury UX initiative > Technical design > VSCode**
        c'est à dire :
            Gitlens
            EditorConfig (pour utiliser le script de config de code présent dans les repo qui parmatre les éditeurs de code pour utiliser les normes voulues par l'équipe)
            ESLint
            Material Icon Theme
            NPM Intellisense
            TODO Highlight
            Swagger VIewer (qui m'a demandé d'installer aussi YAML)
            Compare Folders
- créer des stash pour chque config pour Pegasus-reporting et Report-Manager
- formation aux array's methods. u.a. cf liens vidéos dans :
    **Teams de Treasury UX initiative > Technical design > Trainings**
- finir le ticket 2649 : add Const DefaultItems et filter les Items pour n'avoir que les nécéssaires
- attaquer le ticket 2435

- si fait : check zsh, terminal terminator, ssh knowledge


me renseigner sur ce que Frank a dit : poss d'avoir accès aux VPN etc à distance

NB : choix nécessaire pour le ticket FNX-2649 entre :
- faire une liste de strings des options à utiliser dans le column menu parmi les options de AG Grid params.defaultItems (ce que Thanh avait fait)
    ```javascript
const customDefaultItems = [ 'pinSubMenu', 'autoSizeThis', 'autoSizeAll', 'resetColumns' ]
```;
    NB : AG-Grid doc recommends using 'string' to pick from params.defaultItems
    NB : Philippe a dit de créer une constante; Elle serait dans grid.constants.ts et utilisable dans peg-table.utils.ts comme dans specs, mais Thanh pense que en début de fonction ça suffit et on peut utiliser la liste tel quel dans les specs (tests)
- faire un filtre sur params.defaultItems pour ne pas avoir les options indésirables, particulièrement 'valueAggSubMenu' (ce que Cédric pense qu'il faut faire, pour profiter des options dynamiques de defaultItems qui pourraient être utiles en fonction des colonnes), mais ça semble déjà présent dans peg-table-grid-options.definitions.ts :
l.149   ```javascript
getMainMenuItems: (params: GetMainMenuItemsParams) => params.defaultItems.filter(item => item !== 'valueAggSubMenu')
```

### 20/10/2022_Jeudi

daily scrum
préparation de la correction de PR pour 2649 + reply au commentaire de diego
ostéo à 11h30

pb copier-coller de linux vers windows (< mise à jour ?) : redémarrage machine virtuel a résolu le pb
lecture PR
pb pour push et fetch --all entre VScode et Git



### 21/10/2022_Vendredi

Admin :  
[X] emails  
[ ] workday  
[ ] photos/icones  
[ ] mutuelle  
[X] Kimble : fait  
[ ] Améliorer le tri des emails : step 1 chercher quelles sont les catégories -> dossier -> rules  
  
Developpement :  
[X] PR  
[X] Voir avec Amira pour expl. sur son travail sur l'ajout de la liste des ? (instances) au rapports dans SA-CCR  
[X] Ma PR : post reply to Diego && push commit to TDD  
[X] get-update linux  
[X] fetch --all sur repos + stash si besoin + pull si besoin  
[ ] rebase develop pour éviter trop de modifs à la fois   
[X] changer le gitconf du repo de http pour ssh (plutôt que tout retirer et re-télécharger)  
[ ] lire la doc envoyée par Cédric sur l'auth dans VSCode pour ne plus avoir à saisir le mot de passe  
[ ] étudier ticket 2733  

Formation :  
[X] lire la doc sur gitflow workflow envoyée par Thanh (nb : le workflow a évolué < équipe grandissante)
[ ] lire et faire les trainings UI  
[ ] lire et suivre vidéos de training et doc dans Teams  
[ ] continuer l'intro training de Finastra

(pb pour push était lié au mot de passe à saisir)

**Kimble :** https://finastra.lightning.force.com/lightning/n/KimbleOne__MyTimesheet
click on clock logo next to monday in the timesheet, select Kondor...2 puis Treasury UI MVP
indiquer que c'est pour la semaine, ensuite select all draft, puis submit all selected

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

#### fin de journée :
AG Grid: colDef.type '"+t+"' does not correspond to defined gridOptions.columnTypes" pour le ticket

Soucis pour actu pegasus et réglages Code Lens ou Gitlens dans les settings ( cf favori à voir):

sophie@Antakathena:~/Workspace/fnx-pegasus-reporting$ git checkout develop
error: Your local changes to the following files would be overwritten by checkout:
        package-lock.json
Please commit your changes or stash them before you switch branches.
Aborting

### 24/10/2022_ Lundi
Bureau 5563 pour travailler debout. NB : les bureaux pour travailler debout sont notés (E) sur l'app de résa
Nabil 4 enfants, dont un petit de un mois et demi :-)

Jira : pour changer un ticket de sprint, se l'assigner, clic droit sur le ticket dans le backlog pour l'assigner au sprint en cours (connaitre le nom et connaitre la version du fix qui sera demandé). Pour changer de colonne une fois dans le bon sprint, simple glisser-déposer

Notes sur les tips de Cédric pour les Git crédentials (ne pas avoir à rentrer le mp etc...:
[user]
email = <name>.<surname>@finastra.com //i.e. john.doe@finastra.com
name = <name and surname>        //i.e. John Doe
- $ git config --global credential.helper store
- https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git

Admin :  
[ ] emails  
[ ] workday  
[ ] photos/icones  
[ ] mutuelle  
[ ] Kimble en fin de semaine
[ ] Améliorer le tri des emails : step 1 chercher quelles sont les catégories -> dossier -> rules  
  
Developpement :  
[ ] PR  
[X] demander à des devs de me parler de leur travail sur un ticket -> Thanh, FNX-2597 // 2489 // 2579 (tickets liés)
[ ] get-update linux  
[X] fetch --all sur repos + stash si besoin + pull si besoin  
[X] rebase develop pour éviter trop de modifs à la fois (fait pour Pegasus)
[ ] lire la doc envoyée par Cédric sur l'auth dans VSCode pour ne plus avoir à saisir le mot de passe  
[ ] faire le ticket 2733  

Formation :
[ ] lire et faire les trainings UI  
[ ] lire et suivre vidéos de training et doc dans Teams  
[ ] continuer l'intro training de Finastra
[X] vérif procedure/cicle de vie d'un ticket Jira -> fiche
[ ] vérif procedure/config pour passer du serveur compose au serveur rancher dev-> stashes qui vont bien + fiche (pour indiquer la méthode des stash entre autre)

#### Notes conv. ac Thanh sur le Ticket FNX-2597:
Pour lancer le launcher, on passe pas le serveur OIDC pour s'authentifier
( ça doit être pour ça que oidc.json n'est que dans le dossier du FNX Launcher)

### Ticket 2597 : Dans Pegasus report :  
    n charts ( plusieurs graphiques) peuvent être affichés et paramétrés pour chaque vue enregistrée. Il faut que ces réglages (config) persistent et que recharger une vue fasse aussi revenir les charts tels que l'utilisateur les avait configurés.

    Pour garder des réglages, ils utilisent l'**API Persistence** ("mise à dispo pas le backend") qui fait en gros une copie du "local storage"(API native du browser) et la ressort qd appelée.

### Code à observer dans peg-table-tsx :  
    @listen
    sur interface graphique on peut voir la possibilité car "unsaved" s'affiche et on peut cliquer une marque "coché" pour save
    voir case 'restore', case 'save'
    On sauvegarde les filtres et la config du tableau.


-------
De base, **le filtre AG-Grid** s'applique **par colonne** mais il y a aussi des **filtres globaux** (cf persistTableState)

Quand il y a une modif dans le parametrage d'une colonne (par ex) -> on notifie la vue que qq chose a été notifié (l.487)
this.chartConfigfs

Alk windows manager + channelHub permettent de créer un tableau qui liste les autres fenêtres ouvertes en même temps que celle qui liste grâce à un message envoyé à chaque fois par les fenêtres qui s'ouvrent et qui se ferment (HI et Goobye)

Le ticket 2579 avait pour objectif d'ajouter des noms aux fenêtres via une nouvelle API pour récup infos sur quelles fenêtres sont ouvertes.

channelHub = Com-API : impl de com entre les API pour utiliser le même code que sur openfin sur le browser

NB dans le terminal :
```
$ git branch
```
donne accès aux branches locales
la touche Q sert à couper

## Créer un stash, méthode de Nabil:
    
    ```
    git add .
    git stash save "nom de mon stash"
    git stash list
    git stash apply
    stash@{idStash}
    ```

**Fin de journée :**
Pour le ticket n°2733 :
Vérif que tri mis dans la persistence + vérif que filtre réappliqué quand on récupère la vue

### 25/10/2022_Mardi

Bureau 5548 qui se lève
Midi : Tacos
14h Technical grooming

## pb de port < Nodes pas fermés
Pb de port : compose ne s'ouvre plus sur localhost 3360 malgré le port changé
--taper notes--

Determiner quel programme utilise ou bloque un port :
Using Netstat command:

- Open a CMD prompt
- Type in the command: netstat -ano -p tcp
- You'll get an output similar to this one
- Look-out for the TCP port in the Local Address list and note the corresponding PID number

**Fin de journée :**
le pb de port est un pb de node pas fermé. Fermer un terminal n'arrête pas le processus, il faut le faire.
-> solution Thanh :
-> solution Cédric : **htop** -> filter et kill les nodes plus utiles
Sinon, depuis **VSCode->terminal->run->task** : on peut lancer un terminal dédié à la tâche et quand il est tué ça arrête aussi le processus


## Recap chgts entre config compose et rancher dev :
Ds le dossier manifests, ajouter ou modif le fichier environnement.json :

```
{
    "ENV": "local",
    "PROXY": "true",
    "IS_MOCKED": "{IS_MOCKED}"
}
```

#### apps.json, launcher.json et oidc.json, détails des modifs :

**apps.json :**
passer tous les http: en https:

vérifier le port pour proxy en fonction de celui indiqué dans le TDD

**launcher.json :**
passer aussi les http: en https:

**oidc.json :**
pareil pour "redirect_uri", ""post_logout_redirect_uri" et "silent_redirect_uri" qui sont en https pour rancher dev et http pour compose
edit : attention que l'url corresponde à celle voulue dans le oidc.json du TDD choisi' (ex: oidc-provider:8000 si c'est celle utilisé par compose, à vérifier en lançant le TDD de compose et ajouter manifests/oidc.json à la fin) pour avoir un token d'identification qui satisfasse le backend. Pas de difference de MP ou ID sinon mais le backend n'enverra pas les rapports par exemple.

**Ds Package.json, seulement si sous windows (pour Nabil) :**
"start.port-fixed": "npm run start -- -p $npm_package_config_dev_port",
par
"start.port-fixed": "npm run start -- -p 3351", ?IPegasusReportConfig

localhost ou 10.21.229.149 (adresse IP?)



## Pour ticket après validation PO :
1- Git rebase develop (on récupère tous les changements qui ont pu intervenir sur la branche en dehors des notres)
    - rebase develop
    - Bien régler tous les conflits éventuels
    - stage files to commit
    - git rebase continue (si nécessaire)
    - push -f (on force le push -> pourquoi forcé?)

    vérif PR (ma boîte pour ce ticket dans le TDD) :
    - regarder les fichiers de la PR pour que ça soit exactement ce que je veux,
    pas d'erreur dans les gestions de conflit, nombre de commit équivalent à la PR

    - faire le push -f lance un build sur jenkins, pour vérifier que la branche n'est pas cassé, ce qui prend entre 30 min et une journée
    - on voit l'avancée du build sur la page des PR pour le repo dans bitbucket : à droite de la ligne de la requête
            Pas d'icône = build en liste d'attente, dès que Jenkins se rend compte qu'un nouveau push a été fait il lance les vérif pour un nouveau build
                        NB : on peut le lancer manuellement aussi (fait par Cédric aujourd'hui après le retrait du commit erroné) 
            Icône chrono violette = en liste d'attente, le build est en cours, on peut le suivre en cliquant près de l'icone depuis la PR (toutes les étapes en bas)
            Icône verte encoche = build ok
            Icône rouge point d'exclamation = pas ok
2- Toujours depuis Bitbucket :
    - bouton Merge
3- ça envoie dans develop via jenkins qui build, vérifie et créé une nouvelle image
    - scruter la branche develop, l'icone chrono indique le build en cours
    - vérifier,
    - update la branche dévelop
    - vérifier que le fix est bien présent dans le TDD develop
4- assigner à Philippe Escoffier qui vérifie que ça fonctionne (2ème valid) (et il fait le reste si ça marche?)
    - assigner au PO


## **Erreur: commit non souhaité :**  

un commit avec le workspace (les paths) de VSCode fait par erreur et avec un mauvais nom  
Cédric m'a fait le retirer grâce à un ``git rebase interactif`` 
```$ git rebase -i HEAD~1``` (HEAD c'est pour le dernier et ~1 c'est pour remonter de 1 en arrière)  
ça ouvre nano -> choisir l'option voulue, ici drop au lieu de pick sur le commit pour le retirer puis ctrl+O, enter, ctrl+x pour exit  

NB : Enregistrer le fichier de sauvegarde du workspace VSCode plus haut dans l'arbre (dans le dossier workspace) pour éviter qu'il soit prit en compte par git.

Avant de faire rebase, pull etc, faire table rase des changements (changes) en cours (discard all changes ou autre)

## **Erreur: rebase fait sur la branche develop locale pas à jour**

(clique sur le log pour savoir ce qui cloche en cas d'erreur ! )

Rebase fait sur la branche develop locale au lieu de origin et il y avait eu un commit de quelqu'un depuis mon dernier pull sur de la branche develop,
j'avais oublié de faire fetch --all, checkout develop, pull juste avant de revenir sur ma branche et de faire le rebase develop

+ le pull en question devait être suivit d'un ```npm lint.fix``` et d'un ```npm i``` pour être à jour sur les paquets

Pour vérifier que notre rebase est fait sur une base saine :
- dans bitbucket : vérif "commits"
- dans bitbucket "branches" : vérif que sur notre branche, on a tous les derniers commits

Fin de journée :
  407  node -v
  408  git pull
  409  git status
  410  git rebase origin/develop
  411  git pull
  412  npm -i
  413  npm i
  414  git push -f
  415  git push origin fix/FNX-2649/missing-column-menu  -f
  416  npm run lint.fix
  417  git add .
  418  git status
  419  git commit --amend
  420  git push origin fix/FNX-2649/missing-column-menu  -f
  421  npm i
  422  history

Quand le build de develop est passé après mon merge, faire update sur les TDD compose et Develop et assigner le ticket à Philippe escoffier

### 27/10/22_Jeudi
En tant que dev, toujours ouvrir la console de dev sur le browser + ouverture auto sur fenêtre pop up dans les parametres de la console de dev.

Attention à ne pas confondre le code source sur bitbucket et le build généré, qui donne (est?) l'instance sur le TDD. Celle-ci est une image docker pour pour les app et components ou un build poussé sur Nexus s'il s'agit d'une librairie.

Node.js installe npm avec Registry npm.global. C'est là (sur leur site) qu'on peut trouver les librairies publiques et les récupérer. Finastra a un autre repo, privé, avec leurs librairies custom (alk). Quand de chez finastra on demande une librairie globale, si elle n'est pas déjà dans le repo, ça va la chercher sur le repo public et le garde en stock.

Les éléments qu'on trouve dans les repositories du TDD sont de différents ordres : les librairies, les éléments : atome -> molécules -> organismes d'autre part (symbole sur TDD = 4 carrés), les Web components, les templates, les services, les storybooks **(à vérifier pour les derniers)**

Un push, quel que soit la branche, génère un build jenkins  
si pas branche master : (exemple :ALK Radio + nom de la branche + n°de la branche) le seul moyen de vérifier si on a la bonne image est d'aller voir le nom complet du build

console log: sur +sieurs app on génère un tag, savoir sur quel registry on veut récupérer l'image,
**12:32:34 + docker push p 21d3220150001... fix/FNX-2649/missing-collapse** on trouve la bonne image et on vérifie le tag -> image utilisée dans edit env


Qd le build est testé et vérifié les builds sont stockés (ou devraient l'être) sur le nexus de façon permanente.( apparemment Thanh et Cédric doivent discuter car les images peuvent être écrasées avec une certaine méthode)

## FNX-XXX :
 indique un build temporaire, souvent nécessaire à un dev pour travailler sur qq ch sans que ça ait besoin de faire le circuit de validation.


## **Erreur 401** : OIDC
**Erreur 401** souvent en rapport avec oidc.json :
L'Authentification est déléguée au serveur Oidc.
Si l'adresse a changé (ici de oidc-keycloick... à oidc-provider:8888), les username et mot de passe fonctionneront (< clone ?) mais le token fourni ne sera pas bon, donc pas reconnu par les services backend (comme les rapports), qui ne seront donc pas accessibles.

### 28/10/22_Vendredi

## rebase :
 on peut choisir n'importe quel point de l'histoire de n'importe quelle branche, pas forcément develop aujourd'hui
on peut rebase sur une branche remote -> git rebase origin/develop
ou en local sur notre branche mais avant on fait le git fetch --all et git pull ou git fetch origin develop:develop -> git rebase develop (préconisé par Thanh)

## Branche Bitbucket
voir ma branche dans Bitbucket en rapport avec les autres branches : gris = commits en retard et bleu = commits d'avance
branche fix/FNX-XXX/bidulchose :  ////|####

Les convention de nommage pour la branche son dans :
https://scm-git-eur.misys.global.ad/projects/FNX/repos/documentation/browse/git

### 31/10/22_Lundi

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

Chercher doc sur Adaptable tools

TDD -> PO -> QA -> Merge avec une image TDD bien à jour avec tout (bien faire update sur son TDD une fois le build fini)

## VBox
'CTRL droit + F' in VBox -> plein écran = "zen mode"
'CTRL droit + P' in VBox -> pause

Devtools -> 'CTRL + P' -> index to open files

Check : 2680

JS primitive types and non-primitive types
Prototyping
.apply()
.call()
.bind()

// line comment
/* block comment */
/** documentation */

stencil.config.ts (don't commit): à la fin:
SourceMap:true

Voir QY : FNX-2680 ?

### 3/11/22_Jeudi

- [X] PR : à jour (mais celles de Diego sont trop complexes pour que je les "valide"-> lui demander de m'expliquer?)  
- [X] merge approved ticket  
- [] e-mails, remplir fiche d'inscription à mutuelle Hellium  
- [ ] taper notes + créer fiches techniques claires et distinctes  
- [ ] training UI (dans bitbucket) + "this" en JS  
- [x] VBox : apt-get update et actu repo (rebase etc...) + ticket 2733   

### 9/11/22_Mercredi

- [X] PR  
- [X] training : Adaptable tools (u.a. EventApi), testing en Js, Jest  
- [X] prototype?, snapshot ds Jest?   
- [x] update, rebase + ticket 2733 : instance TDD en ligne (deployed)
- [ ] ticket 2733 : écrire tests  

TODO : Ticket 2733 : écrire tests  
Le bug (vue sauvée avec tri absolu rechargée sans tri absolu -mais avec l'icône) est résolu en mettant l'appel à debounceCustomSorting ailleurs dans la fonction onGridInitialized.  
En réponse à l'event : ```'modelUpdated'``` -> ```debounceCustomSorting``` est bien appelé -> ```initAbsoluteValueSorting``` a les arg pour entrer dans le ```if``` et indique la définition des colonnes.  
En réponse à l'event : ```'AdaptableStateChanged'``` -> debounceCustomSorting : appelé ? oui/non -> ```initAbsoluteValueSorting``` : appelé ? oui/non, entre dans le if ? oui/non  
Il semblait que la fonction initAbsoluteValueSorting était appelée trop tard mais je me demande s'il n'y a pas un problème avec :
```this.adaptableApi.eventApi.on('AdaptableStateChanged', (event: AdaptableStateChangedInfo): void => {```

Etude du travail d'anciens dev sur les PR :
- Guillaume Felix, PR may 17th 22,  
    fix(sse): (FNX-2434) fixes real time updates with layout changes
- Nicolas Merinian (u725236):
    PR FNX-1479 - add Ag-Grid table + mocked data



### 10/11/22_Jeudi

- [ ] PR
- [X] e-mails, prendre tickets de tombola
- [ ] taper notes + créer fiches techniques claires et distinctes   
- [X] VBox : apt-get update et actu repo (rebase etc...) + ticket 2733
- [ ] optimiser bureau (5S)
- [X] afficher branches dans le terminal (éditer variable PS1 dans .bashrc)
- [ ] écrire tests 2733

## Tests 2733 :  
la fonction à tester est ```onGridInitialized``` : il faux savoir si elle appelle bien ```initAbsoluteValueSorting``` avec les bonnes infos. (test d'intégration?)

Existe-t-il une similation (mock) de l'initialisation d'une page ?
NB : ajouter une pseudo colonne avec des montants comme valeurs qui peut indiquer si c'est trié ou pas par valeur absolue?
Sujet lié :- qu'a fait Amira pour éviter les appels aux backend pour les rapports? - comprendre tests FNX ajoutés récemment (Thanh, Philippe C., Diego?) et anciens (Guillaume Felix, Nicolas Merinian)

elm = peg-table = peg-table

const event = new CustomEvent<AdaptableReadyInfo>('alk-adaptable_ready', { detail });  
    await elm.onGridInitialized(event);  
    await elm.onGridInitialized(event);
    expect(eventListener).toBeCalled();
    expect(eventListener).toBeCalledWith('modelUpdated', expect.any(Function));
    expect(eventListener).toBeCalledWith('AdaptableStateChanged', expect.any(Function));
            
[X] //*pourquoi 2 fois?* : await elm.onGridInitialized(event);
    Réponse de Thanh : pas de raison, à voir peut-être dans une autre story (on traite un pb à la fois, pour s'y retrouver après)

[X] Comment lancer une observation de fichier pour des tests "en live" en fonction des changements? demander à Thanh de me redonner la cmd
    ```npm run test.unit.watch peg-table.spec```
    NB : le fichier n'était pas sauvé après l'ajout du f avant le it du test à vérifier ( pour force -> fit est le test qui sera joué)
    Du coup, trop de tests à watcher, donc vérif du "nombre de watch possibles" avec :
    ```cat /proc/sys/fs/inotify/max_user_watches```
    correctemment paramétré. Il fallait juste sauver avec le f devant le test (sans espace)

[ ] Terminal : afficher la branche -> pb de longueur de ligne.


### 14/11/22_Lundi

npm run test.unit.watch peg-table.utils
npm run test.unit.watch peg-table.spec
reset && npx stencil test --spec src/components/peg-table/peg-table.spec.ts
npm test src/components/peg-table/peg-table.spec.ts -t 'should call initAbsoluteValueSorting when model is updated' --no-coverage


Récupérer l'historique:
history | grep test
fc -ln -4 -l
history 10 // seulement les 1

### 15/11/22_Mardi

rattrapage sur les PR
essais de tests sur 2733 : l'erreur du test viendrai du délai que le debounce créé dans la fonction, le expect arrive donc avant.
Bo-Bun récupéré avec QN après une balade sous la pluie. Papillons dorés sur les murs du resto. Déjeuner en bas avec tout le monde. 
technical Grooming de 14h à 16h30. OLAP cube et dimensions, mesures... pour des filtres à appliquer sur les graphiques.
Dû partir à 16h30 pour récup les enfants à l'école

https://jestjs.io/fr/docs/tutorial-async
https://codewithhugo.com/run-skip-single-jest-test/
https://jestjs.io/docs/expect
https://www.youtube.com/watch?v=gA-uNj2FgdM&list=TLPQMTYxMTIwMjJDYsQlytJCnw&index=2
https://stackoverflow.com/questions/62712676/async-await-test-with-jest-not-working-in-node-js


### 16/11/22_Mercredi

        /* NB : .skip to ignore a test
        ```'modelUpdated'``` ->```debounceCustomSorting``` ->```initAbsoluteValueSorting```
         + done in the parameter and done() at the end -> no improvement = syntax problem ? + don't forget to catch errors
           jest.useFakeTimers()
           expect(callback).not.toBeCalled()
           Fast-forward until all timers have been executed
           jest.runAllTimers();
           //Now our callback should have been called!
           expect(callback).toBeCalled();
            expect(callback).toHaveBeenCalledTimes(1);

         await expect(initAbsoluteSorting).resolves.toBeCalled(); -> nope
         not to be called ne passe pas non plus, donc le pb est autre? debounceReloadGridData est appelé avec un debounce
         parce que debouncedListenForAgGridChanges est appelé suite au ModelUpdate.
         Mais pourquoi vu qu'on a pas columnVisible et que c'est plus loin dans onGridInitialize?
        */

        Pour changer l'éditeur nano pour VScode quand on fait une commande comme git --amend (et peut-être git rebase -i HEAD~2):
        git config --global core.editor "code --wait"
        // ou pour un repo précis:
        git config --local core.editor "code -w"
        // pour revenir à nano:
        git config --global --unset core.editor

### 17/11/22_Jeudi

- PR du 2733 publiée hier, en attente de réactions de l'équipe :
        retirer le commentaire oublié ds utils;
        chercher ds develop le truc à réutiliser (QN comment) pour éviter la dupl. de code;

- deep learning : get better at VScode et JS
- revue des PR
- branche affichée ds terminal VScode + longeur de commandes acceptables

## VSCode sous linux :
ctrl + maj + E : focus sur explorer
ctrl + B : fermer/ouvrir l'onglet de gauche
ctrl + tab et ctrl + shift + tab : naviger dans les onglets ouverts
ctrl + Alt + A = toggle block
ctrl + P : pour chercher des fichiers (attention si plusieurs fichiers portent le même nom dans différents dossiers)
2 fichiers selectionnés + clic droit "compare selected" : permet de comparer les deux fichiers


ds src/helpers/column-types.utils.ts:
/*
 import { setAbsoluteSorting } from '../components/peg-table/peg-table.utils';
//le fix de absSort FNX-2733 ne passe pas le build si cet import est là :
 error  'setAbsoluteSorting' is defined but never used. Allowed unused vars must match /^h/u
 En profiter pour ajouter 'absolute' aux PEGASUS_COLUMN_TYPES_DEFAULT ?
 */

### 18/11/22_Vendredi

 manage alert on new java version
 faire que slask s'ouvre au démarage !
 [] Clone UI Training
 name of the branch + cmd lenght in the terminal (bash.src)
 merge 2733 if validated
 réu ac Diego

 check rebase +  don't forget npm i

 **idées pour après :**
 2655 Ag grid
 2714 ? adaptable
 2621 alk-window-manager trigers drilldown et autres liés à Report Viewer platform

 télécharger App swile sur le tel
 Prendre rdv kiné la Boétie et impr tiers payant Helium, ostéo?, annuler autre mutuelle


Régler l'apparition de la branche dans le terminal, pb de taille de commande:
 $ getconf ARG_MAX    # Get argument limit in bytes
E.g. on Cygwin this is 32000, and on the different BSDs and Linux systems I use it is anywhere from 131072 to 2621440.
Bon finalement, ça fonctionne sans changer.

[WIP] = work in progress pour la PR (par exemple, il reste des tests à ajouter)
Adaptable tools, event API
prototype : fait partie de JS, qui utilise des modèles d'objets. Le prototype est un parent/modèle d'objet (à vérifier) (est-ce similaire aux classes abstraites en python?)

SSE = serveur sent event

### 21/11/22_Lundi

Saurav et moi seulement au travail.
Bureau 5578 E. Déjeuner salade au Franprix montré par Saurav à 14h.
Abdelhakim m'a gentillement changé un des écran qui ne marchait pas.
Tant mieux, je suis au même endroit demain.(edit 22/11 : sans surprise, être près de la machine à café est mieux le lundi que le mardi)

## Checklist pour gérer les tickets :
1- Identify issue
2- Study
3- Solve
3- Prepare sharing
4- Share and Follow up

### Identify issue :
    - s'assigner le ticket
    - reproduire l'erreur
    - enrichir le ticket de commentaires; ajouter les points à tester (Given-When-Then) dans une démarche TDD -> faciliter l'analyse d'un done
    - créer une nouvelle branche (depuis le ticket jira sur bitbucket d'après Cédirc, en ligne de commande absolument d'après Thanh et Diego)_ cf fiche git

### Study :
    - s'assurer de l'environnement
    - reproduire l'erreur en s'assurant de l'environnement, messages consoles etc, analyser les étapes ac webtools debug
    - étudier les PR liées au bug/feature
    - write tests

### Solve:
    - find solution
    - local tests (by hand and run linting and jest)

### prepare sharing :
    - rebase branch on develop
    - push solution and tests
    - créer PR
    - créer une instance de TDD à partir de la bonne image de ma branche, start, update qd nécessaire

### Follow up :
    - partager la PR, suivre les commentaires et corriger jusqu'à validation
    - faire tester par PO
    - merge puis suivre tests QA




**Ticket 2731 :**
[X] me l'attribuer
[ ] le faire passer du backlog au sprint en cours -> demain car on change de sprint

## learning
Prépa solution pour mesurer mes progrès:
[X] réalisation d'un plan d'action avec indication des domaines à étudier, ressources, objectifs SMART

[X] Explorer à la Découverte de linkedin Learning


### 22/11/22_Mardi

[X] Etude du ticket 2731
[X] Réunion de technical grooming
[X] Do a **fix for a forgotten import** in my last PR/ticket, the 2733
Branch created, after rebase on develop create a PR to share with explanation :
"update import from "@ag-grid-enterprise/all-modules" (for using Array<Column> in test 'should call initAbsoluteValueSorting when model is updated')

**fin de journée** : création d'une branche pour un fix (oubli d'import par rapport au dernier ticket)
git stash
git checkout develop
git fetch --all
git stash
git pull
git rebase develop
git stash pop
npm i
git checkout fix/FNX-2733/reload-AbsoluteSorting-in-view 
git checkout -b fix/FNX-XXX/add-import
npm run lint.fix
git status
git push --set-upstream origin fix/FNX-XXX/add-import

Problem : Branch name doesn't change in the terminal when a checkout is made. (edit : solved)


### 23/11/22_Mercredi
Matin : revue du ticket 2733 sur absolute Value Sorting, avec Magda notamment, car à l'init de la vue sauvegardée, autre bug:
1 fois sur 5 max, le tri enregistré comme ascendant devient descendant et inversement.
Après avis de Thanh sur la question, Magda ouvrira un nouveau ticket pour ça et celui-ci sera classé (qui a répondu : "intuitivement, je dirai que c'est l'application du sorting qui ne se fait pas à temps, ouvre un nouveau ticket, ca donnera l'impression que ca avance :p" )

Cédric m'a proposé une présentation de git sur VSCode.
Je fais d'abord le cours sur les lignes de commandes suite à la demande de Diego pour mieux comprendre les concepts liés à git et ensuite j'en profiterai. Je pense qu'il faut que je maîtrise les deux, au moins pour les actions courrantes.

Du coup, début d'une fiche sur Git
Cours linkedin learning commencé

Grosse faiblesse vers midi. Concentration difficile l'après-midi
Passage sur des notions liées aux web components en milieu d'aprèm sur linkedin.
Création de la branche pour le ticket 2731 (en ligne de commande)

### 24/11/22_Jeudi

**Matin :**
aménagements et nettoyage home office
suite du cours sur Git
lecture : you don't know js, on this, diff between js objects and primitives

**Midi :**
tirage au sort de la tombola ESG, dons pour la lutte contre le cancer de la prostate

**Aprèm :**
functionnal grooming (mostly assign roles to user and limit access to apps)
-> pourquoi ça ne se fait pas par le back end, comme avec Django?

Régler le ticket 2731 sur ma branche (pas de PR, le repo "Report Viewer/Pegasus" va être "frozen" pendant un certain temps (1 sem?) par Diego pour le stabiliser)
    Il s'agit de faire apparaître le nom de l'extension après le nom de repo sur l'onglet des charts dans pegasus.

NB : rattrapage à faire sur les PR
-> demander "traduction" 


### 25/11/22_Vendredi
Daily Scrum:  
New UX : Céline SALAME, based in Lille  

2731 put it on hold until after Diego says the report viewer repo isn't frozen anymore for stabilization purpose -> find something else?  
2483 proposée par Cédric et QN : création d'une app TB trade blotter  

[X] PRs  
[X] VSCode Git et debuggage (des fichiers de tests, les autres se débuggent grâce aux webtools du browser(plus éventuellemnt le source map : true))  
[ ] Abs/sorting pb (asc/desc. onGrid upload) (prévoir la solution pour le ticket à venir)  
[ ] Ask : who's PO is that?  
[ ] petit projet web component stencil?
[ ] comprendre SA-CCR : rxls ou FRX pour tenir companie à Saurav?  
[X] taper notes  : 15 min timer
[ ] confirmer la solution du 2731 en ajoutant la config du 2451 (branché sur un backend qui dispose de la liste des extensions)  

En fin de PI : l'équipe note si confiant que l'équipe peut tout faire avant la fin du sprint, note entre --1 et 5++
s'il y a des notes en dessous de 3 : pas confiant donc il faut en discuter. Thanh disait qu'il aurait dû rester en dessous de 3 car inquiet à cause du backend souvent down, donc on ne peut pas avancer.


### 28/11/22_Lundi
[X] Branch name dans le terminal : trouver comment changer qd on fait un checkout vers une autre branche -> ajouter un antislash avant $PS1/$ car "" (échap)  
[X] taper notes : 15 min timer  
[X] improvement and learning plan -> add daily log in BUJO  
[X] PR (pas validées mais lues : quesitons en cours ou sujets devops)  
[X] 10 min contact with a co-worker to learn smthing: forEach implementation is complicated, be careful of if echap signs are needed with double quote  
[X] 60 min linkedin vidéo :jest 
[X] Codewars JS (min 2 kata 8/7 ou 1 kata 6)  



### 29/11/22_Mardi

Matin : Point de Diego sur Treasury UI chart
Aprèm : technical grooming
Mal à la tête

[ ] taper notes : 15 min timer  
[ ] improvement and learning plan -> daily log, monthly log
[ ] PR
[X] 10' min contact with a co-worker to learn smthing : Cédric, divide a function in two : a pure function in utils (or helpers if needed in several components) to define tab name and an other that send the info to the UI. 
[ ] 60 min linkedin vidéo :jest 
[X] Codewars JS (min 2 kata 8/7 ou 1 kata 6)
[X] lecture mdn sur IIFE et fonctions fléchées
[ ] 1 video from UI training
[ ] + ajouter 2 tests au 2731 qui vérifie que le tab name est bon quand execution dispo et qd pas dispo (repo seul je crois)
    -> en fait, diviser en deux tâches : définir le nom du tab selon la demande, appeler ce nom et l'appliquer à l'onglet des charts dans l'UI
    -> en fait, la première tâche est = à ce qu'à fait Amira dans peg-report-configs-lists.utils.ts
    -> le rendre disponible pour tous les components en le remontant dans helpers

## Notes on Unit Testing:
https://eliteionic.com/tutorials/the-basics-of-unit-testing-in-stencil-js/

A unit test is small and isolated.

describe() defines a test suite (e.g. a "collection") of tests (or "specs")
it() defines a specific test or "spec", and it lives inside of a suite (describe()). This is what defines the expected behaviour of the code you are testing, e.g. "it should do this", "it should do that"
expect() defines the expected result of a test and lives inside of it()

```npm init stencil``` : generate a new ionic-pwa, then make it your current working directory
```npm run build ``` create an initial build of the application
```npm test``` : The first time you run this, it will install all of the required dependencies to run the tests. There are default tests ( 13 tests in total across the three default components) for an untouched blank ionic-pwa

AAA :
Arrange - get the environment/dependencies/components set up in the state required for the test
Act - run code in the test that will execute the behaviour you are testing
Assert - make a statement of what the expected result was (which will determine whether or not the test passed)



### 06/12/22_Mardi

Nullish coalescing assignment ??=
Nullish coalescing operator ??
Optional chaining ?.



pour Thanh, les priorités dans l'ordre:
- maitrise de l'environnement de travail (OS, IDE...)
- apprentissage de javascript
- apprentissage de typescript
- apprentissage des outils de dev (git, eslint, stencil...)
- compréhension de la stack technique et de l'architeture logiciel
- compréhension du business
- comprehension du build/deploiement
- le reste

Ticket 2731 :  
modif private setViewTitle dans peg-main
 retiré :  
          if (Boolean(this.selectedReportConfig) && Boolean(this.selectedReportOutput)) {
            const { reportLabel, configName } = this.selectedReportConfig;
            const { table, tableLabel } = this.selectedReportOutput;
            const configTableLabel = tableLabel ?? table;
            const configLabel: string = Boolean(configName) ? ` - ${ configName }` : '';
            const executionLabel: string = this.selectedReportConfig.reportExecution?.description ?? '';
            setTitle(`View - ${ reportLabel }${ configLabel } - ${ configTableLabel } - ${ executionLabel }`);
        }

Erreur : pas de revert, + pull, faire un rebase interactif. on peut tout changer avec.
PR qui ne s'actualise pas avec la branche à jour -> c'est parce que la correction faite pour passer le lint avait été ajouté à develop entre temps, possiblement.

End-of-day talk :
Suite à la démo, qui s'est bien passée mais avec du "scotch" pour éviter des erreurs.
Reflexion sur faire un outil pour customiser les écrans, réordonner les écrans, ses champs... comme sur Karma mais pour FNX
code htc ancetre des web component le this est le noeud
### 12/12/22_Lundi

**Timeline :**
10h Townhall PI planning
-- soucis d'internet qui m'ont fait raté un moment des réunions et qui m'ont fait craindre de devoir aller finir la journée au bureau et rater le standup --

10h45 Standup
Pour le **FNX-2438 FO P&L app: enable charts**, Cédric dit que c'est l'affaire de Philippe Escoffier parce qu'il n'y a rien de technique à faire.
(edit du soir : il l'a réassigné à Philippe Escoffier et remis dans le backlog :-()
Fin de matinée : je jette un oeil aux PRs : Pour le 2483 j'ai des remarques à prendre en compte sur les PR du launcher d'une part et de pegasus d'autre part;

Mais Marta me demande de vérifier car l'environnement ne marche pas pour tester le **2731.** En fait aucun env ne marche apparemment.
(edit du soir : rancher dev est revenu mais compose doit attendre le retour de Raphael, ça marchera peut-être demain. Pour l'instant les rapports ne sont pas dispos; J'espère que les spécificités de l'env 2451 ne feront pas des soucis en plus)

**Pour le 2731** : le plus simple puisque Cédric a modifié l'historique depuis sa branche et push, c'est que **j'efface ma branche locale** 2731 et que je checkout dessus ensuite depuis develop.

**Voir l'arbre de sa branche git :**
```$ git log --graph --pretty="%C(auto)%h%Creset -%C(auto)%d%Creset %s %C(bold blue)<%an>%Creset" --all --exclude="refs/stash"```

E-mail envoyé avec une présentation pour la rubrique **Newsjoiners** envoyée à Magali en réponses aux emails zappés depuis fin novembre. Est-ce que les mails étaient passés à la trappe à cause du mot clé "newsletter" alors qu'ils étaient personnels?

## CHECKPOINT AVEC THANH :
Thanh :
- bon pour les charts tu peux me dire  s'ils sont activés sur les autres  business apps ou pas?
moi :
- Je ne sais pas vraiment ce que je cherche, note bien. Que veut dire "enable charts"? Ou comment faire.
Les environnements sont passablement impraticables (pas de rapports sur compose et j'ai une 404 sur develop...?)
- J'ai cherché l'icone des charts,  mais ça ne doit pas être ça puisqu'il faut activer aussi sur SACCR alors que l'icône est là, le panneau s'ouvre. Enfin, quand on a les rapports donc pas pour l'instant.
- J'ai cherché dans le repo, ça me renvoie à : va d'abord comprendre le 2489
Mais je vais chercher où ça se trouve dans SACCR puisque je sais que l'icône est là en temps normal et que ça ouvre un panneau, vide pour l'instant.
- FO Cashflows affiche les charts.
Thanh :
- ok, alors la question c'est: les charts sont activés parce qu'une configuration les a activés ou parce que c'est activé de base partout? je voudrai que tu cherches dans le code
cherche dans le code de l'appli
pas besoin de lancer l'application pour vérifier
moi :
2:33 PM
Il y a ça : l.112 enableCharts: true, dans peg-table-grid-options.definition.ts
Du coup, je dirais, de base partout, non?
Thanh :
là ce sont les charts à l'interieur de la table
c'est une feature de aggrid
different des charts qu'on ouvre dans le viewer
moi :
ah, je cherche ailleurs alors

Alors, je cherchais par mots clés "chart" et chartEnable" dans les dossiers, c'est prendre le problème à l'envers;
Je sais qu'il y a un bouton, il faut que je le troube dans le code. Dans peg-chart-root je suis déjà trop loin dans le code.
Je dois partir de peg-main.tsx;
Là, dans le renderer, il y a le <fnx-setup-ribbon>, qui est le cache de la liste des reports, donc pas ce qu'on veut;
Il y a ensuite <peg-table> -> c'est dans ce composant qu'on doit aller. Mais ctrl+clic renvoie vers la définition dans components.d.ts, la liste des interface ne nous interresse pas. Ce qu'il nous faut c'est le composant lui-même.
Pour le trouver il faut soit chercher avec ctrl+p soit dans l'architecture du dossier aller voir le fichier .tsx qui porte son nom.
Une fois dans Peg-table.tsx aller voir le renderer :parmi les composants présents, le bouton sera sûrement dans les headers donc on continue en cherchant le fichier peg-table-header.tsx.
Là dans le renderer nous avons :
```
                <alk-button class="chart-toggle" fill={ EAlkButtonFill.CLEAR }
                            shape={ EAlkButtonShape.SQUARE }
                            onClick={ this.onChartClick.emit }>
                    <ion-icon slot="icon-only" src="assets/icon/md/fnx_md-chart.svg" />
                </alk-button>
```
onClick a besoin d'un event et renvoie void, ici this.onChartClick.emit est une factorisation :
inutile de donner du onClick = (event) => { this.onCHartClick.emit(event)} 
car l'event et ce qui est attendu est défini l.92 @Event({ eventName: 'peg-table-header_chart' }) onChartClick: EventEmitter<MouseEvent>;
Chercher où est utilisé l'evenement 'peg-table-header_chart' dans tout le dossier src nous amène à trouver un @listen dans peg-main.tsx (le seul à écouter cet évenement là) :
    @Listen('peg-table-header_chart')
    async onChart(): Promise<void> {
        const name = await this.hostService.getWindowName();
        this.openChart(reportChartViewNameByHostViewName(name), this.selectedReportOutput, this.selectedViewId, this.selectedLink);
    }
Du coup on cherche l'implémentation de la méthode openchart et on se retrouve dans chart.utils.ts et de là dans host.browser.service.ts car c'est cette impl de createView qui nous interresse :

    async createView(url: string, processAffinity: string, name?: string): Promise<string> {
        const _name = name ?? newReportingViewNameByProcessAffinity(processAffinity);
        if (!this.surveyWindowsManager.exists(_name)) {
            window.open(url, _name).focus();
        }

        return _name;
    }

Donc à moins que cette fenêtre existe déjà (le if), rien n'empêche de créer une fenêtre pour les charts.


--------------


Sinon, pour la différence entre **définition et implémentation**, Thanh pense que la comprendre demande de bien utiliser les classes stencil (JS?) :
Une interface est un exemple de définition.
C'est un contrat passé.
Exemple :
- class HostBrowserService implements IHostService : veut dire que toutes les méthodes de l'interface doivent être présentent dans la classe, les types respectés etc...
Ainsi le reste du code peut utiliser n'importe quel service qui respecte l'interface voulue; l'implementation diffère pour chaque service par contre, mais il doit respecter le contrat.
Exemple :
- l'interface animal (name : string) a les méthodes crie et avance
- les classes qui l'implementent doivent avoir les deux méthodes mais l'implementation est différente. Par ex : chat : miaule et marche, lapin : glapit et saute

Voir :
- [ ] les evenements standart de stencil, qui commencent tous par "on"
- [ ] définition (les différentes méthodes, l'interface n'est que pour les classes par ex.) vs implémentation et s'entraîner à remonter la piste d'un élément du code.
- [ ] étudier la PR de Thanh sur les charts Helm, ça peut servir pour apprendre à parser mon csv pour le projet compta sur node.js. 
- [ ] Commencer par écrire le script pour avoir ce que je veut en ligne de commande, utiliser fs (file system module) je verrai après pour l'interface.
Objectif : faire un script qui récupère le contenu du csv et en fait un objet js (nb : json uniquement string, l'objet json peut contenir des fonctions ou tout autre chose)

cours ? PR ? admin ?

email sharepoint : qu'est-ce que c'est?

2438 : il faudra me trouver un autre ticket?

### 13/12/22_Mardi

Problèmes sur le RERA, trajet difficile.
Caro m'a appelé pendant le trajet au sujet de l'enterrement de Dagon, toujours pas d'info.
J'ai fait les nécrologies de Courbevoie, elle fait la Mairie et les fleuristes.
Froid. Arrivée après le café mais à temps pour le standup
On m'avais pris la place reservée, mais bureau debout dispo côté Sirius. cf numéro de bureau sur mes notes.
Je me suis mise en face, et celui qui avait réservé est arrivé à 11h et a bien voulu se mettre en face.
En même temps, l'autre jour, ce n'est pas lui qui m'avait piqué ma place?
Thanh est à Strasbourg depuis vendredi soir.

Qu'est ce que j'ai fait dans la matinée ?
TODO demain :
- [ ] Update configs pour se mettre au point sur la nouvelle IP du TDD ?
- [X] 2731 : suppr ma branche locale et checkout dessus pour la recréer, puis rebase;
- [X] 2483 sur launcher : rebase, corriger les lignes en trop, amend et push -f
- [X] 2483 sur pegasus : rebase, corriger les 3 points de config, amend et push -f
- [X] comprendre ce qui se passe avec les réunions townhall liées au PI

**2731 : suppr ma branche locale et checkout dessus pour la recréer, puis rebase :**
Nb : pour supprimer la branche du 2731, j'ai dû faire un force delete parce que son état n'était pas neutre (pull et push à faire après les commandes de l'autre jour avec Thanh). ça n'a pas l'air d'avoir posé des problème.
Après, l'environnement du TDD ne marchait toujours pas. Compose est revenu plus tard, en fin de journée je crois.
    En local, pas réussi à faire marcher la branche, problèmes de config; Il faut dire que l'IP a changé pour le TDD, quelle config appliquer?

**aprèm**
- Réu Townhall kick off PI
- tech grooming (dans la salle Sirius).

**2483 : add trade blotter et ordre des apps**
J'ai des problèmes de config
Dans le .composition, il faut que le TDD 2483 récupère l'image de ma branche de pegasus et celle du launcher;
Nb : l'image du launcher garde le nom, il faut ajouter le tag après les deux points : ...
(TODO : ajouter l'exemple du tag de l'image)
Thanh m'a aidé à trouver le tag dans le console output du build sur jenkins.
Mais le TDD ne marche toujours pas, parce que ma config est mauvaise. Il faut que je modifie les proxy et peut-être autre chose dans les fichiers de config que j'ai travaillé et commité.

Il faut prendre en considération :
- que on est basé sur l'env develop, donc https
- que l'IP du TDD a changé hier (heureusement ça n'arrive pas tous les jours, je me demande bien pourquoi ils ont fait ça)
- que le port a pu changer

### 14/12/22_Mercredi

Travail à la maison. Le rhume n'est pas fini, ça reprend avec mal de tête et fatigue générale. Je cogite au sujet de Dagon et de mes affaires de famille.
Audrey m'a informée que les obsèques seront au crématorium du Mont Valérien le 23 décembre à 14h30. Elle l'a su par Nancy.
J'ai passé l'info à Caroline et à Pascale.

Il faut résoudre le problème de config du 2483 puis je pourrais peut-être passer au <2576> indiqué par Thanh. ça a l'air chouette;
J'ai aussi travailler sur JS et Node.js, par exemple en créant mon script pour récup le csv avec FileSystem.
Est-ce que je devrais travailler là-dessus dans la la Vbox ou me fairele setup dans windows mais galérer avec le terminal à moins d'installer wsl sur la partie windows...

Je peux faire le script ici, dans la VSbox, puis je peux m'envoyer le fichier et travailler sur mon fixe si je veux passer sur mon Github plus tard.

Matin :
- Amira a trouvé un réglage pour la vbox qui évite que ça freeze pendant les longues pauses :
    dans configuration -> systeme -> acceleration -> interface de paravirtualisation : minimale (au lieu de par défault)
- StandUp : Cédric dit qu'il faut se concentrer sur finir les tickets en cours. C'est pas faux.
    Céline voulait poser des questions pour préparer ses wireframes. Petit échange avec elle après.
- QN m'aidera si je n'arrive pas à régler ma config/ mon env TDD pour le 2483, pour le passer en "ready for PO".

Objectifs du jour donc :
Boulot :
- Que le 2483 soit ready for PO
- écrire un script qui parse un csv et en fait un objet js.
- lire les PR

Hors boulot :
- me soigner, soigner Althéa;
- 15min pour réduire la qté de mails sur gmail;
- passer 15 min sur les histoires de famille;

### 15/12/22_Jeudi
Groomings...

### 16/12/22_Vendredi
Groomings...

Travail sur Node et projet d'entrainement sur JS : Auto-compta dans sophie-training, P1

### 19/12/22_Lundi
Groomings...
Auto-Compta

## CHECKPOINT AVEC THANH :
**Séance de travail sur mon code d'entrainement pour Auto-Compta (pas de ticket à cause des groomings qui n'en finissent pas): script.js pour récup csv et en faire un objet js ou json utilisable pour mon dashboard de compta.

Notes : ________________________________

// Pas de __MAIN__ en js  
// Attention à rester cohérent : choisir entre procedural, déclaratif (ranger en fonction à responsabilité séparées),
impératif (boucle for, tous les détails...), etc...  
// extraire les infos pour les mettre dans un nouvel objet avant de transformer. Mauvaise approche que de transformer l'objet initial.  
// ctrl + shift + k pour effacer une ligne entière  
// utiliser les racourcis claviers (pour effacer notamment)  
// eradiquer les variables inutiles (avant les return notamment)  
// éviter le shadowing, ça fait courir des risques inutiles et ça embrouille  
// rester constant dans la casse choisie (camel ou autre)   
// (NDRL) un code efficace serait-il plus esthétique? on dirait
_________________________


### 20/12/22_Mardi
Journée au bureau. Pas de pb avec les transports : youhou !
Saurav toujours aphone, Amira malade.  
Bureau 5568 dispo aujourd'hui et demain et mon dos assez en forme pour l'occuper.

TODO  
[ ] envoyer les e-mails (étape 2 et 3) pour le CE  
[ ] vérifier les e-mails et adapter les règles si besoin  
[ ] mettre notes au clair et determiner un système : jdb, bujo, fiches... pour être efficace en y passant 5' par jour  
[ ] étudier la base de code à partir des PR  

Aprèm : grooming  
Puis : formation et créer composants stencils pour P1 + est-ce que je peux faire mon versioning sur github?  
Soir : formation dev perso (voir propositions du mail de linkedin) + 10' scribbling

## About Manifests
https://developer.mozilla.org/en-US/docs/Web/Manifest

## About JS and Stencil Events
En rapport avec la PR 2069 à étudier. Trouver pourquoi {target : 'body'} dans 
 @Listen('peg-table-header_report-toggle-restart', { target: 'body' })

**NOTES** https://developer.mozilla.org/en-US/docs/Web/API/Event : 
Event itself contains the properties and methods which are common to all events.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture:
Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window. 

There are many different types of events that can occur:
https://developer.mozilla.org/en-US/docs/Web/Events

To react to an event, you attach an event handler to it. This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. write this code = "registering an event handler"
Event handlers are sometimes called listeners, also strictly speaking, the listener listens out for the event happening, and the handler is the code that is run in response to it happening.

Note: Web events are not part of the core JavaScript language — they are defined as part of the APIs built into the browser.

Le mode de propagation de l'évènement (propagation et use capture-boleen à false par défault) détermine l'ordre dans lequel les éléments reçoivent l'évènement. 
bubbling : propagation depuis l'élément le plus nested vers le moins nested : ex : BUTTON element -> DIV -> BODY
capture : propagation depuis l'élément le moins nested vers le plus nested : ex : BODY -> DIV -> BUTTON element

Note: For event listeners attached to the event target, the event is in the target phase, rather than the capturing and bubbling (phase de propagation) phases. Event listeners in the capturing phase are called before event listeners in any non-capturing phases.

https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener

+ Chiny

### 21/12/22_Mercredi
au bureau. seult Saurav là, aphone
cours JS
dej avec Olivier et les enfants à Saint Lazare
soir : boutiques pour achats de noël, sans succès

### 22/12/22_Jeudi
Correction du ticket 2483 : il fait enabled le dropdown et pas le disabled !
Et attention à ne pas confondre drilldown et reports dropdown.

AU secours !

 J'ai fait une erreur sur le TDD. 
Je n'ai rien changé dans les edit env ou compose de develop mais il fait apparaître des elements qui devraient n'être que dans mes instances en plus des siens :face_with_peeking_eye::cold_sweat:

J'ai voulu faire une instance à partir d'un clone de compose et une autre à partir de develop (pour avoir plus sûrement les rapports), j'en ai appelée une FNX-2483 et l'autre FNX-2483-developEnv.
Je savais qu'il ne fallait pas les appeler pareil et on m'a dit qu'il n'y avait pas d'autre règle que de mettre le numéro de ticket pour mieux les retrouver; Je ne sais pas ce que j'ai fait de travers mais ça ne va pas du tout.

Et quand j'essaye de supprimer avec remove, j'ai comme la dernière fois (mais il n'y avait qu'une instance): "Failed to remove : internal servor errort env ou compose de develop mais il fait apparaître des elements qui devraient n'être que dans mes instances en plus des siens :face_with_peeking_eye::cold_sweat:

J'ai voulu faire une instance à partir d'un clone de compose et une autre à partir de develop (pour avoir plus sûrement les rapports), j'en ai appelée une FNX-2483 et l'autre FNX-2483-developEnv.
Je savais qu'il ne fallait pas les appeler pareil et on m'a dit qu'il n'y avait pas d'autre règle que de mettre le numéro de ticket pour mieux les retrouver; Je ne sais pas ce que j'ai fait de travers mais ça ne va pas du tout.

Et quand j'essaye de supprimer avec remove, j'ai comme la dernière fois (mais il n'y avait qu'une instance): "Failed to remove : internal servor error" erreur 500

### 23/12/22_Vendredi
Aprèm off pour les funérailles de Dagon. Audrey vient à la maison avec Morgane pour 13h.

**Cause et résolution de l'erreur du TDD : 500, internal servor error** :
- Déjà, ne pas faire deux instances de TDD sur le même ticket. 
- Ensuite : dans .env seul le nom du projet compose doit changer. Mettre seulement le nom du ticket (il doit se passer des choses dans la config qui font qu'il vaut mieux donner ce nom simple).
- Dans .compose, Cédric insiste qu'il faut donner le nom du ticket pour avoir l'image docker, sauf raison exceptionnelle, car ça pointe toujours sur l'image produite par le dernier build. Thanh insiste pour qu'on donne le tag complet de la dernière image, récupérée sur le log du build de jenkins. Que faire?
- Je ne sais pas quelle erreur a altéré develop (le fait de donner à mon TDD FNX-2483-developEnv bien que Cédric ait dit qu'on l'appelait comme on voulait ?) par contre mais tout semble être rentré dans l'ordre après que j'ai réussit à remove l'un des deux après avoir copié-collé dans .env et .compose les infos exactes de compose (en ayant peur de casser compose aussi, du coup).

- Comme je n'arrivait toujours pas à faire tourner l'environnement qui restait sur le TDD, bien qu'Amira l'ai supprimé et que je nl'ai recréé a priori comme il fallait, j'en ai parlé au stand up. ("Internal servor error" quand j'essayais de start l'environnement)  
Cette fois, l'erreur était dûe au tag de l'image docker de pegasus, invalide : j'avais copié-collé deux fois le tag donc pas valide. Vu par Diego.  
Une fois le tag corrigé, ça marchait.  
Amira et Cédric m'ont indiqué comment agir sur les images docker depuis la console (vendredi matin) mais depuis Thanh a répondu à mon message envoyé avant en disant qu'il préfère que je n'ai pas accès au serveur.   
 Que faire ?   Espérons que je n'ai pas besoin d'y avoir recours pour ne pas poser la question pour l'instant.(message de vendredi après-midi)

- J'ai eu un peu de mal aussi à voir comment afficher plusieurs rapports dans le dropdown de rapports pour vérifier que ça fonctionnait comme attendu :  
    En fait, il fallait déjà créer et lancer ces rapports dans Kondor Report (KR), qu'il faut visiblement que je comprenne mieux. C'est le Report-manager.

### 26/12/22_Lundi

Début de la 13ème semaine à finastra, ça fera 3 mois mardi prochain.  
Il n'y a que Nabil et moi, peut-être Saurav, comme dev de l'équipe qui travaillent cette semaine. Et on est tous avec un gros rhume.  
Thanh m'a dit de faire le 2651, et Cédric le 2833. Je voudrais faire les deux ready for PO d'ici vendredi. Il ne sont pas souvent d'accord sur la méthode mais ils veulent tous les deux que je progresse et c'est formidable. Et puis ce sont des tâches interressantes.  
Reste à procéder comme il se doit. Garder le moral malgré les microbes, la période et à accomplir des choses plutôt que cogiter pour rien ou face à des critiques irrationnelles et malveillantes d'un beau-frère qui a besoin de cours de psychologie ou d'humanité.

TODO: impr doct des notes envoyé par Cédric (cf slack?)

**Objectifs de la semaine** :

    - nouveau bujo prêt, avec partie Work,    
    - mini-routines suivies plus régulièrement  
    [X] Modèle de checklist pour gérer les tickets Jira   Finastra créé sous Word  
    [X] créer une fiche pour ticket 2651  
    [ ] Dans la checklist : Merge ou retour à "in progress": TODO: vérifier ça  
        si pas ok, on remet dans work in progress? si ok le ticket est fermé.

**ToDo aujourd'hui** : 

    [/] étapes "préparation" pour FNX-2651  
    [ ] étapes "identifier l'erreur" pour FNX-2651  
    [/] début analyse et grandes lignes des tests pour FNX-2651  
    [ ] emails et tri (dont suite email CE)  
    [/] PRs  
    [X] codewars (sur Map() si possible)  
    [/] cours linkedin sur web components  


Penser à noter les réponses aux questions sur les id et noms dans PR de Saurav pour FNX-2835.

 

Notes :  
isPristine vs isDirty  
What actions trigger the dirty state of the view?


 ### 27/12/22_Mardi
**ToDo** : 

    [ ] continuer les tâches pour FNX-2651 : when a user clicks on Show Quick FIlter Bar, then : view should be set dirty and save proposed -> écrire les tests si pas de rapports dispos
    [ ] pointer training sur mon Github  
    [ ] créer un composant stencil 
    [/] emails  
    [ ] suite emails CE  
    [ ] continuer formation linkedin Web Components



 Passage sur branches develop pour launcher et pegasus:
 - sudo apt-get update
 - git fetch --all
 - git pull
 - git rebase develop
 ok_ up to date

 Branche pegasus créée : fix/FNX-2651/show-hide-quickFilter-set-view-dirty 
 Toujours pas de rapports pour tester.
