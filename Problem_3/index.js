//longest substring without repeating characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var n = s.length;
  var res = 0;

  for (var i = 0; i < n; i++) {
    //  Default values in visited are false
    var visited = new Array(256);

    for (var j = i; j < n; j++) {
      // If current character is visited
      // Break the loop
      if (visited[s.charCodeAt(j)] == true) break;
      // Else update the result if
      // this window is larger, and mark
      // current character as visited.
      else {
        res = Math.max(res, j - i + 1);
        visited[s.charCodeAt(j)] = true;
      }
    }
  }
  return res;
};
