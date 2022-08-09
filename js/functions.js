 const saveContact = (db, contact) =>{
    db.setItem(contact.id, JSON.stringify(contact))
    window.location.href = 'edit.html'
 }

 const loadContact = (db, parentNode) =>{

    let idList = Object.keys(db)
    for (idList of idList){
        let contact = JSON.parse(db.getItem(idList))
        createContact(contact,parentNode,db)
    }
 }

 const createContact = (contact, parentNode, db) => {

    let divContact = document.createElement ("div");
    let gameContact = document.createElement ("p");
    let typeContact = document.createElement ("p");
    let ratingContact = document.createElement ("p");
    let notesContact = document.createElement ("p");
    let iconDelete = document.createElement ("span");

    gameContact.innerHTML = contact.game;
    typeContact.innerHTML = contact.type;
    ratingContact.innerHTML = contact.rating;
    notesContact.innerHTML = contact.notes;
    iconDelete.innerHTML = "delete"
    
    divContact.classList.add("task")
    iconDelete.classList.add("material-symbols-outlined","icon")

    iconDelete.onclick = () => {
        db.removeItem(contact.id);
        window.location.href = "edit.html"
    } 

    divContact.appendChild(gameContact)
    divContact.appendChild(typeContact)
    divContact.appendChild(ratingContact)
    divContact.appendChild(notesContact)
    divContact.appendChild(iconDelete)

    parentNode.appendChild(divContact)
 }
