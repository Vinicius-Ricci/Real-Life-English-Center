function check(event) {
    event.preventDefault()

    const oneQuestion = document.getElementById('question1').value.toLowerCase()
    const twoQuestion = document.getElementById('question2').value.toLowerCase()
    const threeQuestion = document.getElementById('question3').value
    const fourQuestion = document.getElementById('question4').value
    const firstFiveQuestion = document.getElementById('questionOne5').value.toLowerCase()
    const secondFiveQuestion = document.getElementById('questionTwo5').value.toLowerCase()
    const message = document.getElementById('message')

    let right = 0
    let error = 0

    window.location.href = '#message';
    message.style.display = 'inline-block'

    if (!oneQuestion || !twoQuestion || !threeQuestion || !fourQuestion || !firstFiveQuestion || !secondFiveQuestion) {
        message.innerHTML = '<p class="error">Por favor, responda todas as questões!</p>'
        return
    }

    if (oneQuestion === 'book') {
        right++
    }
    if (twoQuestion === 'red') {
        right++
    }
    if (threeQuestion === 'go') {
        right++
    }
    if (fourQuestion === 'an') {
        right++
    }
    if (firstFiveQuestion === 'meets' && secondFiveQuestion === 'have') {
        right++
    }

    error = 5 - right

    if (right === 1 || right === 2) {
        message.innerHTML = `<p>Humm... Está precisando treinar mais seu inglês. Dê uma olhada em nossos <a href="#" class="linkCourse">cursos</a> 
        para sair do zero!</p>`
    } else if (right === 3) {
        message.innerHTML = `<p>Seu inglês é razoável. Para melhor aproveitamento, realize sua inscrição em um de nossos 
        <a href="#" class="linkCourse">cursos</a>!</p>`
    } else if (right === 4 || right === 5) {
        message.innerHTML = `<p>Uau! Bom conhecimento em inglês. Quer aumentar seu progresso? Recomendamos que faça sua inscrição em um 
        de nossos <a href="#" class="linkCourse">cursos</a>!<p>`
    }
    message.innerHTML += `<p class="right marginTopBottom">${right} Acertos</p> <p class="error">${error} Erros</p>`
}
const form = document.getElementById('form')
form.addEventListener('submit', check)