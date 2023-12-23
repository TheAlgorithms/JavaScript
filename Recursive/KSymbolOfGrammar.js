// Recursive call function  to find l=k th Symbol of Grammar  (0 => 0,1 , 1=> 1,0)
//   Extracted Matrix
//    0
//    0 1
//    0 1 1 0
//    0 1 1 0 1 0 0 1 
//    0 1 ,.....

function KSymbol(n ,k){
    if(n==1 && k==1){
      
      return 0;
    }
    
    let mid = (2**(n-1))/2
    
    if(k <= mid){
      return KSymbol(n-1,k);
    }
    
    else {
      return !KSymbol(n-1 , k-mid)
    }
  }
  
  // Enter the row no. and col no. of matrix 
  let ans = KSymbol( 4, 1)
  
  if(ans) ans = 1 

  console.log(ans)
  