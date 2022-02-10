"use strict";

//Mettre le code JavaScript lié à la page photographer.html
function getPhotographerById(id) {
  var photographer;
  return regeneratorRuntime.async(function getPhotographerById$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("data/photographers.json").then(function (result) {
            return result.json();
          }).then(function (data) {
            var result;
            data.photographers.forEach(function (photographer) {
              if (id == photographer.id) {
                result = photographer;
                console.log(photographer);
              }
            });
            return result;
          }));

        case 2:
          photographer = _context.sent;
          return _context.abrupt("return", photographer);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
} //fonction qui récupère les données des photographes et compare leurs id


function getMediasByPhotographer(photographer) {
  var mediaList;
  return regeneratorRuntime.async(function getMediasByPhotographer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("data/photographers.json").then(function (result) {
            return result.json();
          }).then(function (data) {
            var result = [];
            data.media.forEach(function (media) {
              if (media.photographerId === photographer.id) {
                result.push(media);
              }
            });
            return result;
          }));

        case 2:
          mediaList = _context2.sent;
          return _context2.abrupt("return", media);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

asyn(function _callee() {
  var params, id, photographer, medias;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          params = new URLSearchParams(document.location.search);
          id = parseInt(params.get("id"));
          _context3.next = 4;
          return regeneratorRuntime.awrap(getPhotographerById(id));

        case 4:
          photographer = _context3.sent;
          //ajout des données des photographes
          document.querySelector(".photographer_name").textContent = photographer.name;
          document.querySelector(".photographer_localisation").textContent = photographer.city + ", " + photographer.country;
          document.querySelector(".photographer_tagLine").textContent = photographer.tagline;
          _context3.next = 10;
          return regeneratorRuntime.awrap(getMediasByPhotographer(photographer));

        case 10:
          medias = _context3.sent;

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
})(); //implémenter une fontion getMediasByPhotographer
//récupérer la liste des médias et rechercher et filtrer parmis cette liste les médias qui appartiennent au photographe(data.media)

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