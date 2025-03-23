
//Lista de preguntas y respuestas
const questions = [
    {
        question: "Cual es la capital de Brasil?",
        respuestas: [
            { id: 1, text: "Sao Paulo", correct: false},
            { id: 2, text: "Brasilia", correct: true},
            { id: 3, text: "Rio de Janeiro", correct: false},
            { id: 4, text: "Belo Horizonte", correct: false},
        ]
    },
    {
        question: "En que año Brasil se ha tornado independente?",
        respuestas: [
            { id: 1, text: "1780", correct: false},
            { id: 2, text: "1800", correct: false},
            { id: 3, text: "1820", correct: false},
            { id: 4, text: "1822", correct: true},
        ],
    },
    {
        question: "Cual es lo mayor bioma de Brasil?",
        respuestas: [
            { id: 1, text: "Amazonia", correct: true},
            { id: 2, text: "Flora", correct: false},
            { id: 3, text: "Fauna", correct: false},
            { id: 4, text: "Carnaval", correct: false},
        ],
    },
    {
        question: "Quien es considerado el mayor jugador de futbol de la historia brasileña?",
        respuestas: [
            { id: 1, text: "Neymar Jr", correct: false},
            { id: 2, text: "Kaka", correct: false},
            { id: 3, text: "Ronaldo", correct: false},
            { id: 4, text: "Pelé", correct: true},
        ],
    },
    {
        question: "Cual es la moneda oficial de Brasil?",
        respuestas: [
            { id: 1, text: "Euro", correct: false},
            { id: 2, text: "Dolar", correct: false},
            { id: 3, text: "Real", correct: true},
            { id: 4, text: "Franco Suiço", correct: false},
        ],
    },
    {
        question: "Cual es el nombre del festival mas famoso que ocurren anualmente en Brasil?",
        respuestas: [
            { id: 1, text: "San Joan", correct: false},
            { id: 2, text: "Copa del Mundo", correct: false},
            { id: 3, text: "Carnaval", correct: true},
            { id: 4, text: "Olimpiadas", correct: false},
        ],
    },
    {
        question: "En cual ciudad brasileña esta localizada las famosas Cataratas del Iguaçu?",
        respuestas: [
            { id: 1, text: "Brasilia", correct: false},
            { id: 2, text: "São Paulo", correct: false},
            { id: 3, text: "Foz do Iguaçu", correct: true},
            { id: 4, text: "Belo Horizonte", correct: false},
        ],
    },
    {
        question: "Cual es el plato tipico brasileño que tiene frijoles negro, arroz, carne de cerdo y acompañamientos?",
        respuestas: [
            { id: 1, text: "Mariscada", correct: false},
            { id: 2, text: "Paella", correct: false},
            { id: 3, text: "Feijoada", correct: true},
            { id: 4, text: "Barbacoa", correct: false},
        ],
    },
    {
        question: "Cuantos estados Brasil posue?",
        respuestas: [
            { id: 1, text: "20", correct: false},
            { id: 2, text: "26", correct: true},
            { id: 3, text: "30", correct: false},
            { id: 4, text: "24", correct: false},
        ],
    },
    {
        question: "Cual el pais con mas titulos de Copa Del Mundo?",
        respuestas: [
            { id: 1, text: "Italia", correct: false},
            { id: 2, text: "Brasil", correct: true},
            { id: 3, text: "Espanha", correct: false},
            { id: 4, text: "Argentina", correct: false},
        ],
    },
]

//declara los elementos 
const preguntas = document.getElementById("pregunta");
const boton = document.getElementById("boton");
const proximoBoton = document.getElementById("proximo-boton");
const resultado = document.getElementById("resultado");
const respuesta1 = document.getElementById("respuesta1");
const respuesta2 = document.getElementById("respuesta2");
const respuesta3 = document.getElementById("respuesta3");
const respuesta4 = document.getElementById("respuesta4");

// declara la pregunta actual
let indicePreguntaActual = 0;

// declara la pontuacion
let puntos = 0;

// funcion que empieza el quiz
function startQuiz() {
    indicePreguntaActual = 0;
    puntos = 0;
    showQuestion();
}

// funcion que muestra la pregunta actual y las respuestas posibles
function showQuestion() {
    resetarRespuestas();

    let preguntaActual = questions[indicePreguntaActual];
    let questionNo = indicePreguntaActual + 1;
    preguntas.innerHTML = questionNo + ". " + preguntaActual.question;

    respuesta1.innerHTML = preguntaActual.respuestas[0].text;
    respuesta2.innerHTML = preguntaActual.respuestas[1].text;
    respuesta3.innerHTML = preguntaActual.respuestas[2].text;
    respuesta4.innerHTML = preguntaActual.respuestas[3].text;
    proximoBoton.style.display = "none";
    resultado.style.display = "none";
}

// funcion que retorna la lista de elementos de respuestas
function elementosRespuesta() {
    return [respuesta1, respuesta2, respuesta3, respuesta4];
}

// funcion que limpia los colores
function resetarRespuestas() {
    for (var i = 0; i < 4; i++) {
        var elementoRespuesta = elementosRespuesta()[i];
        elementoRespuesta.setAttribute("class", "botones");
    }
}

// funcion que retorna el elemento de la respuesta correcta
function elementoRespuestaCorrecta() {
    let preguntaActual = questions[indicePreguntaActual];
    for (var i = 0; i < 4; i++) {
        if (preguntaActual.respuestas[i].correct) {
            return elementosRespuesta()[i];
        }
    }
}
 
// funcion que valida la respuesta seleccionada
function clica(respuesta) {
    let preguntaActual = questions[indicePreguntaActual];
    var correcto = -1;
    var acierto = false;

    if (preguntaActual.respuestas[respuesta].correct) {
        correcto = respuesta;
        acierto = true;
        puntos+=1;
    }

    elementoRespuestaCorrecta().setAttribute("class", "botones correcta");
    if (!acierto) {
        elementosRespuesta()[respuesta].setAttribute("class", "botones incorrecta");
    }

    proximoBoton.style.display = "block";
}

// funcion que muestra la proxima pregunta o el resultado
function proximo() {
    indicePreguntaActual += 1;
    if (indicePreguntaActual >= questions.length) {
        mostraResultado();
    } else {
        showQuestion();
    }
}

// funcion que muestra el resultado
function mostraResultado() {
    proximoBoton.style.display = "none";
    resultado.style.display = "block";
    resultado.innerHTML = "Resultado: " + puntos;
}

startQuiz();

