const images = [
  "dream1.jpg",
  "dream2.jpg",
  "dream3.jpg",
  "dream4.jpg",
  "dream5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

//html에 추가해야할 이미지 요소
backgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(backgroundImage);
