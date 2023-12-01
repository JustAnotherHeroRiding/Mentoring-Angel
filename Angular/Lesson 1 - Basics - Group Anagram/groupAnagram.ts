type CountType = {
  [key: string]: number;
};

function isAnagram(firstString: string, secondString: string): boolean {
  if (firstString.length !== secondString.length) {
    return false;
  }

  let firstWordCount: CountType = {};
  let secondWordCount: CountType = {};

  for (let i = 0; i < firstString.length; i++) {
    if (!(firstString[i] in firstWordCount)) {
      firstWordCount[s[i]] = 1;
    } else {
      firstWordCount[s[i]]++;
    }
    if (!(secondString[i] in secondWordCount)) {
      secondWordCount[secondString[i]] = 1;
    } else {
      secondWordCount[secondString[i]]++;
    }
  }

  const keys1 = Object.keys(firstWordCount);
  const keys2 = Object.keys(secondWordCount);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (firstWordCount[key] !== secondWordCount[key]) {
      return false;
    }
  }

  return true;
}
// What is an anagram? It means that the 2 strings have the same number of each letter
// Let us get the counts of letters
let s = "anagram";
let t = "nagaram";

//console.log(isAnagram(s, t));

function groupAnagrams(strs: string[]): string[][] {
  if (strs.length == 1) {
    return [strs];
  }

  const hashTable: { [key: string]: string[] } = {};
  strs.forEach((word) => {
    const sorted = word.split("").sort().join("");
    if (hashTable[sorted]) {
      hashTable[sorted].push(word);
    } else {
      hashTable[sorted] = [word];
    }
  });
  return Object.values(hashTable);
}
// Possible apporach
// dissassemble each word into the letters it contains and group the anagrams that way
// when dissassembling keep a reference to the original word
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

let empty = [""];

console.log(groupAnagrams(strs));

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// split the strings, sort them and see if both words are the same when sorted
// create new subarray if yes
// console.log("eat".split(""));

// Solution - split and sort each word, that will be the key
// add each word to the value of key, where the words sorted letters are the same as the key
// however the word should be added as the value to save it's value
// afterwards create a new each contained of subarrays from the values
