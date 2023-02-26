let description = document.querySelector('.description span');
let titleOfCandidate = document.querySelector('.title-candidate span');
let inputs = document.querySelector('.inputs');
let infoCandidate = document.querySelector('.info-candidate');
let datailsFooter = document.querySelector('.details-2');
let datailsRight = document.querySelector('.details-1-right');

let currentStage = 0;
let number = '';


const startStep = () => {

    let step = steps[currentStage];
    let numberHtml = '';

    for (let i = 0; i < step.numbers; i++) {
        if (i === 0) {
            numberHtml += '<div class="square blink"></div>'
        }
        else {
            numberHtml += '<div class="square"></div>'
        }
    }

    description.style.display = 'none';
    titleOfCandidate.innerHTML = step.title;
    infoCandidate.innerHTML = '';
    datailsFooter.style.display = 'none';
    datailsRight.innerHTML = '';
    inputs.innerHTML = numberHtml;
}

const updateInterface = () => {
    let step = steps[currentStage];
    let candidate = step.candidates.filter((item) => {
        if (item.number === number) {
            return true;
        }
        else {
            return false;
        }
    });

    console.log(candidate)

    if (candidate.length > 0) {
        description.style.display = 'block';
        datailsFooter.style.display = 'block';
        infoCandidate.innerHTML = `Nome: ${candidate[0].name}<br/>
                                   Partido: ${candidate[0].entourage}<br/>`;

        let photosHtml = '';
        for(let i in candidate[0].photos){
            photosHtml +=
            `<div class="details-img">
                <img src="assets/images/${candidate[0].photos[i].url}" alt=""/>
                ${ candidate[0].photos[i].legend }</div>`;
        }

        datailsRight.innerHTML = photosHtml;


              

    }
}

const handleNumberClick = (n) => {
    let elementNumber = document.querySelector('.square.blink');
    console.log(elementNumber)
    if (elementNumber !== null) {
        elementNumber.innerHTML = n;

        number = `${number}${n}`;

        elementNumber.classList.remove('blink');
        if (elementNumber.nextElementSibling !== null) {
            elementNumber.nextElementSibling.classList.add('blink');
        }
        else {
            updateInterface();
        }

    }
}

const handleWhiteButtonClick = () => {
    alert(`Você clicou em BRANCO`)
}

const handleYellowButtonClick = () => {
    alert(`Você clicou em CORRIGE`)
}

const handleGreenButtonClick = () => {
    alert(`Você clicou em CONFIRMA`)
}


startStep();