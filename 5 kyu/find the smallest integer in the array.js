
/*
PREP:
Parameters: This function takes in an array of numbers

Returns: This function returns a number

Examples: 
See test cases below

Pseudocode:
- Function takes in an array
- Declare a variable min 
- Loop through array
- Assign first element of array to min
- compare current element to min
- IF current element is less than min
- assign current element to min
- End If
- return min
*/

// Solution
class SmallestIntegerFinder {
	findSmallestInt(args) {
        
	}
}

// Test Cases
sif.findSmallestInt([78, 56, 232, 12, 8,])//"Should return the smallest int 8";
sif.findSmallestInt([78, 56, 232, 12, 18,])//"Should return the smallest int 12";
sif.findSmallestInt([78, 56, 232, 412, 228,])//Should return the smallest int 56";
sif.findSmallestInt([78, 56, 232, 12, 0,])//"Should return the smallest int 0";
sif.findSmallestInt([1, 56, 232, 12, 8,])//"Should return the smallest int 1";

