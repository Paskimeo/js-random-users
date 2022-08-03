// quando clicco sul bottone faccio una chiamata alla api
const addBtn = document.getElementById('add');
console.log(addBtn);
addBtn.addEventListener('click', addUser);


// funzione addDog aggiunge un'immagine di cane alla gallery
function addUser() 
{
    console.log('aggiungo un user');
 // con axios chiamo l'api e prendo i dati richiesti
 axios.get('https://randomuser.me/api/')
 
 //qui va la resposne con handle success
 .then(function(response)
    {
        console.log(response);
        const userImg = response.data.results[0].picture.medium;
        console.log(userImg);
        const userName = response.data.results[0].name.first;
        console.log(userName);
        const userSurname = response.data.results[0].name.last;
        console.log(userSurname);


        createUser(userImg, userName, userSurname);
    })


 //qui va handle error
 .catch(function (error) {
    // handle error
    console.log( error)
  });
 

  function createUser(url, name, surname){
        
    //creo il tag immagine da mettere nel template
    let image = document.createElement('img');
    image.src = url;
    image.className = 'img-fluid p-2';

    //inserisco nome e cognome nel card body

    let body = document.createElement("h5");
    body.innerText = name + " " + surname;
    body.className = "fst-italic";
    let cardBody = document.createElement("div");
    cardBody.className= "card-body";
    cardBody.appendChild(body);

    //creo la sezione card e ci inserisco immagine e card body
    let cardDiv = document.createElement("div");
    cardDiv.className = "card col-4";
    cardDiv.appendChild(image);
    cardDiv.appendChild(cardBody);

    //aggiungo la sezione card al card holder
    let holder = document.getElementById("gallery");
    holder.appendChild(cardDiv);
}



}

