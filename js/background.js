const images = ["1.jpg","2.jpg","3.jpeg","4.jpeg","5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);