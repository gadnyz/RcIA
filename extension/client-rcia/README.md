# client-rcia README


## Ajouter de la commande au menu

"contributes": {
    "commands": [{
      "command": "client-rcia.helloWorld",
      "title": "Recherche code (RcIA)"
    }],
    "menus": {
      "editor/context": [
        {
          "group": "rcia@1",
          "command": "client-rcia.helloWorld",
          "when": "editorLangId == python && editorHasSelection"
        }
      ]
    }
  },

* editorLangId == python et editorHasSelection : Le menu ne va s'afficher que dans un fichier python et si seulement un texte est selectionné. 

## Dependances additinnelles
**superagent**

Petite bibliothèque progressive de requêtes HTTP côté client, et module Node.js avec la même API, supportant de nombreuses fonctionnalités client HTTP de haut niveau. Maintenu pour Forward Email et Lad.

<pre><code> install superagent</code></pre>