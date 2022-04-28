function mediaLightboxFactory(media) {
    const article = document.createElement('article');
    article.classList.add('media-lightbox');

    if (media.hasOwnProperty('video')) {
        const video = document.createElement('video');
        video.setAttribute("src", `assets/medias/${media.video}`);
        article.appendChild(video);
    } else {
        const pictures = `assets/medias/${media.image}`;
        const img = document.createElement('img');
        img.setAttribute("src", pictures);
        article.appendChild(img);

    }
    const h2 = document.createElement('h2');
    h2.classList.add('modal-style');
    h2.textContent = media.title;
    article.appendChild(h2);

    return article;
}

// j'ai toujours du mal à comprendre comment cela va s'insérer dans mon DOM (dans quel ordre ect...)