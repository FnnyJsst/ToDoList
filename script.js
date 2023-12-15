const quizzData = [
    {
        question: "Quel animal est associé à la maison Gryffondor à Poudlard?",
        options: ["Serpent", "Hibou", "Lion"],
        correctAnswer: "Lion"
    },
    {
        question: "Quel sortilège est utilisé pour désarmer un adversaire dans le monde de Harry Potter?",
        options: ["Expelliarmus", "Wingardium Leviosa", "Expecto Patronum"],
        correctAnswer: "Expelliarmus"
    },
    {
        question: "Qui est le professeur de potions à Poudlard pendant la plupart de la série Harry Potter?",
        options: ["Professeur McGonagall", "Professeur Flitwick", "Professeur Rogue"],
        correctAnswer: "Professeur Rogue"
    },
];

const quizContainer = document.getElementById('quiz-container');
let score = 0;


//Fonction pour afficher les questions et réponses
//Fonction pour afficher les questions et réponses
function displayQuestions() {
    const pUpdatedScore = document.querySelector('.score'); // Utiliser querySelector pour obtenir un élément unique
    pUpdatedScore.innerHTML = `Score : ${score}`;

    quizzData.forEach((currentQuizzData) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');

        const questionElement = document.createElement('p');
        questionElement.textContent = currentQuizzData.question;

        questionContainer.appendChild(questionElement);

        let answerButtons = [];
        let isAnswered = false;

        // On place chaque option de réponse dans un bouton
        currentQuizzData.options.forEach((option) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = option;
            questionContainer.appendChild(answerButton);

            // Appels des fonctions de vérification de réponse et de sélection d'un seul bouton
            answerButton.addEventListener('click', () => {
                if (!isAnswered) {
                    checkAnswer(option, currentQuizzData.correctAnswer, answerButton);
                    deleteButtons(currentQuizzData.correctAnswer, answerButtons);
                    isAnswered = true;
                    // Mettre à jour le score après chaque réponse
                    pUpdatedScore.innerHTML = `Score = ${score}`;
                }
            });
            answerButtons.push(answerButton);
        });
        quizContainer.appendChild(questionContainer);
    });

    // Fonction pour vérifier si la réponse est vraie ou fausse
    function checkAnswer(selectedAnswer, correctAnswer, buttonElement) {
        if (selectedAnswer === correctAnswer) {
            buttonElement.style.backgroundColor = '#18391E';
            score++;
        } else {
            buttonElement.style.backgroundColor = '#7F0000';
        }
    }

    // Fonction qui permet de ne sélectionner qu'un seul bouton
    function deleteButtons(correctAnswer, buttons) {
        buttons.forEach((button) => {
            if (button.textContent !== correctAnswer) {
                button.disabled = true;
            }
        });
    }
}


displayQuestions();






