first description:This is a simple mind game.In this game we have to take an user input than multiply by three and add ten with the result than devide by two and the devision result subtracted by five.
function mindGame(number){
          if(typeof number != "number" || typeof number == "string" || number < 0){
                    return "Please insert a valid value"
          }
          let result =((number*3+10)/2)-5;
          return result;
}


Second Description:In this problem i have to find the length of the string .Than devide the length by two to check it is even if it is not devided by two it will be evenOdd.
function evenOdd(string) {
          for (let i = string.length; i >= 0; i--) {
                    if(typeof string != "number"){
                              return "please return a valid value!";
                    }
                    if (i % 2 == 0) {
                              return "Even"
                    } else {
                              return "Odd"
                    }
          }
          return i;
}

Third Description: At first we have to take a number form user than subfracted the number by seven.if the result is greater than seven than return the result else return the input number multiplied by throw. 
function isLGSeven(number){
          let minusValue = number - 7;
          if(minusValue<7){
                    return minusValue;
          }
          else{
                    return number*2;
          }
}


Fourth Description:In this problem  i have to find the numbers less than zero from the array.once i found it i need to return the numbers of bad data which is less than zero.
function findingBadData(array){
          let count = 0;
          for(let i =0;i<array.length;i++){
                    const element = array[i];
                    if(element<0)count++;
          }
          return count;
}






Fifth Description:In this problem find the total diamond from my friend multiplied by gems.if the total diamond is greater than two thousand subtrac the diamond from total diamond if it is less than two thousand prind the total diamond. 

function gemsToDiamond(firstFriendGems,secondFriendGems,thirdFriendGems){
          let firstGemsPower = firstFriendGems*21;
          let secondGemsPower = secondFriendGems*32;
          let thirdGemsPower = thirdFriendGems*43;
          let totalDiamond = firstGemsPower + secondGemsPower + thirdGemsPower;
          let finalDiamond ='';
          if(totalDiamond > (1000*2)){
                    finalDiamond = totalDiamond - 2000;
          }
          else{
                    console.log(totalDiamond);
          }
          console.log(finalDiamond);
}