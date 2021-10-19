/*
 * Mode: https://en.wikipedia.org/wiki/Mode
 *
 * function averageMode
 * to find the mode of an array of numbers
 * will iterate in the array and count the amount of times each number appears
 */

const averageMode = (numbers) => {
  let countObj = {}
  numbers.forEach(v=>{
    if(!countObj[v]){
      countObj[v] = 0;
    }
    countObj[v]++
  })
  let max = 0;
  let result;
  console.log(countObj)
  Object.keys(countObj).forEach((v)=>{
    if(countObj[v]>max){
      max = countObj[v];
      result = v;
    }
  })
  return result;
}

averageMode([3,51,235,6,1,34,1,1]) //1