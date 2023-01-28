var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);//création d'un cube rouge
    myGameArea.start();//démarrage du jeu 
}
var myGameArea = {
    canvas: document.createElement("canvas"),//création du canvas
    start: function () {
        this.canvas.width = 480;//largeur = 480
        this.canvas.height = 270//hauteur = 270
        this.canvas.style.cursor = "none"; //cache le curseur original  
        this.context = this.canvas.getContext("2d");//jeu en 2D
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousemove', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
    },
    clear: function () {//fonction pour effacer le canvas une fois le jeu terminé
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function updateGameArea() {
    myGameArea.clear();
    if (myGameArea.x && myGameArea.y) {
        myGamePiece.x = myGameArea.x;
        myGamePiece.y = myGameArea.y;
    }
    myGamePiece.update();

}