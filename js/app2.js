const gameboard=document.getElementById('gameboard');
const context=gameboard.getContext('2d');
const WIDTH=gameboard.width;
const HEIGHT=gameboard.height;

const unit=25;
let foodx;
let foody;
let snake=[
    {x:unit*3,y:0},
    {x:unit*2,y:0},
    {x:unit,y:0},
    {x:0,y:0},



]
let xvel=25;
let yvel=0;

startgame();
function startgame()
{
    context.fillStyle='black';
    context.fillRect(0,0,WIDTH,HEIGHT);
    createfood();
    displayfood();
    drawsnake();
    nextic();
}
function clearboard()
{
    context.fillStyle='#212121'
    context.fillRect(0,0,WIDTH,HEIGHT)
}
function createfood()
{
    foodx=Math.floor(Math.random()*WIDTH/unit)*unit;
    foody=Math.floor(Math.random()*WIDTH/unit)*unit;
    
}   
function displayfood()
{
    context.fillStyle="red";
    context.fillRect(foodx,foody,unit,unit)
}
function drawsnake()
{
    context.fillStyle='aqua';
    context.strokestyle='black';
    snake.forEach(snakepart => {
        context.fillRect(snakepart.x,snakepart.y,unit,unit)
        context.strokeRect(snakepart.x,snakepart.y,unit,unit)
        
    });
}
function movesnake()
{
    const head={x:snake[0].x+xvel,y:snake[0].y+yvel}
    snake.unshift(head);
    snake.pop()
}
function nextic()
{
    setTimeout(()=>{
       clearboard();
       displayfood();
       movesnake();
       drawsnake();
       nextic();



    },500)
}