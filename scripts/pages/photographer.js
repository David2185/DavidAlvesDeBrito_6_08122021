//Mise en place du tri des médias ainsi que de l'affichage du menu dropdown

document.querySelector('.dropdown').addEventListener('click', e => {
  e.currentTarget.classList.toggle('dropdown-open');
});

function compareLikes(a, b) {
  if (a.likes > b.likes)
    return -1;
  if (a.likes < b.likes)
    return 1;
  return 0;
};

function compareDates(a, b) {
  if (a.date > b.date)
    return -1;
  if (a.date < b.date)
    return 1;
  return 0;
};

function compareTitles(a, b) {
  if (a.title > b.title)
    return -1;
  if (a.title < b.title)
    return 1;
  return 0;
};

function sort(medias) {
  const item = document.querySelector('.dropdown-item.active');

  let sortingFunction;

  if (item.textContent === "Popularité") {
    sortingFunction = compareLikes;
  } else if (item.textContent === "Date") {
    sortingFunction = compareDates;
  } else {
    sortingFunction = compareTitles;
  }

  medias.sort(sortingFunction).forEach((media, index) => media.dom.style.order = index);
};



//Fonction qui permet de récupérer et affiche un photographe en fontion de son id 

async function getPhotographerById(id) {
  const photographer = await fetch("data/photographers.json")
    .then((result) => result.json())
    .then((data) => {
      let result;
      data.photographers.forEach((photographer) => {
        if (id == photographer.id) {
          result = photographer;
          // console.log(photographer);
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
    media.dom = mediaDOM;
    mediasSection.appendChild(mediaDOM);
  });
};

// fonction qui incrémente le nombre de likes sur la photo

function counterLikes() {
  document.querySelectorAll('.mediaArticle').forEach((mediaArticle) => {
    const like = mediaArticle.querySelector('.media-like');
    const likes = mediaArticle.querySelector('.media-likes');

    like.addEventListener('click', () => {
      likes.textContent = parseInt(likes.textContent) + 1;
    })
  })
};



(async () => {
  let params = new URLSearchParams(document.location.search);

  let id = parseInt(params.get("id"));

  let photographer = await getPhotographerById(id);
  // console.log(photographer);

  //ajout des données des photographes

  document.querySelector(".photographer_name").textContent = photographer.name;
  document.querySelector(".photographer_localisation").textContent = photographer.city + ", " + photographer.country;
  document.querySelector(".photographer_tagLine").textContent = photographer.tagline;
  document.querySelector(".photographer_picture").setAttribute("src", "assets/photographers/" + photographer.portrait)

  let medias = await getMediasByPhotographer(photographer);
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.dropdown-item.active').classList.remove('active');
      item.classList.add('active');
      document.querySelector('.dropdown > span').textContent = item.textContent;
      sort(medias);
    });
  });
  displayMedias(medias);
  sort(medias);
  counterLikes(); 
})(); 



