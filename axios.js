// quando clicco sul bottone faccio una chiamata alla api
const addBtn = document.getElementById('add');
console.log(addBtn);
addBtn.addEventListener('click', addUser);


// funzione addDog aggiunge un'immagine di cane alla gallery
function addUser() {
    console.log('aggiungo un user');
 // con axios chiamo l'api dei cani e prendo l'url dell'immagine
 axios.get('https://randomuser.me/api/')
 
 //qui va la resposne con handle success



 //qui va handle error
 .catch(function (error) {
    // handle error
    console.log(  error, "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
    );
  });
 
}