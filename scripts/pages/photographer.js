//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographerById(){
    const photographers = await fetch ("data/photographers.json") 
        .then(result => result.json()) 
        .then(photographers => photographers.id); {
            for (let id of photographers){
                console.log(photographers.id)
                return ({...id});
            }
            //faire ma boucle ici
        };
}

getPhotographerById();


let params = new URLSearchParams(document.location.search);
console.log(params);
let id = parseInt(params.get("id"));
console.log(id);
