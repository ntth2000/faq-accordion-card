const toggleButtons = document.querySelectorAll('.toggle')
const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')
const clearActive = () => {
    for (let i = 0; i < questions.length; i++) {
        //question style
        questions[i].classList.remove('question-active')
            //toggle style
        toggleButtons[i].classList.remove('toggle-active')
            //show answer
        answers[i].classList.remove('answer-active')
    }
}
for (let i = 0; i < questions.length; i++) {
    let question = questions[i]
    let isClicked = false
    question.addEventListener('click', () => {
        isClicked = !isClicked
        if (isClicked) {
            clearActive()
                //question style
            question.classList.add('question-active')
                //toggle style
            toggleButtons[i].classList.add('toggle-active')
                //show answer
            answers[i].classList.add('answer-active')
        } else {
            //question style
            question.classList.remove('question-active')
                //toggle style
            toggleButtons[i].classList.remove('toggle-active')
                //show answer
            answers[i].classList.remove('answer-active')
        }
    })
}