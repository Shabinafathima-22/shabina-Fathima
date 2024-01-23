function ans()
{
    fvalue = document.getElementById('f-value').value
    evalue = document.getElementById('e-value').value
    c1 = document.getElementById('c-value1').value
    c2 = document.getElementById('c-value2').value

    irtous = c1/83.29;
    irtoaed = c1/22.66 
    irtoir = c1;
    irtothb = c1/0.42;

    ustous = c1;
    ustoaed = c1*3.6;
    ustoir = c1*83.24;
    ustothb = c1*35.13;


    aedtous = c1*0.27;
    aedtoaed = c1;
    aedtoir = c1*22.66;
    aedtothb = c1*9.56

    thbtous = c1*0.028;
    thbtoir = c1*2.37;
    thbtoaed = c1*0.10;
    thbtothb = c1;

    if(fvalue=="Rupees")
    {
        if (evalue=="USD") {
            document.getElementById('c-value2').value = irtous;
        }
        else if(evalue=="AED")
        {
            document.getElementById('c-value2').value = irtoaed;
        }
        else if(evalue=="Rupees")
        {
            document.getElementById('c-value2').value = irtoir;
        }
        else if(evalue=="THB")
        {
            document.getElementById('c-value2').value = irtothb;
        }
    }
    else if(fvalue=="USD")
    {
        if (evalue=="USD") {
            document.getElementById('c-value2').value = ustous;
        }
        else if(evalue=="AED")
        {
            document.getElementById('c-value2').value = ustoaed;
        }
        else if(evalue=="Rupees")
        {
            document.getElementById('c-value2').value = ustoir;
        }
        else if(evalue=="THB")
        {
            document.getElementById('c-value2').value = ustothb;
        }
    }
    else if(fvalue=="AED")
    {
        if (evalue=="USD") {
            document.getElementById('c-value2').value = aedtous;
        }
        else if(evalue=="AED")
        {
            document.getElementById('c-value2').value = aedtoaed;
        }
        else if(evalue=="Rupees")
        {
            document.getElementById('c-value2').value = aedtoir;
        }
        else if(evalue=="THB")
        {
            document.getElementById('c-value2').value = aedtothb;
        }
    }
    else if(fvalue=="THB")
    {
        if (evalue=="USD") {
            document.getElementById('c-value2').value = thbtous;
        }
        else if(evalue=="AED")
        {
            document.getElementById('c-value2').value = thbtoaed;
        }
        else if(evalue=="Rupees")
        {
            document.getElementById('c-value2').value = thbtoir;
        }
        else if(evalue=="THB")
        {
            document.getElementById('c-value2').value = thbtothb;
        }
    }



}