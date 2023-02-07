// let numbers = [ 4, -9, -5, -33, -55 ];
// let count = 0;
// for(let i = 0;i<numbers.length; i++){
//           const element = numbers[i];
//           if(element<0){
//                     count = count +1;
//           }
//           console.log(count);
// }

function findingBadData(array){
          let count = 0;
          for(let i =0;i<array.length;i++){
                    const element = array[i];
                    if(element<0)count++;
          }
          return count;
}

let result = findingBadData([ 2, -5, -7, -13 ]);
console.log(result);