let estanteria = document.getElementById("estanteria");
let archivador = document.getElementById("archivador");
let contact = document.getElementById("contact");

//Now, we need to add an Event Listener to listen when the image gets mouse over.



const game = document.querySelector(".game");
const type = document.querySelector(".type");
const rating = document.querySelector(".rating");
const notes = document.querySelector(".notes");
const btnAddGame = document.querySelector(".addGame");
const listTasks = document.querySelector(".list-of-Boardgames");

const db = window.localStorage

btnAddGame.onclick = () => {
  let contact = {
      id : Math.random(1,100),
      game : game.value,
      type : type.value,
      rating : rating.value,
      notes : notes.value,

  }
  saveContact(db, contact)
}

loadContact(db, listTasks);

