function changeColor(){
    var randomColor=getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color").innerText=randomColor;
}

function getRandomColor(){
    var letter ='0123456789ABCDEF';
    var color ='#';
    for(var i=0;i<6;i++){
        color +=letter[Math.floor(Math.random()*16)];
    }
    return color;
}