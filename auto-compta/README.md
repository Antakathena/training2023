# Auto-compta est un projet d'automatisation de comptabilité domestique.  
A partir des csv des transactions du mois pour chaque compte courant du foyer transmis par la banque,  
il doit afficher le relevé de compte, le relevé par catégorie et le résultat;  


## TODO :  
### Javascript ( à passer en typescript ensuite) :  
    [X]- récupérer le contenu du csv et le rendre utilisable (ETL)
    [ ]- l'envoyer dans un json qui pourra être modifié par la suite.
    [ ]- ajouter les catégories correspondant aux tiers -> création d'un json pour les correspondances.
    [ ]- créer une fonction pour ajouter les catégories en se basant sur le json.
    
        Pour les tiers inconnus ( < absents du json "tiers et catégories"), il faudra un affichage particulier (alerte?) et un input récupérer pour compléter le json. (alerte = "attention, tel tiers n'a pas de catégorie, entrer sa catégorie " -> inpu récupéré et ajouté au json)
    
        identifier les champs non renseignés et les lister + donner la possibilité d'ajouter le tiers et la date pour les chèques (avoir un fichier json pour le relevé du mois, pour garder les corrections), et pour les tiers sans catégories, demander le nom lisible et la catégories (à ajouter dans le json thirdPartiesCategories et répercuter dans le json du mois).

### HTML (+bootstrap?) :
    [X]- squelette
    [ ]- must have = 
        - H1 : Comptabilité, 
        - H2 Mois ,
        - H3 Compte (*1, à dupliquer ensuite),
        - H4*3 tableaux pour : relevé de compte, total dépenses par catégorie, résultat du mois
    [ ]-could have =
        - insertion manuelle puis auto des charges fixes
        - insertion manuelle puis auto (estimation/budget) des charges variables
        - aside : graph pour dépenses par catégories
        - aside : graph pour dépenses par tiers
        - aside : graph pour évolution des résultats par mois
        - aside : graph pour évolution des dépenses par catégories

