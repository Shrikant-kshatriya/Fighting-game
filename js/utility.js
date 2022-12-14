function rectangularCollision({rectangle1,rectangle2}){
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <=rectangle2.position.y + rectangle2.height)
}

function determineWinner({player, enemy, timerID}){
    clearTimeout(timerID);
    document.getElementById('result').style.display = "flex";
    if(player.health === enemy.health){
        document.getElementById('result').innerHTML = "Tie";
    }else if(player.health > enemy.health){
        document.getElementById('result').innerHTML = "Player 1 Wins";
    }else if(player.health < enemy.health){
        document.getElementById('result').innerHTML = "Player 2 Wins";
    }
}

let timer = 60;
let timerID;
function decreaseTimer(){
    if(timer>0){
        timer--;
        document.getElementById('timer').innerHTML = timer;
        timerID = setTimeout(decreaseTimer, 1000);
    }
    if(timer === 0){
        determineWinner({player,enemy,timerID});
        
    }
}