# RcIA (Recherche de code et Identification des améliorations)
---
Projet réalisé dans le cadre de recherche de master en Génie Logiciel.

Il contient 4 grandes parties : 
- Recherche de code : entrainement d'un modèle de Deep Learning pour la recherche de code dans un corpus des codes sources ;
- Identification des refactoring : A partir des codes trouvés par la recherche, determiner les differentes modifications à apporter aux fragments de codes ;
- Serveur Local : Module python (Flask) de deployement du modèle de recherche et celui d'identification des refactoring ;
- Extension Vs-code : Module de recommandation de codes aux developpeurs. Installé dans l'environnement de developpement Vs-Code 
;

## Exigences

Pour utiliser ces modules, il faut au préalable installer :
- L'editeur de code Vs-code
- Le framework python Flask


## Creation de l'extension
1. Installation de Yommmm
2. Lancement de yo go
    Si Microsoft serveur est installé sur votre PC, vous pouvez faire face à cette erreur : 
    (Issues1) ..\npm\yo.ps1 cannot be loaded because running scripts is disabled on this system.
    => Pour y remedier
    - 1. Tapez la commande suivante dans Powershell en tant qu'admin
        Set-ExecutionPolicy RemoteSigned

    - 2. Et pour revenir à la restriction
        Set-ExecutionPolicy Restricted

apres installation, Taper F5
