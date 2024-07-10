const container = document.querySelector("#container")

const numberDiv = 16*16;
for (let i = 0; i < numberDiv; i++) {
const griddiv = document.createElement("div");
griddiv.classList.add("griddiv");
container.appendChild(griddiv);
}