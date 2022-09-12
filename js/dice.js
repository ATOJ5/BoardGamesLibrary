const images = [
    "img/Dice1.png",
    "img/dice2.png",
    "img/Dice3.png",
    "img/dice4.png",
    "img/Dice5.png",
    "img/Dice6.png",
]
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
         });
    
    let dieOneValue= Math.floor(Math.random()*6);
    let dieTwoValue= Math.floor(Math.random()*6);
    let dieThreeValue= Math.floor(Math.random()*6);
    let dieFourValue= Math.floor(Math.random()*6);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
    document.querySelector("#die-4").setAttribute("src", images[dieFourValue]);
    },
1000
    );
}



/*
//function Dice

function rollDice(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

const rollDice6 = () => rollDice(1, 6);
console.log(rollDice6(1,6))

//Dice Image from 1 to 6

const diceImage = "img/dice" + rollDice6(1,6) + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceImage)*/ 

