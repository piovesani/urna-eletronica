let description = document.querySelector('.description span');
let titleOfCandidate = document.querySelector('.title-candidate span');
let inputs = document.querySelector('.inputs');
let infoCandidate = document.querySelector('.info-candidate');
let datailsFooter = document.querySelector('.details-2');
let datailsRight = document.querySelector('.details-1-right');

let currentStage = 0;
let number = '';
let white = true;
votos = [];

const steps = getSteps();

const startStep = () => {

    let step = steps[currentStage];
    let numberHtml = '';
    number = '';
    white = false;

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

    if (candidate.length > 0) {
        description.style.display = 'block';
        datailsFooter.style.display = 'block';
        infoCandidate.innerHTML = `Nome: ${candidate[0].name}<br/>
                                   Partido: ${candidate[0].entourage}<br/>`;

        let photosHtml = '';
        for (let i in candidate[0].photos) {
            if(candidate[0].photos[i].small){
                photosHtml +=
                `<div class="details-img small">
                <img src="assets/images/${candidate[0].photos[i].url}" alt=""/>
                ${candidate[0].photos[i].legend}</div>`;
            }else{
                photosHtml +=
                `<div class="details-img">
                <img src="assets/images/${candidate[0].photos[i].url}" alt=""/>
                ${candidate[0].photos[i].legend}</div>`;
            }
        }

        datailsRight.innerHTML = photosHtml;
    }
    else {
        description.style.display = 'block';
        datailsFooter.style.display = 'block';
        infoCandidate.innerHTML = '';
        numberHtml = ''
        infoCandidate.innerHTML = '<div class="warning blink">VOTO NULO </div>';
    }
}

const handleNumberClick = (n) => {
    let elementNumber = document.querySelector('.square.blink');
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
    number = '';
    white = true;
    inputs.innerHTML = ''
    description.style.display = 'block';
    datailsFooter.style.display = 'block';
    datailsRight.innerHTML = '';
    infoCandidate.innerHTML = '<div class="warning blink">VOTO EM BRANCO</div>';


}

const handleYellowButtonClick = () => {
    startStep();
}

const handleGreenButtonClick = () => {

    let step = steps[currentStage];

    let check = false;

    if(white === true){
        console.log('Confirmando como voto BRANCO !');
        check = true;
        votos.push({
            etapa: steps[currentStage].title,
            voto: 'branco'
        });
    }
    else if(number.length === step.numbers){
        check = true;
        votos.push({
            etapa: steps[currentStage].title,
            voto: number
        });
    }
    if(check){
        currentStage++;
        if(steps[currentStage] !== undefined){
            startStep();
        }
        else{
            document.querySelector('.screen').innerHTML = '<div class="big blink">FIM</div>';
            console.log(votos)
        }
    }
}

startStep();