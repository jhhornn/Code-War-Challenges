
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
        let min = args[0]
        for (let i = 0; i < args.length; i++) {
          if (args[i] < min) {
            min = args[i]
          }
        }
        return min
    }
}

// Test Cases
SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8,])//"Should return the smallest int 8";
SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 18,])//"Should return the smallest int 12";
SmallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228,])//Should return the smallest int 56";
SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 0,])//"Should return the smallest int 0";
SmallestIntegerFinder.findSmallestInt([1, 56, 232, 12, 8,])//"Should return the smallest int 1";

