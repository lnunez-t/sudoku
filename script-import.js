const nbAleatoire = nbMax =>
    Math.trunc(Math.random() * nbMax + 1)

const importerGrille = async() => 
{
    const grilles = await fetch('grilles.json')
    .then(reponse => {
        if (reponse.ok === true)
        {
            return reponse.json()
        } 
        else 
            return Promise.reject('Fichier introuvable')
    })
    
    const numGrille = nbAleatoire(grilles.length)
    const sudoku = grilles[numGrille - 1]
    const grille = sudoku.grille

    console.log(sudoku)

    for (let line = 0; line < 9; line += 1) {
        for (let col = 0; col < 9; col += 1) {
            const value = grille[line][col]

            if (value != null)
            {
                const id = 'case' + line + '-' + col;
                const input = document.getElementById(id);
                input.readOnly = true

                input.value = value
            }

            
        }
    }
}

importerGrille();