async function showImage() {
    try {
    const url = "https://cataas.com/cat?json=true";

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const image = document.getElementById("cat-image");

    image.src = data.url;

    } catch (error) {
        console.error(error);
    }
}