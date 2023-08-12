// Perguntas will be asked
const Perguntas = [{
    id: 0,
    q: "Qual é o minério mais raro?",
    a: [{ text: "Carvão", estaCorreto: false },
        { text: "Ferro", estaCorreto: false },
        { text: "Esmeralda", estaCorreto: true },
        { text: "Diamond", estaCorreto: false }
    ]

},
{
    id: 1,
    q: "Qual mob aparece quando você fica 3 dias sem dormir?",
    a: [{ text: "Creeper", estaCorreto: false, isSelected: false },
        { text: "Esqueleto", estaCorreto: false },
        { text: "Zombie", estaCorreto: false },
        { text: "Phantom", estaCorreto: true }
    ]

},
{
    id: 2,
    q: "Qual o primeiro item que você precisa pegar quando começa no modo survival?",
    a: [{ text: "Folha", estaCorreto: false },
        { text: "Tijolo", estaCorreto: false },
        { text: "Madeira", estaCorreto: true },
        { text: "Pedra", estaCorreto: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var resultado = document.getElementsByClassName("resultado");
resultado[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Perguntas[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Perguntas[id].a[0].text;
op2.innerText = Perguntas[id].a[1].text;
op3.innerText = Perguntas[id].a[2].text;
op4.innerText = Perguntas[id].a[3].text;

// Providing the true or false value to the options
op1.value = Perguntas[id].a[0].estaCorreto;
op2.value = Perguntas[id].a[1].estaCorreto;
op3.value = Perguntas[id].a[2].estaCorreto;
op4.value = Perguntas[id].a[3].estaCorreto;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the resposta button
const resposta = document.getElementsByClassName("resposta");

// Resposta method
resposta[0].addEventListener("click", () => {
    if (selected == "true") {
        resultado[0].innerHTML = "Certo";
        resultado[0].style.color = "green";
    } else {
        resultado[0].innerHTML = "Errado";
        resultado[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Proximo button and method
const proximo = document.getElementsByClassName('proximo')[0];
var id = 0;

proximo.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})