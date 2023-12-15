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

function displayQuestions() {
    quizzData.forEach((currentQuizzData) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        
        const questionElement = document.createElement('p');
        questionElement.textContent = currentQuizzData.question;
        questionContainer.appendChild(questionElement);

        let answerButtons = [];  
        let isAnswered = false;  

        currentQuizzData.options.forEach((option) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = option;
            questionContainer.appendChild(answerButton);

            answerButton.addEventListener('click', () => {
                if (!isAnswered) {  
                    checkAnswer(option, currentQuizzData.correctAnswer, answerButton);
                    deleteButtons(currentQuizzData.correctAnswer, answerButtons);
                    isAnswered = true;  
                }
            });

            answerButtons.push(answerButton);  
        });

        quizContainer.appendChild(questionContainer);
    });

    function checkAnswer(selectedAnswer, correctAnswer, buttonElement) {
        if (selectedAnswer === correctAnswer) {
            buttonElement.style.backgroundColor = '#18391E';
        } else {
            buttonElement.style.backgroundColor = '#7F0000';
        }
    }

    function deleteButtons(correctAnswer, buttons) {
        buttons.forEach((button) => {
            if (button.textContent !== correctAnswer) {
                button.disabled = true;
            }
        });
    }
}

displayQuestions();






