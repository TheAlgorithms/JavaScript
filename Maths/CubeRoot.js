/*
Finding the cube root of a number using binary search.
*/ 

function cbrt (num) {
  if (!Number.isFinite(num)) { throw new TypeError(`Expected a number, received ${typeof num}`) }
   
  // Setting the low and high value for binary search
  let low=0 ,high=num;

  //Setting precision
  let precision=0.0000001;

  while(true){
    let mid=low+(high-low)/2;
    let error= Math.abs(num-(mid*mid*mid));

    if(error<=precision)
    return mid;

    else if((mid*mid*mid)>n)
    high=mid;

    else
    low=mid;
  }
}
  
export { cbrt }