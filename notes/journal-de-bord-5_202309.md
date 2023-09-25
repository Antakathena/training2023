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
* olivier prepa salon PME*

Magda m'avertit le matin que env tjs pas dispo

Il n'y a pas trace de ag-grid-enterprise dans le package.json de pegasus reporting.
Or, je vois dans le package-lock.json de pegasus reporting des références à ag-grid-enterprise
modifiées en dernier quand Nabil a fait l'"upgrades AG-grid version to 29.3.5
and Adaptable version to 15.4.3" (ticket 3360), notamment : 
 `"@ag-grid-enterprise/charts": {
            "version": "29.3.5", etc...`
Il me dit que c'est parce que pegasus utilise @alk/ag-grid qui contient ag-grid-enterprise
