function mindGame(number){
          if(typeof number != "number" || typeof number == "string" || number < 0){
                    return "Please insert a valid value"
          }
          let result =((number*3+10)/2)-5;
          return result;
}

let final= mindGame(-5);
console.log(final);