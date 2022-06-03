// function Text() {
//     document.write("<p>Este texto foi gerado com js</p>" + 
//     "<a href='index.html'> voltar para a página original<a>");
// } onclick='Voltar()'

var geral = document.getElementById("caixa");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var button = document.getElementById("but")

function Inicio() {
    geral.removeChild(box2);
    geral.removeChild(box3);
}
function Text() {       
    geral.removeChild(box1);
    geral.appendChild(box2); 
    geral.appendChild(box3);
    box3.innerHTML = "<a> ps: Este texto foi gerado com javascript e o botão também :) </a>";
    button.innerHTML = "<button id='button' onclick='Voltar()'>Voltar</button>";
}   
function Voltar() {
    geral.appendChild(box1);
    geral.removeChild(box2);    
    geral.removeChild(box3);
    button.innerHTML = "<button id='button' onclick='Text()'>Conquistas Acadêmicas</button>"
}
 function dados() {
     $.get('http://127.0.0.1:3101/users',(res) => {
         console.log(res);
     }
     )
 }