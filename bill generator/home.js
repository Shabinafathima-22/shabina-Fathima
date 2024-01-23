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
/*function gee(){
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
*/
function print3()
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


function gee()
{
    const node1=document.createElement('tr');
    const node2=document.createElement('tr');
    const node3=document.createElement('tr');
    const node4=document.createElement('tr');
    const node5=document.createElement('tr');
    const node6=document.createElement('tr');
    const node7=document.createElement('tr');
    const node8=document.createElement('tr');
    const node9=document.createElement('tr');  

    a=document.getElementById('bill').value;
    b=document.getElementById('cus').value;
    c=document.getElementById('pname').value;
    d=document.getElementById('quan').value;
    e=document.getElementById('per').value;
    f=document.getElementById('tot').value;
    g=document.getElementById('dis').value;
    h=document.getElementById('gst').value;
    i=document.getElementById('gran').value;

    const textnode1=document.createTextNode(a);
    const textnode2=document.createTextNode(b);
    const textnode3=document.createTextNode(c);
    const textnode4=document.createTextNode(d);
    const textnode5=document.createTextNode(e);
    const textnode6=document.createTextNode(f);
    const textnode7=document.createTextNode(g);
    const textnode8=document.createTextNode(h);
    const textnode9=document.createTextNode(i);

    node1.appendChild(textnode1);
    node2.appendChild(textnode2);
    node3.appendChild(textnode3);
    node4.appendChild(textnode4);
    node5.appendChild(textnode5);
    node6.appendChild(textnode6);
    node7.appendChild(textnode7);
    node8.appendChild(textnode8);
    node9.appendChild(textnode9);


    document.getElementById('result1').appendChild(node1);
    document.getElementById('result2').appendChild(node2);
    document.getElementById('result3').appendChild(node3);
    document.getElementById('result4').appendChild(node4);
    document.getElementById('result5').appendChild(node5);
    document.getElementById('result6').appendChild(node6);
    document.getElementById('result7').appendChild(node7);
    document.getElementById('result8').appendChild(node8);
    document.getElementById('result9').appendChild(node9);
}
