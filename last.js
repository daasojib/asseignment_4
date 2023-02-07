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

gemsToDiamond(1,1,1);
