const gameboard=document.getElementById('gameboard')
const context=gameboard.getContext('2d')
const WIDTH=gameboard.width
const HEIGHT=gameboard.height
const unit=25
let foodx;
let foody;
let snake=[
    {x:unit*3,y:0},{x:unit*2,y:0},{x:unit,y:0},{x:0,y:0}
]
 let xvel=25;
 let yvel=0;
 let score=0;
 let active=true;
 let started = false;

 
window.addEventListener('keydown',keypress)

startgame()
function startgame()
{
    context.fillStyle='#212121';
    context.fillRect(0,0,WIDTH,HEIGHT);
    creatfood();
    displayfood();
    drawsnake()    
    

   

}
function clearboard()
{
    context.fillStyle='#212121'
    context.fillRect(0,0,WIDTH,HEIGHT)
}
function creatfood()
{
   foodx=Math.floor(Math.random()*WIDTH/unit)*unit;
   foody=Math.floor(Math.random()*WIDTH/unit)*unit;
  
}
function displayfood()
{
    context.fillStyle="red";
    context.fillRect(foodx,foody,unit,unit);
}
function drawsnake()
{
    context.fillStyle = 'aqua'
    context.strokeStyle='black'
    
    snake.forEach((snakepart)=>{
        context.fillRect(snakepart.x,snakepart.y,unit,unit)
        context.strokeRect(snakepart.x,snakepart.y,unit,unit)
        
    })

}
function movesnake()
{
    const head = {x:snake[0].x+xvel,y:snake[0].y+yvel}
     snake.unshift(head);
     if(snake[0].x==foodx && snake[0].y==foody)
     {
        creatfood();
        score++;
        document.getElementById('scoreval').innerHTML=score;
     }
     else{
        snake.pop();
     }
    
}
function nextic()
{
    if(active)
    {
        setTimeout(()=>{
            clearboard();
            displayfood();
            movesnake();
            drawsnake();
            nextic();
            checkgameover();
        },400);
}
else 
{
    clearboard();
    context.font="bold 50px serif"
    context.fillStyle="white";
    context.textAlign="center";
    context.fillText("game over!!" ,WIDTH/2,HEIGHT/2)
}
}
// function keypress(event)
// {
//   const LEFT=37;
//   const UP=38;
//   const RIGHT=39;
//   const DOWN=40;
  
  
//   switch(true)
//   {
//     case(event.keyCode==LEFT&& xvel!=unit):
//     xvel=-unit;
//     yvel=0;

//     break;
//     case(event.keyCode==RIGHT && xvel!=-unit ):
//     xvel=unit;
//     yvel=0;
//     break;
    
//     case(event.keyCode==DOWN && yvel!=-unit):
//     xvel=0;
//     yvel=unit;
//     break;
//     case(event.keyCode==UP && yvel!=unit):
//     xvel=0;
//     yvel=-unit;
//     break;

// }

// }
function keypress(event)
{
    const SPACE = 32;
    if(event.keyCode==SPACE)
    {
        if(!started)
        {
            started =true
            nextic();
        }
    }
   
    const LEFT=37;
    const UP=38;
    const RIGHT=39;
    const DOWN=40;

    switch(true)
    {
        case(event.keyCode==LEFT &&xvel!=unit):
        xvel=-unit;
        yvel=0;
        break;
        case(event.keyCode==RIGHT &&xvel!=-unit):
        xvel=unit;
        yvel=0;
        break;
        case(event.keyCode==DOWN &&yvel!=-unit):
        xvel=0;
        yvel=unit;
        break;
        case(event.keyCode==UP && yvel!=unit):
        xvel=0;
        yvel=-unit;
        break;

    }

}
   function checkgameover()
{
    switch(true)
    {
        case(snake[0].x<0):
        case(snake[0].x>=(WIDTH-unit)):
        case(snake[0].y<0):
        case(snake[0].y>=(HEIGHT-unit)):
        active=false;
        break;
        
    }
}