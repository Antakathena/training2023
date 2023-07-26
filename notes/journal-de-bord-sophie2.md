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
[ ] ticket 2833 focus mode  
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

**Functional grooming** (rapide)  
**SFX grooming**  : TODO : taper notes

**Fin de journée :**  
pluralsight : découverte de la plateforme, test JS et test TS  
vidéo d'intro finastra (45 min), 

**End of day call:**  
Je demande quel est le nom de l'elt caché révélé avec ctrl + shift + S (pour m'en inspirer pour faire le 2833)  
Thanh et Cédric ne comprennent pas ma question;   
leçon à tirer : apprendre à **adapter mon discours pour les dev** :  
(vocabulaire/jargon tech, u.a en français (plus de lectures en anglais _ comment palier à ça?) + ne pas passer du coq à l'âne, comme d'hab. Les devs sont humains et ne lisent pas dans ma tête donc passer par des intros ou autre. Exemple : "Dans le code, ..." pour indiquer qu'on passe du registre fonctionnel au registre technique)

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
- baskets
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
  
Development :  
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

Development :  
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
et la modif est réappliquée lorsque la vue est sélectionnée.

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
A la maison. Grande fatigue, au lit toute la journée.

Je procède aux Rebase, merge conflicts réglés
Lecture de PRs
FNX-2862 hidden/shown filter bar persistence :
Je ne comprends pas pourquoi ça fonctionnait, ça ne fonctionne plus. Je cherche, 
Finalement : j'y crois pas, j'ai un problème similaire à celui de focus mode,
En fonction de l'utilisateur, ça marche ou pas.
I.e : avec touser6, pas de problème, mais avec kplus ça ne marche pas, le filtre repointe toujours le bout de son nez.

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
*Grève générale. 1 train sur 2 ou 4, Althéa à la maison;*
*au bureau*

**Galère sur Absolute Sorting -> recours à Blame sur Bitbucket**  
Cédric revoit mes console.log, en fait j'imprimais une variable locale pour le deuxième comparator.
On a cherché dans **blame** dans le repos bitbucket dans pegasus > src > components > peg-table pour trouver ce qui avait pu faire débloquer le tri/provoqué la régression.  
Mon idée d'utiliser onSortChange dans gridOptions et de le déclencher au chargement de la vue ne va pas d'après Cédric  
(ça serait comme de s'appeler soit même au lieu de laisser adaptable nous appeler quand il est près)  

Possible que puisqu'il faut attendre au chargement de la vue qu'on ait récupéré toutes les infos d'adaptable et ag-grid et que le initAbsSort n'est près à ajouter l'info du type ABSOLUTE qu'une fois qu'on a chargé certaines de ces choses, ça arrive trop tard, après un sort basique qui a déjà été fait (mais alors pourquoi est-ce que l'icone de abs-sort est appliquée ?)  

L'idée serait, à la place de déclencher mon sortChange, de créer une fonction "applyAbsSort" qui utilise agGrid.gridOptions.applyColumnState() pour appliquer quand on veut (une fois la grille prête ou juste après le setAbsSort par exemple) les infos correctement paramétrées par initAbsSort dans la colDef.

### 08/03/23_Mercredi
*Télétravail. Patraque et les enfants remuants.*

Travail sur ApplyColumnSorting etc toute la journée sans succès.
J'ai des problèmes d'affichage dans VSCode sur la VBoxe (essai de réunir tout absSort dans un fichier -> pb pour supprimer un fichier, écran saute -> en ligne de commande; pas possible d'ajouter un dossier au workspace (edit : en fait si, j'avais ajouté plein de choses mais à l'aveugle et c'est à cause de ça que j'ai à rentrer 15 fois mot mot de passe))

vers 16h Français avec Saurav

**Call du soir :**  
Amira aussi a des pb d'affichage de son IDE (intelliJ pour elle), d'après Thanh c'est un problème d'utilisation de la carte graphique par la nouvelle version de la VBox (ou kernel (pas sûre d'avoir compris)) donc il va falloir trouver le bon réglage pour que ça marche.  

Et aussi : essayer d'implementer ce que je veux en utilisant adaptable.SortAPI


### 09/03/23_Jeudi
*Pas la pêche, départ pour le bureau après le daily.
Cédric au bureau et plein de back-end, bureau 65
Pilates et Yoga en fin de journée*

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

[X] corriger PRs AKS (encore des indentations à corriger, oui. mais merged sauf Alk-tree qui prend plus de temps à builder)
[X] CR suivi à Diego
[ ] Trouver de l'aide pour corriger tests absSort. Discussion avec Amira, qui voulait prendre le ticket 3068 sur AbsSort breaks column visibility.
Je lui ais montré ce que j'essayais de faire sur AbsSort et elle renonce pour l'instant en attendant que j'ai fini. Elle me dit qu'il faut que je fasse un mock d'applicationApi et de de comparators pour les passer à initAbsSort...
Sauf qu'en cherchant à le faire, j'ai réalisé que ma modif ne fonctionnait pas car erreur sur appEntry ( type void pas applicable à ApplicationDataEntry )
ça devient très caffouillis. Je vais faire une autre branche, ne laisser que les modifs utiles pour le ticket et le changements de nom de variables et cela une fois validé, je prendrais le ticket 3082 ou 2776 et je re travaillerai sur la suppression du this dans la fonction de utils en tirant parti des capacités de mon IDE et/ou de sortAPI de adaptable.
[ ] en essayant des trucs avec Stencil sur ma branche training j'ai encore eu le soucis d'autorisation; J'ai essayé d'ajouter un certificat au format PEM pour Github et de pointer dessus dans mon .npmrc mais ça n'a pas marché; j'ai donc désactivé des sécurités temporairement pour faire un npm install stencil > app



Coups de fils importants à passer : ménage, notaire, rdv cavaleri (carence fer et traitement) et gy., allergo althea, orthoptiste Althéa. Ostéo (épaule gauche)?

Add certificate for github to be able to run stencil without deactivating ssl certifications:

https://stackoverflow.com/questions/36494336/npm-install-error-unable-to-get-local-issuer-certificate
recup de la clé de certificat de mon github sous forme de .pem

puis edit .npmrc file :
https://stackoverflow.com/questions/42877722/how-can-i-add-a-npmrc-file
pro tip, if you already have an .npmrc file, you can type **npm config edit from the command line** to open you npmrc file

; cafile=undefined
devient :
cafile= /home/sophie/certificationKeys/github.pem

reporté car mise à jour forcée de office 365 dans 2h avec pop up au milieu de l'écran !!!

### 20/03/23_Lundi
Toujours fatiguée et le nez qui pique, début cure de fer

Pour info, avant de les perdre : les commandes de la manip pour pouvoir supprimer la variable d'environnement qui m'empêchait d'installer le browser pour les ajouts d'AKS :

git push --set-upstream origin feat/FNX-2282/add-AKS-to-alk-toast

 // le push ne passait pas. npm run test : erreur car pas de browser installé < variable d'env. la changé pour false n'a pas suffit, il fallait la supprimer complètement. Je mets quand même les deux pour référence.
 // NB : bien utiliser l'autocomplétion, surtout si on fait rm -rf !!! on peut supprimer tout son systeme.

export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=false
env | grep PU
rm -rf node_modules/
npm i
npm run test
env | grep PU
unset PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
npm run test
env | grep PU
reset
rm -rf node_modules/
npm i
npm run test

ça marche. Plus qu'à pusher

Mais bon, pour Alk-tree, ça corrige un problème mais ça n'explique pas pourquoi le push est passé et pourquoi malgré l'absence d'erreur, le build n'est pas bon (les tests prennent 3 plombes et ça dépasse le délais de 2 heures)

ToDo:
[ ] corriger Alk-tree
[ ] faire branche propre pour absolute sorting et prendre le ticket suivant d'abs sort (2776 ou 3082)
[ ] training : cartonner en repassant les tests pluralsight JS et TS
[ ] mettre auto-compta au carré pour pouvoir eventuellement la montrer à Diego demain.

Done:
- corriger alk-tree -> pas trouvé la solution, message dans 'dev' et demande à Saurav de faire un point pour comparer alk-tre et alk-grid.utils mais pas dispo
- faire branche propre ok, npm run test ok, lint ok
- NB : en voulant créer une branche alternative et renommer l'autre, j'ai décrocher ma branche local du repo distant de pegasus donc il a fallut que je trouve comment les reconnecter (origin, tout ça);
- training : test pluralsight PI pour Node.js et NPM, et repris le test Typescript
- end of day call avec Thanh, Amira, Philippe : Thanh m'a reproché d'avoir créé une branche au lieu d'utiliser git pour revenir en arrière. Pendant 20 min. Mon faire une branche pourrevenir sur un env propre mais conserver mes multiples console.log sont devenu avoir 40 000 branches pour garder 1 console.log... je lui ai dit que je suivait des cours sur git en attendant, il m'a dit qu'il ne fallait pas me plaindre si je ne faisait pas ce qu'on me disait parce que je voulais régler trop de problèmes à la fois mais je ne me plaignait pas. J'expliquais pourquoi ma branche n'était plus claire pour les autres et pourquoi je voulais en faire une claire;
edit : Amira m'a expliqué ce matin que s'il insistait autant c'est parce que j'expliquais pourquoi je ne faisais pas autrement au lieu de dire juste j'ai compris. Mais l'autre jour il avait dit que certains dev préféraient les commits, d'autres les branches... il n'a pas compris. Mais pourquoi est-ce que j'aurai besoin qu'il comprenne. C'est là mon problème. Pourquoi je ne peux pas juste laisser courir sachant que je travaille déjà pour m'améliorer en git et que à cours terme, faire une autre branche me semblait la bonne solution. Je ne devrais pas avoir besoin de son assentiment.
- swiss ball 45 min avec coach Christian

### 21/03/23_Mardi
ToDo:
[ ] corriger Alk-tree -> voir Saurav
[ ] créer env pour 2870 et publier PR (vérif noms de variables si je les ai pushées ou pas)
[ ] passer 3082 du back-log à in progress dans jira -> commencer le travail dessus
[ ] training : potasser fiches JS et repasser le test, continuer cours sur git
[ ] auto-compta : je veux comprendre comment on accède aux différents fichiers HTML en fonction de la page où on est. cf les html de fnx

At the office. grèves mais j'ai eu un RER tout de suite. Poubelles partout dans Paris à cause de la grève des éboueurs.

10h15 Daily
10h30-11h et 15h-16h Grooming tech x 2
14h Point avec Elodie à 14h dans le salon au RC Red... -> penser à demander à Diego pour le papier que j'aurai du signer pour la fin de ma periode d'essai.
16h-16h30 Grooming fonctionnel PDC widget
Discussions avec Amira, Diego, Philippe

Done :
- env créé pour 2870 + PR
- récup de 3082 pour continuer sur AbsSort
- training : Git (20 min)
- Alk-tree : trouvé différence de version de jest dans les package.json des components dfont le build ne passent pas. ça marche comme ça. -> alk-tree mergé;

Nb : Amira me conseille de changer le minimum de choses et autre conseil : stocker mes snippets, scripts, etc... dans des blocs notes dans un dossier windows

### 22/03/23_Mercredi
10h-11h30 PI planning review
14h-15h PI Wrap-up
AKS added in alk-user-rights
correction PR 2870 (retour à FakePegTable au lieu de createFakePegTable car cette fonction est utilisée comme constructeur d'objet)
Récup de IntelliJ sur la VBox linux 

### 23/03/23_Jeudi
10h15-11h15 sprint planning
correction de la version jest modifiée inutilement dans la PR pour Alk-user-rights
Grooming aprèm annulé
lecture PRs


### 24/03/23_Vendredi
off
prépa fête d'anniv Olivier et NIMP Steampunk Robot Western


### 27/03/23_Lundi
OOO day


### 28/03/23_Mardi
Bureau. Tout le monde là sauf Amira et Thanh, en distanciel
ToDo:
[X] rapport de suivi à Diego
[X] read PRs : la moitié à peu près + revue de notions TS et JS 
[X] plan weekly training to retake JS pluralsight + Javascript Security best pratices (chapitre test your code) et début de Javascript fundamentals niveau intermédiaire (cours de 3h) (préciser les horaires de training)
[X] e-mails (à moitié)

NB : au bureau, pas bien vive aujourd'hui. Bujo avancé. Incription à  TaskHuman et à IconnectYou
NB : loose totale avec les type-challenges sur Github, il va falloir s'améliorer

### 29/03/23_Mercredi
Home office.
13h-14h : TownHall

ToDo:
[X] rapport de suivi à Diego
[X] outlook e-mails (+ check pour inscription kids day et prévenir Elodie que Diego n'a pas vu passer le papier pour la fin de période d'essai)
[X] vu vidéo du PDG sur le site de finastra. NB : trouver comment comprendre la finance -> lien 'intuition Know-how'(cf e-mail QN du 9/01/2023)
[X] training : continuer Javascript fundamentals niveau intermédiaire to prepare retake pluralsight test (chapter 2, 3, 4) (à la fin, faire un récap du résumé)
[X] codewars ( niv. 8 x 4)
[ ] tester le refacto avec IntelliJ -> finallement, suivre la formation intégrée à l'IDE. Outils installés
[ ] avancer MVP auto-compta ?

+ compta
+ tel aide ménagère 
+ tel coach

SailPoint identity:
https://finastra.identitynow.com/ui/d/dashboard
q° : chat, prénom et nom grand-mère, Avenue avec la majuscule
NB : il faudrait que je prévienne que les e-mails de cette plateforme là ne me parviennent pas;

Lien vers learning sur la finTech dans intuition Know-how (donné par QN ds e-mail du 9 janvier 2023):
https://learner.intuition.com/finastra/home?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE2NjNFRTlCOEI4N0NENjA0QkJGQkNEMURGMjMwQTA3QjYxNUZCNTIiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIwNGU4NjQ0NjllYWM0MDg1YWRkOTY0MGJmZTJjMTA4NSIsIm5hbWUiOiJzb3BoaWUudHJlYmF0aXVzQGZpbmFzdHJhLmNvbSIsIm9yZyI6IjE2NTAiLCJuYW1laWQiOiIyNTY2ODc5OSIsInJvbGUiOiJsZWFybmVyIiwibmJmIjoxNjgwMDg1NzcyLCJleHAiOjE2ODAxNzIxNzIsImlhdCI6MTY4MDA4NTc3MiwiaXNzIjoiQWR2YW50YWdlTlguQXV0aGVudGljYXRpb25TZXJ2aWNlIiwiYXVkIjoiQWR2YW50YWdlTlggQVBJIn0.A55fObNAV-ZTQ8XzCTYQyJozriPnRikd_H6fuYvDnNgwfrZcpW8tYtcluM9Ek4v19Xkv_MMHNg9ebW13fLnA08gOcNCKT5iE7z9ePqaZLqb64BV7WAjy4wkWV2lkaYCeLVR3V-yxOwxCdd3sM25xSt7dsIu3IeSW50QNn7VTfd32sbdSBZ_qNbcWFdPfZa3v7abhK5q6ztaDBLqdI9exjXr6teCozHJ2R0tdveRtdcQsM_AF1qx954H-UFiGAF_lbx1fh1gUUjDYji3uesuTTSa5RZjI6e9q0P-6zCRUEHdk2YnHLcfHK5WACk0a9wiHfjtzYQyxQ7Ni65VLZkxVmA




### 31/03/23_Jeudi
[?] rapport de suivi à Diego
[X] read PRs :
Explication d'Amira sur Fix/SFX-7864/date format not match browse settings : je ne savais pas qu'on pouvais régler sa langue dans le browser
Explication de QN sur feat(Trade contribution): (FNX-2368) implements realtime updates
et sur fix(Limit widget): (SFX-7811) always re-establish SSE connection on firm change :
    Comment communiquer avec le serveur ? -> Websocket, dans les deux sens, ou
    SSE - Serveur Send Event < class EventSource(url du serveur), à sens unique donc moins couteux/
    ??'' c'est juste le fallback : undefined et null ne renvoient rien (une string vide)
    Qn s'occupe dans ces PR de faire l'extraction de Pegasus d'un service de SSE puis l'utilise dans Trade Capture (drilldown)
    Au moyen d'un observer (Rxjs), elle met en place l'affichage des modifs faites au drilldown en tps réel (par exemple la suppression d'un trade dans le tableau dont la suppression jusque là ne s'affichait qu'après refresh)
[X] training to retake JS pluralsight : suite de Javascript fundamentals niveau intermédiaire



### 1/04/23_Vendredi
[X] rapport de suivi à Diego
[ ] au daily : annoncé que j'allais prendre le ticket 3054 (https://jira.finastra.com/browse/FNX-3054) sur le conseil d'Amira, en attendant que AbsSort soit débloqué.

NB : **Notes sur AbsSort** ça serait bien que j'arrive à quand même coder des belles fonctions ce WE qui font que :

- AbsSort est bien paramétré (absSortEnabled = true | false ) -> ça marche mais bien se souvenir comment ça marche
- la sauvegarde des infos sur la colonne (u.a. visibilité, tri ascendant ou descendant) doit se faire correctement
- au moment où on choisit AbsSort, il faut que ça soit appliqué au tableau
- au moment où on reload et au moment où on selectionne la vue où il y a un absSort, il faut que l'absSort qui a été paramétré ( quelle colonne a absSortEnabled et les infos sur la colonne) soit appliqué.

Question auxiliaire :
Pourquoi une colonne avec AbsSortEnabled rendue invisible reste invisible même si on la re-sauve après l'avoir réaffichée? peut-être une mise de côté quelque part de l'info. Il faut bien que la colonne avec AbsSortEnabled soit sauvée comme affichée.

J'ai demandé à Cao une partie de Mah Jong quand ça sera possible, c'est toujours 4 joueurs.
Je me suis ajoutée sur la partie de Wiegraf de rêve de Dragon ce soir.
J'ai téléphoné à iconnectyou pour parler de la situation familiale + estime de soi et j'ai rdv à 19h avec une coach sur Task Human.

FNX-3054 changer ctrl+alt+S pour icone oeil :
- Figma me renvoyais sur mon espace perso de s.trebatius@gmail.com, il fallait que je me connecte avec mon adresse Finastra
- Céline m'a indiqué où étaient stockées les icones de Robbie et les siennes dans le Team, et j'ai mis le lien et l'image qu'elle m'a envoyé sur le slack des dev pour faire passer l'info. Il faut que je la rajoute dans le bitbucket dont Cédric m'a envoyé le lien.

End od day call : Philippe nous a montré le storybook du nouveau Alk-tree-menu (car il fallait refresh une nouvelle fois pour prendre en compte je ne sais pas quoi au sujet des NOB ? Nabil avait eu le même pb, c'était réglé)
Cédric a discuté avec Thanh au sujet de la PR de Saurav sur le SSE sur la façon de récupérer tous les events avec : if (eventType === '*') { this.allEventsCallback...}
Il trouvait qu'en utilisant une fonction plutôt qu'une fonction fléchée on récupérait le events qui étaient je ne sais plus où et qui étaient privés et on évitait de tous les récupérer comme c'est fait là. Mais finalement, pas top car ça fait rentrer dans un truc privé (un fichier, une liste?) par un biais détourné (donc pas clair et source de confusion?)

### 3/04/23_Lundi
discussion avec Saurav sur le nom des variables pour pouvoir merger le 2780 après ses commentaires.
début du travail sur 3054 ajout du bouton flotant pour ouvrir le setup.
tech session où l'on a travaillé sur la modification du bouton croix qui ferme le setup dans FNX-setup-ribbon pour qu'il devienne le bouton flottant quand le setup est caché.
Mais je n'arrivais pas à faire fonctionner ça car peg-main cache tout FNX-setup-ribbon.
Au end of day call et ensuite, discussion avec Cédric, qui m'a fait revoir le scope du ticket et le distinguer de 3057.
Le bouton du 3054 est bien distinct.

### 4/04/23_Mardi

15h-16h technical grooming

add alk-icons = merge dans develop de ma branche avec les nouvelles icones mais pas dispo tant qu'on a pas fait la release de la nouvelle version.
Donc je ne pourrais pas merger mon travail sur pegasus utilisant les nouvelles alk-icons avant que cette release soit faite (par moi à priori);
Mais je peux tester la nouvelle version en dev en la modifiant dans le package.json et avec npm install.
Le nom de la version peut être récupéré en haut du build (ici 2.9.0-develop-60). Avec la release, QN dit que ça prendra encore un numéro (genre 2.10.0)
Releaser consiste à mettre un tag sur la version de develop et décreter que c'est la nouvelle version si j'ai bien compris.

Discussions avec Céline sur le design du bouton.
Découverte d'informations contenues dans le storybook que je ne connaissait pas.

Fin de journée : le bouton a un aspect correct et apparait quant il faut mais le onClick ne fait pas apparaître le setup.
Lecture de quelques PRs

### 5/04/23_Mercredi
14h30 PDC functional grooming
15h-16h SFX functional grooming

Et j'ai passé le reste de la journée à essayer de trouver la solution à mon problème d'afficahge du setup, alors que la variable semblait correctement mise à jour;
J'ai essayé un watch, de supprimer et ajouter la classe qui met le setup à hidden...

Au end of day call et après avec Cédric qui est resté un moment pour vérifier mes breakpoints etc, pas de solution non plus mais on a pu identifier que mes circonvolutions ne valaient rien et que le state isSetupVisible passait de false à true sans raison apparente au niveau de showSetup() donc a priori le render ne se faisait pas.

### 6/04/23_Jeudi
Finalement Saurav et Amira ont trouvé qu'il fallait que je remplace ma fonction par une fonction fléchée.
Tout marche dans peg-main.
Il me reste à finir de placer le bouton dans un composant sur le modèle de celui qui ferme le setup qui est l'essentiel de FNX-setup-Ribbon.
Lecture de quelques PRs

Beaucoup de discussions avec Nabil au sujet de Absolute Sorting pour lui montrer ce que je savais du feature.

Un cours de Cédric sur le tag slot et ses usages et une explication sur pourquoi le this n'était pas le bon avec la fonction normale dans le 3054

Insciption finie sur le site du CE. Code = J'..

17h30 : cours de pilates, que moi, travail notamment sur position pour ne pas avoir mal aux poignets (épaules basses (la gauche remonte), coudes pas vers l'extérieur)
18h30 : cours de Yoga
21h45 : retrouvé Hyppolyte pour manger au resto vers chez lui;

### 7/04/23_Vendredi

Arrivée un peu tard, pour le daily scrum
le temps de prendre un café
10h45 brief de Diego sur refacto et web worker dans Pegasus
12h15 séance guidée muscu : alterner 15 rep machine dos/épaules et 15 pompes sur le banc
13h Boxe
Transformation du bouton qui marche dans peg-main en un component à part entière.
3054 fini, les tests et 2/3 éléments erronés revus avec Diego pendant la tech session du soir.
nb : pour utiliser template et qu'on donne un tag, le fichier doit être en .tsx (en x en fait)
En tapant 1Opx to rem dans google, en bas de la liste qu'on peut ouvrir on a un outil pour transformer les px en rem précisément.
C'est dans figma qu'on a récupéré l'info exacte du nombre de pixels, dans la vue ux (outils? le truc à cliquer au milieu quand on était sur le prototype cliquable)
+ j'en ai profité pour poser les questions sur la réu du matin : overlay?, "rollup"(c'est un bundler, comme Babel, et celui utilisé par stencil, et postinstall?)

NB : pour vérifier qu'une block est bien displayed dans la page quand il faut dans les tests on peut check if display: block ou si l'élément a une size (si c'est display : none, l'élément n'aura pas de taille.)

### 9/04/23_Lundi
férié (pâques)
Début crea app pour accompagner FinVenture de Ramila (stack : stencilJS ? Django ? précisions sur le tableau et les calculs de la 1ère page à réaliser + prepa pseudocode)

### 10/04/23_Mardi
comme un lundi. Bureau. QN, Amira, Philippe et Cédric là.
Travail avec IntelliJ et lecture des bulles d'infos, tutos.
C’est comme avoir un prof et MDN intégrés dans l’IDE mais c’est plus lent et trop d’infos me perdent pour travailler quand il ne s’agit pas d’étudier en profondeur toutes les 2 minutes.

11h-12h : sprint planning

Le FNX-3054 est fini : création d'environnement mais pas d'environnement up pour le moment; Passage à la colonne ready for PO. 
Remarque sur PR -> retrait de la classe CSS 'hide-setup' qui n'a plus lieu d'être pour une string vide (mettre undefined faisait rater les tests, c'était plus simple mais j'aimerai comprendre pourquoi)
Malgré l'absence de rapport, retour de Philippe E. Dans l'après-midi : on ne voit qu'un carré mauve (comme localement quand les nouvelles icônes n'avaient pas été ajoutées à Alk-icons ) et changer le texte du tooltip -> fait, et j'avais oublié de pusher la modif de version de alk-icon dans le package.json.

15h-16h technical grooming

Lecture PRs

Lecture des tickets Jira pour en trouver un à faire car AbsSort est encore en suspend en attendant le refactoring de Diego;
-> FNX-2885 shorten tag name of the Drilldown (diff iculté : 3)
-> FNX-3057 RV 2.0 - Report Ribbon redesign serait trop sympa mais difficulté : 5, donc les autres me conseillent de prendre l'autre

### 11/04/23_Mercredi
e-mails, admin : mais le truc à faire sur Workday prend trop de temps, il faut se préparer pour kids day
Je me fait un nouveau dossier projet dans intellij, sans node pour l'instant, pour me faire une page html basée sur mon planning (pour bricoler avec html, SCSS et JS)
Aprèm Kids Day; avec Olivier, Althéa et Roderic dans le bus, le RER, au Washigton Plaza. Sandwichs là-bas...
La journée est passée très vite et je n'ai pas pu travailler.

### 12/04/23_Jeudi
10h15 : daily scrum
FNX-2885 shorten tag name of the Drilldown :
[X] créer ma branche
[ ] faire la modif
[ ] tester localement
[ ] faire et publier la PR
[ ] créer l'env, passer à ready for PO

Notes sur FNX-2885 : 
PRs potentiellement utiles :
feat(open deal): (FNX-2284) Launch Open Deal action --> https://scm-git-eur.misys.global.ad/projects/FNX/repos/fnx-pegasus-reporting/pull-requests/232/overview
feat(report charts): (FNX-2731) add execution to tab name --> https://scm-git-eur.misys.global.ad/projects/FNX/repos/fnx-pegasus-reporting/pull-requests/262/overview

Pour ouvrir un drilldown, dans pégasus, selectionner une ligne, de préférence dans un report avec "position" dans le nom, 
pour avoir Trace Capture dans le menu contextuel en faisant clic droit dans les données. (les options dispos pour ce rapport sont determinées par une liste de prop envoyée par le back-end)

+ correction de l'opacité du floating button après message d'Eugene pour la passer à 0.8 comme spécifié dans le ticket

[X] Workday : auto-évaluation RRR et désigner 3  pers pour feedback  
[X] lire des PRs  
[X] e-mails  
[ ] check kimble  
[X] demander des jours de vacances  
[X] codewars x 2  
[ ] pluralsight : 30 min  
finir pseudocode pour finventure et setup env  
ranger bureau  
pilate & yoga  
jardinage   
tel notaire Lyon puis Crécy  
tel lawyers : cf partage Rachel sur task human et Bianca sur discord   

### 13/04/23_Vendredi



### 18/04/23_Mardi

Tech grooming : PDC

Karma est un framework, qui fournit plein d'outils, un peu comme les alk-components de FNX. C'est en java.
4 apps utilisent ce framework : WebAccess, Trade Capture, KGS ? et ?, ça fournit tout ce qu'il faut.

**FNX-2885 shorten tag name of the Drilldown :**
see PR feat(report): (FNX-2345) Business UI logic - Apply label for Report tables de Amira https://scm-git-eur.misys.global.ad/projects/FNX/repos/fnx-pegasus-reporting/pull-requests/234/diff#src/service/reporting-data/reporting-data.service.ts
 -> info de graphQL à récup pour actionLabel est dans services/reporting-data/reporting-data.service.ts de Pegasus

explications de Philippe sur l'injection de service. Ce service des par exemple utilisé (injecté) dans grid-data. NB : un service peut utiliser un autre service, comme un component peut utiliser un autre component

Config.ioc.ts : ce fichier apparait pour chaque app et à chaque fois il s'agit d'instances différentes des services, elles n'ont rien en commun.
Trouver comment Pegasus livre ses infos à trade contrib -> See also de Diego, PR FNX-2673 du 25/02 commit "include adaptable..., que j'ai retrouvé via "commits" dans le ticket jira cherché dans la recherche de jira en haut à droite (merci QN)

Notes du soir : A priori ce qu'on veut (actionType), n'est pas dans l'interface utilisée auj dans le tabName, mais dans IDrilldownViewConfigurationPayload. C'est le action type de ETableActionType qui nous interesse (.drilldown?)

cf in trade-contrib-launching.service.specs :

        describe('registerToShowDeals', () => {
            const payloadData: IDrillDownViewConfigurationPayload = {
                configuration: { ..
                    action: {
                        label: 'action name',
                        payload: {
                            type: ETableActionType.DrillDown,
                        },..
    

### 19/04/23_Mercredi
Home office
PB de rebase de 3054 avant de merger à cause du 'big refacto' de Diego 
Echange avec QN, le matin, mais rebase ne passe pas. Hypothèse : rebaser sur develop puis ajouter les new modifs à la main. Mais elle est en réu jusqu'à 16h30 et je dois écouter la réu sur la RRR evaluation annuelle;
Avec Cédric, recherche de ce qui bloque sans trouver
Je cherche à créer une branche propre que j'appelle de la même façon dans l'idée de la rebrancher sur la branche distante qui a la PR après.
Medecin à 16h30
Gros coup de fatigue

### 20/04/23_Jeudi
Au bureau
Aide de QN pour gérer le rebase.
Retrait des commits avec un reset soft (ce qui garde les modifs que l'on peut alors stasher, un reset hard supprime tout ce qui est après le commit choisit complètement)
Le refacto de Diego a créé des problèmes à QN déjà car sur Pegasus il a upgradé Stencil, donc il lui faudrait upgrader node pour que ça marche ? Finalement pour ma machine, ça n'est pas ça qui bloquait mais un import dans le fichier storybook créé automatiquement lors de la création du component fnx-open-setup-button. En supprimant l'import, ça passe.

## Gérer un rebase difficile
Pour les conflicts, vérifier si nécessaire l'état de develop sur bitbucket pour comparer avec les modifications que l'on veut faire.

On peut revenir sur les commits fait avec les outils de VSCode pour rebase avant d'ajouter ses modifs.

Mieux lire les erreurs !

1- Créer une copie de la branche  
2- Pour retirer les commits gênants pour le rebase : depuis le commit à garder, reset soft -> preserve les modifs des commits supprimés (à retrouver dans la vue source control et on peut alors les stasher pour les réappliquer après)  
3- stash  
4- rebase (fetch etc)  
5- check  : npm i, npm build, npm run test  
6- git push -f  

## Collection de recommandations de Cédric:
https://www.pierre-giraud.com/html-css-apprendre-coder-cours/position/
les icones sont visibles ici : http://10.21.230.54:49518/storybook/?path=/story/atoms-alk-icons--icons

Capacity Planning :
kondor ui
une colonne par sprint
la date indique le 1er jour de chaque sprint
et chaque sprint dure 3 semaines
il faut additionner les jours de congés prévus par toi et les jours déjà mis qui correspondent aux jours fériés

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview
https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript
https://cdiese.fr/syntaxe-typescript-en-10-min/

### 21/04/23_Vendredi
Avec Thanh, mock data tool: 
nb il a fallu rajouter l'import de writefile dans les templates/generators/replay-data.js de pegasus, report-manager et launcher
et nous avons ajouté le service de mock dans le plop de fx-trade-contribution
ça marche pour les rapports de pegasus et report-manager, mais pas pour trade-contribution à cause des real-time updates/SSE/queries (je ne me souviens plus de la formulation exacte employée par Thanh)

Pour se service du mock data service, lire la doc;
En résumé :
plop env sur rancher dev (ou autre ça a l'air de marcher aussi s'il y a des rapports NDRl)
plop record une fois sur tous les env/terminal des repos concernés mais ne lancer le script qu'une fois, depuis le terminal de launcher par ex.
puis faire ses manips pour record les rapports utiles
puis ctrl+C
puis nxp kill proxay (verif sur la doc la commande exacte)
on peut alors vérifier les enregistrements dans le dossier "reports" à la racine du repo
ensuite on passe à plop replay
à faire une fois sur chaque repo/env concerné mais
on ne joue le script qu'une fois depuis launcher (ça lance tous les proxay necessaires)
pour arrêter : ctrl+c et npx proxay kill (ou commande corrigée)

Avec Cédric, FNX-2885:
L'idée est d'ajouter l'info du action label name à ce qui passe de pegasus à trade-contrib.
Solution simple adoptée pour éviter d'avoir à releaser une nouvelle version de alk... vers lequel data-reporting (ou je ne sais plus quoi) a été déplacé par le refacto de Diego.

Toujours bien vérifier que ça build avant les tests pour être alerté si erreur à ce niveau-là.

(edit après 3 jours off, pas d'environnements dispo pour l'instant
le Soir : un truc clochait mais je ne sais plus quoi. A retester (+ push ?) dès que possible)

add under getViewTitle de fnx-trade-contrib-main.utils.ts:
// change here ? FNX 2885 Drilldown window name is: '[action label] - [report label] - [config name]'
    console.log({ startupData });

### Lundi 24/04/23 au Mercredi 26/04/23 : off

### 27/04/23_Jeudi
Retour après 3 jours off + WE, où j'ai principalement dormi à cause de la carence en fer carabinée avérée par une prise de sang
Taux de Ferritine à 5 ng, apparemment c'est bien bien bas

[X] Appel à la notaire à Lyon

14h Functional Grooming :
**cloud margin** : UI to be able to use standalone apps from our parteners -> specific url to add
"collateral management app" ?
licence check would be part of the user rights < to be checked by back-end ?
**freeze data feed** : to be done in the front or back-end ?
**tooltip for columns**: subject of the column?
**tooltip to show full amount when shorten in the cell**

**Notes sur FNX-2885 :** 
En gros, pour récupérer le actionLabel dans le tab name du drilldown, il fallait l'ajouter aux infos passées de Pegasus au Drilldown, donc label: string ajouté IDrillDownStartupData (et là je réalise que j'ai oublié de faire une branche pour Pegasus parce que c'est sur deux repos donc deux PRs, duh 
)

Bref, le problème de build est sur la branche de FNX-FX-TradeContribution.
Qui récupère l'info et le tab name s'affiche comme il fallait. En local ça build et les tests passent. Mais sur Jenkins, ça plante au moment du "execute".
Les erreurs sont les suivantes (4 ou 5 erreurs identiques, je n'en met qu'une) :
2885 : erreur d'un import non utilisé (ITableActionDataPreloaded from ../../interfaces) supprimée mais des erreurs au build jenkins subsistent alors que ça passe le build local
build feat/FNX-2885/shorten-drilldown-window-name
#3
Property 'label' is missing in type '{ id: string; config: undefined; context: string; reportName: string; reportLabel: string; configName: string; isDefault: false; namespace: string; table: string; dataRows: { __ROW_ID__: string; }[]; username: string; columns: undefined; }' but required in type 'IDrillDownStartupData'.
17:53:05  ERR! [at-loader] ./src/components/fnx-trade-contrib-trades/fnx-trade-contrib-trades.spec.ts:210:34 
et d'autres pareil, mais si je rajoute label là j'ai :
dans le build #5:
17:53:05  ERR!     TS2352: Conversion of type '{ id: string; config: undefined; context: string; reportName: string; reportLabel: string; configName: string; isDefault: false; namespace: string; table: string; dataRows: { __ROW_ID__: string; }[]; username: string; columns: undefined; }' to type 'IDrillDownStartupData' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

Edit du 28/04 : il fallait bien continuer à rajouter label: 'string' partout où c'était nécessaire mais pour voir l'erreur en local il fallait **supprimer le dossier www, node-modules** pour repartir sur un build clean, refaire un npm install du coup et jouer **npm run storybook.build** (npm run build ne fait pas ça en local)

### 28/04/23_Vendredi
[X] book coaching session with Rachel Simeone : demain 14h
[ ] annuler RDV avec Forgeot-Ballanant

Priorités :
[X] Read PRs (explications pour de Cédric pour sa PR sur le delete report button)
[X] finish 2885 :
    - créer la branche de Pegasus pour transmettre le actionLabel name vers le drilldown + PR
    - faire corrections pour faire passer le build Jenkins et PR pour la branche de trade-contrib
    - créer un env. avec les branches pour pegasus et trade-contrib
[ ] cours pluralsight JS fundamentals et retake test JS

[ ] save notes JdB
[ ] check usage cloud et sauvegardes en cas de crash PC ou Vbox

