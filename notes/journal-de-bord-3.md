### Lundi 01/05/23 au Mercredi 3/05/23 : off

avenant contrat signé à la demande d'Elodie (RH) qui part en vacances ce soir (mercredi) pour 2 sem,
pas de voyage, veut profiter de sa carte disney avant la fin.

### 05/05/23_Jeudi

- sprint demo le matin

- about the drilldown renaming (2885) : comments on PR for pegasus and for trade contrib -> feedback to manage
  . écrire plus clairement le return pour trade contrib
  . dans le package.json lock et en général, éviter les sha1, ici il faut un sha512 pour raisons de sécurité :
  problème réglé en rebasant, en effaçant le package-lock.json (au passage, j'ai nettoyé aussi le node-modules) et en faisant npm i avant de faire un push -f
  . NB :parler de changer la valeur de retour de la fonction, pas le return, qui est juste un mot clé du language)
  . ajouter BREAKING CHANGE au commit message (avec git commit --amend ça marche pour renommer le dernier, sinon rebase in necessaire)
  feat(drilldown): (FNX-2885) pass action label name
  ligne vide
  BREAKING CHANGE:
  ligne vide
  trade contribution drilldownstartupdata payload now contains the action label (edited)

- coach à 19h20

### 06/05/23_Vendredi

2885 Modifs faites , rebase etc mais j'attend que develop marche pour tester dans mon instance TDD (j'ai un doute sur le fonctionnement du drilldown mais je crois que ça ne vient pas de mon code mais je n'ai eu le soucis que 2 fois les env du TDD contre souvent en local)

Backend (comment il s'appelle ? pas grand, fin, brun un peu dégarni, souvent là, il a l'air sévère et très efficace ) m'a demandé qui s'occupait du feature Cloud Margin et qui pour le PB du SSE qui faisait débloquer les rapports de Pegasus quand on revenait dessus après avoir ouvert un drilldown (il y a un ticket là dessus)
Lenteur QAFun d'après lui c'est un pb d'infrastructure... Ce serait interressant à savoir.
Chercher un ticket en rapport avec le dev ops ?

## Pour migrer un env déployé sur l'env de develop sur le TDD vers rancherQA :
Sachant que les URLS sont configurées dans le fichier .env
il faut soit :
- changer le host de fnx.devops vers treasury-fnx-qa.fnx.devops
- soit trouver un autre fichier .env sur un déploiement qui est déjà configuré, comme par exemple : https://10.21.230.54:7777/page/editor?composition=qa-proxy&file=.env
  copy/paste, change le nom du COMPOSE_PROJECT_NAME=FNX-2885 (on met le nom de son ticket)
  update env. et c'est bon.

**Tech session avec Diego**
Déjà, j'ai été nulle pour poser des questions, il faut que je me prépare mieux la prochaine fois pour ne pas lui faire perdre son temps.
Je voulais poser des questions sur les PR du refacto et finalement je comprenais apparemment, je n'ai pas retrouvé mes questions.

En plus j'ai confondu "sprint" et "PI planning" (un PI c'est 4 sprints mais il faut mieux tout faire dans les 3 premiers)

J'avais fini un ticket, le 2885, donc pas de questions dessus et je venais de choisir le 3013 donc pas encore creusé pour poser les bonnes questions.

J'avais des questions mais sur la PR de Saurav auxquelles il n'a pas vraiment voulu répondre en me disant qu'il n'avait rien rajouté qui n'était pas là/rien rajouté d'extraordinaire. Je lui avais demandé la différence entre le state isSetupVisible et isReportConfigurationVisible et fait remarqué que le comportement voulu avec le 2833: focus mode, n'était plus effectif avec ses motifs mais il a botté en touche. Mais ça ne se fait pas trop de poser les questions aux autres dev apparemment et je n'arrive pas à mettre le doigt sur ce qui me chiffonne vraiment pour lui poser des questions plus précises.
Et puis le test dans peg-main.spec.ts :
it('the ribbon is hidden if a report output is set on start')
aurait dû casser s'il avait été mieux écrit. Là Saurav aura juste effacé et actualisé les snaps.

**retour sur le ticket 2885 et correction faite**
Philippe Escoffier remarque qu'on devrait avoir le report label et pas le nom technique (report label) dans le tagname de Kondor :
- il fallait changer reportLabel: dealsReportDefinition.contexts[ 'report-label' ], et ne l'écraser que si c'était dispo sinon, on se retrouvait avec undefined (nb c'est dans ce fichier que sont définis quoi faire dans les 3 cas possibles qui dépendent des 3 modes de chargement des rapports)
  -> reportLabel: dealsReportDefinition.contexts[ 'report-label' ] ?? startupData.reportLabel, (le reportLabel est passé à l'interieur de startupData donc il suffit de le récupérer)

**Nouveau ticket : FNX-3013 FNX - Wrong format for Deal ID column - is displayed as float in RTK Insight Report Compact View**

ça va être dans le code qui gère la configuration des colonnes de ag-grid
tu peux jeter un oeil dans src/helpers/column-definition-builders/column-type-builder.ts
tu peux notamment chercher les refs à EColumnBusinessType.Id, qui le type donné par le back-end pour les colonnes d'id technique

### 08/05/23_Lundi
férié
Muji : achat veste et jupe puis Beaubourg avec Caroline expo peinture et expo sculpture puis japonais
### 09/05/23_Mardi

ToDo:
[ ] Rapport de suivi à Diego
[ ] check emails
[ ] annuler RDV notaire Bezons
[ ] FNX-3013
[ ] 15h : FNX Functional grooming

**grooming**
-tiles mode dans openfin + bouton pour changer de mode à ajouter
- discussion sur la notation des tickets et comment l'inclusion des notes données par les QA vont influencer la vélocité de l'équipe :
  55 pts en moy. par sprint avec 9 développeurs maintenant. Philippe pense up avec le QA, Thanh pense down et aussi déplore que l'estimation des devs et des QA se noient dans un regroupement des deux. Comment tenir compte des efforts QA, quelle est exactement la def of done...?

**PB de VSCode, popup :**
Unable to watch for file changes in this large workspace folder. Please follow the instructions link to resolve this issue.
Instructions à : https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc

## Notes sur debugging:
Pour avoir le source map dans les web tools, ajouter ce qu'il faut dans le package.json
Dans le stencil.config.ts du repo :
au début ajouter :
```const sourceMaps = Boolean(process.argv && process.argv.find(arg => arg === '--source-maps'));```
en bas :
```sourceMap: sourceMaps,```

Quand on a mis un breakpoint et qu'on est à l'arrêt dans la console des webtools on peut taper alklogger.set ou quelque chose comme ça
(chercher dans la doc ?) pour changer le setting du logger à debug par exemple pour retrouver tous les alklogger de niveau debug et plus.

**FNX-3013 wrong format for Deal ID column**
clone repo alk-grid-utils et alk-reporting + npm i :
j'ai lutté pour trouver les éléments à étudier parce que je n'ai pas cherché dans les bons repos au début.
J'en suis à : étudier getColumnType() dans alk-grid-utils, trouver comment est determiné le formatage du type 'id' (ColumnBusinessType)
D'autres types se voient appliquer un formater mais pas lui. Pourquoi ? Pourquoi ça marchait avant et plus maintenant ?
Faut-il lui appliquer le formater et voilà ?

nb columnTypes n'est pas businessColumnType

**PR reading :**
.trim() sur || "" car si le val.configname n'est pas un string ça va casser
_.pick(object, *keys) : si j'ai bien compris, lodash pick permet de récupérer certaines valeurs dans un objet en fonction des clés qu'on lui a passé :

            // Requiring the lodash library
            const _ = require("lodash");
            
            // The source object
            var obj = { 'x': 1, 'y': '2', 'z': 3 };
            
            // Using the _.pick() method
            console.log(_.pick(obj, ['x', 'y']));

            // output : {x: 1, y: '2'}

échange avec Thanh

team building le soir au Bowler pour fêter le déménagement de Diego et l'anniv de Cédric

### 10/05/23_Mercredi
home office
aller acheter des chaussures
tel Gégé pour savoir comment se passe son nouveau boulot.
prévoir d'aller à Climbing district à Saint-Lazare ? Ouvert tous les jours de la semaine de 8h à minuit (tip Franck)

daily scrum
Start project : Deep Focus -> be more focused, do only what is necessary and progress faster
1- organise planning (use google agenda)
2- pomodoro session with white noise on FNX-3013
3- pause
4- listen to Blinkist "Hyperfocus" on linkedin learning
- Meta-awareness and intentional focus :
pay attention to your wandering thoughts and consciously redirect them toward your chosen intentional focus subject.
- Ridding your envt of distractions (ahead of your focus moments)
and put distracting thoughts on paper (plus choose a specific time to take care of it if need be)
- Scatterfocus : diffuse thinking when need to plan or creativity. Tendency to be future oriented. 3 modes :
- Capture mode : make a note of diffuse thoughts
- Problem crunching mode : let your thoughts circle around a  single matter
- Habitual mode
- Scatterfocus to connect the dots.Zeigarnik effect (how the brain work in the background like when you take a shower).
- No limit to memory but attention is a limited ressource. Nurish your mind with "nutritious food".

    5- listen to "Mixtape: Learning Highlights for better Productivity" on linkedin learning
        Don't mistake switch-tasking for multitasking. Switches cause more mistake, stress, lost of time
        Manage space, time and mind
        Space : gathering points of unresolved items to deal with
        State of mind is a gathering point in itself
        MVA : most valuable activity
        Understand the 80/20 rule : are you looking at smthing that's in the 20% pile or in the 80% pile. Don't misallocate your time.

Auj 2 services SSE : SSE Rapports et SSE pour les données. Orchestator pas sécurisé (pas de header avec l'url CRUD?)

Avoir un rapport pour voir le contenu de la requete graphql qui permet de récupérer Dealnumber /Deal Id du backend (cf discussion avec Tomacsz, merci Tomascz qui m'a aussi aidé à trouver comment reproduire)

Notes sur FNX-3013 :
Pas d'environnements le matin, travail sur méthodes pour ne pas se disperser (suite feedbacks) : organise planning & listen to Blinkist "Hyperfocus" on linkedin learning

To fix FNX-3013, I would need to explore a report with a Deal Id column.
The ones I know of, RTK insight reports inside RTK Financial , don't start.
I tried other ones in RTK financial. Only FXO-RTK-FX-SPOT finally ran but it has composite Deal Id, so not good.
In the ticket are also mentionned : Caps&Floor , Fx Options, that I did not found and PL_FX_Positions, that I thought I found but there is no Deal_Number or Block-Number columns.

L'après-midi, impossible de récupérer un rapport qui démarre pour avoir la bonne colonne (Deal Id dans certains rapports de RTK Financial) -> échange avec Tomasz qui était dispo pour faire démarrer le bon rapport. (Apparemment, je n'ai pas les droits là ? https://rancher-ha-2.devops.misys.global.ad/dashboard/c/c-mv7gw/explorer/workload.) Et au passage il m'a aidé à trouver comment reproduire le bug (seulement quand on repasse à la compact view depuis une autre vue).

Ensuite j'ai été jusqu'aux advanced types dans le code de alk-grid-utils.

Ensuite j'ai coincé un moment pour trouver le bon graphql pour savoir sous quel nom/format la donnée de deal id arrivait et Cédric m'a aidé à trouver.
graphql table = def° de la table (récupéré que si on a pas encore la def de la table) (environ 1.6kb de data)
graphql report = contenu de la table
les autres graphql sont beaucoup de la persistence. (penser à filter sur graphql et à vider la liste dans network avant de passer au bon rapport pour en avoir moins à explorer).

Ce qu'on veut est dans le graphQl pour table data:
data > get table > columns > Deal Number properties businessType value : "Id" (correct s'il y a une majuscule)
A partir de ça on map avec "id" pour pegasus columnType (dans advanced-column-types.ts de alk-grid-utils) qui correspond au type donné à AG-Grid

En fait ça marche quand le ColumnBusinessType est reçu comme INT et nom comme ID -> "ça tombe en marche" (au lieu de "en panne") parce que la valeur reçue pour Deal Number propriety business type est "id" et non "Id".
Quand la valeur reçue depuis le back-end est "Id" et donc interpretée correctement, le type pegasus appliqué est "id" et là le formattage n'est pas bon (virgule tous les 3 chiffres et float avec deux décimales).
Je pensais que c'était parce qu'il n'y a pas de formateur appliqué dessus alors qu'il y en a sur "integer" mais Cédric me dit qu'il faut comprendre pourquoi ça marchait avant et débugger number-cell-renderer-components.ts dans alk-grid-utils (moi je me dit qu'un formater spécial ça serait peut-être pas mal):

Donc on a créé un lien symbolique entre pegasus-reporting et alk-grid-utils qui devrait me permettre de taper dans le code de mon repo alk-grid-utils et nom dans la librairie npm récupérée dans node-modules (qui contient toutes les librairies des dépendances récupérées par npm, packagées, compilées en JS au lieu de TS, etc) qui n'aurait été qu'une copie transpilée de la version publiée sur npm et donc illisible et sans lien direct avec le code à débugger. Méthode :

**Développer et tester rapidement une lib ou un composant dans une app**
Faire un lien symbolique entre une app et une lib (ça ne marche pas sous windows a priori)

A la racine de la lib, faire :

```npm link```

Dans le projet dépendant (l’app) :

```npm link <package name>```

Par exemple, pour utiliser le projet @alk/ag-grid dans pegasus report, lancer :

```npm link```

dans le projet alk-ag-grid, puis :

```npm link @alk/ag-grid```

dans fnx-pegasus-reporting.

Lancer ensuite

```npm run build```

dans la dépendance et

```npm run start.port-fixed```

dans l’app.

Il faudra complètement reconstruire l’app à chaque modification de la dépendance.

NB : j'ai dû refaire ```npm install``` et ```npm install -g plop``` sur le launcher. Sûrement parce que j'avais fait l'erreur de tenter de push depuis dévelop (heureusement, il y a des sécurités !) et comme ça débloquait après pour mettre à jour ma branche et que je n'avais qu'un autre branche dessus, j'ai effacé le repo et récupéré un tout neuf depuis bitbucket. Mais je ne comprends quand même pas bien pourquoi vu que c'est censé être global et que plop marchait toujours sur les autres repo.

### 11/05/23_Jeudi

[ ] PRs
[ ] créer les branches pour FNX-3013 (pegasus, alk-grid-utils)
[ ] et debugger
[ ] créer tests pour FNX-3013
[ ] petit message à Betina pour lui demander de tester le drilldown tabName pendant qu'on a les env
[ ] tests Pluralsight JS et Git
[ ] functional grooming
[ ] one on one Diego (objectifs ?)
**Mes objectifs (3 prochains mois):**
+ calme/confiante, + focus -> + rapide
Niveau technique (en plus de JS, TS et autres basiques à améliorer) : mieux comprendre, superficiellement pour l'instant, la partie devOps du projet (versions, mises à jour, outils utilisés) et si j'ai le temps, saisir quelques bases sur le trading/la finance (pour ne pas être embêtée par le vocabulaire)
Projet SMART : use intellij swiftly
**Moyens mis en oeuvre :**
coaching confidence at work, Bujo, Planning, Pomodoro, cours linkedin
Tickets et PRs, échange avec les collègues
CodeWars, ressources en ligne pluralsight et linkedin, tests
Projets persos (mais pas le temps/l'energie ces dernières semaines)

concept of flow instead of focus (it's easy and it's challenging), i would like to instead of need/have to clean, because I like a calm place to work, settle down, center myself, mental peace and tranquility
order space for yourself
Pilates, Yoga
tel pr RDV ostéo/massage
ranger mes pinterest
ranger photos
ranger favoris (ordi boulot)

Diego veut mettre en place du peer programming en cas de tickets que je ne penses pas pouvoir faire seule.

Pour savoir si un lien symbo:lique est maintenu :
essayer ls -l dans le dossier node-module de l'app liée à la dépendance
cf https://askubuntu.com/questions/1145925/how-to-know-if-a-folder-is-a-symbolic-link

### 12/05/23_Vendredi
*Home office. Althéa a le cou un peu bloqué. Ostéo pas là. Olivier a une rage de dent.*

Ticket créé pour récupérer l’accès à confluence (en fait je pense qu’il a sauté après que mes autorisations aient fait des montagnes russes quand ma VBox était cassée)
FNX-3013 : Je vais poursuivre ma quête d’un formatage correct pour les id.

Message envoyé sur teams à Raphael Janvier du back-end pour signaler que la valeur du businessType de DealNumber est parfois "Id" avec une majuscule, parfois sans majuscule.


14h-14h30 Réu upgrade node version to 18 LTS


### 15/05/23_Lundi
*Home office. Althéa a ostéo à 17h15. Aller la chercher à 16h30*

**Todo :**  
[X] Kimble  
[X] pluralsight tests + intellij  
[X] rapport suivi Diego  
[ ] taper récap réu de vendredi  
[X] suivi du message envoyé à Raphael  
[X] ajouter dans les commentaires du ticket 3013 : - le rapport à démarrer pour tester + lien pour le démarrer, - le soucis lié à ce qu'on récupère du back-end


    + PB de build...  
    + créer PR, expliquer  
    + créer env qd le build passera  

**Done :**
- résumé de la réu de Vendredi à Saurav
- lecture PR AbsSort de Nabil et check sur TDD, u.a. comportement ac columnfilter show/hide,
  après lui avoir transmis comment changer son .env pour passer sur RancherQA où il y avait des rapports;
- essai de résolution suite notif intellij
  Au sujet du watch max worker intellij
  https://youtrack.jetbrains.com/articles/IDEA-A-2/Inotify-Watches-Limit-Linux
- FNX-3013 : diff pour builder < aks, c'est passé après avoir setté aks à null
- communications avec Raphaël Janvier et Richard Holgado pour avoir les propriétés corrigées
- pluralsight training JS + retake test JS -> new level "above average" :-)

### 16/05/23_Mardi

FNX-3013 -> trouver comment brancher mon .env TDD sur ma lib alk-grid-utils modifiée :
## Pour tester lib modifiée ds env TDD :
Chercher la version publiée par Jenkins dans les logs du dernier build de la branche de la lib corrigée,
( ctrl + F "npm publish" par exemple). Ici :  @alk/grid-utils@2.1.0-fix-fnx-3013-wrong-format-for-deal-id-column-4 prepublishOnly
On récupère "2.1.0-fix-fnx-3013-wrong-format-for-deal-id-column-4" et on remplace la version de la lib utilisée dans le package.json de l'app qui l'utilise par ça, dans une branche créée pour ça.on push la branche a
On push la branche avec la nouvelle version de la lib dans le package.json et on pourra ensuite indiquer cette image de l'app à l'env TDD.

Branche et PR faite mais pas de reviewer pour Pegasus. Est-ce que je dois faire la prerelease de la version alk

FNX-2885 -> rebase & send a word to Betina for testing

new ticket : FNX-3001 ne pas tenir compte du column filter quand la colonne filtrée est cachée

### 17/05/23_Mercredi

- Pluralsight : cours Docker
- PRs : lecture PRs de QN sur le disclaimer et de Thanh. Mais dans FNX-2286 upgrade node version :  
  nb :  // @ts-ignore : TS2322 deviens // @ts-expect-error: TS2322
  et pourquoi deprecated plugin
  import { terser } from 'rollup-plugin-terser';
  devient:
  import terser from '@rollup/plugin-terser'
- End of day call :
  Présents : Cédric, Amira, Philippe, qui ont montré ce sur quoi ils travaillaient
    + Amira ne trouvait pas de rapport pour étudier le filtre du drilldown donc on a essayé de l'aider mais il ne faut pas un rapport local car pas de filtre puisqu'il est paramétré par l'utilisateur et donc ne comprend que ce qu'il veut.
    + Il fallait un rapport global comme un RTK financial mais avec un drilldown disponilble
    + Thanh n'a pas pu venir, en call avec Saurav

### 18/05/23_Jeudi
férié (pentecôte)

### 19/05/23_Vendredi
*home office, seult Céline, Saurav, Eugene, Kristof, Philippe E. au daily,  
les autres font le pont*
*récup page start.me et adapter pour le travail actuel (objectifs : routines performantes)*

[] Finir cours Docker + apprendre commandes  
[X] Finir de lire les PRs et noter mes questions  
[] Commencer FNX-3001  
[] Cours Git/suivre tuto sur git dans intellij + retake test

NB : des nouvelles de Raphaël pour les prop à corriger en rapport avec FNX-3013
Et Betina pour le 2885 ? Elle n'a peut-être pas pu avoir de rapport à tester pour SACCR?

*Audio linkedin  
bureau optimisé  
Jouer auto-compta sur csv des derniers mois + budgets*


Erreur : j'ai fait un git commit --amend alors que j'étais au milieu du rebase de la branche 2885
sur le refacto de Diego et maintenant c'est son commit qui apparaît au lieu du mien bien que les diff
soient les miennes. Arf.

Je peux tenter le $ git reset --soft HEAD~1
Mais c'était quoi déjà mon commit ?
Il avait fallu rajouter le BREAKING CHANGE
Un exemple de commit message :

    un feat(workspaces): (FNX-3114) protected storage edition handling
    ligne vide
    BREAKING CHANGE:
    ligne vide
    the fnx-change-workspace topic dispatches now a IWorkspaceConfiguration instead of the workspace id

Le mien, retrouvé :

    feat(drilldown): (FNX-2885) pass action label name
    
    BREAKING CHANGE:
    
    trade contribution drilldownstartupdata payload now contains the action label

Bon, eh ben, j'ai réussi à retomber sur mes pattes, mais je ne suis pas tout à fait sûre comment.
J'ai fait un rebase i, supprimé un commit, re-rebasé, refait un commit avec le bon nom...
Mais une chose est certaine, la VBox s'était déconnectée et je ne l'avais pas vu,  
ça ne m'a pas aidé : j'ai cru que j'avais débranché ma branche locale du repo distant. pfff

### 22/05/23_Lundi

[X] Rapport de suivi à Diego  
[X] cours Docker fini  
[ ] faire une fiche sur Docker, Kubernetes et Micro-services comme si passer un entretien  
(def of done : ê en mesure de passer un entretien sur ces questions)  
[ ] poser les questions à Thanh sur sa PR? (cf notes précédentes)  
[ ] FNX-3001 (pas d'env pour le moment)  
[ ] codewars x2

10h30 réu sprint planning
16h tech session avec Diego

C'est quoi OCP ?
C'est quoi terser ?

Les dessins de chat pour apprendre l'informatique:
https://www.google.com/search?q=girlie_mac+docker&tbm=isch&ved=2ahUKEwjv2YeC24j_AhXhpkwKHVZWAs0Q2-cCegQIABAA&oq=girlie_mac+docker&gs_lcp=CgNpbWcQAzoECCMQJzoECAAQHjoGCAAQCBAeUJgKWPcZYI8daABwAHgAgAFeiAHPA5IBATiYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=E0NrZK-EJeHNsgLWrInoDA&bih=955&biw=1920&client=firefox-b-d#imgrc=GNN9n9c2tioFUM

PaaS = Platform as a Service
https://waytolearnx.com/2022/06/qcm-sur-docker-exercices-questions-quiz-partie-1.html
Cheat sheet:
https://dockerlabs.collabnix.com/docker/cheatsheet/
https://devhints.io/docker
Dockerfile, cours openClassroom :
https://openclassrooms.com/fr/courses/2035766-optimisez-votre-deploiement-en-creant-des-conteneurs-avec-docker/6211517-creez-votre-premier-dockerfile

### 23/05/23_Mardi

[] FNX-3001:
check dans documentation adaptable le comportement normal
-> ce n'est pas celui qu'on veut, c'est à dire ne pas tenir compte du filtre quand la colonne est cachée,
donc il faut bien le changer
-> trouver où et comment le column filter (Quick-Filter pour adaptable) est appliqué et ne l'appliquer que si la colonne n'est pas cachée.

Environnement très instables, donc créer des tests dans une démarche TDD:
1) quand le user saisit quelque chose dans le column filter, le filtre doit être appliqué sur la table
2) quand la colonne est cachée, le filtre ne doit pas être appliqué
3) quand la colonne est re-révélée, le filtre doit s'appliquer

PRs à vérifier pour les column filter :
Fix/FNX-3082/absolute sorting bugs (surtout les commits de Diego)
https://scm-git-eur.misys.global.ad/projects/FNX/repos/fnx-pegasus-reporting/pull-requests/347/overview
fix(column filter bar): (FNX-2862) persist filter visibility:
https://scm-git-eur.misys.global.ad/projects/FNX/repos/fnx-pegasus-reporting/pull-requests/294/overview



### 24/05/23_Mercredi

[ ] PRs
Thomasz n'arrive pas à démarrer les rapports insight sur rancherQA et Rancher dev
Seulement sur QAFun et on a vu en fin de journée avec Cédric que les modifs de Raphaël ne sont pas encore dessus. D'ailleurs il a un PR ouverte mais pas mergée encore sur ça notamment
On peut la suivre depuis le ticket grâce à l'id FNX-3013

Galère avec les env fin de matinée et soirée :
Hello,
Can someone help me ? Here is the issue :
Locally, I have no reports, although there are some on the envs in the TDD.
I have rebased and done npm i for Launcher and Pegasus report. Locally, I have tried to "plop" on rancherQA and on Develop (with kplus). Same problem.
I have an error 401 in the console, so authentication ? oidc ? But I don't find the problem.
Yesterday evening I had the reports.

Finalement j'ai delete le message car en applicant un ancien stash de l'oidc et apps.json sur launcher ça marche mais il y a un soucis.
Soit c'est moi, soit les autres s'en rendront compte quand ils rebaseront launcher.

A part ça et la réu SFX, j'ai passé tout mon temps sur le FNX-3001;

### 25/05/23_Jeudi
Home office (rdv coaching en fin de matinée et soirée Fête de l'atelier Wellenstein)
FNX-3001 : travail sur les tests

### 26/05/23_Vendredi
FNX-3001 : matin : Nabil a laissé un commentaire, cas oublié -> échange tel en matinée
Puis il a travaillé dessus et à 15h m'a carrément envoyé une branche où il avait fait un fix qui devrait marché, à récupérer.
Desespoir.
J'aurai au moins servi à quelque chose, j'ai validé une PR urgente à Diego avant de partir, tard et avec un truc qui ne marchait pas.

Retiré du .eslintrc.cjs (vers la fin)
"@typescript-eslint/prefer-readonly": [ "error" ],

### 27/05/23_Lundi
*maison ?*

Matin : daily peu de monde et comme QN ne pouvait pas venir et que Cédric est en vacances, personne ne prenait la parole. Du coup j'ai glissé à Philippe E. que les autres n'étaient pas là pour animer, histoire qu'on démarre; Je ne sais pas si c'était bienvenu ou si j'aurai mieux fait de me taire mais bon, on allait attendre longtemps sinon.

Matin : FNX-3001, erreurs consoles reglées avec surtout l'ajout d'un if.

J'ai encore passé la journée sur FNX-3001 mais les autres syptomes se mélangent et les tests ne passent pas tous
et Nabil a fait plein de commentaires sur ma PR avant de réaliser que je n'avais pas encore modifié mes tests pour les adapter au nouveau code
Et il y en a toujours un qui ne passe pas.

J'ai demandé de l'aide à Diego mais finalement le grooming a été lancé par Philippe.

15h technical grooming, sans Cédric.

Nabil et moi avons travaillé sur les tests en fin d'aprèm car il y en a toujours un qui ne passait pas.

End of day call, pareil. Than, Philippe C. et Nabil à me donner des consignes contradictoires (debugger ou console.log; fait ci, fait ça; va sur ce fichier, non plutôt sur celui là, avant que l'autre ait eu le temps de voir ce qu'il voulait voir à mon avis). Et que je te dis de faire un console.log comme ci, et comme ça (en fait avec un string explicatif suivi de ce qu'on veut logger. Mais c'est comme ça que je fais les gars, d'habitude, mais là je n'ose pas prendre le temps parce que vous êtes tous là à m'attendre au tournant et à vouloir aller plus vite que la machine, machine qui, au deumeurrant, va plus lentement que d'habitude). Et tu travaillles dans trop de bruit (pour Philippe qui est derrière là où je suis d'habitude) et quand je suis dans mon coin tranquille on me demande pourquoi je ne viens pas plus près de l'équipe. Et pourquoi tu fait tourner tes serveurs, ça mange des ressources (mais parce que Nabil travaille comme ça et que je le fait tourner pour lui et pour récupérer les variables que vous me dites de console.logger)


Apparemment le 
```$ npm run test.unit.watch```
ne marchait p q juste parce que intellij tournait en fond, en plus avec des process java

Les console.log de Thanh et Philippe me plaisent plus que le debugger de VSCode préféré par Cédric ou Nabil, les breakpoints font complètement ce qu'ils veulent.

Diego veut que je merge ma branche le plus vite possible et comme je psychote je me dis que c'est parce que des gens voient que je suis lente et nulle à force que je traîne sur cette branche là.


Résumé pour Diego :

- Matin : FNX-3001, erreurs consoles reglées avec surtout l'ajout d'un if.
- Un test ne passe pas.
- tech session annulée


### 28/05/23_Mardi
*bureau*

Déjeuner avec Chris Dussol et ? (le monsieur très gentil qui nous a aidé pour les termes de navigation dans les mots croisés) et ? (le monsieur toujours près de la machineà café qui était à l'atelier dev durable et qui n'aime pas quand on parle trop fort pendant la pause à la machine à café)

Thanh a demandé qui prenait la places au CE pour Saurav. Plus lui donc. Alors, j'ai pris les places pour Saurav, 130€, 2 x disney que j'ai récupéré et 2 x jardin d'acclimatation qu'il recevra directement par mail. Je ne suis pas mécontente qu'il n'y ait plus eu de France Miniature, ça fait déjà assez d'argent d'un coup. Et la chasse au trésor pour trouver la dite Mélanie Martin en bas avec Guy qui est venu à son bureau puis descendu au basement avec moi pour la trouver c'était rigolo.

- 15h technical grooming, sans Cédric.

- Call avec Nabil pour le test mais ça ne marche toujours pas + comportements inattendus de mon côté mais pas quand j'ai voulu montrer à Nabil.
- End of day call : Philippe et Thanh se sont joints à Nabil pour trouver ce qui cloche avec mes tests mais leurs méthodes sont différentes et c'était compliqué.
  Par contre, ils m'ont aidé à me rendre compte que j'avais des process non désirés en fond qui rallentissaient considérablement mes tests.
  Toujours un test qui ne passe pas.


### 29/05/23_Mercredi
*home office*

Echange avec Diego, qui change tout le code pour revenir sur quelque chose de très proche de ce que j'avais fait mais je dois tout refaire les tests.
Diego push son commit sur ma branche,
je pull, je modifie les tests. Il y en a un qui ne passe pas.

Test skippé pour pouvoir passer le ticket en phase de validation.

Discussion avec Thomasz pour la validation.

- End of day call : Philippe et Thanh seulement, ils m'ont réexpliqué leurs méthodes de débuggage des tests plus clairement 
(plutôt avec des console.log et sans l'usage du debugger qui devient fou avec la compilation en js et bouge les breakpoint, numéroter les console.log, numéroter les tests avec un console.log pour savoir à quel test on en est dans le terminal vu que certains trucs (variables du code par exemple) sont appelés plusieurs fois, par différents tests,
 ajouter un expect avec rien dans les arguments pour bien voir ce qui arrive par rapport à ce qu'il faudrait qu'il arrive...)

 Test corrigé

 ### 30/05/23_Jeudi
*bureau avec QN, Philippe, puis Thanh*
*bureau 5568*

Nouveau changement du code de FNX-3001 par Diego après en avoir discuté avec Nabil.

ça change assez peu les tests par rapport à la 2ème version (on en est à la 4ème version de la correction de ce bug)
Donc je les récupère. 
Correction avec quelques twists.
Tout passe, sauf un.
Le test ne passe que avec .only, pas quand on joue tous les tests
Essais : ça n'est pas lié à l'ordre des tests, j'ai bien fait un before et un after each, la suite toute seule passe.
Je desactive tous les autres tests avant, puis réactive un par un. (avec un watch) Sans ceux du absolute sorting ça passe.
Mais il y a aussi quelque chose de louche : les isVisible sont undefined là où ils devraient être true ou false.

Grande discussion avec Philippe qui lui utilise clearAllMocks (et moi j'ai mis resetAllMock -> finalement j'ai laissé resetAllMocks mais j'ai tilté grace à lui)
Je pensais que ça venait d'un autre mockReturnValue de getApplicationDataEntryByKey mais Diego a finalement pu se libérer et a vu que j'avais mis jest.fn().mockreturnValue(blabla) au lieu de () => blabla dans un de mes mocks (pas ça exactement, obviously)

Discussion avec Kristof pour une validation rapide.

Bon, du coup, tout passe.
Merge

 ### 31/05/23_Vendredi
*bureau*

vérif pour 3013
demande pour vérifier PR du back end sur FNX-3013 (j'ai pas les droits pour voir les autres PR dessus) -> QN pas les droits non plus, Diego a vérifié
demande pour lancer le rapport RTK-insight qui va bien
c'est bon
Je m'assure que Amira a bien mergé et fini ce qu'elle voulait faire avec ALk-grid-utils. C'est bon. Le build est en rouge mais elle a retiré aks à la volée sur le build d'avant donc je peux :
me rebaser sur develop (c'est sa dernière modif vu qu'elle a mergé et que un build est passé)
m'assurer de mes modif et merger en précisant si c'est une version major minor ou patch. Et là je me suis trompée, j'ai dit major alors que ça n'était qu'un patch parce que j'ai confondu avec un autre ticket que j'ai fait avant et j'ai voulu répondre vite car elle avait eu la gentillesse de m'appeler pour m'aider à faire ma release si besoin.
Ensuite, il suffit de récupérer le numéro de version dans le package.json
Les numéros à rallonge à récupérer dans le console.log de la branche, c'est seulement quand on fait la pre-release dans sa branche ... ? **TODO : demander des précisions là-dessus** .
Ici version 3.0.0 de alk-grid-utils qu'il faudra préciser dans le package.json de pegasus après avoir rebaser ma branche puis merger.

Pb pour le rebase.
Au end-of-day-call : le mieux pour changer la version c'est de faire :

npm uninstall @alk/grid-utils


npm install @alk/grid-utils@3.0.0

Doc : https://docs.npmjs.com/cli/v8/commands/npm-uninstall
 

prepa tech session : Docker,
OCP?
Une release de fin de PI, c'est quoi ?

Tech session : exploration d'un container de FNX
