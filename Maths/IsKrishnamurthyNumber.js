/*
 * Krishnamurthy number: https://www.javatpoint.com/krishnamurthy-number-java#:~:text=Krishnamurthy%20number%20is%20another%20special,to%20as%20a%20Strong%20number.
 * function isKrishnamurthyNumber
 * Check if a given number is a Krishnamurthy number or not?
 * If the factorial sum of all a number's digits equals that number, the number is said to be Krishnamurthy. 
 * A Strong number is another name for the Krishnamurthy number.
 * For instance 145, sum of factorial of each digits:  1! + 4! + 5! = 1 + 24 + 120 = 145
 * isCompositeNumber(6) // returns true
 * isCompositeNumber(577) // returns false
 * isCompositeNumber(2024) // returns true
 */

function isKrishnamurthyNumber (number) {

// Function to find Factorial of a number
  function factorial(number)
{
	let fact = 1;
	
	while (n != 0)
	{
		fact = fact * n;
		n--;
	}
	
	return fact;
}

  return number > 1 && !PrimeCheck(number)
}

export { isKrishnamurthyNumber  }
