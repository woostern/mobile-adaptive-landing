async function showFilms() {
    try {
        // const url = "https://ghibliapi.vercel.app/films";
        const url = "films.json";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data[0]);

        data.forEach(film => {
            const filmsDiv = document.getElementById("films");

            const filmDiv = document.createElement("div");
            filmDiv.className = "film";

            const filmImg = document.createElement("img");
            filmImg.className = "film-image";

            // filmImg.src = "https://cdnrrviubnyuntopbez5.svc.cdn.yandex.net/get-kinopoisk-image/10812607/00d8d208-68f5-48ef-89aa-dd2c5cbe7938/600x900";
            filmImg.src = film.image;
            filmDiv.appendChild(filmImg);

            const filmInfoDiv = document.createElement("div");
            filmInfoDiv.className = "film-info";

            const filmTitleDiv = document.createElement("div");
            filmTitleDiv.className = "film-title";
            filmTitleDiv.textContent = film.title;

            const filmDescriptionDiv = document.createElement("div");
            filmDescriptionDiv.className = "film-description";
            filmDescriptionDiv.textContent = film.description;

            const filmProducerDiv = document.createElement("div");
            filmProducerDiv.className = "film-producer";
            filmProducerDiv.textContent = film.producer;


            filmInfoDiv.appendChild(filmTitleDiv);
            filmInfoDiv.appendChild(filmDescriptionDiv);
            filmInfoDiv.appendChild(filmProducerDiv);

            filmDiv.appendChild(filmInfoDiv);
            filmsDiv.appendChild(filmDiv);

        })
        // title, image, description, producer





    } catch (error) {
        console.log(error);
    }
    console.log("show films");
}