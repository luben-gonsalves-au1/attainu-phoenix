function longestPallindrome(string) {
  var currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    var odd = longestSubString(string, i - 1, i + 1);
    var even = longestSubString(string, i - 1, i);
    var longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    var currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function longestSubString(string, left, right) {
  while (left >= 0 && right <= string.length - 1) {
    if (string[left] !== string[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

console.log(longestPallindrome("babad"));
