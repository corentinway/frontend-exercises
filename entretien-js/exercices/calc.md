#### Calculatrice à partir d’une chaîne de caractères

1. Créer une classe calculatrice qui propose une méthode : `number Add(string numbers)`

    > La méthode peut prendre 0, 1 ou 2 nombres en entrée et va retourner la somme de ces nombres.

    > La chaine vide retourne 0.

    > Examples de paramètres : '' ou '1' ou '2,5'

    > Démarrer avec le cas le plus simple, c’est-à-dire une chaine vide

    > Puis passer à un nombre et ensuite à deux nombres

    > Essayer d’écrire le code le plus simple possible

    > Refactoriser après chaque test en succès

2. Autoriser un ensemble illimité de nombres pour la méthode Add

3. Autoriser le retour chariot entre les nombres (au lieu de la virgule)

    > Exemples : '1\n2,3' (résultat = 6)

    > Autre exemple, ceci n’est pas accepté : '1,\n'

4. Accepter différents délimiteurs

    > Pour changer de délimiteur, la première ligne doit commencer par  :

    > '//[delimiteur]\n'

    > Exemple : « //;\n1;2 »

    > La première ligne est optionnelle, votre algorithme doit fonctionner sans (avec un délimiteur par défaut)
