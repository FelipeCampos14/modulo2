api = 'http://127.0.0.1:3071'

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


$(document).ready(() => {
    users.list();
});


var users = {
    
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                data.forEach(element => {
                    tx += '<div class="user">';
                        tx += '<div class="title">' + element.title + '</div>';
                        tx += '<div class="actions">';
                            tx += '<div class="action" onclick="user.update(' + element.userId + ',\'' + element.title + '\')">Editar</div>';
                            tx += '<div class="action" onclick="user.delete(' + element.userId + ')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};

var user = {

    insert() {
        var title = prompt('Digite o nome:');
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {title: title},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(userId, oldTitle) {

        var title = prompt('Digite o novo nome:', oldTitle);
        if (title) {
            if (title.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {title: title, userId: userId},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },

    delete(userId) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'api',
                url: api + '/userdelete',
                data: {userId: userId},
            }).done(function () {
                users.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}