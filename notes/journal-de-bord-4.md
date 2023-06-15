### 05/06/23_Lundi
*bureau 5547, face à Ogden, seuls de ce côté*
*dej avec Elodie*

 **Réunions :**
 - Daily scrum
 - Grooming BO HQ
 - Tech session ? Je ne sais plus si elle a eu lieu ou a égté annulée celle-ci mais en tout cas, docker exploré et maintenant je dois me qualifier sur docker-compose.
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

ping pong messages adaptable

cours pluralsight docker/kubernetes (ms voir aussi compose d'ici vendredi)

Question à Amira sur sa PR sur les drilldowns.
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

**Ticket FNX-3275 : hide column manque ds le column menu**
Pas le temps d'avancer sur le ticket



### 10/06/23_Vendredi
 *bureau 5558*

**Todo :** étudier swagger, docker-compose, FNX-3275, Local storage et session storage (cf ticket Philippe, demander), SFX : volet "détails" (QN : prochain sprint), quieries : fetch etc...

**Recherches faites :**
swagger vs postman

 **Réunions :**
 - Daily
 - Technical grooming front end
 - Tech session : annulée, le grooming s'est prolongé

**Ticket 3309 : hide column manque ds le column menu**  
 Echange avec Nabil -> peut-être lié à ses modifs car si le layout n'est plus dans les setting panel on est plus censé avoir l'option dans le menu de colonne.
 Etude PR FNX-2857 : remove unnecessary items from column menu
 Si besoin : étude PR FNX-2649 : Missing collapse/expand all in the non numéric column menus

Nouvel échange avec Nabil après la boxe : curieusement, quand on rajoute la partie qu'il a retiré, on retrouve les deux options voulues, mais pas celles qu'on ne voulait plus liées d'après lui au layout. Il n'écoute pas. Pour lui si on veut les options dans le column menu, on doit remettre le layout.
Sauf que c'est bizarre mais ça ne marche pas comme il dit.

Après une aprèm de grooming technique, vu avec Thanh :
en remontant dans Alk-adaptable (nb : cloner le repo plutôt que de l'étudier sur bitbucket)
    Dans alk-adaptable.tsx il y a :
    options = ...merge -> qu'est-ce que ça fait exactement avec les trois parametres qu'on passe à la fonction? Qu'est-ce qui en ressort ?
    En effet, les adaptable options sont déjà définies une première fois dans adaptable.config.data.ts (les entitlementOptions qui sont sencés être toutes à Full par défaut d'après la doc adaptable quand la liste n'est pas définie est définie ici donc les retirer toutes comme a fait Nabil ne peut pas marcher comme on le voudrait); les settingsPanelOptions aussi, ça interfère forcément

**Notes de Grooming :(à finir de taper-cf cahier rouge)**
    - Open new instance/duplicate instance

    - DV01 : toggle to switch between Native & Report currency

    - New setup ribbon = Common, Configuration bar (setup), Contextual

    - DV01-Bucket

    - Ne pas ouvrir les app dans Workspace si pas autorisé pour ce user

    - Logs from Pegasus in SACCR

    - PDC limits


### 12/06/23_Lundi
*maison*
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


