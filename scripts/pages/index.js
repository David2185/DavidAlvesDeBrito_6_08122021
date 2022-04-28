    fetch("data/photographers.json") // utilisation du fetch? à quoi ça sert? quand? 
    .then(result => result.json()) 
    .then(data => console.log(data));

    async function getPhotographers() {
        const photographers = await fetch("data/photographers.json")
        .then(result => result.json()) 
        .then(data => data.photographers);
        console.log(photographers)
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };



    init();

  


