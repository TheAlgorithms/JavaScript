const flattened = (arr) => {
  const  = []
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
