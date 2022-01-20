const colors        = ["darkgray", "darkblue", "bisque", "seagreen", "slateblue", "darkolivegreen", "#033f5c", "rgb(1 18 26)"];
const hex           = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "E", "F"];
const simpleButton  = document.getElementById('simpleButton');
const hexButton     = document.getElementById("hexButton");
const color         = document.querySelector('.color');

/* Simple   */
simpleButton.addEventListener("click", ()=>{
    const randomNumber = getRundomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.body.style.color  = "white";
    color.textContent =colors[randomNumber];
});

/* Hex Code Function  */
hexButton.addEventListener("click", ()=>{
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
    hexColor +=  hex[getRundomNumber()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    document.body.style.color  = "white";
})

/* Rundom Number Function */
function getRundomNumber(){
    return Math.floor(Math.random() * hex.length) || colors.length;
}

