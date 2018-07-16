'use strict'

var rand = function() { //function for create a random elecction

    let numero =  Math.floor((Math.random()*3)+1), //Select a random number between 1-3
        respuesta;

    if (numero == 1) {
        respuesta = "rock";
    } 
    
    else if (numero == 2) {
        respuesta = "paper";
    } 
    
    else {
        respuesta = "scissors";
    }
    return respuesta;
},

//function for game logic

    logicGame = function(p1, p2){
    
    let result;
    
    if(p1 == p2){
        result = "Dead heat";
    }
    else if((p1 == "scissors" && p2 == "paper") || (p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock")){
        result = "P1 WINS"
    }
    else if((p2 == "scissors" && p1 == "paper") || (p2 == "rock" && p1 == "scissors") || (p2 == "paper" && p1 == "rock")){
        result = "P2 WINS";
    }

    return result;
},

//fuctions for print the results in HTML

    printGameCPUvsCPU = function(){

    let p1 = rand(),
        p2 = rand(),

        pR = logicGame(p1,p2);

    console.log(p1 + " " + p2);
    document.getElementById("pruebaCPUvsCPU").innerHTML = pR;
},


    printGameP1vsCPU = function(form){

    let p1 = form.inP1.value,
        p2 = rand(),

        pR = logicGame(p1,p2);

    console.log(p1 + " " + p2);
    document.getElementById("pruebaP1vsCPU").innerHTML = pR;
},

// Function for number of round 

    rounds = function(){

        let nRounds = 3,
            cRounds = 0,
            p1Cont,
            p2Cont;

        while (cRounds < nRounds) {
            
            

        }

    };