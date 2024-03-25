const ajouterErreurChamp = (line, col) => {
    const input = document.getElementById('case' + line + '-' + col);
    input.classList.add('invalide');
    input.addEventListener('input', () => {
        input.classList.remove('invalide')
    }, { once: true });
}

const verifier = () => {
    const listInput = document.querySelectorAll('input');

    //Enlever toutes les classes invalides
    for (const input of listInput) {
        input.classList.remove('invalide');
    }

    for (const input of listInput) {
        const validiteInput = input.checkValidity();

        if (validiteInput == false) {
            return;
        }
    }

    const sudoku = [];

    for (let line = 0; line < 9; line += 1) {
        const sudokuLine = [];
        for (let col = 0; col < 9; col += 1) {
            const id = 'case' + line + '-' + col;
            const input = document.getElementById(id);
            const value = input.value;
            const nb = value === ''
                ? ''
                : parseInt(value, 10)

            sudokuLine.push(nb);

        }

        sudoku.push(sudokuLine);
    }

    //pas de doublons dans les lignes
    for (let line = 0; line < 9; line += 1) {
        const list = new Set()


        for (let col = 0; col < 9; col += 1) {
            const value = sudoku[line][col];

            if (value === '') {

            } else {
                const valueExist = list.has(value);

                if (valueExist) {
                    console.log('Erreur doublon' + line + '-' + col);

                    ajouterErreurChamp(line, col);
                } else {
                    list.add(value);
                }
            }
        }
    }

    //pas de doublons dans les colonnes
    for (let col = 0; col < 9; col += 1) {
        const list = new Set()


        for (let line = 0; line < 9; line += 1) {
            const value = sudoku[line][col];

            if (value === '') {

            } else {
                const valueExist = list.has(value);

                if (valueExist) {
                    console.log('Erreur doublon' + line + '-' + col);

                    ajouterErreurChamp(line, col);
                } else {
                    list.add(value);
                }
            }
        }
    }

    //indices des carres
    const carres = [
        [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2],
        ],
        [
            [0, 3], [0, 4], [0, 5],
            [1, 3], [1, 4], [1, 5],
            [2, 3], [2, 4], [2, 5],
        ],
        [
            [0, 6], [0, 7], [0, 8],
            [1, 6], [1, 7], [1, 8],
            [2, 6], [2, 7], [2, 8],
        ],
        [
            [3, 0], [3, 1], [3, 2],
            [4, 0], [4, 1], [4, 2],
            [5, 0], [5, 1], [5, 2],
        ],
        [
            [3, 3], [3, 4], [3, 5],
            [4, 3], [4, 4], [4, 5],
            [5, 3], [5, 4], [5, 5],
        ],
        [
            [3, 6], [3, 7], [3, 8],
            [4, 6], [4, 7], [4, 8],
            [5, 6], [5, 7], [5, 8],
        ],
        [
            [6, 0], [6, 1], [6, 2],
            [7, 0], [7, 1], [7, 2],
            [8, 0], [8, 1], [8, 2],
        ],
        [
            [6, 3], [6, 4], [6, 5],
            [7, 3], [7, 4], [7, 5],
            [8, 3], [8, 4], [8, 5],
        ],
        [
            [6, 6], [6, 7], [6, 8],
            [7, 6], [7, 7], [7, 8],
            [8, 6], [8, 7], [8, 8],
        ],
    ]

    //Parcourir les carres
    for (const carre of carres) {
        const list = new Set()

        for (const element of carre) {
            const line = element[0];
            const col = element[1];

            const value = sudoku[line][col];

            if (value === '') {

            } else {
                const valueExist = list.has(value);

                if (valueExist) {
                    console.log('Erreur doublon' + line + '-' + col);

                    ajouterErreurChamp(line, col);
                } else {
                    list.add(value);
                }
            }
        }
    }

    //Pour chaue carre utiliser les indices pour verifier les doublons
}

//Recuperer le bouton
const button = document.getElementById('button-verifier');

//Assigner l'evenement click a la fonction verifier
button.addEventListener('click', verifier);