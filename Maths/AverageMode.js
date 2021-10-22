//Wikipedia Mode Page: https://en.wikipedia.org/wiki/Mode
//The code iterates through the list of numbers and counts the amount each number appears;
//Then it gets the one or ones that appear the most and return it or them.
const averageMode = numbersList => {
  let objCount = {}
  numbersList.forEach(v=>{
    if(!objCount[v]){
      objCount[v] = 0;
    }
    objCount[v]++
  })
    
  let result = [];
  let bigger = 0;
  Object.keys(objCount).forEach((v,i)=>{
    if(objCount[v]>bigger){
      result = [v];
      bigger = objCount[v];
    }else if(objCount[v] === bigger){
      result.push(v)
    }
  })
  if(result.length === 1){
    return parseFloat(result[0])
  }else{
    result.forEach((v,i)=>{
      result[i] = parseFloat(v)
    })
  return result;
  }
}

export {averageMode}
