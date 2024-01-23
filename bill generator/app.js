function ans()
{
    let a,b,c,d,e,f,g,h,i,total,discount,grantotal;
    a=document.getElementById('bill').value;
    b=document.getElementById('cus').value;
    c=document.getElementById('pname').value;
    d=document.getElementById('quan').value;
    e=document.getElementById('per').value;
    f=document.getElementById('tot').value;
    g=document.getElementById('dis').value;
    h=document.getElementById('gst').value;
    i=document.getElementById('gran').value;
    total=(d*e);
    discount=(total*15.00/100);
    goodstax=(total*2.00/100);
    grantotal=(total-discount)+goodstax;
    if(c=="milk")
    {
        document.getElementById('per').value="20";
    }
    else if(c=="rice")
    {
        document.getElementById('per').value="110";
    }
    else if(c=="oil")
    {
        document.getElementById('per').value="150";
    }
    else if(c=="magie")
    {
        document.getElementById('per').value="10";
    }
    else
    {
        document.getElementById('per').value="choose the product";
    }
    document.getElementById('tot').value=total;
    document.getElementById('dis').value=discount;
    document.getElementById('gst').value=goodstax;
    document.getElementById('gran').value=grantotal;
    

}
function sub()
{
    let x,y;
    x=document.getElementById('bill').value;
    y=(x*1)+1;
    document.getElementById('bill').value=y;
    document.getElementById('cus').value="";
    document.getElementById('pname').value="";
    document.getElementById('quan').value="";
    document.getElementById('per').value="";
    document.getElementById('tot').value="";
    document.getElementById('dis').value="";
    document.getElementById('gst').value="";
    document.getElementById('gran').value="";
}
function gee()
{
    let a,b,c,d,e,f,g,h,i;
    a=document.getElementById('bill').value;
    document.getElementById('line1').innerHTML=a;
    b=document.getElementById('cus').value;
    document.getElementById('line2').innerHTML=b;
    c=document.getElementById('pname').value;
    document.getElementById('line3').innerHTML=c;
    d=document.getElementById('quan').value;
    document.getElementById('line4').innerHTML=d;
    e=document.getElementById('per').value;
    document.getElementById('line5').innerHTML=e
    f=document.getElementById('tot').value;
    document.getElementById('line6').innerHTML=f;
    g=document.getElementById('dis').value;
    document.getElementById('line7').innerHTML=g;
    h=document.getElementById('gst').value;
    document.getElementById('line8').innerHTML=h;
    i=document.getElementById('gran').value;
    document.getElementById('line9').innerHTML=i;

}
function pin()
{
    window.print();
}
function re()
{
    let a,b,c,d,e,f,g,h,i;
    document.getElementById('bill').value="";
    document.getElementById('cus').value="";
    document.getElementById('pname').value="";
    document.getElementById('quan').value="";
    document.getElementById('per').value="";
    document.getElementById('tot').value="";
    document.getElementById('dis').value="";
    document.getElementById('gst').value="";
    document.getElementById('gran').value="";
}
function fresh()
{
    
    document.getElementById('b1').innerHTML="";
    document.getElementById('line1').innerHTML="";
    document.getElementById('b2').innerHTML="";
    document.getElementById('line2').innerHTML="";
    document.getElementById('b3').innerHTML="";
    document.getElementById('line3').innerHTML="";
    document.getElementById('b4').innerHTML="";
    document.getElementById('line4').innerHTML="";
    document.getElementById('b5').innerHTML="";
    document.getElementById('line5').innerHTML="";
    document.getElementById('b6').innerHTML="";
    document.getElementById('line6').innerHTML="";
    document.getElementById('b7').innerHTML="";
    document.getElementById('line7').innerHTML="";
    document.getElementById('b8').innerHTML="";
    document.getElementById('line8').innerHTML="";
    document.getElementById('b9').innerHTML="";
    document.getElementById('line9').innerHTML="";
    document.getElementById('pin').style.display="none";

}