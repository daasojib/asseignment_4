
function findingBadData(array){
          let count = 0;
          for(let i =0;i<array.length;i++){
                    const element = array[i];
                    if(element<0)count++;
          }
          return count;
}

let fina = findingBadData([ -4, -9, -5, -33, -55 ]);
console.log(fina);

