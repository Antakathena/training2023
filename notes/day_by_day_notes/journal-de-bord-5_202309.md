### 28/08/23_Lundi
*home office*

Voilà la rentrée qui arrive, il faut reprendre les suivis. Les dernières notes sont inutilisables;
Olivier et les enfants sont partis ce matin pour rester à Blonville jusqu'à jeudi. Il faut faire le jardin et voir s'il y a du courrier.
Ils ont aussi emmené Mana.
Ca devrait me permettre de ranger la maison, trier pour préparer la rentrée et utiliser le fumigène pour tuer les insectes nuisibles.

Côté Finastra les gens commencent à revenir. Ce matin Cédric, Diego et Amira sont là en plus de Thanh, Saurav et moi.
Cédric a donc fait la manip pour lancer le nouveau sprint (c'était la semaine dernière mais personne n'avait les droits).

Pour Alk-service-explorer, j'ai envoyé le message suivant à Thanh ce matin :

    Bonjour. J'espère que tu vas bien et que ta VM marche comme tu veux.
    A propos de alk-service-explorer, tu as changé la default branche de master à develop mais je ne sais pas ce qu'il faut faire : 
    -la branche master a 2 commits d'avance et un de retard (le mien ?),
    -l'ancien build de develop qui échoue n'est pas trouvé, 
    -il y a deux autres branches avec un commit d'avance
    -ma branche, alors que npm run build, storybook:build et npm run test passent en local, ne passe pas sur jenkins (bien que j'ai retiré les e2e du script de test)
    Si tu pouvais jeter un œil à un moment pour voir ce qu'il faut faire.
J'espère que ça ne le rendra pas trop bougon dès le matin; Je ne sais jamais ce qu'il va trouver bien ou débile;

    edit : il m'a répondu un peu plus tard que je pouvais rebase ma branche sur develop et qu'il avait mis les branches à plat. Mais il y a encore un commit d'une autre branche qu'il n'a pas mis dans dévelop, je suppose que c'est fait exprès (et je suppose que je ne devrait pas supposer mais demander mais je ne veux pas me faire jeter, alors ça ira comme ça).
    Develop a encore une erreur de build mais c'est un "type blabla can't be assigned to" qu'on a réglé dans ma branche (à l'arrache avec un as parce que sous catégorie du type qui a une propriété en plus pas nécéssaire ici a priori mais  mais fait avec Thanh et il n'y a plus cette erreur et ça marche alors...). Ensuite, j'avais l'erreur où il fallait ajouter PUPETEER-SKIP-DOWNLOAD de Chromium dans le Jenkinsfile et maintenant le build jenkins bloque vers la fin;



Concernant Alk-list-view, j'ai répondu à un doute qu'il avait sur des modifs que j'ai faite à cause de warning d'eslint. Je m'attends à tout moment à me faire engueuler parce que çà n'est pas ça qu'il fallait faire;
Edit 29/08/23 : Apparemment ma réponse était correcte, j'ai même eu droit à un like de Thanh sur une des réponse et à un ajustement à faire sur l'autre solution (apparemment on peut mettre void à la place de await devant une fonction async pour avoir le comportement voulu ici sans déclencher un warning)

**tech session**
taper notes (cf questions sur cahier + réponse cahier ou feuille volante)



### 29/08/23_Mardi
*office*
*just Nabil and Philippe still off, Saurav in Saarbruck, everybody else at the office, I took desk 5563, it's nice to see everyone again*

### 30/08/23_Mercredi
*home office*

- [X] emails
- [X] capacity planning rempli pour le sprint + jours pris pour vacances toussaint et lundi (rentrée scolaire)
- [X] PRs ----------------> si possible, relire les PR de migration de Calendar(Diego) et Alk-tree(Adrian)
- [ ] alk-list-view : act on Adrian comments

- [X] alk-service-explorer : jenkins débloqué en fin de journée, une histoire de double quotes plutôt que single quotes tolérées dans le jenkins file
------------> changer le jenkinsfile : copier-coller pour que ce soit une version plus récente, comme dans les autres repos
- [X] alk-local-storage : j'ai trouvé comment moquer le local storage qui n'était plus définit en copiant la façon dont ça marchait dans un autre fichier,
plus que 2 tests erronés au lieu de 16.
------------> il reste un window is undefined mais pourquoi dans 1 fichier et pas celui où j'ai copié la méthode ? et changer l'environnement de test pour jsdom (l'ancien env par défaut de jest alors que c'est node depuis la version 27 ne semble pas marcher ou alors ça n'est pas pris en compte tel que je l'ai mis dans la config jest,
autre question : quand j'utilise --env=jsdom pour déclencher les tests, j'ai plutôt des soucis avec localstorage qui ne peut être réécrit...)
- [ ] formation IA (voir si poss aussi Sass et JS)

sudo sysctl -w fs.inotify.max_user_watches=100000 && sudo sysctl -p


### 05/09/23_Mardi
*office*

Alk Local Storage migration :
After change to jest.config.js and package.json, needed to add some babel packages to package.json and babel.config.json to recognize TS (lint ?)
Then, new errors :

ReferenceError: /home/sophie/Workspace/alk-storage/src/services/alk-persist-api-protected-storage/alk-persist-api-protected-storage.service.spec.ts: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
    Invalid variable access: gqlRequestMock
    ...
        Note: This is a precaution to guard against uninitialized mock variables. If it is ensured that the mock is required lazily, variable names prefixed with `mock` (case insensitive) are permitted.

      2 | jest.mock('../../helpers', () => ({
      3 |     ...jest.requireActual('../../helpers') as Record<string, unknown>,
    > 4 |     gqlRequest: gqlRequestMock,
        |                 ^^^^^^^^^^^^^^
      5 | }));
      6 |
      7 | import { AlkPersistApiProtectedStorageService } from './alk-persist-api-protected-storage.service';
Readings : babel doc, jest use typescript with babel...

Soir : grâce à un coup de main de Diego : en fait on avait pas besoin de Babel et ce que j'avais fait était correct mais il fallait que le fichier s'appelle jest.setup.js et non jest.config


### 06/09/23_Mercredi
*home office*

#### Réunions/RDV :
- 9h chauffagiste à Houilles : 240 €
- Daily scrum
- WellBeing session : Suicide Prevention (nb: Ramila et Elodie dans le call)
- 12h osteopathe Coupeau : 60€
- resto Bouddha Wok sur le retour : 14,60 €
- 16h Technical grooming Kondor Fusion
- 17h call du soir

#### Todo:
- PRs
- e-mails
- alk-storage : release done

- Demander à Céline de m'expliquer le use-case pour l'app user rights?
beaucoup de discussions hier au grooming, dont des incomprehension sur pourquoi ça s'appelle user profile puis user roles à l'interieur du profile pour moi, et le workflow qui ne plaît pas à Philippe, Amira qui trouve le ticket trop large


### 07/09/23_Jeudi
*office*
*Philippe Escoffier là, quittera finastra fin sept*

#### Réunions/RDV :
- Daily scrum
- Dec 23 DV01 Epic Estimation Part 2 - Denisa Mischie
- Présentation du mentorat avec Konexio
- Front-end weekly functional grooming
- Goûter finastra/ pot de départ liés au PSE

#### Todo:
- PRs
- e-mails
- find new ticket -> FNX-3495- TradeBlotter wrong view when big reports:
Amira dit que c'est peut-être lié à un écran de chargement de adaptable pas bien effacé et il faudrait jouer sur le CSS?
  (cf la capture d'écran que j'ai fait de ce qu'elle me montrait. Elle essaye de contrer un phénomène similaire dans storybook)
- Vim adventure: h j k l, w b e, B x
- installed IdeaVim sur Intellij : normal mode with escape, i = insert mode
  (nb : Adrian utilise LunarVim, une adaptation pré-config riche de NeoVim, Vim, version opensource de l'ancien Vi d'après Franck)
- started lesson on pluralsight : Linux administration with sed and awk

### 08/09/23_Vendredi
*office*

Aide dans la mesure du possible à Remi qui essaye de faire marcher son package avec la UI avec Docker-compose.
Envoi de docs : repo fenix-compose, channel-hub (suite erreur sur com API), cheatsheet de Cédric, j'espère qu'il ne m'en voudra pas.

#### Ticket:
FNX-3495_Trade blotter - wrong view when we load big report :
    un petit carré apparaît au milieu de l'écran le temps qu'un gros rapport soit loadé (la première fois?)
    [x] créer branches (une pour alk-ag-grid, une pour pegasus... on verra pour alk-grid-utils ou alk-adaptable)
    [x] reproduire
    [] trouver d'où vient le bug
        hypothèses sur l'origine du carré :
        - cadre de la grille avant qu'elle se remplisse ?
        - message de chargement d'adaptable ?
            -> CHECK: loader spinner available in alk-adaptable.entry.js -> index.d.ts
                classname : 'ab-progress-indicator-wrapper'${-visible?...

#### Réunions/RDV :
- Daily scrum
- technical grooming 

### 11/09/23_Lundi
*office*  
*Eugen au bureau, très fatigué à cause de la chaleur.  
QN arrivée à 12h car plus de forfait data chez elle et pour la clim.  
On a mangé à l'Indien avec les gens du Backend (Frank, Guy, Rémi, ..) sans Eugen qui n'a pas déjeuner*  
*Eugen m'a parlé de l'idée avec Vincent de hiérarchiser/partager plus clairement les rôles dans la UI.  
Il va forcément y avoir des changements avec le départ de Phillippe E. mais ça ne va pas plaire à tout le monde*
*Je ne sais pas quoi en penser. Un peu plus d'ordre c'est peut-être bien mais 
il ne faut pas empêcher les dev de travailler sur plusieurs projet 
car le cloisonnement mènerait à du travail perdu et pas d'harmonisation 
(composants réutilisables d'un projet à l'autre).
En plus, c'est une équipe exceptionnelle car je crois que tout le monde aime son travail.
Fliquer les gens a plutôt tendance à les dégoûter.*

#### Todo:
- PRs
- e-mails
- ticket FNX-3495

#### Réunions/RDV :
- 9h30 Kondor Townhall - DEC2023 PI-planning Kick-Off
- 11h Daily Scrum
- 14h30 PI Planning Technical Grooming  

    **NOTE :**  
BDD : Equilibre et communication product---developer---tester
Link between Natural langage and programming world
Mark all epic that need documentation and see with tech writer as we go
Pas de règle métier/logique dans la UI

#### Ticket FNX-3495 :
recherches sur alk/ag-grid, deuxième lien symbolique créé.
En utilisant un breakpoint là où Amira était arrivée dans sa réflexion, j'ai le carré affiché à l'écran.
J'ai cru identifier une div avec inspect : div. ag-center-cols-viewport

< div class="ag-center-cols-viewport"
ref="eViewport" role="presentation" style="height:calc(100%+6px) >

Comme elle était dans le node-module de ag-grid community dans alk/ag-grid, il fallait trouver l'élément au dessus
qu'on maîtrise et qui l'appelle pour pouvoir surcharger le css.
Sinon, plus direct : dans le CSS de inspect il y avait déjà des éléments du CSS de pegasus qui impactait cette div.
QN était pour jouer avec et agrandir la div. Moi pour la rendre invisible pendant le chargement.

Mais la div. était devant celle avec le carré.
Possibilité de la réduire, ou de lui donner un petit z-index....
Une fois celles qui étaient dessus effacées avec visibility: hidden dans la console des web tools,
celle qui révèle un carré au centre quand elle est colorée en rose ;-P, la coupable donc est:

< div. class="ag-root ag-unselectable ag-layout-normal" role="treegrid" ref=gridBody" ariacolcount="1"
aria-multiselectable="true" aria-rowcount="1" >


### 12/09/23_Mardi
*office*


#### Réunions/RDV :
- 10h Kondor UI - DEC2023 PI-planning Kick-Off
- 11h Daily Scrum

Amira will deploy 3364 (loading message adaptable half visible) and upgrade adaptable option, creating a story for that.

Nabil on SACCR agnostic app
Eugen on the archiving process.

- 12h yoga
- 15h30 tea time avec Elodie
- 16h30 BO 360 grooming

#### Ticket FNX-3495 :
Aide d'Amira pour trouver le problème. Pour elle ça vient de :

l.724 de Peg-table :
    private showErrorOverlay(message: string) {
        this.noRowsMessageManager.setNoRowsMessage(message);
        if (Boolean(message)) {
        //            this.gridApi?.showNoRowsOverlay();
        } else {
            this.hideErrorOverlay();
        }
    }

Avec la ligne commentée le message d'erreur n'apparait plus, donc il faut trouver pourquoi ce carré est vide,
est-ce que le backend n'envoie pas l'erreur, est-ce qu'il faut mettre un message dedans ?


Dans Peg-table avec modif Thanh pour vérifier si c'est bien une config de AG-Grid qui affiche le carré le temps qu'on arrive après data:

        /**
         * TODO in step 2
         * Modify @alk/reporting to accept new IExtendedReportTable type
         * */
/*         const data: IGridData = await this.gridService.getGridData(
            {
                namespace: table.report.namespace,
                context: table.report.contextId,
                table: table.table,
            } as IReportTable,
            sortedColumnDefinitionsState, transformData)
            // apparait là, vide quand il n'y a pas d'erreur.
            .catch((error: Error) => {
                this.showErrorOverlay(error.message);
                this.onIsLoadingTableChange.emit(false);
            }) as IGridData; */
        const data = { rows: [], uuid: 'sdsdsd' };
        await new Promise((resolve) => {

            setTimeout(() => {
                resolve(null);
            }, 60000);
        });

        if (!Boolean(data) || !Boolean(data?.rows?.length)) {
            console.log('if (!Boolean(data) || !Boolean(data?.rows?.length))');
            console.log('message:', `No data for ${ getConfigurationLabel(table) }`);
            this.showErrorOverlay(`No data for ${ getConfigurationLabel(table) }`);
            this.onIsLoadingTableChange.emit(false);
        } else {
            this.showErrorOverlay('');
        }

### 13/09/23_Mercredi
*home office*

#### Réunions/RDV :
- 10h15 Daily Scrum
- 10h30 Kondor UI - DEC2023 PI-planning Kick-Off
- 11h30 Tech grooming
- 12h10 Rachel
- 15h30 tech Grooming
- 17h end of day call (dont un bon moment à discuter de mon bug)

NB : Service-worker sur un autre thread donc breakpoint pas à mettre pareil.
https://www.chromium.org/blink/serviceworker/service-worker-faq/

#### Ticket FNX-3495 :

Hello,
About the bug of the square that appears in the middle of the screen in Trade Blotter while big reports are loading,
peg-table-no-rows should only be triggered/shown when there are no rows but we see the div,
 empty, with a border when peg-table l.590 is run (without entering the catch, though ):
        const data = await this.gridService.getGridData(
            {
                namespace: this.configuration.table.report.namespace,
                context: this.configuration.table.report.contextId,
                table: this.configuration.table.table,
            } as IReportTable,
            this.cachedQueriedColumns,
            transformData,
        ).catch((error: Error) => {
            this.showErrorOverlay(error.message);
        }) as IGridData;

in peg-table-grid-options.definition.ts, there is:
    noRowsOverlayComponent: 'pegTableNoRows';

NB : Doc Ag-grid : https://www.ag-grid.com/javascript-data-grid/component-overlay/
    noRowsOverlayComponent: 'customNoRows',
    /*     noRowsOverlayComponentParams: {
        noRowsMessageFunc: () => 'Sorry - no rows! at: ' + new Date(),
    }, */
Peut-être utile aussi : https://blog.ag-grid.com/heres-how-cell-customization-in-ag-grid-wins-over-competition/

in peg-table-no-rows.component.ts, there is :

export class PegTableNoRows {
    eGui: HTMLElement;

    constructor() {
        this.eGui = document.createElement('div');
        //this.eGui.style.borderStyle = 'none'; // mine
        console.log('i am the problematic div)
    }

    init(params: { noRowsMessageFunc: () => string }): void {
        this.eGui.innerText = params.noRowsMessageFunc();
    }

    getGui(): HTMLElement {
        return this.eGui;
    }
}


ça a l'air de marcher maintenant mais la seule diff que je vois c'est que
avant l'IDE ne captait pas que Boolean était : BooleanConstructor<iGridData>
 if (!Boolean(data)) {
            return;
        }

            private showErrorOverlay(message: string) {
        //console.trace();
        console.log('showErrorOverlay, message :', message);
        this.noRowsMessageManager.setNoRowsMessage(message);
        if (Boolean(message)) {
            console.log('in if message)');
            this.gridApi?.showNoRowsOverlay();
        } else {
            console.log('in the else : hideErrorOverlay');
            this.hideErrorOverlay();
        }
    }

### 14/09/23_Jeudi
*office*

#### Réunions/RDV :
- 10h15 Daily Scrum
- 13h PI-planning Review

#### Notes on PRs:
+ read 3364 qui vient d'être mergé par Amira
- Dragos : feat/FNX-3597/fix-imports :  
:grey_question: QUESTION :  
He has changed the imports for :
import { addControls, AlkChipsArgs, setArgsEvents, setListener } from '../../helpers/alk-chips.utils.stories';
But I thought that export * from './alk-chips.utils.stories'; in index.ts was there to do that with just the old version from '../../helpers

His answer :
'alk-chips.utils.stories' is copied over by stencil
but not the index.ts
so if you look in the build folder, when trying to import from helpers, it throws an error because in doesn't have the index.ts
so we have to solutions
one is to copy also the  index.ts
or copy the entire helpers folder, and we can end up copying more files than we need
so with the change that I made, there is no need to worry about these stuff 

Saurav : fix(Report Viewer): (FNX-3497) Delaying the setting of isLoadingTable until the required info is not available :
check answer for empty line in else if rule.

#### Ticket FNX-3495 :
Aide de Diego. La div du message vide était triggered par le début de peg-table-content...
utilisation d'un patch avec ses modifs sur la config/les grid options et showErrorOverlay que j'ai pu appliquer tel quel.

Maintenant il faut corriger les tests et en faire de nouveaux (threshold too low). Le soucis est notamment :
que, ayant ajouté au code, dans les grid options:

noRowsOverlayComponent: 'pegTableNoRows',
suppressNoRowsOverlay: true,

et dans peg-table : 
    private showErrorOverlay(message: string) {
        this.noRowsMessageManager.setNoRowsMessage(message);
        if (Boolean(message)) {
            this.gridApi[ 'gridOptionsService' ].gridOptions.suppressNoRowsOverlay = false;
            this.gridApi?.showNoRowsOverlay();
        } else {
            this.gridApi[ 'gridOptionsService' ].gridOptions.suppressNoRowsOverlay = true;
            this.hideErrorOverlay();
        }
    }

(la fonction que Amira visait au départ mais je n'ai pas trouvé que peg-table-content définissait les rows à empty avant de les remplir au début.
Au moins j'ai trouvé les grid-options et le component qui affichait une div mais parce que Thanh avait retiré les rows. pfff,
je veux être meilleure pour trouver des trucs sans aide, sauf exception et pas le contraire)

Il faut que je fasse comprendre aux tests ce qu'est gridOptionService car ils en ont besoin, ne serait-ce que pour tourner.
Ces lignes permettent de passer à false ou true la valeur de suppressNoRowsOverlay dans les gridOptions.
Elle sont écrite comme ça et non :
this.gridApi.gridOptionsService.gridOptions.suppressNoRowsOverlay = false;
parce que gridOptionsService est normalement privé, donc on ruse pour y accéder quand même.
D'après Diego, c'est régulièrement nécessaire avec ag-grid.

NDRL : Et transformData est un webWorker et non un service-worker. Mais le bug n'était pas lié à ça. Arf.
Bon, ça n'empêche que ce sont des outils très utilisés dans la codebase de finastra donc je dois comprendre à quoi ça sert.

Quand j'aurai réglé le pb de mock de gridApi qui manque (ou avant ?):  
Tests for NoRowsOverlay in general ? based on what manual tests Diego and Philippe C. made yesterday:
Should not be there (even for a while) when there are rows.
Should be there when there is a message to show (no rows, failed to fetch...?)
Should not be there when we change view.


### 15/09/23_Vendredi
*home office*

#### Réunions/RDV :
- 10h15 Daily Scrum
- 11h PI planning review
- 13h30 Fun with GPTW-skribbl (dessiner c'est gagné!)
- 15h Kondor UI Planning Wrap-up
- 16h Tech session (I hope)

Daily (Notes) :
- amira off for 3 weeks from next monday, so she will do pair training
  today to pass the adaptable migration to someone else.
- FNX-3463 is about apps node migration
- SACCR agnostic app -> try again to understand Nabil's PR

Yesterday for me :
- pull requests read (a lot. And an exchange with Dragos to understand + 
- eared comments from Diego about Philippe PDC PR, interesting
  -> Follow e-mails to follow the modifications towards a more functional code)
- ticket's bug solved thanks to Diego's intervention
- create env for QA since the jenkins build problems seem to be past
- but now embarrassed with some tests no working anymore, and threshold too low
  so I'll be correcting and writing tests between meetings

Training :
- understand workers : service-workers and web-workers
- go on with vim
- go on with web tools understanding


    describe(`Test 'noRowsOverlay' occurrences`, () => {
        // Arrange. GIVEN: describe avec page, peg-table... ag-grid, gridApi avec les options:
        //          noRowsOverlayComponent: 'pegTableNoRows',
        //          suppressNoRowsOverlay: true,
        // Act. WHEN: datas are getting collected -> gridMock? with rows/without rows
        // Assert. THEN: expect div to be there or not (overlay)
        const view = {
            id: '8d9ee144-1d5c-4e4e-bde3-664abbb055e9',
            label: 'Summary',
            isStarred: true,
            disableRename: false,
            disableDelete: false,
        };

        it('should not appear at all when rows are getting retrieved', async () => {
            getGridDataMock.mockImplementation(() => {
                // shouldn't we add some rows instead of undefined ?
                return new Promise((resolve) => {
                    console.log('Carabosse', resolve);
                    setTimeout(resolve, 10000);
                });
            });
            const table = element.querySelector('peg-table-content');
            table.dispatchEvent(new CustomEvent('alk-adaptable_ready', { bubbles: true, detail }));
            elementInstance.configuration = { view, table: REPORT_TABLES_SET_5[ 0 ] };
            await page.waitForChanges();
            const overlay = page.root.querySelector('ag-overlay-no-rows-wrapper');
            expect(overlay).toBeNull();
            // passes but is it normal that overlay = null ? better if 'undefined'?
            // normal : if dom element not there for quieryselector, it's a null -> could be assertion toBeNull()
        });
        it.only('should appear when rows are not available', async () => {
            getGridDataMock.mockImplementation(() => {
                return new Promise((resolve) => {
                    resolve([ GRID_ROW_0 ]);
                });
            });
            const table = element.querySelector('peg-table-content');
            table.dispatchEvent(new CustomEvent('alk-adaptable_ready', { bubbles: true, detail }));
            elementInstance.configuration = { view, table: REPORT_TABLES_SET_5[ 0 ] };
            await page.waitForChanges();
            const overlay = page.root.querySelector('ag-overlay-no-rows-wrapper');
            expect(page.body).toEqualHtml('');
            expect(overlay).not.toBeNull();
        });

### 18/09/23_Lundi
*home office*
*Althéa malade, moi mal au dos*

#### Réunions/RDV :
- 10h15 Daily Scrum
- 11h30-12h sprint planning
- 14h-14h30 sprint planning
- 16h Tech session

#### Ticket FNX-3495 : suite et fin
- remarques PRs par Thanh traitées, tests corrigés avec Diego  
NB : Pour ajouter un timer au test qui vérifie si le message est bien caché quand on met longtemps à récupérer les rows, il fallait bien prendre en considération la signature attendue par la fonciton setTimeOut (dispo en survolant ou cliquant avec l'IDE), c'est à dire une fonction qui retourne quelque chose donc ne pas oublier d'ajouter () => devant resolve, sinon on a comme premier argument une fonciton qui renvoie void (aussi dispo en passant au dessus avec l'IDE, duh) :

    it('should let suppressNoRowsOverlay set to true even when rows take timer to get retrieved', async () => {
        getGridDataMock.mockImplementation(() => {
            return new Promise((resolve) => {
                setTimeout(() => resolve({
                    rows: [ GRID_ROW_0 ],
                    uuid: 'toto',
                }), 10000);
        });
    });

### 19/09/23_Mardi
*office*
*Althéa malade, moi mal au dos*
*Thanh de très méchante humeur (la migration du launcher?)*

#### Réunions/RDV :
- 10h15 Daily Scrum
- 15h technical grooming
- 16h Présentation assos finastra (ESG, Women at finastra...)
- 17h end-of-day call

#### Ticket FNX-3635 : chart-tooltip-unavailable - Début
- reproduire le bug, étudier les messages console :

    AG Charts - Property [tracking] is deprecated. Use [range] instead.
    AG Charts - unable to set [series[0].formatter] in e - property is unknown

// PR de Nabil fix(pie charts): (FNX-2763) Labels are not showing enough du 30 Nov 2022 qui upgrade charts to v6.2.1 ?

### 20/09/23_Mercredi
*home office*

- 10h15 Daily Scrum
- 11h ostéo

Tentative pour retrouver et faire tourner localement grâce aux tags une version plus ancienne de pegasus où les tags fonctionneraient.
Pas réussit (j'ai oublié de mettre une version plus ancienne au launcher aussi donc erreurs partout) et discussion ou plutôt monologue de Cédric sur l'inutilité de taper des lignes de commandes parce que j'ai eu le malheur de dire que je change de branche en CLI au lieu d'utiliser VSCode.
Bref, au final, je n'avais rien cassé et je ne suis pas sûre que j'aurai moins de problème avec git (je n'en ai pas tant que ça, si?) en passant toujours par VSCode
(edit vendredi : rien que ce matin pour rebaser, impossible de savoir ce qui avait bien était fait ou récupéré avec vscode alors qu'en CLI j'ai vu tous les fichiers mis à jour défiler.)
Et mon "excuse" comme quoi je trouve qu'on peut trop vite cliquer à côté dans la UI alors qu'en tapant j'ai la sentation d'avoir moins de chance de me tromper "n'est pas recevable" parce qu'on a plus de chance de se tromper en tapant d'après lui et qu'on peut faire des choses plus graves en ligne de commande. mouais
Et comme "c'est mon métier", je n'ai pas le droit de dire que je peux cliquer à côté, c'est juste une question d'attention et il ne voit pas le rapport avec les copier-coller qu'on peut rater. D'après lui on ne peut pas rater un copier-coller, il faut juste vérifier ce qu'on fait.

Rachel m'a dit qu'en anglais ce genre d'attitude du Mansplaining (contraction de man et explain)

#### Ticket FNX-3635 : chart-tooltip-unavailable - suite
Puisque Diego avait vu dans le code de la doc AG-grid sur les tooltip que ag-grid enterprise était importé, tout comme ag-grid-community, j'ai vérifié ce qui était enterprise et community :
https://www.ag-grid.com/javascript-data-grid/licensing/
Et 
Aucun rapport avec les sparkline a priori

### 21/09/23_Jeudi
*office, place 5568*
*Eugen assis derrière Cédric*

- 10h15 Daily Scrum
- 11h-11h30 Rachel
- 15h-15h30 Reu Alk components upgrades
- 16h goûter presentation asso (pb technique la dernière fois): reparler du mentorat et demander des infos sur women at finastra.
- 17h end-of-day call

#### Ticket FNX-3635 : chart-tooltip-unavailable - suite
Echange avec Magda pour savoir s'il y un env en 3.5.1. QAfun2 l'est mais ne fonctionne pas aujourd'hui.



#### Training :
avancé sur les web-workers et suite au sujet de la réu et à la variable npm que Thanh va ajouter pour que les dev puisse voir quel nombre de "workers" (les cores cette fois-ci) est le mieux pour sa machine pour faire les tests rapidement,
petites recherches sur OS, Kernel, etc.

### 22/09/23_Vendredi
*home office*
*olivier prepa salon PME*

Magda m'avertit le matin que env tjs pas dispo

Il n'y a pas trace de ag-grid-enterprise dans le package.json de pegasus reporting.
Or, je vois dans le package-lock.json de pegasus reporting des références à ag-grid-enterprise
modifiées en dernier quand Nabil a fait l'"upgrades AG-grid version to 29.3.5
and Adaptable version to 15.4.3" (ticket 3360), notamment : 
 `"@ag-grid-enterprise/charts": {
            "version": "29.3.5", etc...`
Il me dit que c'est parce que pegasus utilise @alk/ag-grid qui contient ag-grid-enterprise

### 25/09/23_Lundi
*off*
*accompagné Olivier au salon des TPE/SME*

### 26/09/23_Mardi

#### Ticket FNX-3635 : chart-tooltip-unavailable - suite
Pour comprendre ce qui cloche dans le code au sujet des tooltips, Diego me suggère d'implémenter des charts avec des tooltips qui fonctionnent.
Partant de l'exmple de base de ag-grid "getting started", j'essaie de créer des charts et une grid de scratch.

PB de certificates :
Dans un nouveau repo comme dans Pegasus ou sophie-training, 2 erreurs en console :
export NODE_TLS_REJECT_UNAUTHORIZED=1

sinon:
https://stackoverflow.com/questions/29283040/how-to-add-custom-certificate-authority-ca-to-nodejs/47160447#47160447
cf answer 2 :
You can specify a command line option to tell node to use the system CA store:
`node --use-openssl-ca`
Alternatively this can be specified as an environment variable, if you are not running the node CLI directly yourself:
`NODE_OPTIONS=--use-openssl-ca`
and comments

Après-midi :
comme conseillé à midi par Diego j'essaie de créer les charts dans un nouveau PWA stencil mais j'enchaîne les soucis de config, d'environnement...
A la fin de journée, j'ai un PWA qui foncitonne mais les même erreurs en console pour ag-grid que dans vanillaJS.

### 27/09/23_Mercredi
Matin :
J'ai réussi à corriger la façon d'importer et d'implémenter ag-grid dans vanilla JS (mais en laissant tout dans le HTML plutôt qu'en rangeant bien dans des fichiers le JS et le CSS)
Mais comme on travaille sur un PWA avec Pégasus, mieux vaut arranger le PWA modèle de base ("training-PWA") pour plus de fidélité au projet.
Après-midi :
Les charts fonctionnent sur le PWA, tooltips out of the box aussi mais je ne peux pas résister à corriger ma grid qui n'est pas correcte.
J'ai aussi essayé de retirer des éléments dans Pegasus mais les tooltips ne reviennent pas pour autant (le theme custom notamment)
Le soir : J'ai un PWA et une page avec VanillaJS, et les 2 ont des tooltips.
Bug pas corrigé, par contre

### 28/09/23_Jeudi
Comme indiqué par Diego le matin, j'applique petit à petit la config des charts de Pégasus à mon PWA mais en fin de journée, les tooltips n'ont toujours pas cassé.
En tout cas, ça n'est pas lié aux gridOptions ou aux ChartsOptions.

### 29/09/23_Vendredi
Ca ne casse pas en étant dans le module/la page créée automatiquement avec la création du PWA, donc je veux faire un component séparé à importer dans la page, comme dans Pégasus.

### 2/10/23_Lundi
Off. AU salon des TPE/PME avec Olivier

### 3/10/23_Mardi
Demande d'aide à Cédric pour trouver le bug. Toolstips toujours pas cassés sur mes exemples minimaux.
La seule différence qui reste, trouvé par Cédric, c'est 

Hello. Trying to pass a build for Pegasus reporting.
Yesterday it failed on the 'app image' or 'execute step'. Without the storybook commands in the Dockerfile, still failed on 'app image' but anyway I saw in the log that the jenkinsfile asked for the storybook. So this morning I tried to change the jenkinsfile, based on Diego's PR's Jenkinsfile (link to the file) since this build passes. But mine blocks at the step 'build' now.
I'm still on node 14. And it seems to be the problem. So if I remove npm id and go back to the old image and node line, I hope it will be ok.

Hello. 

Juste pour le suivi: je lutte avec les builds sur Jenkins pour créer l'environnement mais je profite d'avoir les tooltips en local pour regarder si FNX-3691 peut-être régler vite (pour l'instant il y a des rapports sur Rancher QA). Sinon je passerais à un autre bug ce soir de la todo column.

Pour FNX-3528 rien à faire pour le moment, Cédric m'a dit qu'Elena refera une passe quand les tooltips seront de retour dans les env.

### 4/10/23_Mercredi
to rebase or not to rebase on Diego's branch for the node migration of Pegasus. Oui pour Cédric, non pour Diego (et en effet, la branche a des soucis, même sans ajout de ma part, ça ne build pas, même en local)
Mais ça ne build pas non plus quand je rebase sur develop.
(Edit du lendemain : ça passe sur develop en restant en node 14, en retirant tout ce qui est ref à storybook dans le dockerfile et le jenkins, par contre, éviter de changer l'image ou node et d'ajouter npm id, qui sont déjà sur Node 18 dans la PR de Diego )

2h passées en fin de journée avec Saurav après un coup de colère de Thanh parce qu'il n'arrive pas à débugger sa migration FRX, problèmes de "circular dependencies" alors qu'il lui a passé un outil mais surtout parce que il n'arrive pas à se avancer sur ses sujets à force d'être intérompu tout le temps (pas que pas Saurav, hein) et que Diego a dû passer 3 jours à debugger de la façon dont Dragos et Saurav auraient dû faire sans lui.) Bref, j'ai tenu companie à Saurav et essayé de l'aider à debugger et utiliser l'outil recommandé par Thanh. Mais l'outil, Madge, n'a pas trouvé (l'a t'on utilisé correctement?).
En trouvant les services sources des pb de circular dependencies et en faisant lazyloading au lieu de import ça semblait marcher.
(Edit du vendredi 6: Saurav vient de me dire que ça cassait en fait d'autres choses, car on ne peut pas faire le lazy loading sur les services. Par contre le soucis était que inversify n'arrivait pas à résoudre l'import de certains service exportés dans le index.ts pour créer un alias et éviter d'avoir à importer avec le chemin complet. ça a l'air de progresser en retirant les services concernés (rgk..., default-view...) de l'index.ts et en les important où c'est necessaire avec le chemin complet.)

### 5/10/23_Jeudi

Env TDD et PR ok pour les charts-tooltips
FNX-3691 pas reproductible (ou en tout cas Eugen va devoir trouver un rapport imitable pour pouvoir corriger le bug s'il est toujours là)
NB : Pour Cédric, c'est parce que certains rapports n'ont pas la granularité nécessaire pour donner le total d'une currency par exemple quand on groupe et donc le chart se retrouve avec un arrêt de sommes au lieu du total et prend la première dans certains cas.
Du coup, j'ai pris un nouveau ticket. Je reproduis mais je m'y mettrais demain.

Partie à changer dans le exe d'Openfin target = C:\Users\u730750\AppData\Local\OpenFin\OpenFinRVM.exe --config="https://treasury-launcher.treasury-fnx-dev.fnx.devops.misys.global.ad/manifests/launcher.json"
si on est sur develop en ligne
si on veut son env local target = C:\Users\u730750\AppData\Local\OpenFin\OpenFinRVM.exe --config="https://://localhost:3360/manifests/launcher.json"

### 6/10/23_Vendredi
*home office, well more like bed office*
*so tired. peut-être à nouveau une carence en fer ? ou magnésium ? ou juste sommeil ^^*

Mon nouveau bug, FNX-3601, me lance dans l'exploration de la doc d'Openfin, la config pour le moment;
Je vais essayer de découvrir un peu plus la finTech et ses outils, en tout cas Bloomsberg et Openfinance. 

Error in console :

 index-d6988438.js:11245 Uncaught (in promise) TypeError:
  Cannot read properties of undefined (reading 'document')
  at createWindow (index-d6988438.js:11245:30)
  at async PopupManagerOpenfinService.create (index-d6988438.js:11307:22)
  at async FnxReportManagerEditorFormHeader.initConfirmationPopover (fnx-report-manager-editor-form-header.entry.js:82:21)
  at async FnxReportManagerEditorFormHeader.componentWillLoad (fnx-report-manager-editor-form-header.entry.js:76:32)

at createwindow :
  return win.getWebWindow().document.querySelector(elementTag);

 ### Dates ...?

**MGR-35147 : What do we know ?**

are you doing anything strange with state?

we are talking about PDC.

Before upgrade of node 18 and adaptable (so alk/adaptable and alk/grid-utils too), my function/predefined congig worked flowlesly

Then, Diego told me to extract it to have the utils for badges everywhere
(I could try it in report viewer ? haven't tried that)

In alk-adaptable, migration was done, so I had to use the migrated verison of PDC (finished by Cédric).
In order to use my version of alk/adaptable to use the new utils.

But in the migrated version of PDC, the styledBadges where configurated but not applied unless a manual "finish" was done in the adaptable config panel.

So I made a story about that in alk/adaptable but pb of imports because of redirection.
By the way, I uncovered a problem with outdated conditional styles not changed in the stories in alk/adaptable (now it's format column with rules)
Changed that, have new problem of imports.

So tried to put it in alk/grid-utils, same pb in PDC when we use the utils.

So, tried to add as simply as possible the predefinedConfig directly in the adaptableOptions and same pb of it being configured but not applied unless user manipulation.

Storybook ok now except that adaptable state doesn't clear in local storage and it doesn't apply correctly when we go from one predefinedConfig to another one.

I should try to use my utils in report viewer.

15h25 : After just starting launcher and report-viewer locally (after rebase on develop and npm i, just changed alk/grid-utils version for the one where my utils is, nothing more, to see if the virgin version worked):

Errors that appear without doing anything in report-viewer now :

alk-adaptable.entry.js:94777 Unexpected keys "PercentBar", "UpdatedRow", "GradientColumn", "ConditionalStyle" found in previous state received by the reducer. Expected to find one of the known reducer keys instead: "Grid", "Popup", "System", "Plugins", "Alert", "FlashingCell", "Application", "CalculatedColumn", "CustomSort", "Dashboard", "Export", "FormatColumn", "FreeTextColumn", "Layout", "Schedule", "StatusBar", "PlusMinus", "QuickSearch", "Shortcut", "TeamSharing", "Theme", "ToolPanel", "Query", "Charting", "StyledColumn", "Comments". Unexpected keys will be ignored.
warning$4 @ alk-adaptable.entry.js:94777
alk-adaptable.entry.js:113420 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    at https://localhost:3351/build/alk-adaptable.entry.js:140097:59
    at QuickFilterFormComponent (https://localhost:3351/build/alk-adaptable.entry.js:223610:9)
    at ConnectFunction (https://localhost:3351/build/alk-adaptable.entry.js:153394:28)
    at ThemeProvider (https://localhost:3351/build/alk-adaptable.entry.js:103235:5)
    at Provider (https://localhost:3351/build/alk-adaptable.entry.js:152723:20)

### 6/11/23_Lundi

Catch up de la plupart des e-mails et de la moitié des PRs au retour de 10 jours de vacances.

**MGR-35147 Styled Badges :**

Pas de problème restant sur le storybook de alk/adaptable, le fonction getBadges foncitonne correctement
à part l'espace vide au dessus des tableau et l'alerte en console à propos de la version d'adaptable qui serait de test

Dans alk-component, même comportement plutôt correct quand je tire la version d'alk/adaptable avec les stories sur les styled badges.

Dans PDC et Report Viewer, j'ai le soucis d'application des predefined config, que je fasse un FormatColumn simple ou
des badgesStyle. C'est configuré mais pas appliqué tant que je ne fais pas n'importe quelle action manuelle 
pour appliquer une predefined config (exemple : si je prédéfini un column format il n'est pas là au chargement mais si je vais valider un create badge style dans une autre colonne, le format prédéfini va aller s'appliquer sur la colonne prévue par le code.)

Autre constatation : les éléments de predefined config sont bien dans le console.log d'adaptable options.
Et ça correspond à ce que j'ai dans this.gridApi > __adaptable > adaptableOptions,
sachant que this.gridApi > __adaptable > adaptableOptions > stateOptions n'a pas l'air bizarre mais bon.


### 6/11/23_Mardi

[X] Je devrais regarder demain s'il y a quelque chose dans evt.detail old state et new state.
Edit : indeed, il manquait l'import de l'adaptableApi + un appel à this.adaptableApi.configApi.reloadPredefinedConfig() 
après avoir récupéré les données (les rows, en l'occurence)  
Trouvé grâce à Diego.

[ ] Est-ce que c'est embêtant qu'on ne donne pas la licence d'ag-grid dans alk/adaptable (erreur console comme quoi version test)  

[ ] Comprendre pourquoi il y a ce rectangle vide dans le storybook (mais je crois que c'est les fameux 'watermark',  
sauf qu'un pb fait qu'on ne les voit pas, non ?)  

---> pour Cédric, il faut ajouter une adaptableStateKey ici pour chacune des story pour que les styles ne s'écrasent pas.  
(Il ne sait pas pourquoi il y a le rectangle vide en haut du tableau au bout de quelques changements.)  

[ ] Finir de lire les PRs

[X] AI training, phase 2 fait. (Pas intéressant)

Snippet pour formatColumn très basique :
```    predefinedConfig: {
        FormatColumn: {
            FormatColumns: [
                {
                    Style: {
                        ForeColor: 'Red',
                    },
                    Scope: {
                        ColumnIds: [ 'type' ],
                    },
                    Rule: {
                        Predicates: [
                            {
                                PredicateId: 'Is',
                                Inputs: [ 'Simple' ],
                            },
                        ],
                    },
                },
            ],
        },
```
NB : à retenir :
pour savoir et verifier quelle est la version de tel ou tel lib utilisée par npm (qui choisit parfois mal parmi plusieurs versions tirées par différentes lib):
2 solutions bien utiles : aller vérifier dans le package-lock.json (et non ds le package.lock)  
ou bien faire "npm ls nomDeMaLib" par exemple :  
`npm ls ag-grid-community  `
`npm ls @adaptabletool/adaptable  `

DEMAIN :
- PRs
- montrer styledBadges à Eugen
- prerealese alk/adaptable puis changer version dans PDC
- ticket suivant

Changer les noms de couleurs pour des variables du design system.
Du coup, utiliser la fonction getRootCssVar définie dans al Kebir
Puis trouver mes teintes dans le color-palette

Et pour les utiliser dans typescript : 

import { getRootCssVar } from '@alk/core';

const varValueGetter = getRootCssVar(window);

exemple :
BackColor: varValueGetter('--alk-g-25'),

Pour mémoire, je vais garder ici les codes des couleurs:

export const statusStyles: Record<EStatus, AdaptableStyle> = {
    [ EStatus.TRIAL ]: {
        BackColor: '#D4EFDA',
        BorderColor: '#56C271',
    },
    [ EStatus.BREACH ]: {
        BackColor: '#FFEBEB',
        BorderColor: '#F9423A',
    },
    [ EStatus.WARNING ]: {
        BackColor: '#FBEBC7',
        BorderColor: '#FFA76D',
    },
    [ EStatus.OPEN ]: {
        BackColor: '#FAFAFA',
        BorderColor: '#9F9F9F',
    },
};

Dans report viewer, certaines options sont supprimées dans le menu contextuel à partir des adaptable options.
(ici j'ai ajouté Edit et Create Badge style)
import { AdaptableMenuItem, AdaptableOptions, AdaptableStyle } from '@adaptabletools/adaptable/types';
adaptableOptions:
    menuOptions: {
        showAdaptableColumnMenu: (menuItem: AdaptableMenuItem) => {
            return ![
                'Dashboard',
                'See Cell Summary',
                'Edit Layout',
                'Change Caption',
                'Create Plus/Minus Rule',
                'Show System Status',
                'Create Badge Style',
                'Edit Badge Style'
            ].includes(menuItem.label);
        },
        showAdaptableContextMenu: (menuItem: AdaptableMenuItem) => {
            return ![
                'Dashboard',
                'See Cell Summary',
                'Edit Layout',
                'Show System Status',
            ].includes(menuItem.label);
        },
    },

### 10/11/23_Vendredi

Leçon du jour, Cédric m'a montré que la réponse à une de mes question était dans une page de doc que j'avais consulté.
Je l'avais juste pas lue correctement. RFM reminder;
Connaitre l'objectif, qu'il soit clairement défini. Lire la doc pour savoir si l'outil peut le faire et comment.
Et ce avant d'essayer d'implémenter quoi que ce soit. Sinon on perd du temps. Pourtant je le sais, Thanh le répète assez. Même moi je le répète à la maison.
Mais je fait encore l'erreur visiblement.
ça n'est pas un échec, c'est une leçon. Et bim ! comme dirait Cédric.

    - ticket MGR :
	- trouver comment protéger les badges des actions de l'utilisateur:
		FormatColumn et StyledColumn retiré du menu contextuel
		Reste à regler: 
			erreur dans les tests suite à la modif
			trouver comment éviter les modifs depuis le setting panel
			( message envoyé à adaptable à ce sujet)

	- améliorer le rendu des stories (adaptable state keys ?)
- ticket tooltips :
	- trouver où c'est dans le code
	- trouver comment faire
	A priori : dans peg-common-header, rajouter un tooltip renderer ?
	Branche locale créée en tout cas.

- devops :
demander à Diego pour réparer le server Node.js de conversion http vers http2
pour aider Rémi avec son docker-compose pour somit qui ne marche plus depuis 3 semaines

- faire le training Github

- voir la formation fonctionnelle par Eugen

- finir un cours pluralSight

- finir un cours linkedin