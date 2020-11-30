
const body = document.getElementById("body")
const exportt = document.getElementById("saveas") 
const exporttNote = document.getElementById("save-alert") 

function load(){

    const color1 = document.getElementById("color1").value;
    const hexColor = document.getElementById("hex-color");
    console.log(color1);

    const color2 = document.getElementById("color2").value;
    console.log(color2);
    body.style.background=`-webkit-linear-gradient(left, ${color1} , ${color2} )`
    hexColor.textContent = ` Left:- ${color1} , Right:- ${color2}`

}

function save(){
    exporttNote.textContent = `Sorry bro you think it is easy?`
    exporttNote.style.color = `white`
}


