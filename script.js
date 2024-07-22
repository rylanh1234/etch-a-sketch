const container = document.querySelector("#container")

let numberDiv = 16;
for (let i = 0; i < numberDiv**2; i++) {
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

const sizebutton = document.querySelector("button")
const children = container.querySelectorAll("*");
sizebutton.addEventListener("click", ()=> {
    numberDiv = prompt("Enter the number of squares per side for the new grid.")
    children.forEach((griddiv) => {
        griddiv.remove()
    })
    for (let i = 0; i < numberDiv**2; i++) {
        const griddiv = document.createElement("div");
        griddiv.classList.add("griddiv");
        container.appendChild(griddiv);
        }
})

document.documentElement.style.setProperty('--rowWidth',numberDiv); // defines a custom css variable as "numberDiv"