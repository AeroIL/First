console.log("Ma Omer?");
console.log("Beseder");
const title = document.querySelector("h1");
const words = document.querySelector(".words");
const colors = document.querySelector(".colors");
words.addEventListener("click", function (e) {
 title.textContent += " Tov"   
});
colors.addEventListener("click",function (e) {
    title.style.color = title.style.color== "white" ? "black" : "white"
})