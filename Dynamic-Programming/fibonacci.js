function fibonacci(n)  {
  var array = [1, 1]; 
  var i = 2;                 
  if (n === 0 || n === 1) {
    return 1;  
  }
  for (; i < n; i++) {
    array.push(array[0] + array[1]);
    array.shift();
  }

  return array[0] + array[1];
}
function main(){
    const number=7;
    console.log('The number at '+number+'th position is'+fibonacci(number))
    
}
    main()