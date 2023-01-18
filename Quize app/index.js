const QUIZEDATA = [ 
    {
    Qst:"where did sushi originate ?",
    A:"algeria",
    B:"finland ",
    C:"china ",
    D:"japan",
    RightAnswer:"C",
    }
    ,{
    Qst:"what country drinks the most coffe",
    A:"germany",
    B:"uk",
    C:"usd",
    D:"finland",
    RightAnswer:"D",
    }
    ,{
    Qst:"how many stars are on the chinese flag ?",
    A:"4",
    B:"5",
    C:"6",
    D:"7",
    RightAnswer:"B",
    }
    ,{
    Qst:"what is the tallest type of tree ?",
    A:"redwoods",
    B:"bluewoods",
    C:"blackwoods",
    D:"greenwoods",
    RightAnswer:"A",
    }
    ,{
    Qst:"how many faces does a dodecahedron have ?",
    A:"10",
    B:"11",
    C:"12",
    D:"13",
    RightAnswer:"C",
    }
    ,{
    Qst:"what gane studio makes the red dead redemption",
    A:"sony",
    B:"rockstar games",
    C:"steam",
    D:"Ea",
    RightAnswer:"B",
    }
    ,{
    Qst:"what country has won the most world cups ?",
    A:"brazil",
    B:"france",
    C:"moroco",
    D:"algeria",
    RightAnswer:"A",
    }
    ,{
    Qst:"stfu is shortcut for what ?",
    A:"shut the fuck up ",
    B:"sheeesh heat fuck you ",
    C:" summer too far uwu",
    D:"idk uwu",
    RightAnswer:"A",
    }
    ,{
    Qst:"best game ever",
    A:"gow",
    B:"gta v",
    C:"eldin ring",
    D:"stray ",
    RightAnswer:"A",
    }
    ,{
    Qst:"how are you ",
    A:"good how about you ",
    B:"it is what it is ",
    C:"fine ",
    D:"الحمد لله",
    RightAnswer:"D",
    }
]
const currentQst = document.querySelector('.current-qst');
const totalQst = document.querySelector('.total-qst');
const questionarea = document.querySelector('.question-area');
const QST1 = document.querySelector('#ANSW-1');
const QST2 = document.querySelector('#ANSW-2');
const QST3 = document.querySelector('#ANSW-3');
const QST4 = document.querySelector('#ANSW-4');
console.log(QST1, QST2, QST3, QST4);
console.log(currentQst, totalQst, questionarea);
const SUBMIT = document.querySelector('#SUBTN');
const answercontent = document.querySelector('.answer-content');
let unorderlists = document.querySelectorAll('.unorderlist')
let currentQstNum = 0;
let RightAnswer = 0;
currentQst.innerHTML = `${currentQstNum }`;
totalQst.innerHTML = `${QUIZEDATA.length}`;
window.addEventListener('DOMContentLoaded', function () {
    loadQUIZE();
})
unorderlists.forEach(function (unorderlist) {
    const btn = unorderlist.querySelector('.ANSW');
    btn.addEventListener('click', function (e) {
        let target = e.target.dataset.id;
        checktheanswer(target);
        unorderlists.forEach(function (item) {
            if (item !== unorderlist) {
                item.classList.remove("thechoisenanswer");
            }
        });
        unorderlist.classList.toggle("thechoisenanswer");
    })
});
function loadQUIZE() {
    QST1.innerHTML = `${QUIZEDATA[currentQstNum].A}`;
    QST2.innerHTML = `${QUIZEDATA[currentQstNum].B}`;
    QST3.innerHTML = `${QUIZEDATA[currentQstNum].C}`;
    QST4.innerHTML = `${QUIZEDATA[currentQstNum].D}`;
    questionarea.innerHTML = QUIZEDATA[currentQstNum].Qst;
}
function checktheanswer(answer) {
    if (answer === QUIZEDATA[currentQstNum].RightAnswer) {
        RightAnswer++;
    }
}
function removecCLASS() {
    unorderlists.forEach(function (item) {
        item.classList.remove("thechoisenanswer");
    });
}
SUBMIT.addEventListener('click', function () {
    currentQst.innerHTML = `${currentQstNum +1}`;
    if (currentQstNum < QUIZEDATA.length -1) {
        currentQstNum++
        removecCLASS();
        loadQUIZE();
    }
    else {
        questionarea.innerHTML = `you get right  ${RightAnswer}/  ${QUIZEDATA.length}`;
    }
})




