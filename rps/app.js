function rock()
{
let play=Math.floor(Math.random()*3);
console.log(play);
document.getElementById('ud').style.backgroundImage="url('https://images.pexels.com/photos/7002937/pexels-photo-7002937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
 if(play==0)
 {
    document.getElementById('cd').style.backgroundImage="url('https://images.pexels.com/photos/7002937/pexels-photo-7002937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.getElementById('result').innerHTML="draw the match!"
}
else if(play==1)
{
    document.getElementById('cd').style.backgroundImage="url('https://images.pexels.com/photos/479444/pexels-photo-479444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.getElementById('result').innerHTML="computer  win the match!"
}
else if(play==2)
{
    document.getElementById('cd').style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6K7xJ7Zf2Q6kDF7uNjXG-ocAMBrWTUQxYA&usqp=CAU')";  
    document.getElementById('result').innerHTML="you win the match!"
}

}
function paper()
{
let play=Math.floor(Math.random()*3);
console.log(play);
document.getElementById('ud').style.backgroundImage="url('https://images.pexels.com/photos/479444/pexels-photo-479444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
 if(play==0)
 {
    document.getElementById('cd').style.backgroundImage="url('https://images.pexels.com/photos/7002937/pexels-photo-7002937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.getElementById('result').innerHTML="you win the match!"
}
else if(play==1)
{
   
 document.getElementById('cd').style.backgroundImage="url('https://images.pexels.com/photos/479444/pexels-photo-479444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
 document.getElementById('result').innerHTML="draw the match!"

}
else if(play==2)
{
    document.getElementById('cd').style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6K7xJ7Zf2Q6kDF7uNjXG-ocAMBrWTUQxYA&usqp=CAU')";  
    document.getElementById('result').innerHTML="computer won the match!"

}
}
function scissor()
{
let play=Math.floor(Math.random()*3);
console.log(play);
document.getElementById('ud').style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6K7xJ7Zf2Q6kDF7uNjXG-ocAMBrWTUQxYA&usqp=CAU')"
 if(play==0)
 {
    document.getElementById('cd').style.backgroundImage="url('https://images.pexels.com/photos/7002937/pexels-photo-7002937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.getElementById('result').innerHTML="computer win the match!"
}
else if(play==1)
{
    document.getElementById('cd').style.backgroundImage="url('https://images.pexels.com/photos/479444/pexels-photo-479444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    document.getElementById('result').innerHTML="you win the match!"
}
else if(play==2)
{
    document.getElementById('cd').style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6K7xJ7Zf2Q6kDF7uNjXG-ocAMBrWTUQxYA&usqp=CAU')";  
    document.getElementById('result').innerHTML=" draw the match!"

}

}

