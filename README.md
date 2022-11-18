# RcIA (Recherche de code et Identification des améliorations)
---
Projet réalisé dans le cadre de recherche de master en Génie Logiciel.

Il contient 4 grandes parties : 
- Recherche de code : entrainement d'un modèle de Deep Learning pour la recherche de code dans un corpus des codes sources ;
- Identification des refactoring : A partir des codes trouvés par la recherche, determiner les differentes modifications à apporter aux fragments de codes ;
- Serveur Local : Module python (Flask) de deployement du modèle de recherche et celui d'identification des refactoring ;
- Extension Vs-code : Module de recommandation de codes aux developpeurs. Installé dans l'environnement de developpement Vs-Code ;

## Exigences

Pour utiliser ces modules, il faut au préalable installer :
- L'editeur de code Vs-code
- Le framework python Flask