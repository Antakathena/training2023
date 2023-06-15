Avec Thanh, mock data tool:
nb il a fallu rajouter l'import de writefile dans les templates/generators/replay-data.js de pegasus, report-manager et launcher
et nous avons ajouté le service de mock dans le plop de fx-trade-contribution
ça marche pour les rapports de pegasus et report-manager mais pas pour trade-contribution à cause des real-time updates/SSE/quieries (je ne me souviens plus de la formulation exacte employée par Thanh)

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
