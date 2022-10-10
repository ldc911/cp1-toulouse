/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple :

[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function theaterSieges() {
  let i = 0
  totalSiege = [];//tableau général
  while (i < 26) {
    const siege = [];//matrice d'une colonne uniquement
    for (let j = 100; j > 0; j--) {
      siege.unshift(`${i + 1}-${j}`);
    }
    totalSiege.push(siege);//remplissage du tableau général par les 26 matrices de 100 sièges
    i++;
  }
  return totalSiege
}

console.log(theaterSieges());

module.exports = theaterSieges;
