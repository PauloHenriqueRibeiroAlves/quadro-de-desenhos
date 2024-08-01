/*dados inicias*/
//variável que vai armazenar as cores
let currentColor = 'black';

//cariável para desenhar na tela
let canDraw = false;

//variavél que guarda a posição do mouse na tela
let mouseX = 0;
let mouseY = 0;

//função para celecionar a tela
let screen = document.querySelector('#tela');
//função para poder desenhar na tela
let ctx = screen.getContext('2d');

/*eventos*/
//função para selecionar as classes
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

//evento para limpar a tela do canvas
document.querySelector('.clear').addEventListener('click', clearScreen);

//evento para monitorar quarquer evento no mouse
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

/*funções*/
//função de click das paletas de cores
function colorClickEvent (e) {
    let color = e.target.getAttribute('data-color');
    //armazenando a cor clicada na variável
    currentColor = color;

    //função que vai remover a classe active
    document.querySelector('.color.active').classList.remove('active');
    //função para adicionar a classe acitive em quem foi clicado
    e.target.classList.add('active');
}

//funções de click do mouse dentro do canvas
function mouseDownEvent(e) {
    canDraw = true;
    //guardando a posição donva do mouse
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    //posição da minha tela é 272 57
    if(canDraw){
        //função que vai passar a posição atual para desenhar
        draw(e.pageX, e.pageY);
    }
}

function mouseUpEvent() {
    canDraw = false;
}

//função que vai verificar que posição o mouswe estpa com relação a tela
function draw (x, y) {
    //pegando a posição
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //começando a desenhar
    ctx.beginPath();
    //tamanho da linha
    ctx.lineWidth = 5;
    //formato da linha
    ctx.lineJoin = "round";
    //mover o mouse
    ctx.moveTo(mouseX, mouseY);
    //desenhando
    ctx.lineTo(pointX, pointY);
    //parar de desenhar
    ctx.closePath();
    //finalizar a cor da linha
    ctx.strokeStyle = currentColor;
    //finalizar todo o processo
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

//função de limpar a tela
function clearScreen() {
    //processo de zerar todas as posições
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    //funão que vai limpar a tela do canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}




/*
    if(canDraw){
        //função para diminuir a posição do cursor do mouse na tela do canvas
        let pointX = e.pageX - screen.offsetLeft;
        let pointY = e.pageY - screen.offsetTop;
        console.log(pointX, pointY);
    }
*/