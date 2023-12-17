
const bracketPairs: { [key: string]: string } = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    let first = s[i];
    let last = s[s.length - 1 - i];
    console.log(`First ${first} Last ${last}`);

    if (!s.slice(s.indexOf(first)).includes(bracketPairs[first])) {
      return false;
    }
  }

  return true;
}
