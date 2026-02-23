let myImgs = [
    "alaska_scaled_up.jpg",
    "anime_scaled_up.jpg",
    "atmosphere_scaled_up.jpg",
    "bird_scaled_up.jpg",
    "hurricane_scaled_up.jpg",
    "lake_scaled_up.jpg",
    "moorente_scaled_up.jpg",
    "sea_scaled_up.jpg",
    "snow_bunting_scaled_up.jpg",
    "snow_leopard_scaled_up.jpg",
    "travel_scaled_up.jpg",
    "winter_scaled_up.jpg"
];
let myImgDescriptions = [
    "Bild von Alaska",
    "Anime Stadt",
    "Atmosphärische Wolken",
    "Bild von Blaumeise",
    "Hurrikan von Erdorbit",
    "Bild von See",
    "Bild von Moorente",
    "Mann bei Meer",
    "Bild von Schneeammer Vogel",
    "Bild von Schnee-Leoparden",
    "Bild von Berglandschaft",
    "Bild von Schneebedecktem Baum"
];
let myImgNames = [
    "Alaska",
    "Anime Stadt",
    "Atmosphärische Wolken",
    "Blaumeise",
    "Hurrikan von Erdorbit",
    "See",
    "Moorente Foto",
    "Mann bei Meer",
    "Schneeammer Vogel",
    "Schnee-Leoparden",
    "Berglandschaft",
    "Schneebedeckter Baum"
];

let currentImgIndex = 0;
const dialogRef = document.getElementById("myDialog");

function init() {   
    imgRender();
}
function imgRender() {
    let imageRef = document.getElementById("images");
    let htmlContent = "";

    for (let index = 0; index < myImgs.length; index++) {
        htmlContent += getImagesHtml(index);
    }
    imageRef.innerHTML = htmlContent;
}

function getImagesHtml(index) {
    return `
        <img tabindex="0" role="button" class="albumImage" src="./img/${myImgs[index]}" 
             alt="${myImgDescriptions[index]}" 
             onclick="openDialog(${index})" onkeydown="if(event.key === 'Enter') openDialog(${index})" >  `;
}

function openDialog(index) {
    currentImgIndex = index;

    let titleRef = document.getElementById("dialogTitle");
    let imgRef = document.getElementById("currentImg");
    let counterRef = document.getElementById("imageCounter");

    titleRef.innerText = myImgNames[index];
    imgRef.src = `./img/${myImgs[index]}`;
    imgRef.alt = myImgDescriptions[index];
    counterRef.innerText = `${index + 1} / ${myImgs.length}`;

    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function nextImage() {
    currentImgIndex = (currentImgIndex + 1) % myImgs.length;
    openDialog(currentImgIndex);
}

function previousImage() {
    currentImgIndex = (currentImgIndex - 1 + myImgs.length) % myImgs.length;
    openDialog(currentImgIndex);
}