function changeImage(buttonNumber) {
    const mainImage = document.getElementById('gallery__image');

    if (buttonNumber===1) {
        mainImage.src = "../../assets/Image(2).png";
    } else if (buttonNumber===2) {
        mainImage.src = "../../assets/Image.png";
    } else if (buttonNumber===3) {
        mainImage.src = "../../assets/Image(1).png";
    }
    console.log(buttonNumber);
}