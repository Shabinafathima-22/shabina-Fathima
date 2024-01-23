

function ans()
{
    let w,h,t;
   w =Number(document.getElementById('weight').value);
    h=Number(document.getElementById('height').value);
    t=w+h;
    document.getElementById('val').innerHTML=t;


}