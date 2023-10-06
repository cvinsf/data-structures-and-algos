/**
 * Determines if a given string is a valid palindrome or not.
 * A string is considered a palindrome if it reads the same backward as forward.
 * @param {string} s - The string to check for palindrome.
 * @returns {boolean} - Returns true if the string is a valid palindrome, false otherwise.
 */
const validPalidrome = (s) => {
    // Create two pointers, one at start and one at end
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            return false;
        }
    }    
    return true;
}