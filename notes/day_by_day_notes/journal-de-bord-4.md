### 05/06/23_Lundi
*bureau 5547, face à Ogden, seuls de ce côté*
*dej avec Elodie*

 **Réunions :**
 - Daily scrum
 - Grooming BO HQ
 - Tech session ? Je ne sais plus si elle a eu lieu ou a été annulée celle-ci, mais en tout cas, docker exploré et maintenant je dois me qualifier sur docker-compose.
 - End of day call

### 07/06/23_Mardi
*bureau 5558*  
*bureau avec tout le monde sauf Saurav, coincé en Italie à cause des grèves et Nabil est arrivé à 13h30 après avoir reçu une livraison*  
*Dej à la cantine avec en plus Pierre et Maria*

[X] rapport de suivi à Diego envoyé pour la semaine du 29 mai au 2 juin.

NB : version 3.5.1 releasée ? version 3.5.2 en cours ?  
NB : pour kill all nodes avec intellij ->

 **Réunions :**
 - Daily scrum
 - Weekly technical grooming front-end
 - réu pour s'entendre sur la façon de gérer PDC, DV01 et ? : Specific Reporting Apps vs RV Business Apps
 - End of day call

**Ticket FNX-3275 :**  
onglet "advanced grid" à droite. On voit que dans les settings le style est bien présent pour la vue où on a fait le réglage de config, mais pas pour l'autre vue. 
    Dans la console des webtools(en ayant mis un point d'arrêt, sinon ça ne marchera pas, duh): 
        this.adaptableApi.styledColumnApi.getActiveStyledColumns() 
        comporte bien notre colonne dans un cas et c'est vide dans l'autre.

    La différence est au niveau de :
        this.columnApi.getColumn("POSITION_MKT_PRICE") > useProvidedColDef > cellStyle

Bug adaptable d'après Diego -> il faut leur faire un ticket.  
Cédric vérifie avec moi quel est le comportement normal sur https://docs.adaptabletools.com/guide/handbook-layouts
Même comportement mais bug ou pas ? En tout cas, Diego dit qu'on ne va pas appeler toutes leurs API alors qu'on a besoin d'un reset global de l'adaptableState d'une vue à l'autre.
Message envoyé à adaptable avec des captures d'écran.

**FNX-3013**  
Message de Kristof vu en début d'aprèm pour signaler que sur RancherQA on a toujours certains float numbers.
Vu avec lui : sur develop c'est bon. Question de version ?
Tout le monde n'est pas d'accord mais en tout cas le fix a l'air complet finalement;

### 08/06/23_Mercredi
*maison*  
*12h reçu jardinier de O2 pour devis*

- ping pong messages adaptable
- cours pluralsight docker/kubernetes (ms voir aussi compose d'ici vendredi)
- Question à Amira sur sa PR sur les drilldowns.
 et à Thanh sur sa pr reload...

 **Réunions :**
 - Daily scrum
 - PDC UI Grooming
 - SFX UI technical grooming
 - PDC Technical grooming Frontend

 Pris : ticket FNX-3309  
 Trade Capture : NON , c'est KARMA !!! xml, java, etc... Ca n'est pas Trade Contrib (drilldown)

### 09/06/23_Jeudi
*maison*
*il fait trop chaud, c'est très fatiguant de se concentrer sur les réunions*

 **Réunions :**
 - Daily
 - Technical roadmap grooming Front End
 - Front-end weekly functional grooming
 - Technical roadmap grooming Front end

 **Lecture PR:**
 A jour

**Ticket FNX-3275 :  
hide column manque ds le column menu**
Pas le temps d'avancer sur le ticket

### 10/06/23_Vendredi
 *bureau 5558*

**Todo :**  
étudier swagger,  
docker-compose,  
FNX-3275,  
Local storage et session storage (cf ticket Philippe, demander),  
SFX : volet "détails" (QN : prochain sprint),  
quieries : fetch etc...

**Recherches faites :**
swagger vs postman

 **Réunions :**
 - Daily
 - Technical grooming front end
 - Tech session : annulée, le grooming s'est prolongé

**Ticket 3309 : hide column manque ds le column menu**  
 - Echange avec Nabil -> peut-être lié à ses modifs car si le layout n'est plus dans les setting panel on est plus censé avoir l'option dans le menu de colonne.
 - Etude PR FNX-2857 : remove unnecessary items from column menu
 - Si besoin : étude PR FNX-2649 : Missing collapse/expand all in the non numéric column menus

Nouvel échange avec Nabil après la boxe : curieusement, quand on rajoute la partie qu'il a retiré, on retrouve les deux options voulues, mais pas celles qu'on ne voulait plus liées d'après lui au layout. Il n'écoute pas. Pour lui si on veut les options dans le column menu, on doit remettre le layout.
Sauf que c'est bizarre mais ça ne marche pas comme il dit.

Après une aprèm de grooming technique, vu avec Thanh :
en remontant dans Alk-adaptable (nb : cloner le repo plutôt que de l'étudier sur bitbucket)
    Dans alk-adaptable.tsx il y a :
    options = ...merge -> qu'est-ce que ça fait exactement avec les trois parametres qu'on passe à la fonction? Qu'est-ce qui en ressort ?
    En effet, les adaptable options sont déjà définies une première fois dans adaptable.config.data.ts (les entitlementOptions qui sont sencés être toutes à Full par défaut d'après la doc adaptable quand la liste n'est pas définie est définie ici donc les retirer toutes comme a fait Nabil ne peut pas marcher comme on le voudrait); les settingsPanelOptions aussi, ça interfère forcément

**Notes de Grooming :(à finir de taper-cf cahier rouge)**

    - Open new instance/duplicate instance:
        question = flag pour savoir si 1 ou n instances dans launcher ou dans les apps ?
        apps.json (ce qui est dans launcher) est écrasable par le client via Kubernetes  
        vs appconfig dans les apps n'est pas écrasable par le client
        In openfin launcher, dans le menu natif, l'entrée "open new instance" doit être là mais grisée si 1 instance déjà et que 1 seule instance possible

    - DV01 : toggle to switch between Native & Report currency
        Native = currency of the client's country ?
        Persisté dans la vue

    - New setup ribbon = Common, Configuration bar (setup), Contextual

    - DV01-Bucket :  
        add 1 quiery & permettre à l'utilisateur de choisir le bucket persisté dans la vue

    - Ne pas ouvrir les app dans Workspace si pas autorisé pour ce user:
        platformOverride.ts
        migrateSnapshotsWindow
        - snapshot in the content of openfin
        - memoize the right access (fetchjson is memoizing thins behind the scene)

    - Logs from Pegasus in SACCR:
        use tradeContrib to show logs (ce sont des logs d'excution) -> à préciser

    - PDC limits:
        à mettre à jour de façon incrémenté,
        connexion SSE, 
        Nous on se connecte au service SSE qui nous passe les infos de 2 services à mesure qu'elles arrivent;

### 12/06/23_Lundi
*maison*
*reçu jardinier (Farel?)*  
*appel de la maternelle vers 11h : Roderic a fait une chute de vélo, il s'est ouvert la peau au niveau de la machoire -> Olivier y va, je prends mon après-midi*
*Après 7h d'attente aux urgences, 7 points de sutures pour Roderic et je vais chercher Althéa à l'école*

 **Réunions :**
 - Daily
 - PI planning Kick-off

**Recherches faites :**
docker-compose (avec Chat-GPT-4 + Linkedin learning)

### 13/06/23_Mardi
*maison* 
*Roderic à la maison suite à hier et Althéa aussi, elle ira voir le medecin à 15h car elle a trop mal au genou. Une tendinite ?*

 **Réunions :**
 - Daily
 - PI planning Kick-off
 - UI and QA PI planning Kick-off
 - BO HQ technical grooming front end
 - canceled : one to one Diego
 - End of day call

**Ticket 3309 : hide column manque ds le column menu** 
TODO :

[X] créer une branche d'étude pour alk-adaptable

[ ] créer un lien symbolique vers ma branche de pegasus :
    J'essaie de voir comment ça se passe entre alk-adaptable et pegasus.
    En particulier, comment les infos données dans adaptable-config.data.ts
    pourraient faire ce qui est dans mon ticket sans modifier peg-table-adaptable-options.definitions.ts dans Pegasus
    J'avais fait un lien symbolique quand j'avais travaillé sur alk-grid-utils
    mais là je ne vois pas comment. npm link alk-adaptable ? mais non, il n'y a pas cet import là. Comment ça marche ?
    Pas quoi ça passe ? alk-adaptable est apelé dans le renderer de peg-table-content

[ ] démêler ce qui se passe quand tout merge et ce qu'il faut, version clean, pour que les adaptable options rendent bien setup et hide column dans le column menu mais pas les options non désirée dans le setting's panel.

**Objectifs de la semaine :**
- traiter  mes mails
- à jour des PRs
- apprendre des choses pendant les réunions
- être qualifiée sur les bases de Docker et Docker Compose
- niveau avancé sur Git
- kata niveau 6 sur CodeWars
- FNX-3309
- + un autre ticket

### 14/06/23_Mercredi

In alk-adaptable :
voir le merge de adaptable Options dans alk-adaptable.ts

        const options: AdaptableOptions = {
            autogeneratePrimaryKey: !hasPrimaryKey,
            menuOptions: {},
            // Merges all configuration parts, from default to grid
            ...merge({}, defaultAdaptableOptions, propsAdaptableOptions, {
                gridOptions: this.gridOptions,
            }),
            containerOptions: {
                adaptableContainer: this.adaptableElement,
                agGridContainer: this.gridElement,
            },
        };
        console.log('options', options);

Sachant que defaultAdaptableOptions est défini dans alk-adaptable dans adaptable-congif.data.ts



In Pegasus :
in peg-table-adaptable-options.definitions.ts :
    entitlementOptions: {
        // oddly, defaultAccessLevel should be Full for every options but when I put this back,
        // setup and hide column button come back without unwanted options showing in the setting pannel or in the column menu.
        // (charting in not necessary but the other ones seem to be)
        // -> check alk-adaptable adaptable options modifications
        // defaultAccessLevel: 'Full',

        ...

Apparemment, quand on définit des entitlementOptions ici, celles par défaut de alk-adaptable ne sont plus prises en compte.

Mais, même quand celles de alk-adaptable sont là on voit le layout alors qu'il y est définit comme hidden.(!!?)

FNX-3309 hide column missing in column menu -> env créé, PR publiée

Lectures de PR

**End of day call**
En présence de Amira, Nabil, Philippe, Thanh, Saurav.
Nabil a présenté notre séance de travail de ce matin comme si il avait passé tout le temps à m'aider alors que dans l'ensemble il m'a fait refaire toutes les manips faites vendredi soir et lundi matin pour montrer tout ce que je lui disais parce que qu'il n'aime pas le code d'adaptable dur les moduleEntitlement parce que ça n'est pas clair (c'est pas faux, remarque). Mais bon; Conclusion, qu'il présente comme la sienne alors que c'est ce que je lui disais : le merge de alk-adaptable ne marche pas.
En tout cas, il m'a dit ce matin que Diego avait dit de ne pas toucher aux adaptable options définies globalement dans alk-adaptable, donc j'avais ma réponse mais indirectement : les modulesEntitlements à rajouter vont dans Pegasus.
Mais ensuite pendant le grooming, j'avais cru comprendre qu'il disait le contraire, pour résoudre le merge.
Et puis finalement ce soir, il me dit que non, il ne faut pas toucher à alk-adaptable, qu'il n'a jamais dit le contraire et qu'il a vu avec Diego (que je n'ai pas réussit à alpaguer aujourd'hui) et qu'il ferait un fix de son côté pour le merge dans alk-adaptable.

Thanh "était surpris" que je sois toujours sur ce ticket/cette question, que le problème du merge ait été soit-disant "découvert" ce matin avec Nabil alors qu'il avait attiré mon attention dessus vendredi (mais il a dit jeudi en plus) et que je demande seulement aujourd'hui et à Nabil de m'aider alors qu'on est jeudi (en fait mercredi), soit une semaine plus tard (sauf qu'en fait c'est 2 jours travaillés plus tard vu l'accident de Roderic qui m'a fait posé mon lundi aprèm et des réunions et la fatigue cognitive qui va avec tout le reste du temps. En fait j'ai eu une soirée et une demi journée tranquile seulement pour avancer là dessus)

Mais je n'ai pas demandé à Nabil, il s'est proposé. Et je n'ai pas corrigé le merge parce que j'avais contourné le problème; ok, ça n'était pas bien en fait, mais je ne l'ai compris qu'en rediscutant avec Thanh après le call.

Ci-après un message préparé pour Nabil dont je n'ai laissé que les parties techniques (Olivier me dit que j'étais trop fatiguée et que je mélangeait l'emotionnel et le reste, que je devais arrêter pour prendre du recul) : 

    J'ai discuté avec Thanh après le call.
    J'ai été un peu contrariée par ce qu'il a dit et un peu aussi de ne pas pouvoir corriger le merge,ne serait-ce qu'avec toi, je m'excuses.

    J'étais confuse. J'ai eu l'impression qu'il me reprochait d'avoir perdu mon temps et que tu ne me trouvais pas capable de finir de corriger le problème.
    Grâce à ses explications, je comprends mieux le merge et ce que je ne comprenais pas, notamment la complexité pour corriger le merge et que tu iras bien plus vite que moi mais j'espère que tu m'expliqueras. Au moins, j'espère que j'ai été utile ce matin.

    Suite à sa remarque (sur le fix du merge qui pouvait , j'ai testé de mettre tous les entitlementOptions à la suite dans alk-adaptable pour vérifier la compatibilité des modules avec la possibilité d'avoir les options 'select' et 'hide column' dans le column menu et ils ont disparus, donc il faudra faire attention, il y a quand même une incompatibilité quelque part.

    Je suppose que tu connais déjà mais pour m'expliquer il a regardé la doc et m'a indiqué :
    https://lodash.com/docs/4.17.15#merge
    et
    https://codepen.io/travist/full/jrBjBz/ , très pratique pour tester le comportement de _.merge, dont je ne comprends toujours pas la logique.
    Pour lui ça n'est (peut-être) pas un problème de nesting mais plutôt de la façon dont lodash merge gère les objets. Donc il faudrait peut-être changer l'ordre (?) ou implémenter une merge custom.


Demain : voir avec Cédric ses conclusions sur adaptable styled column pour savoir dans quel sens aller. Essayer en 2 jours.

Login to adaptable tools to see the ticket :
- fnx-frontend-team@finastra.com
- Kond.....3


First 3 modules are here, even thought they are also in alk-adaptable, to compensate that with the lodash merge used in alk-adaptable to combine adaptable options "subsequent sources overwrite property assignments of previous sources."
NB : adaptableModule: 'Layout', accessLevel: 'Hidden' not here because it will hide the wanted column menu options.
The three last ones are the ones that enable the select and hide column options.

### 15/06/23_Jeudi

NFR =  non functional request = ce qui est purement technique et que le client ne voit pas mais nécessaire, comme les upgrade de versions node etc.
- tout le monde est d'accord pour ne pas faire la correction du merge lié au 3309 et laisser passer ma modif pour avoir le fix. (c'était bien la peine de m'enquiquiner pour mon turn around)

### 16/06/23_Vendredi
*bureau*
*arrivée de chez Hyppolite à 10h, seule de la UI, dej avec Guy et ?? (mon voleur de place 68 du back-end)*
*santé : très fatiguée après l'indigestion de champagne de la veille mais avec quelques siestes entre mes coudes, ça a été jusqu'à 18h puis retour à la maison*

- merge etc sur le FNX-3309. (petite frayeur en fin de journée car le build de develop suite au merge n'est pas passé sur premier coup, il a bloqué sur execution. mais on a regardé avec Cédric, il a relancer et c'est passé sans qu'on comprenne ce qui s'était passé. une histoire de script de worker non trouvé alors qu'il était bien là d'apprès les vérifs de Cédric)

Failli envoyé le message suivant mais finalement posé au end-of-day call (mais mon environnement permet de sauver certains DEFAULT alors que pas chez Cédric... à suivre):
Would like to check with you : views which names begin with "DEFAULT" are not supposed to be saved with modifications but it is normal to show "unsaved" when changes have been made ?

### 19/06/23_Lundi
*maison*
*fatigue, esprit embrumé, soucis de digestion/acidité*

Todo:
[ ] kimble (oublié vendredi mais introuvable sur intranet -> lien envoyé par Cédric sur chat du Sprint planning de ce matin + les task names ont changé aussi :-())
On est quoi avec FNX : MVP extention ou Market limit 3.5 ? Et puis ça veut dire quoi d'abord, Market limit 3.5
[X] plannifier semaine
[ ] plannifier sprint/mois : bureau, admin, travaux à la maison, vacances d'été + budget, sport, créa, task human, rdv ostéo, dermato, ophtalmo So, allergo Althéa, ortophoniste Roderic, ortoptiste So/Althéa ? 
[ ] suivi Diego : revenir sur la semaine dernière et mieux planninfier le temps à passer sur les rapports de suivi + synthèse
[ ] Lire PRs
[ ] Ecluser e-mails
[ ] Ticket FNX-2680
[ ] Suivi du travail de QN sur detailled pannel ds SFX
[ ] étudier local storage et session storage
[ ] cours pluralsight advanced typescript
[ ] revenir à adaptableStateKey quand j'ai fini le 2680

Pomodoro : FNX-2680

### 20/06/23_Mardi
*bureau*

**FNX-2680 :**
Beaucoup d'aide sur le ticket de la part de Cédric qui m'a expliqué aussi **comment fonctionnait l'orchestrator etc pour récupérer le rapport choisit**
mais il dit que c'est trop haut dans le code pour être là ou les bactéries attaquent, donc retour où j'étais hier mais il m'explique que les breakpoint peuvent mettre le bazar dans l'ordre d'execution du code donc pour une fois il conseille les console.log. Mais déjà fait pour moi. Alors il me dit d'étudier la call stack et là, je sèche. L'étudier : via des console log, via l'outil web tools dans source en bas à droite.

Philippe m'a expliqué la différence entre **local storage et session storage** et j'ai bien mieux compris au passage ce qu'est local storage.
En plus, comme il s'est connecté à sa session de karma depuis mon ordi, a priori, maintenant, je peux aller voir comment c'est fichu;

Amira m'a appris qu'on peut mettre des **conditions d'execution aux breakpoints dans les web tools**. A garder pour plus tard mais très interessant.

Beaucoup de discussions instructives sur le travail des uns et des autres au fil de la journée (dont le passage à Node 18 pour Thanh, qui avait l'air de bonne humeur)+ grooming interressant aussi.

Par contre je suis en retard sur les PRs. Il faut que j'arrive à ne pas rester engluée quand je suis sur un ticket mais Cédric me conseille de m'y coller en premier pour être fraîche dessus.ça se tient. Mais les PRs me demandent aussi le meilleur de ma vivacité d'esprit souvent si je veux en tirer un apprentissage et bien comprendre. mmm.

### 21/06/23_Mercredi
*maison*
*On est mercredi, fin juin, et je panique devant tout ce qui est à faire, le fait que je n'ai pas casé de coaching, de sport, de respiration/méditation etc... dans mon planning depuis deux semaines, bref.*

### 22/06/23_Jeudi
NB : demander à QN explications sur PRs detail view
demander à Nabil explication sur const { services } = await fetchJsonFile<IAppConfig>(APP_CONFIGURATION); (commentaire dans PR Saurav https://scm-git-eur.misys.global.ad/projects/FNX/repos/fenix-launcher/pull-requests/299/overview sur top level await)

**stash 3260**
mis de côté, dont le snippet pour récupérer la callStack dans les console.log

**Rebased develop for :**
- launcher
- pegasus reporting
- report manager

Todo:
[ ] rapport Diego
[ ] m'ajouter sur le TDD : https://scm-git-eur.misys.global.ad/projects/FNX/repos/fenix-ci-cd/browse/public/src
[ ] prendre RDV sur task human avec Rachel
[ ] prevoir tps pour peindre
[ ] prevoir tps pour sport et programme rapide
[ ] prévoir habits pour soirée chez Bianca
[ ] prévoir tps pour prépa boutures pour Amira
[ ] finir de lire les PR
[ ] prévoir de me greffer sur suivi adaptableStateKey et dirtyState
[ ] commencer ticket FNX-3355 report viewer- restart button (only if config possible + variable au lieu de en dur pour savoir quelle app ouvre la config du rapport dans manifests en local/dans compose/dans kubernetes). NB : en local, c'est le json, compose c'est les variables définies dans edit env [maVariable], kubernetes  les variables sont définies comme props dans un fichier à part {{maVariable}}. Dans chaque cas, voir la syntaxe des deployment options ou autre pour se baser dessus.

## RegEx :
Dans PR https://scm-git-eur.misys.global.ad/projects/FNX/repos/alk-design-system/pull-requests/53/diff#src/themes/utils/comparison-table.utils.js :
Object.entries(/^(.*) { (.*) }$/gm

NB : la PR de Thanh, fait partie de la transition vers node 18, qui ne gère pas la version de storybook utilisée jusque là. Donc ici upgrade de la version de storybook, upgrades/améliorations de SASS, ajout de overflow-y dans structural css pour avoir la barre de défilement qui apparait.

**Conventions expressions régulières :**
l'expression est encadrée par des anti-slash et s'il y en a d'autres, ils doivent être échappés avec un slash pour ne pas créer d'erreur.
^ match le début
les accolades ici, précédées d'un espace, sont ce que l'on cherche.
Les parenthèses, par contre, encadrent un morceau d'expression que, par convention, on pourra rappeler au moyen de $1 (ici pour le premier (.*)) et $2 (ici pour la deuxième fois où apparait (.*)); ça peut servir, par exemple, pour récupérer la clé dans les json, toujours entre double guillemets et suivi de deux points, donc facile à récupérer et par exemple d'y ajouter un préfixe, un s, etc...

Ajouter le m^me test pour le boutton restart :
    describe('Configure Report button', () => {
        it('should be hidden if no Report Manager app in the manifest file', async () => {
            getManifestMock.mockResolvedValueOnce({});
            const noManagerPage = await newSpecPage({
                components: [ PegReportList ],
                template: () => (<peg-report-list />),
                supportsShadowDom: false,
            });

            const configureButton = noManagerPage.root.querySelectorAll('alk-button')[ 1 ];
            expect(configureButton).toBeUndefined();
        });


### 23/06/23_Vendredi
Ajouter variables pr compose et kubernetes et dans default.conf.tpl dans pegasus

Pour .json -> rien à faire
Pour tmpl.sh -> 
	Ajout variable :
		REPORT_MANAGER_APP=${REPORT_MANAGER_APP:-fnx-report-manager-application}
	configApp :
	        "reportManagerApp": "$REPORT_MANAGER_APP",

Pour .json.tpl ->
	Dans appConfig :
        "reportManagerApp": "{{ .Values.manifest.dv01.reportManagerApp }}",
Ajouts dans default.conf.tpl.yaml -> fait

default
cashflows
chartfront
dv01
fusionlimitsui
fxpos
profitandloss
custom

PR FNX-3355 : publiée
+ check avec Diego pendant la tech-session (de 30 min parce que tous les deux fatigués après le pot d'hier et il est en vacances après):
- Au lieu de deux objets avec la même condition on a mis dans une même balise <Fragment>
- Pas là peine aussi de définir une variable en amont dans les fichiers de config pour compose. A partir du moment où elle est vide c'est bon, la définir plus haut ne sert qu'au cas où on a besoin d'une fallback.

### 24/06/23_Lundi
Q° : puis-je merger FNX-3355 ou bien faut-il une instance TDD et passer par la validation PO ? le ticket est marqué technical stuff mais il y a un elt visible dans la UI (la disparition du bouton restart pour les rapports FO-limits et SACCR)

Matin : 
10h-11h PI planning review
Notion : revue routines et objectifs du mois pro et perso

13h-14h TCM Townhall
Training :
    Learning Chrome Web Developper Tools sur linkedin learning : intro & chapter 1
    Discussion avec Chat-GPT 4 pour comprendre des échanges :
    - Explanation of sed
    - Sed command usage in a code snippet
    - Understanding the lines in launcher/browse/entrypoint.sh
    - Explanation of the options -sfv used in the ln command
    - Order and grouping of options in command arguments
    - Difference between hard links and symbolic links
    - Use cases for hard links
    - File system explanation
    - Google Drive and file sharing
    - Overview of Nginx

### 23/06/23_Vendredi
- FNX-3355 hide restart report button when configure button is hidden, 
according to report manager app setup (donc ajouter des variables pour compose et Kubernetes)
-> PR publiée

### 27/06/23_Lundi
réunions :
- 10h15-11h : PI Planning review
- 13h TCM townhall

Cours :
- pluralsigh JS Advanced on objects literals and classes
- linkedin learning : Google Chrome Webtools

## DevOps curiosity, Icons and Mermaid
some emoji/descriptive logos for each tool mentioned:

    Docker: 🐳 (Whale) - As you mentioned, a whale with a container is a commonly used logo for Docker. It represents the Docker mascot.

    Docker Compose: 🐙 (Octopus) - An octopus can represent the flexibility and ability to manage multiple components of an application, just like Docker Compose manages multiple containers.

    Jenkins: 🤖 (Robot) - While Jenkins has its own Butler logo, a robot emoji can also symbolize automation and the role of Jenkins in building and deploying software.

    Kubernetes: 🚀 (Rocket) - A rocket represents the scalability and power of Kubernetes, which can launch and manage applications on a large scale.

    Nginx: 🚦 (Traffic Light) - A traffic light can symbolize the role of Nginx in directing and controlling network traffic, similar to how a traffic cop manages traffic flow.

    Red Hat OpenShift (OCP): 🎩 (Top Hat) - A top hat can represent the sophistication and enterprise-level features of Red Hat OpenShift, which provides advanced capabilities for managing containers and applications. -> I prefer a magician Red Top Hat + Magic Wand

Essai de Graph Mermaid sur Mermaid Live : https://mermaid.live/edit#pako:eNqNUstuwjAQ_BXLp1aCH8ihUguHqpUIKtyaqjLxQixib-Ss-0L8e5ckakwIUp3LZjyzM177IHPUIBO586oqxPohc4JXHTYtkMk5fECJlQVHYo1Y1plsOac1x3wPfvj_PkNbYQ2vrG4A0QGZfOu5T-D2xtUtAE5fOM_QkTKO5anPC6jJKzLoYv_nsAHvgKDusXS2ZOMX0OJRkUgrcKvCbEnc8MbtX4JRwxKDFstS0Ra9jX3uf4KH68IF0Cd6Ps0uFi12xn1ForbsJjKd3g2mdbF9NqAIHx76vM1_KVG6zuhqpr5bQ-E5juJRx6YcTcLiUbyZcJRgiMb8_pMTacFbZTQ_4cNJk0kqwPJLS7jUsFWhpNOlHJmqAuHq2-UyIR9gIkOlFcHcKL5H24LHX7FE-P4

            graph TB
                subgraph "Development Tools"
                    Docker
                    Docker_Compose["Docker Compose"]
                    Jenkins
                end
                subgraph "Container Orchestration"
                    Kubernetes
                    OCP["Red Hat OpenShift (OCP)"]
                end
                subgraph "Cloud Platform"
                    Azure
                end
                subgraph "Networking"
                    Nginx
                end

                Docker --> Docker_Compose
                Docker --> Jenkins
                Docker --> Kubernetes
                Docker_Compose --> Kubernetes
                Docker_Compose --> Nginx
                Jenkins --> Docker_Compose
                Kubernetes --> OCP
                Kubernetes --> Nginx
                Nginx --> Kubernetes
                OCP --> Kubernetes
                Azure --> Docker
                Azure --> Kubernetes

The arrow --> represents a dependency or connection between the tools.
For example, if Tool A points to Tool B with an arrow (A --> B), it indicates that Tool A relies on or interacts with Tool B.
The direction of the arrow signifies the flow of information or control.
Here's an updated explanation of the arrows in the diagram:

Docker is connected to Docker Compose (Docker --> Docker_Compose) because Docker Compose is a tool that builds on top of Docker and uses it for container management.
Docker is connected to Jenkins (Docker --> Jenkins) because Jenkins can use Docker for building and running software within its pipelines.
Docker is connected to Kubernetes (Docker --> Kubernetes) because Kubernetes can deploy and manage Docker containers.
Docker Compose is connected to Kubernetes (Docker_Compose --> Kubernetes) because Docker Compose can orchestrate multiple containers within a Kubernetes environment.
Docker Compose is connected to Nginx (Docker_Compose --> Nginx) because Docker Compose can manage the deployment and configuration of Nginx containers.
Jenkins is connected to Docker Compose (Jenkins --> Docker_Compose) because Jenkins can utilize Docker Compose for managing multi-container deployments.
Kubernetes is connected to OCP (Kubernetes --> OCP) because Red Hat OpenShift (OCP) is a distribution of Kubernetes that adds additional features and capabilities.
Kubernetes is connected to Nginx (Kubernetes --> Nginx) because Nginx can be used as an Ingress controller or load balancer within a Kubernetes cluster.
Nginx is connected to Kubernetes (Nginx --> Kubernetes) because Nginx can be integrated with Kubernetes for load balancing and routing network traffic.
Azure is connected to Docker (Azure --> Docker) because Azure can provide a cloud-based environment for running Docker containers.
Azure is connected to Kubernetes (Azure --> Kubernetes) because Azure can offer managed Kubernetes services for deploying and managing Kubernetes clusters.

Demain :
Demander à QN des explications sur https://scm-git-eur.misys.global.ad/projects/FNX/repos/sfx-web/pull-requests/1035/overview et les autres en lien avec detailes view.


### 28/06/23_Mardi
*bureau*  
*bureau de QN le matin puis j'ai bougé au 5566 quand elle a dit qu'elle arriverait pour 13h*
*yoga de 13h à 14h avec la prof Madeleine*

FNX-3355 : add env variable dans fenix compose
merged pegasus & fenix-compose branch for FNX-3355

**Réunions**
- Daily scrum
- 11h-12h planning PI wrap up
- Atelier PIC-Augmentez votre visibilité sur Linkedin (regardé sporadiquement, enregistrement dispo)
- Tech grooming (fini tôt car Thanh, Cédric et QN avaient une réunion avec Glue 42)

**Tech grooming**
Cédric a expliqué à tout le monde le résultat des échange avec adaptable sur FNX-3275 [Adaptable] styled column is inherited between views
FNX view = adaptable state
context.adaptableApi.setAdaptableStateKey( currentView, { predefinedConfig: currentConfig})
Currenview est une string, ID unique de notre nom de vue + ncf doc adaptable et sandbox qu'ils ont envoyée en lien dans les échanges.
Thanh s'interroge sur la signature de setAdaptableStateKey : pourquoi un objet dedans ?

**Explications de QN sur SFX detailled view**  
order = trade order (terme financier) -> chaque ligne correspond à un order
record = objet clé: valeur (typescript utility type)

JSX.Element (ne correspond pas seulement au renderer)

Pour l'instant, les données sont envoyées brutes (sous forme de liste, cf css) dans la detailed view.
L'objet de la dernière PR = créer le stencil component du volet de la vue détaillée;
Autre composant en jeu : right area, qui comporte un autre component dans lequel elle a rajouté l'icone de view detail
Quand on fait un clic droit pour ouvrir le menu contextuel, il récupère l'objet order sur lequel on a cliqué.
Un clic sur une des entrées du menu contextuel envoie un grid.action event qui comporte data item (l'ordre en question)
Clic icone view detail ou clic droit puis clic sur l'entrée du menu contextuel :
-> action === view detail -> ouvre la panneau de la vue détaillée.

**Fin de journée :**
D'après QN et Cédric, je peux prendre FNX-3228, mais c'est un high, donc il faut que je me bouge

J'ai mergé trop vite la PR pégasus en oubliant d'attendre la validation de Eugène (enfin, de Betina me dit Cédric parce que ça concerne SACCR). En plus on a pas de rapports mais il semble qu'il y a quand même un problème qui n'y était pas pour avoir l'accès à SACCR manifest. Heureusement, Cédric a capté ce qui clochait :
j'ai mis une virgule en trop à la fin du SACCR.tmpl.sh et ça fait le bug.
-> correction faite (j'ai retiré la virgule) et PR publiée.
En espérant que les gens valident vite pour que je puisse merger ça tôt demain matin, avant que quelqu'un update le TDD de develop et se rende compte qu'on a plus accès à SACCR avec cette fichue virgule. Aïe aïe aïe.
-> validé par QN et Thanh, j'ai pu merger la correction.


### 29/06/23_Mercredi
*maison*

**réunions**
- daily
- retrospective
- Task Human, Rachel -> summer dressing and toxic storm
- demo session

- Demo, termes financiers -> étudier sur le site intuition et autre ressources sur trading
PME = price e... marker
LP = liquidity provider
RTMD = real time ...
STP = straight though processing
TARF =
SPOT contribution
OBAC = administrativ part of the web version
Ccy = currency

**tickets FNX-3228**
réassigné au rapporteur après vérification sur Rancher QA et QA Fun (pas de rapports du rancher Dev)
il semble que les fields manquant dans le ticket ne le soient plus

**réu résilience etc (cf recording)**
idées lectures :
Deep work, The Power of When, Atomic Habits
idée : prendre le soleil en début de journée pour réinitialiser l'horloge biologique
Zeigarnik effect = finished tasks don't occupy your brain as much as unfinished business

**ticket FNX-3333**
pris en soirée
remarque au end-of day call :
    je ne peux pas chercher les mots clé "save" and "delete" dans le code comme sur google, c'est trop aléatoire, je ne sais pas comment les méthodes sont nommées
    Il faut un point d'entrée pour une analyse logique :
    - pour l'UI, ça peut être le clic sur un bouton et on regarde ce qu'il y a derrière
    - pour une API ça serait plutôt la doc pour comprendre comment ça fonctionne

Cédric me fait remarquer que dans son commentaire avec une petite analyse, il dit qu'après save ou delete un appel est fait deux fois pour avoir la liste des rapports, donc ce que je dois chercher ça n'est pas save ou delete mais comment on récupère la liste des rapports et propose de chercher l'url "comme un bourrin" en tapant "reports/" dans la recherche (je en vois pas trop la différence avec ma méthode sauf qu'il sait mieux ce qu'il cherche)
Sinon Philippe rappelle que la liste des services sont listées dans la apps.json, donc trouver celui qui récupère les rapports peut-être un bon point d'attaque.

Enfin bref, j'ai quand même bien fait de demander, j'aurai appris des choses.

A priori, je dois chercher en lien avec kondor reporting orchestrator, 
reporting ressource service
reports-list-to-display.service.ts
**getReportsConfigs()** -> Breakpoint

Le serveur n'a pas l'air de gérer deux appels en parallèle. Donc ne faire qu'un appel?

Jeudi soir, identifié 5 appels avec Thanh, un elt à la fois, c'est appelé par quoi et tracer une fonction + placer ses consoiles log toujours au même endroit
### 01/07/23_Vendredi
maison

call avec Amira l'aprèm pour demander aide sur 3333

### 03/07/23_Lundi
bureau

Bureau 5561 à côté de Saurav, Nabil à sa place habituelle
Reu d'info de Thanh pour upgrade Node 18
Réu de Saurav avec Adrian et Dragos sur impl et config de la nouvelle app BOHQ + roles (types d'app en vrai, les roles c'est backend ...?)
FNX-3333 : on finira demain avec AMira (la pauvre se retrouve à se coltiner un coup de main pour les appels après le end of day call mais bon, je pense que la régression vient de son rename alors...)

    private async updateListReports(): Promise<void> {
        console.log('%cupdateListReports', 'background: #212121; color: #d63333');
        this.reportList = await this.reportListingService.getList();

### 04/07/23_Mardi
bureau

travail avec Amira sur FNX-3333 pour optimiser le nombre d'appels pour récupérer la liste des rapports quand on en a besoin dans le RM

NB : on a une erreur qui n'a rien à voir, un truc passé dans une autre PR qui n'aurait pas dû buildé. Correction temporaire ajoutée par Amira:
Dans reporting-ressource.interface.ts
export interface IReportResource
    category: string;
    reportName: string;
    reportLabel?: string;
    ...
NE PAS COMMITER CA !

### 05/07/23_Mercredi
maison

quelques modifs à faire suite au changement de logique en faveur d'events au lieu d'un channel : surtout, j'avais omis de retirer des éléments devenus inutiles
corrigé le matin

après-midi, discussions avec Nabil en début d'après-midi, puis Philippe en fin d'après-midi autour du même sujet (mais je n'avais pas bien compris avec Nabil):
l'un de mes tests devait être simplifié et mieux pensé pour être plus utile. J'avais essayé de le faire comme ça suite au call avec Nabil mais il échouait.
J'ai cru que c'était normal à cause d'une erreur de logique de ma part mais c'est juste que le mock de l'event manquait de détails (il doit être exactement comme dans le code ou en tout cas avoir les elts qui servent au test. On passe ce qu'on veut à un event, comme ça c'est envoyé avec, donc si, comme ici, l'event est accompagné du report, on doit mocker le report pour le test quand on mock l'event)

### 06/07/23_Jeudi
maison le matin
bureau aprèm

matin :
clôt le ticket où Denisa a dit que les champs étaient bien présents maintenant -> non reproductible
Cédric m'a montré comment clore et dit que pour le FNX-3333 pour le passer en status "build", il faudrait passer par ask for review puis reviewed car pour les defect high, c'est obligatoire. Pour les low on peut passer directement à build.
En fait, les actions possibles sont visibles grâces aux boutons gris en haut. Si un statut visé n'est pas là, c'est qu'il faut passer par des étapes intermédiaires;

Suivi, hors temps du daily, de la réunion sur la productivité et la résilience.
Je suis archi fatiguée. De ce que j'ai écouté ce matin comme podcasts

passage chez le tailleur, qui pourrait par exemple faire une copie de la robe courte classique manches 3/4 col bateau fermeture dans le dos pour 180€

FNX-3333
Suite remarque Diego check sur Openfin
ça ne marche pas, a priori d'ailleurs toutes les communications entre la partie droite et gauche qui sont gérées par des events avec target: body ou document passent bien dans le browser mais pas dans Openfin

M'enfin, ce qui me console, c'est que les autres dev ont chacun leurs soucis avec des trucs qui ne marchent pas.
Par exemple, Cédric ne peut pas release frx (je crois) car une petite modif a été faite et que là ça ne build plus...


To Do:
FNX-3333
[ ] create new branch based on develop to roll-back to channel logic instead of event
[ ] clean events present before the ticket and find another way
[ ] delete, save new report without rename, save new report with rename, save existing report new name (book marked or not, ideally) should work in browser and openfin, as fast as possible

### 07/07/23_Vendredi

PR Thanh : que fait l'ajout du point d'exclamation dans alk-button.tsx ?   
@Event() alkDisableChange: EventEmitter<boolean>;
@Event() alkDisableChange!: EventEmitter<boolean>;


### notes manquantes : fouiller les cachiers,il est temps de prendre des vacances

### 26/07/23_Mercredi

*Home office*
*De retour après 10 jours de repos*

[ ] En finir avec FNX-3335 :
- Branche rebasée
- check avec Philippe suite à son commentaire pour voir si on pouvait se passer de flex :
- en supprimant le "max-width" de "node-label", le texte du label s'adapte et le flex nécessaire dans le cas d'icônes qui s'ajoutent est pris en charge pas le alk-list component, donc c'est bon.
- passage à la colonne ready for PO après la manip pour changer le statut, car defect "high", donc il fallait passer par les statut "request for review" et "review done"
- passé d'Eugène à Philippe E à Magda qui était le reporter du defect.

[ ] revue des e-mails :
-nb : Finastra Workplaces, nouvelle app pour réserver un bureau (il faut confirmer en arrivant le matin, dans le mail)
Ajoutée aussi aux favoris. <https://finastraworkplaces.ffm.hqo.com/building/45b7e36a-2260-4d3c-b731-6a4d4bef2a22>
+ j'ai ajouté les "close colleagues" mais pas sûre qu'ils réservent leur place ou se mettent en "public".

[ ] revue des PRs :
- SFX-6657 : QN a créé un décorateur pour SFX, il faudra y revenir pour comprendre les imports, notamment createElementFromTemplate de alk-grid utils
- Remarques de Thanh sur PR Diego à retenir :
  - don't need to destructure to a create a new array is already a new array when you use Object.values
  - avoid @ts-ignore comment prefer to use // @ts-expect-error:description of the error
- PR pour Node Upgrade de Adrian, question au passage : qu'est-ce que les peerDependencies dans le package.json et pourquoi des versions qui finissent par .x?
- C'est quoi, export default meta , l.19 de alk-app-icon.stories.ts par exemple ds PR Chore/FNX-3438/upgrade node
- Nb: PR Chore/FNX-3499/node upgrade rigolote (upgrade template generator, y revenir)
- 
End-of-day call :  
- Thanh sur Migration glue42, en vient à faire du React  
- Nabil a releasé plusieurs components...(migré vers Node ?)+ travail en lien avec le SSE.  
(il m'a demandé dans la journée si je savais comment tester le SSE mais je me souviens juste avoir eu des soucis avec Trade Contrib et avoir essayé de l'éviter, notamment avec Local Position il me semble)  
- Amira a mergé sans rebaser et du coup Thanh lui a dit que ça arrivait et nous a montré son graph en ligne de commande pour voir l'arbre en couleur.
    Il a mentionné des erreurs de Saurav (que j'ai pu constater, des erreurs à moi   
    (mais je n'en ai pas vu dans l'arbre qu'il nous a montré),
    nous avons vu des écarts de Cédric mais c'est peut-être particulier et les Pyramides de Diego,  
    qui préfère se rebaser sur ses propres modifs si j'ai bien compris avant de merger)  

### 27/07/23_Jeudi

*Washington Plaza*
*QN, Cédric, Saurav au bureau, Eugene aussi mais de l'autre côté et on ne s'est pas croisés*

Daily Scrum :
Me : 3335 assigned to Magda, so I'm ticketless. I can take part in the Node migration

In the morning, I took ticket for upgrade to Node 18 alk-time but Thanh was already on it,
so in the afternoon, I took alk/service-explorer but it's a molecule component, it depends on alk/list-menu (which has a peer dependency on design-system 4.x), the package.json is done, need to update channel hub and alk/list menu to new version when they are available, so that everyone depends on alk/design-system 6.0.0
so I will change the .storybook folder, which is obsolete and with totally different files than the other repos for now and then move to upgrating alk/channel-hub.

Donc demain :
    Actualiser d'après le modèle de PR de Thanh le .storybook de alk/service-explorer
    Puis passer à alk/Channel-Hub
    Et peut-être à alk/list-menu ensuite.

    Voir aussi :
    TODO : Check PR Amira , who merged FNX-3333, Demander à QN des explications sur son décorateur pour SFX-6657


Le launch.json de VSCode pour debugger les tests a changé, on ajoute et remplace un element avec "--", "${fileBasename}",
c'est pour ça qu'on arrivait plus à lancer les tests sur un seul fichier avec le debug,
source : <https://stenciljs.com/docs/testing-overview>
et ça donne ça :
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Spec Test Current File",
            "cwd": "${workspaceFolder}",
            "program": "${workspaceFolder}/node_modules/.bin/stencil",
            "args": ["test", "--spec", "--", "${fileBasename}", "--no-coverage", "-u"],
            "console": "integratedTerminal",
            "internalConsoleOptions": "neverOpen",
        }
    ]
}


### 28/07/23_Vendredi

*Washington Plaza*
*seulement Frank, Guy and Ogden au bureau, dej à la cantine avec Guy*

Matin :
Diego a fait channel hub apparemment, d'après la liste de composants mis à jour qu'il a mis sur slack dans un cannal #node18
Il n'a pas vu/lu mon mail de suivi d'hier semble-t-il
Bah, je n'avais pas commencé. Mais ça m'agace un peu parce que Thanh m'a reproché de ne pas avoir respecté l'assignation
du ticket hier et là, c'est Diego qui n'a pas prêté attention alors que j'avais bien fait l'assignation et bien que j'ai pris la peine de lui envoyer un mail. C'est pô juste.

Documentation pour la migration Node à un format lisible, Adrian l'a trouvé dans documentation/source
1er folder dans la liste : documentation/adr/storybook_migration.md -> clic sur "see migration doc"
https://scm-git-eur.misys.global.ad/projects/FNX/repos/documentation/browse/migration/node_18.md?at=refs%2Fheads%2Fchore%2FFNX-2286

**NB : le npm i installe en rapport avec la version de nvm/node qui est sur le terminal actif. Donc si on change de node, on a d'autres version.?a vérifier exactement?**

Aprèm : travail sur Alk-list-menu:
Soucis avec le linting (il fallait juste simplifier eslintrc, merci Adrian)
Soucis avec les .stories.ts à adapter aux nouvelles versions. Plus galère. Diego me renvoie à la doc de Thanh mais je ne vois pas de détails là dessus.

### 31/07/23_Lundi

*Home office*
PRs lues à part les 3 pour Pivot Mode par Cédric, besoin d'un esprit plus clair ou d'explications.
FNX-3436 Alk-service-Explorer : fini de préparer la migration de storybook etc en attendant d'avoir Channel Hub et Alk-list-menu dispos.
FNX-3456 Alk-lis-menu migration : migration des storiess de alk-list-menu. Aide de Diego + tips de Thanh au end od day call
Cours pluralsight (dernier jour pour avoir 4h en juillet) : cours storybook + data structure (C+)

// prepareListeners([ $elementWithDetail, $elementWithNoDetail ]);
// on remplace en rajoutant l'appel à addButton à la fin des bouts de doms et et addlistener avec la liste des boutons

Bizarrement, le hover de alk-list menu réagit seulement avec les arrows keys, pas le hover de la souri :
@Watch('hoveredIndex')
onHoveredIndexChanged(value: number): Promise<void> {
console.log('onHoveredIndexChanged', value);
this.alHoverChange.emit({ value });
scrollToHovered(this.$list);
if (Boolean(this.$listMenuOverlay)) {
this.$listMenuOverlay.hoveredIndex = this.hoveredIndex;
}
return;
}

const addListeners = ($root: DocumentFragment, $elements: Array<HTMLAlkListMenuElement>, args: AlkListMenuArgs,
targetAlkValue: IAlkListMenuOption) => { 
+
// addAlkValueChange listener (pas toutes identiques et demandent trop de parametres et le code serait pas plus clair)

el.addEventListener('alkValueChange', (event: CustomEvent) => {
args.alkValueChange(event.detail);
el.value = event.detail.value;
targetAlkValue = el.value;
});

### 2/08/23_Mardi

*washington plaza*
PRs : 
-> A quoi sert le fichier graphql.interface.ts ?
    REST contenu envoyé défini par l'url fetchée vs GRAPHQL schema:
    contenu (< 1 seule url) définie par la query -> besoin d'un contrat défini par les interfaces.
    plugins traduisent le schema en interfaces = les verbes etc. qu'on a le droit d'utiliser dans les queries.
-> rollup.config.js -> lecture pour savoir ce que c'est (en gros)
-> commit message pour la migration Node :
    ajouter Breaking Change + quitte à faire un breaking change, on peut corriger les erreurs de naming convention comme enum à la fin au lieu de E au début d'une enum.
    attention, ça fera changer les choses dans les app qui utilisent la lib/le composant.

Suite grooming :
    pour Summit on ne veut pas donner accès aux services Kondor. Solution trouvée par Diego pour que ça passe : indiquer unavailable dans le .env
    Il faudrait trouver un systeme pour que à partir d'une variable d'environnement ( et d'un fichier avec le détail) le apps.json soit construit dynamiquement en fonction des services à rendre disponibles?
    Un script pourrait faire ça. Thanh se demande si on ne peut pas le faire via Node car majorité des dev de l'équipe maîtrisent mieux que Shell.
    Autre proposition : utiliser Docker Proxy ?
    Les clients Summmit passent par Docker-compose et pas par Kubernetes.
    Quelle liste de service fait foi ? D'où sort-elle ? Il ne faut qu'une source de vérité.

### 3/08/23_Mercredi

*washington plaza*

Act on comments pour alk-list-menu : factorisation du code pour créer une méthode addValueChangeListeners, ajout import de css de alk-overlay via dist (mais je ne comprends pas comment le css de overlay se retrouve dedans et je n'ai rien vu de différent)
Modification de alk-list-menu pour ajouter les "actions", messages comme des console.log mais spécifiques à storybook.

### 4/08/23_Jeudi

*washington plaza*

Dernières erreurs au build corrigées sur service-explorer les unes après les autres.

Battle pour faire marcher le storybook. 
Comme ça n'est pas sur le TDD mais un cas à part, sur les conseils de Thanh, je suis revenue sur develop après avoir stashé mes modifs pour vérifier ce que ça faisait à l'origine et vérifier le résultat à avoir sur le storybook.
Ca marchait enfin en fin de journée, plus d'erreurs affichées. Mais : le build ne passait pas, et en vérifiant les branches j'ai vu que c'est peut-être dévelop qui n'est pas bon à la base. Je me suis rebasée dessus mais develop est en retard de 2 commits et il y a une autre branche.

### 5/08/23_Vendredi

*Off*

### 7/08/23_Lundi

*home office*

Remarques de Philippe: sur Alk-list-menu le bouton focus ne fait pas ce qu'il devrait et il y a des différences entre le visuel de mon composant et le TDD.

Matin :
- Focus : le problème existe aussi sur les autres composants, Philippe va continuer à chercher une bonne solution de son côté
- visuel différent : après enquête avec Saurav et Philippe, ça vient d'une alk-list-menu {width:156px} héritée de alk-multi-component-list sur le TDD, donc de mon côté c'est bon.
  ( Philippe m'a expliqué que l'erreur est plutôt dans alk-multi-component-list qui ne devrait pas imposer sa taille aux autres composants,)
- je peux eventuellement ajouter une width:156px à mon alk-list-menu.scss pour m'assurer que le composant reste comme ça en cas de changement mais je ne sais pas si je dois.)

PR : à jour, les 4 pas validées le sont parce que je rebase à faire, je veux suivre ou que je ne suis pas au clair avec tout

e-mail : rien de spécial mais formation IA à faire sur Workday.

Aprèm : formation IA, SASS, nouveau composants? Alk-list-view ?


### 10/08/23_Jeudi
*bureau*

alk-list-menu.tsx, l.242:
private readonly itemsRender
            // probleme avec key : cf https://legacy.reactjs.org/warnings/special-props.html
            // et https://stackoverflow.com/questions/42261505/getting-error-message-li-key-is-not-a-prop
            // https://stackoverflow.com/questions/66076170/why-do-i-get-key-is-not-a-prop-in-react
NB : dans le renderer on appelle l. 373 :
    itemsRender={ this.itemsRender } // pb ici ?
    Et alk-list-menu est appelé dans le renderer de alk-list-view et on lui passe value={ this._selectedOption }

alk-list-menu.tsx, l.289
    private readonly getDirtyLabel = (option: IAlkListMenuOption, isPristine: boolean, dirtyLabel: string) => {
        const choice = isPristine ? '' : ` ${ dirtyLabel }`;
        return `${ option.label }${ choice }`;
    };
        //`${ option.label }${ isPristine ? '' : ` ${ dirtyLabel }` }`; donnait lieu à erreur sur nested template literal (sonarjs)

    
    render(): JSX.Element {
        const _event = this.handleActionClick(this._selectedOption);
        const isTooltipDeactivated = this.isDisabled || !Boolean(this._selectedOption?.label || this.defaultViewLabel);
        console.log('RENDER');
        console.log('selectedOption', this._selectedOption);
        console.log('selectedOption?.label', this._selectedOption?.label);
        console.log('defaultViewLabel', this.defaultViewLabel);

    describe('initial view', () => {
        xit('Should be an instance of alkListView.', () => {
            console.log($elm);
            expect($elm).not.toBeInstanceOf(AlkListView); // mais pourquoi?
            const myInstanceofAlkListView = new AlkListView;
            console.log(myInstanceofAlkListView);
            expect($elm).not.toBeInstanceOf(AlkListView);
        });

        describe('initial view', () => {
        xit('Should be an instance of alkListViewMenu.', () => {
            console.log('-------------------$elm', $elm);
            expect($elm).not.toBeInstanceOf(AlkListViewMenu);
            const myInstanceofAlkListViewMenu = new AlkListViewMenu;
            console.log('-----------myInstanceofAlkListViewMenu', myInstanceofAlkListViewMenu);
            expect(myInstanceofAlkListViewMenu).toBeInstanceOf(AlkListViewMenu);
            const alsoAnInstanceofMyComponent = page.rootInstance;
            console.log('alsoAnInstanceofMyComponent', alsoAnInstanceofMyComponent);
            expect(alsoAnInstanceofMyComponent).toBeInstanceOf(AlkListViewMenu);
            // expect(page.body).toEqualHtml('');
        });


Un essai pour récupérer le contenu interessant dans un snapshot mais finalement on a utilisé la dernière option pour voir si le toggleEvent 
était bien fait sur le bon élément :

                        it('click on favorite, renders ok', async () => {
                    const renderItem = render(1, 1, innerMethods)(defaultListOption[ 1 ], 2);
                    const favoriteBtn = renderItem[ '$children$' ][ 0 ][ '$children$' ][ 2 ][ '$children$' ][ 0 ];
                    favoriteBtn[ '$attrs$' ].onClick();
                    await page.waitForChanges();
                    const $span = page.root.shadowRoot.querySelector('alk-tooltip').querySelector('span');
                    const innerText = $span.childNodes[ 0 ].nodeValue;
                    expect(innerText).toContain('label 2');
                    expect($elm).toMatchSnapshot();
                });
                /*                 + <alk-list-view>
                +   <mock:shadow-root>
                +     <p class="label">
                +       View:
                +     </p>
                +     <alk-tooltip class="alk-tooltip-stretch" position="default">
                +       <alk-list-view-menu class="is-dirty">
                +         <alk-list-menu class="menu-with-detail" fill="clear" iskeepopenonselection="" tabindex="0"></alk-list-menu>
                +       </alk-list-view-menu>
                +       <span slot="tooltip">
                +         label 2
                +       </span>
                +     </alk-tooltip>
                +   </mock:shadow-root>
                + </alk-list-view> */

                    it('click on favorite, trigger event from the list menu', async () => {
                    const renderItem = render(1, 1, innerMethods)(defaultListOption[ 1 ], 2);
                    const favoriteBtn = renderItem[ '$children$' ][ 0 ][ '$children$' ][ 2 ][ '$children$' ][ 0 ];
                    expect(toggleEventMock).not.toBeCalled();
                    favoriteBtn[ '$attrs$' ].onClick();
                    await page.waitForChanges();
                    expect(toggleEventMock).toBeCalledWith(expect.objectContaining({
                        'detail': { 'actionMethod': 'toggle-favorite', 'event': undefined, 'payload': { 'id': '2', 'label': 'label 2' } },
                    }));
                });

Bien retenir le jest.expect.object containing
Thanh m'a fait chercher jest expect tobeCalledWith partial contain
pour trouver sur google


    describe('checkNewName', () => {
        xit('should setCustomValidator', async () => {
            const $input = page.root.shadowRoot.querySelector('alk-input');
            $input.value = 'new Input';
            await page.waitForChanges();

            const setCustomValidatorMock = jest.fn();
            page.rootInstance.$alkInput.setCustomValidator = setCustomValidatorMock;
            const alkListViewMenu = page.rootInstance;

            await page.waitForChanges();
            alkListViewMenu.checkNewName();
            await page.waitForChanges();

            expect(setCustomValidatorMock).toBeCalled();

        });
    //expect(page.root).toEqualHtml('Not that but at least it will show me what is');
    });



    xit('displays correct numbers of options using itemsRender', async () => {
        const alkListViewMenu = page.rootInstance;
        const innerMethods: IAlkListMenuInnerMethods = {
            onItemSelected: () => null,
        };
        alkListViewMenu.itemsRender(1, 1, innerMethods)(defaultListOption[ 1 ], 2);
        await page.waitForChanges();
        const listMenuItems = $elm.querySelectorAll('.list-menu-item');
        console.log('STOP THE MACHINE', listMenuItems);
        expect(listMenuItems.length).toBe(defaultListOption.length);
    });

            xit('Should be an instance of alkListViewMenu.', () => {
            console.log('-------------------$elm', $elm);
            expect($elm).not.toBeInstanceOf(AlkListViewMenu);
            const myInstanceofAlkListViewMenu = new AlkListViewMenu;
            console.log('-----------myInstanceofAlkListViewMenu', myInstanceofAlkListViewMenu);
            expect(myInstanceofAlkListViewMenu).toBeInstanceOf(AlkListViewMenu);
            const alsoAnInstanceofMyComponent = page.rootInstance;
            console.log('alsoAnInstanceofMyComponent', alsoAnInstanceofMyComponent);
            expect(alsoAnInstanceofMyComponent).toBeInstanceOf(AlkListViewMenu);
            // expect(page.body).toEqualHtml('');
        });
    });