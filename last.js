function gemsToDiamond(firstFriendGems,secondFriendGems,thirdFriendGems){
          let firstGemsPower = firstFriendGems*21;
          let secondGemsPower = secondFriendGems*32;
          let thirdGemsPower = thirdFriendGems*43;
          let totalDiamond = firstGemsPower + secondGemsPower + thirdGemsPower;
          if(totalDiamond > (1000*2)){
                    let finalDiamond = totalDiamond - 2000;
                    console.log(finalDiamond);
          }
}

let what = gemsToDiamond(1,1,1);
console.log(what);