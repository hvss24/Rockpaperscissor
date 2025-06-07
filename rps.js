name = prompt("Enter your name");
num = prompt(`Hello ${name} (Coder). Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game`);
let count = 0;

while(true){
        let numComp = (Math.floor(Math.random()*3)+1) ;
        if(num == "quit"){
          break;
        }
        else if((num == "1")&&(numComp == 1)){
           num = prompt("Draw as both chooses rock. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game");
           count++;
        }
        else if(( num == "2") && (numComp == 1)){
           num = prompt(`You won after ${count} rounds, but Computer says -Don't be happy that is a luck game that's why you won .For real win-- Go and make a good project by yourself . Remember : Hardwork always pay off. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game`);
           
          }
        else if((num == "3") &&(numComp == 1)){
          num = prompt("You looses as I chooses rock. Don't be sad as that's a luck game and Luck favours brave so be brave and try again until you win. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game ");
          count++;
        }  
        else if((num =="2")&&(numComp == 2)){
           num = prompt("Draw as both chooses paper. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game");
           count++
          }
        else if(( num == "3") && (numComp == 2)){
           num = prompt(`You won after ${count} rounds , but Computer says -Don't be happy that is a luck game that's why you won .For real win -- Go and make a good project by yourself . Remember : Hardwork always pay off. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game`);

        }
        else if((num == "1") &&(numComp == 2)){
          num = prompt("You looses bro as I chooses paper. Don't be sad as that's a luck game and Luck favours brave so be brave and try again until you win. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game");
          count++;
        }  
        else if((num == "3")&&(numComp == 3)){
           num = prompt("Draw as both chooses scissor. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game");
           count++;
          }
        else if(( num == "1") && (numComp == 3)){
          num = prompt(`You won after ${count} rounds, but Computer says -Don't be happy that is a luck game that's why you won .For real win -- Go and make a good project by yourself . Remember : Hardwork always pay off. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game`);
        
        }
        else if((num =="2") &&(numComp == 3)){
          num = prompt("You looses bro as I chooses scissor. Don't be sad as that's a luck game and Luck favours brave so be brave and try again until you win. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game ");
          count++;
        } 
        else{
           prompt("You choose wrong number, I guess. Try choosing number beyween 1 to 3. Enter  the following : 1-rock , 2-paper , 3-scissor , 'quit'-quit the game");
           break;
        }
}
console.log("Special thanks to abhay for urging me to make this game.");




