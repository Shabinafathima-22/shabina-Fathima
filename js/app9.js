function ans()
{
   let  a,b,c,d,e,f,g,h,i;
    a=document.getElementById('bill').value;
    b=document.getElementById('cusna').value;
    c=document.getElementById('pname').value;
    d=document.getElementById('qua').value;
    e=document.getElementById('per').value;
    f=document.getElementById('tot').value;
    g=document.getElementById('dis').value;
    h=document.getElementById('gst').value;
    i=document.getElementById('gran').value;

    total=(d*e);
    


    if(c=="milk")
    {
        document.getElementById('per').value=40;
    }
    else if(c=="rice")
    {
        document.getElementById('per').value=100;

    }
    else if(c=="chocalte")
    {
        document.getElementById('per').value=40;

    }
    else 
    {
        document.getElementById('per').value=30;

    }
    document.getElementById()
   
}
function clear()
{
    let  a,b,c,d,e,f,g,h,i;
    document.getElementById('bill').value="";
    document.getElementById('cusna').value="";
    document.getElementById('pname').value="";
    document.getElementById('qua').value="";
    document.getElementById('per').value="";
    document.getElementById('tot').value="";
    document.getElementById('dis').value="";
    document.getElementById('gst').value="";
    document.getElementById('gran').value="";

}