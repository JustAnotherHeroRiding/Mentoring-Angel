function isPalindrome(s: string): boolean {
  let alphanumericOnly = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = alphanumericOnly.split("").reverse().join("");

  if (alphanumericOnly === reversed) {
    return true
  } 
  return false;
}

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
/* Example 1:
Output: true
Input: s = "A man, a plan, a canal: Panama"
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */
