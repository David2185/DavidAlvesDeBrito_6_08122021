//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerById(id) {
    const id = await fetch("data/photographers.json") 
    
}

function fetchDataIds(){
    fetch("data/photographers.json")
        .then(result => result.json()) 
        .then(photographers =>{
            //faire ma boucle ici
        });
} 

fetchDataIds();

let params = new URLSearchParams(document.location.search);
console.log(params);
let id = parseInt(params.get("id"));
console.log(id);
