/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

function isValid(s: string): boolean {
  const bracketPairs: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element in bracketPairs) {
      const pop = stack.pop();

      if (bracketPairs[element] === pop) {
        continue;
      } else {
        return false;
      }
    } else {
      stack.push(element);
    }
  }

  return stack.length === 0;
}

const sOne = "()";
//console.log("First", isValid(sOne));
/* Example 1:
Output: true
*/

const sTwo = "()[]{}";
//console.log("Second", isValid(sTwo));
/* Example 2:
Output: true */

const sThree = "(]";
//console.log("Third", isValid(sThree));
/* Example 3:
Output: false */

const sFour = "([)]";
console.log("Fourth", isValid(sFour));
// Output: false
