function diplay(s)
{
    document.getElementById('screen').value+=s;

}
function ans()
{
    let x,y
    x=document.getElementById('screen').value;
    y=eval(x);
    document.getElementById('screen').value=y;
}
function clearscreen()
{
    document.getElementById('screen').value=" ";
}