#Notes sur VSCode (inside VBox Linux with Ubuntu)

- ref : cheatsheet terminal linux https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

- paramétrer + extensions VScode pour : 
    - ne pas taper mot de passe à chaque fois (dans le terminal de base aussi):
    'https://u730750@scm-git-our-misys.global.ad': monmotdepasse
    - debuging js/tx
    - autres pour travail ac js, jest, eslint, ...
    - m'y retrouver avec 3 terminaux ouverts/app en même temps : ajouter info nom de branche dans chaque terminal ouvert.
    - trouver automatiquement les fichiers avec des conflits
    - ouvrir les conflits avec un écran split avant-après
    
- Essayé : zsh pour remplacer bash, terminator pour remplacer le terminal linux intégré.
    - zsh  : trop sensible pour le moment, revoir fichier de config de l'autocomplétion? -> retour à bash pour le moment
    https://doc.ubuntu-fr.org/zsh
    - terminator : intallé avec apt install terminator, **à tester**
    https://doc.ubuntu-fr.org/terminator

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

-> solution Cédric : **htop** -> filter et kill les nodes plus utiles
Sinon, depuis **VSCode->terminal->run->task** : on peut lancer un terminal dédié à la tâche et quand il est tué ça arrête aussi le processus

- un commit avec le workspace (les paths) de VSCode fait par erreur et avec un mauvais nom  
    Cédric m'a fait le retirer grâce à un ``git rebase interactif`` 
    ```$ git rebase -i HEAD~1``` (HEAD c'est pour le dernier et ~1 c'est pour remonter de 1 en arrière)  
    ça ouvre nano -> choisir l'option voulue, ici drop au lieu de pick sur le commit pour le retirer puis ctrl+O, enter, ctrl+x pour exit  

    NB : Enregistrer le fichier de sauvegarde du workspace VSCode plus haut dans l'arbre (dans le dossier workspace) pour éviter qu'il soit prit en compte par git.

    Avant de faire rebase, pull etc, faire table rase des changements (changes) en cours (discard all changes ou autre)


Pour changer l'éditeur nano pour VScode quand on fait une commande comme git --amend (et peut-être git rebase -i HEAD~2):
git config --global core.editor "code --wait"
// ou pour un repo précis:
git config --local core.editor "code -w"
// pour revenir à nano:
git config --global --unset core.editor

## VSCode sous linux :
**ctrl + maj + E** : focus sur explorer
**ctrl + B** : fermer/ouvrir l'onglet de gauche
**ctrl + tab** et **ctrl + shift + tab** : naviger dans les onglets ouverts
**ctrl + Alt + A** = toggle block
**ctrl + P** : pour chercher des fichiers (attention si plusieurs fichiers portent le même nom dans différents dossiers)
**2 fichiers selectionnés + clic droit "compare selected"** : permet de comparer les deux fichiers
**ctrl + shift + k** = delete whole line
**ctrl + Alt + _**= back navigation
**ctrl + _** = forward navigation
**f11**= toggle mode plein écran (nb : zen mode vbox = **ctrl droit + F**)
**ctrl + l** = select whole line

[X] VSCode Git et debuggage (des fichiers de tests, les autres se débuggent grâce aux webtools du browser(plus éventuellemnt le source map : true))  