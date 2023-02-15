const button = document.getElementById("action")
const id = document.getElementById("adviceId")
const advice = document.getElementById("advice")

function renderAdvice(advices) {
    advice.textContent = advices
}

function renderAdviceId(adviceIds) {
    adviceId.textContent = adviceIds
}

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice"
    let advices = ''
    let adviceId = ''

    try {
        const response = await fetch(url)
        const data = await response.json()

        if (data.slip) {
            advices = `"${(data.slip.advice)}"` 
            adviceId = `advice #${(data.slip.id)}`
        }
    }

    catch(e) {
        console.log(e)
    }


console.log(advices)
     renderAdvice(advices)
     renderAdviceId(adviceId)
}

button.addEventListener('click', getAdvice)



