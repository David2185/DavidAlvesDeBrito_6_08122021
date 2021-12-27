function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement( 'p' );
        p.textContent = data.city + ", " + data.country;
        const span = document.createElement( 'span' );
        span.textContent = data.tagline;
        const spanPrice = document.createElement( 'spanPrice' );
        spanPrice.textContent = data.price + '€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        article.appendChild(span);
        article.appendChild(spanPrice);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
