/**
 * Given a string, s, of lowercase English characters and an integer, k, 
 * return the length of the longest substring after replacing at most k characters 
 * with any other lowercase English character so 
 * that all the characters in the substring are the same.
 */

function longestRepeatingSubstring(s, k) {
    const strLength = s.length;
    const charFrequency = {};
    let left = 0;
    let lengthOfMaxSubstring = 0;
    let mostFreqChar = 0;

    for (let right = 0; right < strLength; right += 1) {
        if (!charFrequency[s[right]]) {
            charFrequency[s[right]] = 1;
        } else {
            charFrequency[s[right]] += 1;
        }

        mostFreqChar = Math.max(mostFreqChar, charFrequency[s[right]]);

        if (right - left + 1 - mostFreqChar > k) {
            charFrequency[s[left]] -= 1;
            left += 1;
        }

        lengthOfMaxSubstring = Math.max(right - left + 1, lengthOfMaxSubstring);
    }
    return lengthOfMaxSubstring;
}

const inputStrings = ["aabccbb", "abbcb", "abccde", "abbcab", "bbbbbbbbb"];
const k = [2, 1, 1, 2, 4];

for (let i = 0; i < inputStrings.length; ++i) {
    console.log(`${i + 1}.\tInput String: '${inputStrings[i]}'`);
    console.log(`\tk: ${k[i]}`);
    console.log("\tLength of the longest substring with repeating characters: " +
        longestRepeatingSubstring(inputStrings[i], k[i]));
    console.log("-".repeat(100));
}