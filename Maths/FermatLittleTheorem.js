function getRandomInt(min,max) { /* getting a random between given max and min values */
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random()*(max-min))+min;
    }

    function getGCD(a,b) { /* getting the greatest common divisor */
        var tmp;
        while (b !== 0) {
            tmp = b;
            b = a%b;
            a = tmp;
        }
        return a;
    }

    function getPower(a,b,p) { /* getting the a^b mod p */
        if (b == 1)
         return a%p;
        else {
         x = getPower(a,Math.floor(b/2),p);
         if (b%2 == 0) 
          return (x*x)%p;
         else return (((x*x)%p)*a)%p;
        }
    }

    function fermatTesting(Num) { //Checking Num by using Fermat's theorem
        var a = getRandomInt(2,Num-1);
        if (getGCD(a,Num) !== 1) {
            return "COMPOSITE";
        }
        else {
            if (getPower(a,Num-1,Num) !== 1) {
                return "COMPOSITE";
            }
            else {
                return "PRIME"; 
            }
        }
    }

    console.log(fermatTesting(111));
