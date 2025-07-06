//depositing the money from user first step
// determine the no of lines to bet
// collect a betting smount  that he wants to play with
// spin the slot machine 
// check if won
// declarwe winner and give winnings
// handling losing scenario or where no money is left
// play again

// function deposit(){


// }

const prompt= require("prompt-sync")();
//gets the function first, and not the prompt directly


const ROWS = 3;
const COLUMNS =3;

const SYMBOLS_COUNT ={
    A: 2,
    B: 4,
    C: 6,
    D: 8
}
const SYMBOLS_VALUE ={
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

// SPINNING THE MACHINE= RANDOMISING THE OBJECT


const spinn = () =>{
     
}






















const deposit = () => {
  while(true){
  const depositamount= prompt("Enter a deposit amount: ");
  const numberdepositamount= parseFloat(depositamount);
 

  if(isNaN(numberdepositamount) || numberdepositamount<=0){
      console.log("Invalid input, try again.");
  }
  else{
    return numberdepositamount;
  }
}
};
const getNumberOfLines=() =>{

     while(true){
  const noOfLines= prompt("Enter the no. of lines to bet(1-3): ");
  const actualnoOfLines= parseFloat(noOfLines);
 

  if(isNaN(actualnoOfLines) || actualnoOfLines<1 || actualnoOfLines>3){
      console.log("Invalid input, try again.");
  }
  else{
    return actualnoOfLines;
  }
}
    
    

};

const bet =(balance, lines) =>{
   
    while(true){
  const betamount= prompt("Enter the betting amount per line: ");
  const actualBettingAmount= parseFloat(betamount);
 

  if(isNaN(actualBettingAmount) || actualBettingAmount<=0 || actualBettingAmount> balance/lines){
      console.log("Invalid input, try again.");
  }
  else{
    return actualBettingAmount;
  }
}
    

}

//now here we can takwe this deposirt amount as a variable balance to find out and keep track of our bettings
 let balance= deposit();


 const noOfLines= getNumberOfLines();
 const getbet= bet(balance, noOfLines);



