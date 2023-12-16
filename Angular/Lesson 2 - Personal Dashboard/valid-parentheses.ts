/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

const bracketPairs = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    let first = s[i];
    let last = s[s.length - 1 - i];
    console.log(`First ${first} Last ${last}`);

    if (first === last) {
      return true;
    }
  }
  return false;
}

const sOne = "()";
console.log(isValid(sOne));
/* Example 1:

Output: true
*/

const sTwo = "()[]{}";
/* Example 2:


Output: true */
const sThree = "(]";
/* Example 3:

Output: false */
