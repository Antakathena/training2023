# Journal de bord de Sophie à Finastra_#2_ 2023

### 30/12/22_vendredi

Daily scrum : Philippe Escoffier, Nabil, Thomasz, Krzysztof, moi
Toujours sur 2651
PRs,
Emails (nettoyage boite mail)

**Objectif du jour :**
- Continuer training Stencil et JS
- Finir d'étudier le fonctionnement des vues dans Pegasus. Il faut tout comprendre de Peg-table et Peg-table-header notamment.
- Tests pour 2651 créé.
- Solution pour 2651 qui tourne.

#### Continuer training Stencil et JS:
- cours linkedin JS
- attacher dossier sophie-training à un repo sur mon Github
- suivre les video d'Academind sur Stencil Web Components + exos

#### Comprendre les Vues dans Pegasus:
- étudier la Code Base & réaliser les diagrammes UML nécessaires pour comprendre
 -> diagrammes justes et clairs
 -> questions précises pour lever les incompréhensions
 -> être capable d'expliquer ce que j'ai compris

#### Tests FNX-2651:
- Avoir un test qui vérifie que quoi ? view setDirty ou showSave = true ?
- run test sans erreur

#### Solution pour 2651:
- ça marche : view set dirty si on cache/révèle la barre de tri rapide

What is node list vs array ?

### 2/01/23_lundi
*office*
*uniquement Nabil et Franck au bureau*

- PRs
- 2651 view set to dorty when quickfilter visibility change
- 2833 focus mode
- schematiser pegasus
- recup IntelliJ IDE
- recup Pluralsight
- se renseigner sur jours de congé
- start Bujo for Work

dans package.json ajouté à npm start https : -- --source-map grâce à Nabil 
(Adam avait changé le fichier stencil config mais du coup il faut faire ça pour que sourcemap fonctionne.)

2651 : vue dirty, save affiché mais appuyer sur save ne sauve pas la vue.

*Départ après 20h par la sortie de nuit mais ça marche*
*J'ai eu de la chance avec les transports*

### 3/01/23_Mardi
*office*
*lendemain d'insomnie :-(*
*retour de Amira, QN, Saurav online depuis l'Inde et Thanh en fin de matinée :-)*

**Checkpoint à 11h30 avec Thanh.** 
Toujours un peu stressée mais trop cool pour apprendre 
Pb d'env : check console ds Dev tools puis basculer sur network, refresh, revenir sur console pour avoir les infos
TODO: recop notes

*Dej Vietnamien à emporter aux Papillons dorés avec les filles : grand bo-bun poulet citronelle, dessert et Arizona drink*
*Dej au "basement" (espace finastra) avec tout le monde, + Raphael (celui qui fixe nos env au fur et à mesure qu'ils plantent)*

Aprèm :
tech grooming annulé car Cédric malade et Diego absent pour crèche en grève.

1 chapitre du cours JS
Lecture de PRs

*Grosse fatigue, pas très efficace, départ à 17h30*

### 4/01/23_Mercredi

**petit point avec Diego**
au sujet du ticket en cours (après quiproquo pendant le standup a propos de quel ticket il s'agissait)-> ok, il pensait que je parlais d'un autre ticket en disant que ça n'avait pas besoin d'être persisté.
+ congés à prendre par-ci par-là en janvier pour ne pas les perdre et se reposer le cerveau pour être plus efficace après. A commencer par ce vendredi.
**TODO: mieux préparer le stand up pour être claire et concise** // TODO:comment faire ressortir ce genre d'idée dans le doc? surligner, autre?

**2483 Trade Blotter app**
use-title changé pour true, réassigné à Magda
**TODO: bien mettre un commentaire dans le ticket sur ce qui a été corrigé/modifié au moment où je réassigne**

**feedback pour le ticket 2651**
vérif que ma modif ne change pas la gestion des autres évenements suite au comment de Philippe C. sur la PR
Je profite d'un moment où nous avons les rapports sur Rancher Dev.

**ticket 2833 focus mode**
Je ne trouve pas setup dans le menu contextuel des tab name
(edit du 05/01 : c'est normal, Thanh m'indique pendant le standup où j'expose mon soucis que c'est une option dispo uniquement dans openfin)

**end of day call**
- j'en profite pour faire vérifier ce que j'ai mis dans les commentaires du passage à la colonne "Ready for PO" du ticket 2651
- Saurav nous explique un problème qu'il a sur FO limit
- Amira a des problèmes pour tester les filtres, apparemment les environnements recommencent à débloquer

### 5/01/23_Jeudi
[X] e-mails
[ ] valider licence IntelliJ et installer
[X] valider licence Pluralsight et explorer
ticket 2833 focus mode
[X] functional grooming FNX :  14h
[X] functional grooming SFX : 15h30
[ ] PRs
[ ] faire la demande pour autres jours de congé à utiliser en janvier

**Daily scrum**
*Magda on a sick leave*
use Gamma env for other env not working?
    nb : multi-user test planned
    gamma doesn't handle ? so nead to user openfin...
NB : Philippe C. could not pass his ticket FNX-1998 to the PO column : if priority is critical, need to click and indicate review is done before mooving it to the PO column.
A mon tour :
    2651 -> PO mais il faut faire un ticket pour la persistence
    2791 -> set view when...
    - feedback of pull request : checked if it doesn't have effects on other events
    2833 focus mode -> only in openfin

- tentative de passer sur l'env Gamma
- problème : pas de TDD en fin de matinée; à checker après le dej

**Functional grooming**
- rapide
**SFX grooming**
TODO : taper notes

Fin de journée : pluralsight. Test plateforme, vidéo d'intro finastra (45 min), test JS et test TS
End of day call: question quel est le nom de l'elt caché révélé avec ctrl + shift + S (pour m'en inspirer pour faire le 2833)
Thanh et Cédric ne comprennent pas ma question; 
leçon à tirer : apprendre à **adapter mon discours pour les dev** (vocabulaire/jargon tech, u.a en français (plus de lectures en anglais _ comment palier à ça?) + ne pas passer du coq à l'âne, comme d'hab. Les devs sont humains et ne lisent pas dans ma tête donc passer par des intros ou autre. Exemple : "Dans le code, ..." pour indiquer qu'on passe du registre fonctionnel au registre technique)

### 9/01/23_Lundi
TODO : taper notes

### 10/01/23_Mardi
TODO : taper notes

### 11/01/23_Mercredi
off

### 12/01/23_Jeudi
VS code search: 2 mots pas forcément conjoint dans une recherche, choisir regex et utiliser : (word1[\s\S]*word2)|(word2[\s\S]*word1)

### 13/01/23_Vendredi
TODO : taper notes

### 9/01/23_Lundi
TODO : taper notes

### 10/01/23_Mardi
TODO : taper notes

### 18/01/23_Mercredi
off

 ### 19/01/22_Jeudi

[X] e-mails
[ ] valider licence IntelliJ et installer
[X] ticket 2833 focus mode -> PR
[X] ticket 2833 focus mode -> Ready for PO
[ ] PRs
[ ] Pluralsight : deep JS
[ ] Linkedin : finir Git
[ ] Wiki training : CSS selector

**FNX-2833**
Question technique :
Je viens de publier la PR du Focus mode sur Pegasus, FNX-2833, et de créer l'instance sur le TDD.
Avec l'utilisateur touser6 ça marche bien, les toggles de header et ribbon sont synchrones.
Mais avec l'utilisateur kplus, Philippe Escoffier a remarqué que les deux éléments concernés (fnx-setup-ribbon et peg-table-header) apparaissent de façon alternée.

- vérifier que c'est lié à la persistence de l'environnement de travail (workspace) de l'utilisateur.
- trouver comment contourner ça : si ribbon enregistré caché, parler au header pour qu'il se cache aussi.

    /**
     * indicates if fnx-setup-ribbon is hidden. Or should it be @property & @state or a  @watch dans peg-table?
     */
    @Event({ eventName: 'fnx-setup-ribbon_hidden' }) hiddenRibbon: EventEmitter;

Retiré depuis snapshots de peg-main :
exports[`In the component module 'peg-main' the ribbon is hidden if an report output is set on start 1`] = `
<peg-main>
<fnx-setup-ribbon class="hidden">
    <peg-report-list canbookmarkreport="" canchangereport="" canchangetable="" slot="start"></peg-report-list>
</fnx-setup-ribbon>
<peg-table caneditviews=""></peg-table>
</peg-main>
`;

NB : a vérifier mais la méthode pour corriger les snapshots quand on a changé le code qui les fait échouer est de les supprimer du fichier de snapshots, des snapshots à jour sont générés automatiquement.


### 23/11/22_lundi

## Checkpoint :
**Approfondir/apprendre :**
- class
- await/async -> monter en cptces sur les promesses : problèmes que ça règle, problèmes que ça pose (ups and perks)
- algorithmie : théorie de Boole, collections, manipulations d'objets car bcp de fonctionnel dans la base de code, méthodes map, reduce, filter (cas d'utilisation, différences)

Accessoirement, je suis très triste. Rien ne va pour lui.
Je lis des livres sur JS : c'est trop théorique,
Je veux apprendre le vocabulaire : ça viendra à force
puis
Tu connais pas le jargon on ne comprend rien à ce que tu dis;
Je coince sur le linting qui ne passe pas et j'essaie d'en apprendre plus sur le linting : c'est pas prioritaire, revoit tes priorités (n'empêche que du coup mon build est passé).
Là je vais sûrement avoir la même si je lui dit que j'ai commencé un cours sur jest (mais je ne trouve pas assez d'infos sur les snapshots, alors je supprime juste en espérant que ceux reconstruits soient les bons.)
La priorité c'est javascript et typescript : je me lance dans les paths concernés sur pluralsight, je fais les tests avant de commencer pour constater mes progrès, comme recommandé par la plateforme. Les résultats ne sont pas mauvais : c'est des QCM, on peut répondre n'importe quoi on a des chance d'avoir les bonnes réponses. Tu ne comprends rien à ce que tu fais.
J'ai fini les cours pour débutant sur linkedin et pluralsight, appliqué différentes notions sur mes trainings dans des exercices ou des katas; je passe aux cours intermédiaires. Après plusieurs notions comme les datatypes, le switch etc, je bloque un peu sur la notion de this (à la fin du cours intermédiaire) : on s'en fout pour la code base. Il faut juste le comprendre du point de vue de la Classe. On en a déjà parlé. Ben oui, mais je suis contente d'avoir vu les évenements, mieux compris les décorateurs stencils qui vont avec et il se trouve que j'ai eu besoin du this autrement. Et puis c'était une des notions à revoir recommandée à la suite des tests faits sur pluralsight.
J'installe stencil et je créé des components pour comprdistinguer ce qui est stencil de ce qui est js : c'est prématuré vu que je suis nulle en algorithmie,
Je fais des katas niveau 8 et 7 pour renforcer les bases de ce que j'apprend : c'est à se demander comment je résoud les katas, je dois tout faire au pif en copiant du code jusqu'à ce que ça marche (ça c'est vraiment pas sympa à dire et en plus ça n'est pas possible, même si je tatonne trop à son goût). Accessoirement, ça n'était pas les booléens que je n'avais pas compris, c'était le bon usage du Bang! operator. Et du double bang.
Du coup, il me renvoie vers des notions théoriques (la théorie de boole) qui sont dans mes bouquins. Par ailleurs, si je ne connais pas 
George Boole, et que je manque de pratique, j'ai vu plusieurs fois les opérateurs logiques et mathématiques, et je sais que + et - ça fait moins.
J'ai souvent l'impression d'être une cruche finie en sortant des checkpoint et ça n'est pas possible. Comment faire pour démontrer ce que je sais face à ce type de réaction?

### 24/11/22_Mardi

### 26/11/22_Jeudi

        // this.isSetupVisible = !Boolean(this.selectedReport);
        console.log('RENDERER Peg-table, Boolean(this.selectedReport):', Boolean(this.selectedReport));
        console.log('RENDERER Peg-table, this.isSetupVisible:', this.isSetupVisible);
        console.log('RENDERER Peg-table, this.isHeaderDisplayed:', this.isHeaderDisplayed);

### 02/02/23_Jeudi

Ticket FNX-2862_save visibility of column filter (pegasus) :
 Matin à la maison, documentation de Adaptable.
 Bien trop lapidaire, cette doc. En plus c'est une horreur pour trouver la page voulue via une recherche et Google ne connait pas Adaptable.(referencement issues much?)
 Un point qui complique est le nom des filtres : adaptable filter bar is build on floating filter (Ag-grid), c'est aussi system_quick_filter (adaptable)
 Rien à voir avec alk_quick_filter par contre, et indirectement lié (si j'ai bien compris) à toolpanels filterOptions (adaptable : qui s'ouvre sur le côté à droite).
 J'ai perdu du temps en pensant que la filter bar était dans toolpanels (c'était le seul filter mentionné dans les states)

 Investigate Adaptable Options & Predefined Config (provided at design time),
 AdaptableAPi & Events (leveraged at runtime)
 + Entitlements, Adaptable State

 Dans PegTable, onGridInitialized() on AdaptableStateChanged event, event.name = 'SYSTEM_QUICK_FILTER_BAR_HIDE' || 'SYSTEM_QUICK_FILTER_BAR_SHOW':
 on set la vue dirty, le save s'affiche mais l'état du filtre n'est pas sauvegardé.
 console.log de partout :  l'état caché ou montré de ce filtre ne fait pas partie des infos
 (ni dans adaptableOptions (getAdaptableOptions marche pour lancer persistState pour les autres infos liées aux colonnes etc.),
  ni dans l'event associé (ça devrait être dans new state-old state pour adaptable). Voir ALk-adaptable?, 
  ni dans viewOptionsSelected)
 Or, il faut que l'info soit gardée, puis réapliquée.

 Aprèm :
 Aide de Thanh sur ce même sujet + demande d'explication rapide des services storage et persistence dans FNX.
 Même en ragardant avec Thanh, il semble que l'info sur l'état shown/hidden du column filter bar n'est pas gardée. Elle devrait apparaitre dans le state de l'evenement à FilterOptions. Tests et étude de différentes options.
 Conclusion du soir : ecrire à adaptable pour solution à long terme et utiliser adaptable filterAPI pour afficher la filter bar ou la cacher en fonction de l'evenement AdaptableStateChanged emit (event.name = 'SYSTEM_QUICK_FILTER_BAR_HIDE' || 'SYSTEM_QUICK_FILTER_BAR_SHOW')
 
NB : au moins 1 bug constaté, a priori différent : parfois, on a pas accès à la liste des vues sauvegardées (c'est grisé), refresh toute la page et ça redevient bien)
 
[X] rebase launcher et pegasus
[X] refaire stashs de config

### 03/02/23_Vendredi

Daily Scrum :
Cédric, QN, Philippe à Sphere pour formation rxls
Ph.Escoffier absent
The new QA, Katarzyna, may be called "Kasha"

Pause sportive à 11h30 : 20min eliptique, 15 min tapis ac dénivelé de 4, vitesse 4.5
Prof de boxe (poings seulement) du mercredi présent à réparer un écran d'elliptique qui m'a gentillement expliqué : Khaled
Qui m'a fait de la pub pour boxe des autres jours aussi avec Jean(?) Boxe poings et jambes avec lui.

Liste casier sport :
- bouteille d'eau
- basquettes
- legging
- bra
- top
- chaussettes
- spli
- lecteur mp3, écouteurs
- lavande/tee tree
- serviette
- gel douche
- shampoing
- brosse à cheveux
- talc

Admin :  
[X] emails
[X] Kimble en fin de semaine (edit 06/02, fait en retard)
[ ] notes au clair
  
Developpement :  
[X] PRs (pomodoro session) (edit : il en reste plein)

[ ] ticket FNX-2862_save visibility of column filter (pegasus) :
    - write email explaining defect -> Cédric -> ticket raised to Adaptable.
      (edit : l'info voulue (hidden/shown filter bar) se trouve bien dans l'event.system.IsQuickfilterVisible. Mais ça n'est pas réappliqué quand même. Comment je décrit le problème alors?)
    
    - add : this.adaptableApi.filterApi.hideQuickFilterBar() et l'inverse selon l'évenement reçu
[X] ticket FNX-2833_focus mode (pegasus) : suppress blank space at the bottom in focus mode (change css like margin top)
    rebase + mettre à jour TDD

### 06/02/23_Lundi

Admin :  
[ ] emails
[ ] notes au clair

Formation :
[ ] fiche async/await
[ ] compiled vs interpreted (comprendre l'ordre de traitement des infos par JS)

Developpement :  
[X] PRs (pomodoro session)
[X] merger FNX-2833_focus-mode
[X] ticket FNX-2862_save visibility of column filter (pegasus) :
    tel Diego pour voir comment faire avec Adaptable ApplicationAPI
    ça marche, maintenant il faut nettoyer le code et ajouter les tests

A mettre dans la PR du 2862?
// quickfilter n'est pas dans toolpanels !
    // in https://docs.adaptabletools.com/guide/handbook-filtering-filter-bar#configuring-the-filter-bar :
    // Caution : Filter Bar Visibiilty which is changed mid-session is not subsequently persisted, as it is not part of Adaptable State
    // Hint : You can easily save and restore Filter Bar visbility by using the Application section of Adaptable State
    // https://docs.adaptabletools.com/guide/reference-config-application


### 07/02/23_Mardi
Matin :
[X] FNX-2862 : code nettoyé, tests -> failed build.
Essais pour réparer les tests cassés dans pegasus suite au code modifié.

Après-midi:
Nouveaux essais. Sans succès.
[X] Réu grooming technique.
[X] discussion avec Nabil pour mieux comprendre sa PR FNX-2871, surtout l'ajout du report category filter dans les helpers
[X] Fin de journée : Suivi du cours sur jest de Pluralsight

[ ] réparer les tests. Essayer mock.returnValue(false) par ex.
NB : bien lire la trace de l'erreur,
essayer de commenter le nouveau code dans peg-table pour vérifier morceau par morceau quel nouveau code casse quel test,
(les fonctions n'ont pas besoin d'être commentées, juste les appels à ces fonctions)


Ne pas oublier cours sur Füssli à l'ATW 20h-22h

### 08/02/23_Mercredi
Matin :
Daily-Scrum notes :
    Thanh toujours pas là. Pas d'environnement dispo, rancher est down, ils vont essayer de récup compose
    BRM = un type de réunion (bug review)
[X] Journal de Bord et rapport de suivi quotidien à Diego
[X] Mail à Thanh pour essayer le dialogue?
[X] check e-mails
[ ] réparer les tests. Essayer mock.returnValue(false) par ex.

## JEST Unit testing
CLI command to test a single file and run no coverage (ici avec peg-table.spec.ts avec f avant le 'it' pour ne lire que ce test):
```npm run test peg-table.spec.ts --collectCoverage=false```
et si on veut la coverage juste pour ce fichier :
```npm run test peg-table.spec.ts --collectCoverageFrom=path/to/your/source/file.js```

Après-midi :
- trouver comment ne jouer qu'un test ciblé et sans coverage,
- décommenter petit à petit le nouveau code pour voir ce qui casse les anciens tests.
- étude plus détaillée de la documentation de Jest
- recherches d'infos/exemples sur l'utilisation de SpyOn(), mock.mockImplementation etc...
- étude des fichiers de mocks et de specs dans Pegasus pour décortiquer le fonctionnement et trouver la solution

PB de récupération de la structure correcte de certains éléments des tests à cause des problèmes d'environnement et rapports manquants;

Tests à faire selon moi :
(sachant que les 2 et trois étaient déjà fait mais ne marchent plus après les modifs faites au code)
        describe('Column quickFilter bar show or hide', () => {
            it.todo('should show Column quickFilter bar');
            it.todo('should show save if filter bar visibility changes to hidden');
            it.todo('should show save if filter bar visibility changes to shown');
            it.todo('should edit applicationDataEntry showQuickFilter when filter bar visibility changes');
            it.todo('should apply filter bar visibility on page initialization according to selected view');
            it.todo('should apply filter bar visibility on selected view change');
        });

### 09/02/23_Jeudi

[X] check e-mails
[X] rebase launcher
[X] rebase pegasus
[X] 14h réunion Functionnal Grooming
[X] tests FNX-2862 passent, grâce à l'aide de Cédric.
En synthétique :
On a retiré des async inapropriés, vu comment se servir du debbuger de vsCode pour chercher les erreurs dans les tests ( et ses inconvénients )
Je n'étais pas au bon endroit pour profiter de l'environnement (mock) préparé correctement par contre pour ce dont j'avais besoin dans AdaptableAPI.
C'était bien une histoire de mocks et j'ai encore voulu faire trop compliqué.
Du coup, ajouts des infos nécessaires au mock général 'détail' et on a déplacé les tests dans le describe de 'view state' pour profiter du beforeEach déjà présent.
+ Il m'a apprit entre autre que je pouvais préparer des dataSuite pour mes tests pour ne pas réécrire des tests quasi identiques (pour les filtres caché/pas caché dans ce cas). Et à quoi servait le page.waitforchanges pour laisser la main au browser et la différence entre l'utilisation de Peg-table le composant et Peg-table l'élément du DOM (respectivement elementInstance et element dans le fichier peg-table.specs). Donc à priori pas necessaire dans mes tests d'utiliser page.waitforchanges puisque j'utilise elementInstance.

        describe('Column quickFilter bar show or hide', () => {
/*          // GIVEN :
            - une table avec quickFilter bar
            - un header avec un bouton save
            // WHEN :
            - je change la visibilité de la filter bar
            (SYSTEM_QUICKFILTER_BAR_SHOW or HIDE)
            // THEN :
            - la posibilité de save doit s'afficher
            - l'info filtre caché/pas caché doit être enregistrée */

/*             // Donc on a besoin :
            - d'une table avec ses viewState pour isShowSave (elementInstance.viewStates)
            - de l'event avec le bon nom et la prop newstate.system.isQuickFilterVisible
            - de adaptableApiMock.applicationApi (où va l'info recup ds newstate)
            - de la fonction quickFilterEntry() qui reapplique lors des event load_state et layout_ready
            - event load_state
            - event LAYOUT_READY */

// utilisé avec spyOn, import * as pegTableUtils from './peg-table.utils', apparemment différent de import { PegTable } from './peg-table';


### 10/02/23_Vendredi

Matin :
10h15 Daily Scrum : Cedric, QN et Thanh en vidéo, il a l'air en forme.
Washington Plaza, seult Cédric et QN aux bureaux. Je bouge du bureau 5547 au 5563.

12h Cérémonie de cloture de la cravate solidaire
13h cours de boxe ac Jean (coach, boxe thaï), Alice (coach, gauchère), Sandrine (comptable chez SFL, proprios du bâtiment) et 3 autres
[X] e-mails
[X] rapport de suivi quotidien à Diego
[ ] ajouter partout sur mes planning le RDV de visite médicale
[X] FNX-2862 : Partager PR
[X] FNX-2862 : Déployer sur le TDD (fait sur clone de rancher Dev mais pas de rapports pour Pegasus dispos -> message à Ph. E. pr prevenir)
    (edit après-midi, après les tests du 2791) Une fois sur le TDD avec les rapports dispos j'ai vu que ça ne fonctionnait pas + commentaires sur la PR donc je récupère le ticket pour corriger.
    NB : Les tests passent alors que l'état de la filter bar n'est pas réappliqué, donc revoir les tests (sont ils trop liés à adaptable ? mocker manuellement?)
        L'état du filtre est bien dans applicationDataEntries mais en position -1 (what ? mais qu'est-ce qui a bien pu changer...?)

[X] FNX-2791 : 
Puis FNX-2934 ?


FNX-2791
Echange avec Cédric puis Philippe Escoffier pour préciser ce qui était attendu pour FNX-2791 :
Cédric m'a au passage expliqué ce qu'est le mode pivot et le grouping.
J'ai vérifié, toutes les actions qui ne sont pas déjà concernées par un autre ticket rendent déjà la vue dirty
et la modif est réappliquée lorsque la vue est selctionnée.

Détail :
[X] - resize column,
[X] - move column,
[X] - show column,
[X] - hide column,
[ ] - change adaptable config -> à expliciter -> c'est lié au ticket 2934, dont l'intitulé a été modifié pour mieux correspondre au contenu;
[X] - change grouping,/ ça marche mais pas rapide (et 1 fois, save activé mais pas d'encoche ?)
[X] - suppress grouping (doesn't set the view dirty si on va trop vite à dégrouper après avoir sauvé un groupement)
[X] - change pivot
[X] - change sorting / ça marche mais pas toujours rapide
[X] - change absolute value sorting
[X] - open chart
[X] - edit chart
[x] - close chart

### 13/02/23_Lundi
A la maison. Grande fatigue, au lit tout la journée.

Je procède aux Rebase, merge conflicts réglés
Lecture de PRs
FNX-2862 hidden/shown filter bar persistence :
Je ne comprends pas pourquoi ça fonctionnait, ça ne fonctionne plus. Je cherche, 
Finalement : j'y crois pas, j'ai un problème similaire à celui de focus mode,
En fonction de l'utilisateur, ça marche ou pas.
I.e : avec touser6, pas de problème mais avec kplus ça ne marche pas, le filtre repointe toujours le bout de son nez.

Problème réglé avec ajout d'un if sur le conseil de Diego.
Security training

### 13/02/23_Mardi

FNX-2862 : avec le nouveau code, les tests sont cassés : Modification des tests
15h : Grooming technique

            dataToSaveShowOrHide.forEach(({ actionName, visibility }) => {
                it.skip('Should call the right functions when filter bar visibility changes', () => {
                    const eventCallBack = eventCallbackMap.get('AdaptableStateChanged');
                    eventCallBack({
                        actionName,
                        newState: {
                            System: {
                                IsQuickFilterVisible: visibility,
                            },
                        },
                    });
                    const setDirty = jest.fn();
                    const viewUpdateStates = jest.fn();
                    const saveQuickFilterState = jest.fn();
                    expect(setDirty).toHaveBeenCalled();
                    expect(viewUpdateStates).toHaveBeenCalled();
                    expect(saveQuickFilterState).toHaveBeenCalled();
                });
            });


### 14/02/23_Mercredi

Security training, quizz
Les tests corrigés passent en fin de matinée (et j'aurai dû mettre à jour aussitôt la PR)

Après-midi : problème du coverage, verification des rebase, npm i, npm build...
Essais pour améliorer la coverage (sans succès). Finalement il fallait vider le cache de jest.

Explications de QN sur la PR de SFX-7674 persistency implementation of Limit Widget.

FNX-2862 : PR à jour, corrections d'après chaque remarque faites, TDD mis à jour, ticket assigné à Philippe Escoffier.


# 1 : unvalidated input,
# 2 : all of the above,
# 3 : false,
# 4 : false,
# 5 : all of the above,
# 6 : false,
# 7 : determine which data is sensitive enough to require protection both in transit and at rest
# 8 : avoid serialization of sensitive data, apply access controls, encrypting data at rest,
# 9 : true,
# 10 : manual testing
# 11 : effective functionnal testing by application developers,
# 12 : all of the above,
# 13 : enable detailed access monitoring,
# 14 : all of the above,
# 15 : true,
# 16 : re-architecturing without serialization,
# 17 : true,
# 18 : true,
# 19 : only use component you and your team writes,
# 20 : only store logs in a centralized location,
# 21 : true,
# 22 : explore the OWASP Education Project and attend OWASP events,
# 23 : true,
# 24 : false,
# 25 : true

### 15/02/23_Jeudi

Matin :
Selon Retour PR FNX-2862 -> ajout d'un filtre sur EColDefTypes dans CustomTypes de peg-table.utils + tests adaptés à la modification.
Retour validation de Philippe Escoffier et Krzysztof. Ok pour merge.
Rebase de la branche (2 fois, nouveaux merge entre temps)

Après-midi :
Lecture de PRs, beaucoup de PR...

### 16/02/23_Vendredi

Matin : 
Merge du FNX-2862 (j'ai attendu un peu au cas où j'ai un retour de Thanh sur la modif)
Revue avec Tomasz des defects détectés lors de ses tests du FNX-2791 (la liste de ce qui doit faire passer la vue dirty et être persisté dans pegasus).
Il a repéré plusieurs soucis liés au pivot et un autre liés au filtrage des filter bar.
Décision avec accord de Cédric de créer des tickets pour ces sujets specifiques.
(le FNX-2791 regroupait trop de sujets, dont beaucoup sont déjà l'objet d'autres tickets)

Après-midi :
début du travail sur FNX-2870 l'absolute sorting une fois activé et sauvé est toujours actif même quand on le désactive et que l'icone indique un tri normal.

### 20/02/23_Lundi
off

### 21/02/23_Mardi

admin:
[ ] outlook
[ ] CSE -> RIB
[ ] Notes dans VSCode ( + trouver ct sauver les notes en cas de crash)

dev :
[X] rebase launcher and pegasus
[X] 15h Grooming
[X] training JS, TS (badges, objectifs?)
[ ] IDE (try intelliJ)
[ ] understand "workspaces" in FNX
[X] read PRs

[X] FNX 2870 : absolute value sorting:
    X - créer branche nom : fix/FNX-2870/deactivate-absolute-sorting-after-saving
    X - checkout dessus
    X - add console.log etc
    Revue du comportement attendu selon les use cases (encore plusieurs bugs)

### 22/02/23_Mercredi


[X] training TS Pluralsight
[X] étudier SOLID appliqué à JS/TS
[X] étudier UML appliqué à JS/TS
[X] essais avec Mermaid pour voir les schemas dans les readme
[X] FNX 2870 : absolute value sorting:
     - prévoir tests pour absolute sorting

     - schematiser Peg-table et Peg-table.utils Absolute Sorting

    - commit naming : {action}({subject}): ({jira code}) {message}  
        -> fix(absolute sorting): (FNX-2870) possibility to deactivate absSort in saved view

        Dans initAbsolute sorting :         // on met de côté le comparator et on applique l'autre. Ne pas jouer ça 2 fois,
        // sinon on met de côté le abs comparator et on le réapplique.
        // à suppr de on grid initialized vu que c'est déjà géré par la vue avec l'ajout de Diego dans le Layout
        // si ça contient déjà l'ID, il faut une erreur ou ALKlogger comme quoi ça doit pas déjà être là
PRs where merged too quickly to read and understand for me on this day (because of the release)



### 23/02/23_Jeudi
Bureau, seulement Cédric et Nabil sur site.

Début de Modelisation de Peg-table avec GitMind. J'essaye de comprendre comment ça pourrait être divisé en parties plus petites.

Rebase

14h Grooming
Aide de Cédric après le grooming. Il faut que je me contente de régler le problème concerné, il faut rester dans le scope du ticket.
Mais pour le prochain ticket sur le sujet du absolute sorting, je pense que setAbsoluteSorting, initAbsoluteSorting pourraient être divisés en plus petites fonctions pour plus de clarté et de nouveaux tests réalisés (sans pour autant tester les fonctionnalités apportées par ag-grid ou adaptable).

### 24/02/23_Vendredi
Bureau le matin, aprèm off. Personne d'autre de la UI

[X] Kimble 
[X] email (mais à nettoyer plus tard)
[X] rapport de suivi à Diego (hebdo)
[X] typescript : suite cours pluralsight 10' minimum
[ ] FNX 2870 : trouver comment appliquer le bon comparator (abs sorting ou normal sorting) au chargement de la page + tests et PR

13h boxe
message à Fanny
14h30 spa
Bujo ?

Soucis :
la gouttière, le toit
pas assez de progrès en front-end
desordre à la maison
actualités (accident de la route)
poid
e-mails
linge
blonville, thierry, link,
géraldine

### 27/02/23_Lundi
off

### 28/02/23_Mardi
Au bureau, Amira, Philippe, Saurav et Céline présents, arrivée de Thanh ensuite.

[ ] FNX 2870 : trouver comment appliquer le bon comparator (abs sorting ou normal sorting) au chargement de la page + tests et PR
[ ] training typescript -> repasser tests pluralsight
[ ] 15h technical grooming
[ ] 16h30-16h45 one to one Diego -> demander des objectifs?

42 is the answer to the “ultimate question of life, the universe, and everything,” a joke in Douglas Adams’s 1979 novel, The Hitchhiker’s Guide to the Galaxy.
Et l'adresse du Washington Plaza?

- long trajet dej pour aller à la pause libanaise à côté de saint lazare, pas de place 
    -> retour à pied tous ensemble et déjeuner à la cantine (nouveaux prestataires et café au café 42)
- Aide de Saurav pour installer plop et pouvoir changer automatiquement d'environnement. npm install -g plop a finalement été la bonne commande;
    Mais aucun environnement ne fonctionne.
    15h30 retour des env, plop fonctionne mais penser à changer le port du proxy selon le TDD sur env-switcher.js pour utiliser develop ou compose.

## SOLID in TS/JS :
- Principle of least knowledge :
    each unit (class, function, object, module) should have only limited knowledge about other units
- Low coupling :
    coupling is the degree of knowledge that one element has of another.
- high cohesion :
    cohesion mesures how closely components are connected within a module, how closely things resemble one another and are about the topic at hand.

    An object encapsulate data and relevant methods related to data.
    Objects should be the least possible dependant on each other.

- feature : a collection of objects to perform a specific task is called feature

SOLID stands for

S: Single Responsibility Principle
O: Open-Closed Principle
L: Liskov-Substitution Principle
I: Interface Segregation Principle
D: Dependency Inversion Principle

FNX 2870 :
Pas d'environnement le matin, voulant me mettre sur Rancher QA je me décide à régler le problème que Plop ne fonctionnait pas chez moi.
C'est finalement npm install -g plop qui a fait l'affaire.
Ensuite plus d'environnements du tout;
Puis dans l'après-midi ce sont les colonnes des rapports qui me servaient à tester qui changeaient.
De plus la vue sauvegardée n'est plus celle qui revient lorsque je refresh mais le bandeau de setup vide et il faut reselectionner le précédent rapport pour que la vue revienne.
Avec le real-time, le comportement est difficile à suivre mais en fait l'absolute sorting n'est pas appliqué lorsque que la vue est rechargée mais lorsque les données changent c'est bon.

Le soucis du ticket 2870 a l'air corrigé, peut-être grâce au petit if ajouté pour s'assurer du comparator appliqué mais je n'ai pas confiance. Je dois faire les tests.


Je ne comprends pas les relations entre column-type.utils.ts 
(cf const AMOUNT_BASE_COLUMN_TYPE : colDef qui précise le comparator = currencyPairAmountCellComparator
 qu'on trouve dans currency-pair-amount-cell-renderer.utils.d.ts)
 et grid-sorting.utils.ts où l'on retrouve const compareAbsolute.
 ( cf la PR de Cédric FNX-1869 d'il y a 15 mois "handles amount formatting/aggregations via ag-grid column type definitions)
TODO :
 // import { setAbsoluteSorting } from '../components/peg-table/peg-table.utils';
// trouver comment corriger le WARNING de columnFactory.js:380 :
// columnFactory.js:380 AG Grid: colDef.type 'absolute' does not correspond to defined gridOptions.columnTypes

### 06/03/23_Lundi

J'ai récupéré ma VBox vendredi soir, yeah
Par contre mes droits admins ne sont encore pas suffisants pour installer un sous-systeme linux et wsl 2 sous windows au cas où. Tant pis.

J'ai retrouvé Cédric, Amira, Philippe, Nabil et QN (de retour de vacances) au bureau à midi mais je suis repartie travailler à la maison à 17h pour faire le chemin avec Elodie.
Il est 23h. J'ai voulu avancer car demain je rend ma copie et Cédric ou Diego devraient m'aider à boucler absSort.
En tout cas j'ai la preuve que le soucis vient de l'application du comparateur et que celui-ci n'est pas correctement appliqué par la fonction initAbsoluteSorting mais je ne sais pas pourquoi.
Et j'ai écris un test pour ça mais j'ai copié un peu des bouts de codes et je ne sais pas s'il est bien articulé.
Je l'ai fait dans une démarche TDD, pour qu'il rate. Mais bon, s'il est mal écrit, il ratera de toute façon.
Il faut appeler les pointures à la rescousse.

Du coup, récap de l'activité d'aujourd'hui : travail sur 2870, le bug en lui même ( pouvoir revenir au sorting normal) étant réglé mais il y en a d'autres sur abs sorting.
Je pense que c'est lié à l'application du comparateur aussi :
- outre les tickets envoyés par Diego ce matin, il y a aussi un grop problème :  le initAbsoluteSorting ne marche plus,
même en le faisant jouer lors de OnGrid-Load et Layout-ready (verif eventnames)
Le tri ne s'applique pas lorsqu'on recharge la page de la vue avec le absSort, 
Le tri ne s'applique pas losqu'on selectionne la vue avec le absSort.

-> [ ] Quand la vue se charge le absSort doit être fait et dans le bon sens

Avec futur ticket si pas réglé là :
-> [ ] on doit pouvoir retirer et faire revenir une colonne avec un absSort actif

### 07/03/23_Mardi

Grève générale. 1 train sur 2 ou 4, Althéa à la maison;
Galère sur Absolute Sorting
AU bureau : Cédric revoit mes console.log, en fait j'imprimais une variable locale pour le deuxième comparator.
On a cherché dans blame dans le repos bitbucket dans pegasus > src > components > peg-table pour trouver ce qui avait pu faire débloquer le tri/provoqué la régression.
Mon idée d'utiliser onSortChange dans gridOptions et de le déclencher au chargement de la vue ne va pas d'après Cédric (ça serait comme de s'appeler soit même au lieu de laisser adaptable nous appeler quand il est près)
Possible que puisqu'il faut attendre au chargement de la vue qu'on ait récupéré toutes les infos d'adaptable et ag-grid et que le initAbsSort n'est près à ajouter l'info du type ABSOLUTE qu'une fois qu'on a chargé certaines de ces choses, ça arrive trop tard, après un sort basique qui a déjà été fait (mais alors pourquoi est-ce que l'icone de abs-sort est appliquée ?)
L'idée serait, à la place de déclencher mon sortChange, de créer une fonction "applyAbsSort" qui utilise agGrid.gridOptions.applyColumnState() pour appliquer quand on veut (une fois la grille prête ou juste après le setAbsSort par exemple) les infos correctement paramétrées par initAbsSort dans la colDef.

### 08/03/23_Mercredi
Télétravail.
Patraque et les enfants remuants.

Travail sur ApplyColumnSorting etc toute la journée sans succès.
J'ai des problèmes d'affichage dans VSCode sur la VBoxe (essai de réunir tout absSort dans un fichier -> pb pour supprimer un fichier, écran saute -> en ligne de commande; pas possible d'ajouter un dossier au workspace (edit : en fait si, j'avais ajouté plein de choses mais à l'aveugle et c'est à cause de ça que j'ai à rentrer 15 fois mot mot de passe))

vers 16h Français avec Saurav

Call du soir : Amira aussi a des pb d'affichage de son IDE (intelliJ pour elle), d'après Thanh c'est un problème d'utilisation de la carte graphique par la nouvelle version de la VBox (ou kernel (pas sûre d'avoir compris)) donc il va falloir trouver le bon réglage pour que ça marche.
Et aussi : essayer d'implementer ce que je veux en utilisant adaptable.SortAPI


### 09/03/23_Jeudi
Pas la pêche, départ pour le bureau après le daily.
Cédric au bureau et plein de back-end, bureau 65
Pilates et Yoga en fin de journée

Lecture doc adaptable.SortAPI
Pas d'environnement.
Bujo.
Arrivé au bureau pour l'heure du dej. Cédric, Diego et QN présents. Cantine (couscous)
13h30 café Women at Finastra au basement, rencontre Jonathan, nouveau RH et quelques autres présentations,
dont ..? (la super sympa avec le T-shirt Jinx) qui en fait est product owner sur TCM, avant plutôt Kondor et maintenant..?)
14h grooming technique.

Demander à Amira pour sa PR 6662

One on one avec Diego:
- objectifs : ils arrivent une fois par an puis les ordres/objectifs cascadent vers le bas. C'est normal que je n'en ai pas encore car je viens d'arriver mais il trnasmettra dès qu'il aura et on essayera de faire un point toutes les 3 semaines et de faire un test de niveau bientôt pour moi et aussi pour Saurav qui a peut-être des points à améliorer.
NB : Diego estime que les cours en vidéos sont aussi bien que les cours avec être humain mais que pour un test c'est bien d'avoir quelqu'un en face.
- recommandation : Revenir au code de develop et essayer de recreer la fonction sans le this (le this n'a pas à être dans une fonction utilitaire
car elle devrait pouvoir être utilisée dans plusieurs endroit. Ici ça ne marche qu'à cause du bind dans peg-table.
)
Je voudrais aussi comprendre cette histoire de comparateurs : la variable que Peg-table n'utilise pas est en fait utilisée dans
initAbsoluteSorting qui la récupère grâce au bind. ->  comment peut-on la mettre à disposition autrement?

### 10/03/23_Vendredi
9h au bureau : admin
11h visite médicale
13h Boxe
14h15 RV refacto
15h grooming
16h rewrite function AbsSort
Test pluralsigh Git (résultat moyen -> prévoir d'approfondir)

### 13/03/23_Lundi
PI planning kick-off
Daily
Pas d'env pour tester les modifs sur AbsSort
Compliance training finished
Training Js and Ts (theme of the day : modules)

### 14/03/23_Mardi
PI planning kick-off
Daily
Training modules fini
Coup de main à Saurav pour ses PRs pour ajouter aks aux alk-components :
- je fais à partir de S jusqu'à windows-manager
- Problème de build sur le premier, je me demande si il ne m'a pas refilé à partir de là pour cette raison particulière, le brigand.
La VBox se déconnecte régulièrement
Le VPN m'a fait le coup aussi
et pour faire npm i sur le dossier, j'ai dû supprimer le package-lock à cause de multiples erreur npm tar ENOENT no such file or directory

[X] Tout cloner depuis alk service explorer jusqu'à alk windows manager,

### 15/03/23_Mercredi
off, repos car malade
Pluralsight : fin cours sur les bases de typescript et lab sur commandes de base CLI manipulation de fichiers (recherche d'indices sur des jpeg volé dans un dossier : cut -d',' -f6 | sort -rn | wc ... )
check PR -> petites corrections à faire sur les PRs de AKS (spacing) et plein à lire demain
AbsSort : env develop ok et rapports dessus -> les modifs à initAbsoluteSorting n'ont rien cassé sauf les tests. A corriger. Ensuite, boucler le ticket et passer au suivant pour corriger la régression ? C'est un  peu galère les montants mis à jour au fur et à mesure (là sur crosse-position FX-Default)


### 16/03/23_Jeudi

[X] corriger PRs AKS
[X] Lire PRs (mais il en reste plein)
[ ] CR suivi à Diego
[X] -> message teams envoyé à Philippe Escoffier
[ ] Boucler 2870 histoire de changer de numéro sous les yeux? 
changer MP ordi ?
update ?

14h functionnal grooming
15h30 point RH ( élodie) -> en profiter pour lui demander la formation et les arrêts maladie à Finastra et lire ma fiche de paye,
tel pour coaching/psy, objectifs annuels etc.
17h end of day call

Faire 1 appel important par semaine.
Trouver quelqu'un de moins fort à qui expliquer, quelqu'un de mon niveau avec qui discuter et quelqu'un de plus fort avec qui apprendre.

// ajouter un describe pour regrouper les tests concernant le contenu du column menu ?
        // test : GIVEN (give context, previous state), WHEN (event, action), THEN (desired behaviour, final state)
        // it('the icon should correspond to engaged absSort\(|asc|, |dec|, |none|\ or casual sorting action \( asc, dec, none\)'):
        // -> ex : if icon === asc, 1st line number is the smallest one, last line is the biggest one
        // plutôt init absSort ?:
        // it('should reload the saved order (asc or descending) on refresh)'):
        // -> event ... -> applied order correspond to what has been saved
        // it('should reload the saved order (asc or descending) on selected view change)'):
        // -> event ... -> applied order correspond to what has been saved
        // it('should return to normal sorting when asbSort is not engaged'):
        // -> event ... -> applied order correspond to what has been saved
        // Quand user clique pr désactiver absSorting l'icône devrait changer, ainsi que l'ordre (le sorting)
        // Actuellement, que se passe t'il ?
        // it('when a column with absSort is suppressed then readded it should be visible on reload')

### 17/03/23_Vendredi

[X] corriger PRs AKS (encore, oui. mais merged sauf Alk-tree qui prend plus de temps à builder)
[X] CR suivi à Diego
[ ] Trouver de l'aide pour corriger tests absSort. Discussion avec Amira, qui voulait prendre le ticket 3068 sur AbsSort breaks column visibility.
Je lui ais montré ce que j'essayais de faire sur AbsSort et elle renonce pour l'instant en attendant que j'ai fini. Elle me dit qu'il faut que je fasse un mock d'applicationApi et de de comparators pour les passer à initAbsSort...
Sauf qu'en cherchant à le faire, j'ai réalisé que ma modif ne fonctionnait pas car erreur sur appEntry ( type void pas applicable à ApplicationDataEntry )

ça devient très caffouillis. Je vais faire une autre branche, ne laisser que les modifs utiles pour le ticket et le changements de nom de variables et cela une fois validé, je prendrais le ticket 3082 ou 2776 et je re travaillerai sur la suppression du this dans la fonction de utils en tirant parti des capacités de mon IDE et/ou de sortAPI de adaptable.

Coups de fils importants à passer : ménage, notaire, rdv cavaleri (carence fer et traitement) et gy., allergo althea, orthoptiste Althéa. Ostéo (épaule gauche)?