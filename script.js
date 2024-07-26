function randInt() {
    return Math.floor(Math.random()*256);
}

const container = document.querySelector("#container")

let numberDiv = 16;
let r = 0;
let g = 0;
let b = 0;
const blackrgb = 0;
let darkness = 1;
function createGrid(numberDiv) {
    for (let i = 0; i < numberDiv**2; i++) {
        const griddiv = document.createElement("div");
        griddiv.classList.add("griddiv");
        container.appendChild(griddiv);
    }
    document.documentElement.style.setProperty('--rowWidth',numberDiv); // defines a custom css variable as "numberDiv"

    const gridarray = document.querySelectorAll(".griddiv")
    gridarray.forEach((griddiv) => {
        griddiv.addEventListener("mouseenter", function(e) {
            if (e.target.style.background === "") {
                r = randInt();
                g = randInt();
                b = randInt();
                if (darkness > 0.11){
                    darkness -= 0.1;
                }
                else {
                    darkness = 0;
                }
                r *= darkness;
                g *= darkness;
                b *= darkness;
                e.target.style.background = `rgb(${r}, ${g}, ${b})`
            }
        })
    })
}
createGrid(numberDiv);

const sizebutton = document.querySelector("button")
sizebutton.addEventListener("click", ()=> {
    numberDiv = prompt("Enter the number of squares per side for the new grid.")
    const children = container.querySelectorAll("*");
    if (numberDiv > 100) {
        alert("Please enter a number less than 101")
    }
    else {
    children.forEach((griddiv) => {
        griddiv.remove()
    })
    createGrid(numberDiv)
}
})


