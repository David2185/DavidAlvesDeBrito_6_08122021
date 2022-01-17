function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('photographersContent');
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement( 'p' );
        p.textContent = data.city + ", " + data.country;
        const span = document.createElement( 'span' );
        span.textContent = data.tagline;
        const spanPrice = document.createElement( 'span' );
        spanPrice.textContent = data.price + '€/jour';
        const link = document.createElement('a');
        console.log(data);
        link.setAttribute('href', 'photographer.html?id='+data.id);
        link.classList.add('linksPhotographers'); 
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(span);
        article.appendChild(spanPrice);
        link.appendChild(article);
        return (article, link);
    }
    return { name, picture, getUserCardDOM }
}


