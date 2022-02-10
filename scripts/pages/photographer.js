//Fonction qui permet de récupérer et affiche un photographe en fontion de son id 

async function getPhotographerById(id) {
  const photographer = await fetch("data/photographers.json")
    .then((result) => result.json())
    .then((data) => {
      let result;
      data.photographers.forEach((photographer) => {
        if (id == photographer.id) {
          result = photographer;
          console.log(photographer);
        }
      });
      return result;
    });
  return photographer;
}

//fonction qui récupère les données des photographes et compare leurs id

async function getMediasByPhotographer(photographer) {
  const mediaList = await fetch("data/photographers.json")
    .then((result) => result.json())
    .then((data) => {
      let result = [];
      data.media.forEach((media) => {
        if (media.photographerId === photographer.id) {
          result.push(media);
        }
      });
      return result;
    });
  return media;
}

//boucle pour afficher les médias en fonction du photographe "cliqué"


async function getMedias(medias) {
  const pictures = await fetch("data/photographers.json")
    .then ((result) => result.json())
    .then((data) => {
      let result = [];
      data.media.forEach ((medias) => {
        if (medias.photographerId === photographer.id) {
          medias.filter(id);
        }
      });
      return result;
    });
    return medias;
}

function displayMedias(medias) {
  const mediasSection = document.querySelector(".medias");

  medias.forEach((media) => {
      const mediaDOM = mediaFactory(media);
      mediasSection.appendChild(mediaDOM);
  });
};

(async () => {
  let params = new URLSearchParams(document.location.search);

  let id = parseInt(params.get("id"));

  let photographer = await getPhotographerById(id);
  console.log(photographer);
  //ajout des données des photographes

  document.querySelector(".photographer_name").textContent = photographer.name;
  document.querySelector(".photographer_localisation").textContent = photographer.city + ", " + photographer.country;
  document.querySelector(".photographer_tagLine").textContent = photographer.tagline;
  document.querySelector(".photographer_picture").setAttribute("src", "assets/photographers/" + photographer.portrait )

  let medias = await getMediasByPhotographer(photographer);

  
})();

//récupérer la liste des médias et rechercher et filtrer parmis cette liste les médias qui appartiennent au photographe(data.media)

const dropdown = document.querySelector(".dropdown");
const btnDrop = document.querySelector(".bloc-top");

let toggleIndex = 0;

btnDrop.addEventListener("click", () => {
  if (toggleIndex === 0) {
    dropdown.style.height = `${dropdown.scrollHeight}px`;
    toggleIndex++;
  } else {
    dropdown.style.height = `${btnDrop.scrollHeight}px`;
    toggleIndex--;
  }
});
