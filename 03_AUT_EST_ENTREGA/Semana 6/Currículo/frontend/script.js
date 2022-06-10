api = 'http://127.0.0.1:3117'

var getResDiv = "#get";
var getDBResDiv = "#getDB";
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
    button.innerHTML = "<button class='button' onclick='Voltar()'>Voltar</button>";
}   
function Voltar() {
    geral.appendChild(box1);
    geral.removeChild(box2);    
    geral.removeChild(box3);
    button.innerHTML = "<button class='button' onclick='Text()'>Conquistas Acadêmicas</button>"
}

/* Função que faz um requisição GET */
function TestGET(){
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    $(getResDiv).append("<br />" + xhttp.responseText);
    $(getResDiv).append("<br />" + xhttp.responseText.title);
    console.log(xhttp.responseText);
}

/* Função que faz um requisição GET no nosso banco de dados */
function TestGETDB(){
    var url = "http://127.0.0.1:3117/users";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    console.log(xhttp.responseText);
}


