//array of cards
let cards=[];
//show info in ID
let cards_El=document.getElementById('cards');
let sum_El=document.querySelector('#sum_El');
let message_El=document.getElementById('message_El');
//equation
let sum=0;
//boolean
let hasBlackJack=false;
let isAlive=false;
let message="";


let player={
     Name:"Gleidi",
     Chips:145
}

let player_el=document.getElementById('player-el');
player_el.innerHTML=player.Name + " $"+player.Chips;


    //splash screen
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.getElementById('splash-screen').style.display='none';
            document.getElementById('main-content').style.display='block';
        },1000);
    
    });

    function getRamdomCard(){  
        let randomNumber= Math.floor(Math.random()*13) + 1;
        if(randomNumber>10){
            return 10;
        }else if (randomNumber===1){
            return 11;
            
        }else{
            return randomNumber;
        }
    
    }

//Start game 
function startGame(){
    isAlive=true;
   let firstCard=getRamdomCard();
    let secondCard=getRamdomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;

    renderGame();
}

//Render game
function renderGame(){
    cards_El.innerHTML="Cards: ";

    for(let i=0;i < cards.length; i++){
        cards_El.innerHTML+=cards[i] +" ";
       
    }

    sum_El.innerHTML="Sum:"+" "+sum;
    if(sum <= 20){
        message ="Do you want to draw a new card?";
    }
    else if(sum === 21){
        message="You have blackjack";
        hasBlackJack=true;
    }
    else{
        message="You've lost";
        isAlive=false;
    }
    message_El.innerHTML=message;

}
//Add New Card
function newCard(){
    if(isAlive===true && hasBlackJack === false){
        let thirdCard=getRamdomCard();
        //adding 3rd card to the array
            sum += thirdCard;
            cards.push(thirdCard);
            renderGame();
        }
        
    }

