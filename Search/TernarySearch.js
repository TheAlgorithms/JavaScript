/* Ternary Search: https://en.wikipedia.org/wiki/Ternary_search
 *Ternary Search is a search and divide algorithm that divides the array into three parts. 
 *It’ll search through the first part, then the third part of the array. 
 *If the target element doesn’t exist within those two sections, we check the middle section to see if the element exist.
 *
 */


let ternarySearch = (left, right, target, arr) => {
	//If the right side of array is smaller than the left, then the element doesn't exist in the array 
	if (right >= left)
	{
		//Find the two mid points to divide the array into three parts
		let mid1 = Math.floor(left + (right - left) /3);
		let mid2 = Math.floor(right - (right - left) /3);

		//We check both the mid point to see if it is the target element
		if (arr[mid1] == target) {
			return mid1;
		}
		else if (arr[mid2] == target) {
			return mid2;
		}

		//Now we check to see if target is in the left section.
		if (target < arr[mid1]) {
			return ternarySearch(left, mid1 - 1, target, arr);
		}	//Then to see if target is in the right section.
		else if (target > arr[mid2]) {
			return ternarySearch(mid2 + 1, right, target, arr);
		}	//Otherwise the target exist in the middle section.
		else {
			return ternarySearch(mid1 + 1, mid2 - 1, target, arr);
		}
	}
	return -1;
}
