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
  return mediaList;
}

//boucle pour afficher les médias en fonction du photographe "cliqué"


function displayMedias(medias) {
  const mediasSection = document.querySelector(".medias");

  medias.forEach((media) => {
      const mediaDOM = mediaFactory(media);
      mediasSection.appendChild(mediaDOM);
  });
};

// fonction qui incrémente le nombre de likes sur la photo
// function heartCounter() {
  
//   let likes = document.querySelector('.fa-heart', '.fas').addEventListener('click', incrementCounter);
//   let total_Likes = document.querySelector('.counter-label');
//   function incrementCounter() {
//       let totalLikes = 0;
//       for (let i = 0; i < likes.length; i++) {
//           totalLikes += parseint(likes[i].innerText);
//       }
//       total_Likes.innerText = totalLikes;
//   }
// };

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
  displayMedias(medias  );
  
})();


var dropdown = document.querySelector(".dropdown");
var btnDrop = document.querySelector(".bloc-top");
var toggleIndex = 0;
btnDrop.addEventListener("click", function () {
  if (toggleIndex === 0) {
    dropdown.style.height = "".concat(dropdown.scrollHeight, "px");
    toggleIndex++;
  } else {
    dropdown.style.height = "".concat(btnDrop.scrollHeight, "px");
    toggleIndex--;
  }
});