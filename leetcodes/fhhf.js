// Link to LeetCode versions of these challenges:
// https://leetcode.com/discuss/general-discussion/1152824/cracking-the-coding-interview-6th-edition-in-leetcode

// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
/// SCENARIO A: WITH ADDITIONAL DATA STRUCTURES
// note - experimented with Objects, Arrays, Sets, and Map.  Set & Map were tied for fastest by far.
function IsUniqueA(string) {
    let set = new Set();
    for (let c of string) {
      if (set.has(c))
        return false;
      else
        set.add(c);
    }
    return true;  // if we reach this point in the code, there are no dup characters, and we can return true
  }