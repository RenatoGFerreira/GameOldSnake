
window.onload = function(){

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d"); 

    setInterval(game, 1000/15); 

    const vel = 1;      // velocidade da peca
    var vx = vy = 0;    // velocidade do início
    var px = 10;        // comeco do ponto?
    var py = 15;        // comeco do ponto?
    var tp = 20;        // tamanho da peça 20x20
    var qp = 20;        // quantidade de pecas do tabuleiro
    var ax = ay = 15;   // posicao inicial da maçã

    var trail = []      // rastro
    var tail = 5        // tamanho da cauda inicial

    function game(){

        px += vx;
        py += vy;

        if(px<0){
            px = qp-1
        }
        if(px>qp-1){
            px = 0
        }
        if(py<0){
            py = qp-1
        }
        if(py>qp-1){
            py = 0
        }


    //Aqui está a coloração do palco principal
    ctx.fillStyle = "black"
    ctx.fillRect(0,0, stage.width, stage.height)

        ctx.fillStyle = "Red"
        ctx.fillRect(ax*tp, ay*tp, tp,tp)

        ctx.fillStyle = "gray"
        for(let i = 0; i < trail.length; i++){
            
        }

    }



}