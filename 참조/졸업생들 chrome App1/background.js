const images = ["0.png","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "backGround";

document.body.appendChild(bgImage);

const colors = [
    "#3D318F", "#998AFF",
    "#7261DB", "#8F8022",
    "#D9CD82", "#8F6F1E",
    "#FFD469", "#DBB044",
    "#223F8F", "#6684D9",
    "#8F4742", "#FFAEA8",
    "#DB827B", "#468F64",
    "#9CD9B5"
  ];

  const a = colors[Math.floor(Math.random() * colors.length)];
  const b = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
