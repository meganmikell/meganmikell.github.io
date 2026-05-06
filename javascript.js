const flower1 = document.querySelector("#alert1");
const flower2 = document.querySelector("#alert2");
const flower3 = document.querySelector("#alert3");

flower1.onclick = function(){
    alert("The Sunflowers are in stock!");
};

flower2.onclick = function(){
    alert("The Roses are in stock!");
};
flower3.onclick = function(){
    alert("The Aster is NOT is stock. ");
};