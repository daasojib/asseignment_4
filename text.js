function findingBadData(array){
          let count = 0;
          for(let i =0;i<=array.length;i++){
                    const element = array[i];
                    if(element<0){
                              count.push(element);
                              return "Bad Data"
                    }
                    else{
                              return "Good Data"
                    }
          }
          return count;          
}

let final = findingBadData([ 4, -9, -5, -33, -55 ]);
console.log(final);

// function findingBadData(numbers){
//           let count = 0;
//           for(let i =0;i<numbers.length;i++){
//                     const element = numbers[i];
//                     if(element<=0){
//                               count++;
//                     }
//           }
//           return count;
// }

// let final = findingBadData([ 6, -9, -5, -33, -55 ]);
// console.log(final);

// function findingBadData(array){
//         for(let i=0;i<array.length;i++){
//           const element = array[i];
//           if(element<=0){
//                     return "Bad Data"
//           }
//           else{
//                     return "Good data"
//           }
//         }
// }
// let final = findingBadData([ 6, -9, -5, -33, -55 ]);
// console.log(final);