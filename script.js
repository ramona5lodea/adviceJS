const button = document.getElementById("action")
const id = document.getElementById("adviceId")
const advice = document.getElementById("advice")

function renderAdvice(advices) {
    advice.textContent = advices
}

function renderAdviceId(adviceIds) {
    id.textContent = adviceIds
}

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice"
    let advices = ''
    let adviceIds = ''

    try {
        const response = await fetch(url)
        const data = await response.json()

        if (data.slip) {
            advices = `"${(data.slip.advice)}"` 
            adviceIds = `advice #${(data.slip.id)}`
        }
    }

    catch(e) {
        console.log(e)
    }


    console.log(advices)
    renderAdvice(advices)
    renderAdviceId(adviceIds)
}

button.addEventListener('click', getAdvice)



