function randInt() {
    return Math.floor(Math.random()*256);
}

const container = document.querySelector("#container")

let numberDiv = 16;
let r = 0;
let g = 0;
let b = 0;
const blackrgb = 0;
let darkness = 0;
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
                const overlay  = document.createElement('div')
                overlay.style.position = "absolute";
                overlay.style.top = "0";
                overlay.style.left = "0";
                overlay.style.width = "100%";
                overlay.style.height = "100%";
                overlay.style.position = "relative";


                r = randInt();
                g = randInt();
                b = randInt();
                if (darkness < 0.9){
                    darkness += 0.1;
                }
                else {
                    darkness = 1;
                }

                e.target.style.background = `rgb(${r}, ${g}, ${b})`
                overlay.style.background = `rgb(${blackrgb}, ${blackrgb}, ${blackrgb}, ${darkness})`
                griddiv.appendChild(overlay)
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


