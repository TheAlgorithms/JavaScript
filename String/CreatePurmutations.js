function permutations(str){

// convert string to array
let arr = str.split(''),

// get array length 
    len = arr.length, 
// this will hold all the permutations
    perms = [],
    rest,
    picked,
    restPerms,
    next;
    
// if len is zero, return the same string
    if (len === 0)
        return [str];
// loop to the length to get all permutations
    for (let i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
}

console.log(permutations('abc')) // should print ["abc", "acb", "bac", "bca", "cab", "cba"]

      
