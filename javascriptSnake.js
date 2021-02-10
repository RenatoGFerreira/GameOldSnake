
window.onload = function(){

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d"); 

    document.addEventListener("keydown", keyPush)

    setInterval(game, 1000/15); 

    const vel = 1;      // velocidade da peca
    var vx = vy = 0;    // velocidade do início
    var px = 10;        // comeco do ponto?
    var py = 15;        // comeco do ponto?
    var tp = 20;        // tamanho da peça 20x20
    var qp = 20;        // quantidade de pecas do tabuleiro
    var ax = ay = 15;   // posicao inicial da maçã

    var trail = []      // rastro
    var tail = 1        // tamanho da cauda inicial

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
    ctx.fillStyle = "White"
    ctx.fillRect(0,0, stage.width, stage.height)

        ctx.fillStyle = "rgb(224,6,0)"
        ctx.fillRect(ax*tp, ay*tp, tp,tp)

        ctx.fillStyle = "black"
        for(let i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1)   
            
            if (trail[i].x == px && trail[i].y == py){
                vx = vy = 0 
                tail=1

            }
        }
        trail.push({x:px,y:py})
        while(trail.length > tail){
            trail.shift()
        }
        if(ax==px && ay==py){
            tail++
            ax = Math.floor(Math.random()*qp)
            ay = Math.floor(Math.random()*qp)
        }

    }

    function keyPush(event){
        switch (event.keyCode) {
            case 37:        //left
                vx= -vel
                vy = 0
                break;
            case 38:        //up
                vx= 0
                vy = -vel
                break;
            case 39:        //right
                vx= vel
                vy = 0
                break;
            case 40:        //down
                vx= 0
                vy = vel
                break;
        
            default:
                break;
        }

    }



}