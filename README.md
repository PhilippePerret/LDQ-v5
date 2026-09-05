# Site du label « Lecture de Qualité »

*Le projet qui veut sauver l'autoédition*.



### Commission github

- s'assurer qu'aucun fichier ne soit modifié (sinon, le commiter et le pousser)
- changer de branche : `git checkout -b ma-nouvelle-branche`
- commencer le travail sur les fichiers
- ajouter et commiter les fichiers à loisir :
  - `git add <fichier> <fichier> ...` ou `git add -A`
  - `git commit -m "<titre message>" -m "<corps>"`
  - `git add`/`git commit`...
- une fois le travail fini et checké (`ruby -c`, `node --check`, tests, etc.), le pusher : 
  `git push -u origin ma-nouvelle-branch`
- création de la PR : `gh pr create -t "<titre>" -b "<body>"`
  ou : `gh pr create --fill`  # pour prendre dernier commit
- attendre la fin du check et le vérifier : `gh pr checks`
- revenir sur la branche main : `git checkout main`
- merger la PR : `gh pr merge --squash --delete-branch`
  ou (autre que squash) : `gh pr merge --auto`
- récupérer le code en local : `git pull`
- changer de branche pour poursuivre (recommencer cette boucle)