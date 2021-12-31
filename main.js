let firstCard = getRandomCard()
let secondCard =getRandomCard()
let cards = [firstCard, secondCard]
let sum =  firstCard + secondCard
let  isAlive = true
let hasBlackJack = false 

let player = {
    name: "Merine",
    chips: 145,
    
}


let fruit = ["apple", "orange","apple","apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf= document.getElementById("orange-shelf")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



let messageEl =document.getElementById("message-el")

let sumEl =document.querySelector(".sum-el")

let cardsEl =document.getElementById("cards-el")




function getRandomCard (){
   let randomNumber = Math.floor(Math.random() * 13) + 1

   if (randomNumber > 10){
       return 10
   }else if (randomNumber === 1){
       return 11
   }else {
       return randomNumber
   }

}


function startGame(){

    getRandomCard()
 

    renderGame()
   


  
}


function renderGame(){
    if (sum <= 20 ){

        message = "Do you want to draw another card!"
    } else if(sum === 21 ){
        message= "You`ve got the BlackJack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    
     messageEl.textContent = message
     sumEl.textContent =  "sum: " + sum

     cardsEl.textContent = "Cards: "  + cards + " "
     
    }


function newCard(){

    //Only allow player to select new card if he is still alive and has no blackjack

    if (isAlive == true & hasBlackJack === false ){
        let card = getRandomCard()

        sum += card
    
        cards.push(card)
        renderGame()
    }

    }

    
    

