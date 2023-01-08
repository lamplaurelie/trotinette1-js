// Sélecteurs
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// Evènements
button.addEventListener("click", function() {
  if (h1.style.color === "red") {
    h1.style.color = "black";  
  } else {
    h1.style.color = "red";  
  }
  
})