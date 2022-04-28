function mediaFactory(media) {
    console.log(media);


    const article = document.createElement('article');
    article.classList.add('mediaArticle');
    const mediaDiv = document.createElement('div');
    mediaDiv.classList.add('mediaDiv');
    if (media.hasOwnProperty('video')) {
        const video = document.createElement('video');
        video.setAttribute("src", `assets/medias/${media.video}`);
        mediaDiv.appendChild(video);
       } else {
        const pictures = `assets/medias/${media.image}`;
        const img = document.createElement('img');
        img.setAttribute("src", pictures);
        mediaDiv.appendChild(img);
    }
    const mediaNameAndLikes = document.createElement('div');
    mediaNameAndLikes.classList.add('mediaNameAndLikes');
    const legendDiv = document.createElement('div');
    legendDiv.classList.add('legendDiv');
    const h2 = document.createElement('h2');
    h2.textContent = media.title;
    const likes = document.createElement('span');
    likes.classList.add('media-likes');
    likes.textContent = media.likes;
    const heart = document.createElement('i');
    heart.classList.add('fa-heart', 'fas', 'media-like');
    article.appendChild(mediaDiv);
    article.appendChild(mediaNameAndLikes);
    mediaNameAndLikes.appendChild(h2);
    
    legendDiv.appendChild(likes);
    mediaNameAndLikes.appendChild(legendDiv);
    legendDiv.appendChild(heart);

    return article;
}

//fonction en partie implémentée par oc mais je n'aurai jamais su qu'il fallait construire ce factory pour construire mon DOM