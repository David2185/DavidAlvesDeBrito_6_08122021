//Mettre le code JavaScript lié à la page photographer.html

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

(async () => {
  let params = new URLSearchParams(document.location.search);

  let id = parseInt(params.get("id"));

  let photographer = await getPhotographerById(id);

  //ajout des données des photographes

  document.querySelector(".photographer_name").textContent = photographer.name;
  document.querySelector(".photographer_localisation").textContent = photographer.city + ", " + photographer.country;
  document.querySelector(".photographer_tagLine").textContent = photographer.tagline;

  let medias = await getMediasByPhotographer(photographer);
})();

//implémenter une fontion getMediasByPhotographer
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
