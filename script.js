const container = document.querySelector("#container")

let numberDiv = 16;
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
            e.target.style = "background:blue"
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


