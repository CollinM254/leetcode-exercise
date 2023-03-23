let longestPalindrome = function (s) {
  let maxSubStart = 0;
  let maxSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    const lengthCenteredAtChar = expandAroundCenter(s, i, i);
    const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);

    const logestSubStr =
      lengthCenteredAtChar > lengthCenteredAtSpace
        ? lengthCenteredAtChar
        : lengthCenteredAtSpace;

    if (logestSubStr > maxSubLength) {
      maxSubLength = logestSubStr;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }
  return s.substr(maxSubStart, maxSubLength);
};

/* 
  compare the string from the center as a char if left = right expanding and comparing while left and right side are the equals
  or compare the string from the space between two char 
*/
function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome("dasabbbb"));
