const container = document.querySelector("#container")

const numberDiv = 16*16;
for (let i = 0; i < numberDiv; i++) {
const griddiv = document.createElement("div");
griddiv.classList.add("griddiv");
container.appendChild(griddiv);
}

const gridarray = document.querySelectorAll(".griddiv")
gridarray.forEach((griddiv) => {
    griddiv.addEventListener("mouseenter", function(e) {
        e.target.style = "background:blue"
    })
})