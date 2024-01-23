const todoText= document.getElementById('in');
const todoUl=document.getElementById('todo-ul')


function ans()
{
   if(todoText.value.trim() === '')
   {
    alert('enter some text'); 
   }
else{
    console.log(todoText.value.trim());
    const liTag=document.createElement('li');
    const spanText=document.createElement('span');
    const textNode=document.createTextNode(todoText.value.trim());
    spanText.appendChild(textNode);
    spanText.addEventListener('click',(e)=>{

      e.target.classList.toggle('done')
        
    })

   

    
    const spanClose=document.createElement('span');
    spanClose.classList.add('close');
    spanClose.innerHTML='&times;';
    spanClose.addEventListener('click',(e)=>{
       
        const li=e.target.parentElement;
        li.parentElement.removeChild(li);

    })
    liTag.appendChild(spanText);
    liTag.appendChild(spanClose);
    todoUl.appendChild(liTag);
    todoText.value='';

}
}