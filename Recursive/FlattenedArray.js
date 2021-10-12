
//  https://flexiple.com/flatten-array-javascript/
//  Flatten an given array to reduce the dimensionality of an array

const flattened = (arr) => {
  const res = []
  arr.forEach(i => {
    if(Array.isArray(i)){
      res.push(...flattened(i));
    }
    else{
      res.push(i);
    }
  });
  return res;
}

(() => {
  const arr = [['a'],['bc'],[['cde'], ['f']]];
  console.log(flattened(arr));
})()
