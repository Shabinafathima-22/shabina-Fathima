const cards_arr=[
   {name:'hippo', icon:'<i class="fa-solid fa-hippo"></i>'},
   {name:'dog',icon:'<i class="fa-solid fa-dog"></i>'},
   {name:'hippo', icon:'<i class="fa-solid fa-hippo"></i>'},
]
 
console.log(cards_arr)
const gameboard=document.getElementById('gameboard');
const button=document.getElementById('btn');
let flipped_cards=[];
shuffle()
display_cards()

function shuffle()
{
    for (let i=cards_arr.length-1;i>=0;i--)
    {
        const radindex=Math.floor(Math.random()*(i+1));
        [cards_arr[i],cards_arr[radindex]]=[cards_arr[radindex],cards_arr[i]]
    }
   
}
function display_cards()
{
    cards_arr.forEach((curr,index)=>{
        const card=document.createElement('div');
        gameboard.append(card);
        card.classList.add('cardback');
        card.classList.add('active');
        card.setAttribute('id',index);
        button.addEventListener('click',()=>{
          card.classList.remove('cardback');

        })

    })

        

}