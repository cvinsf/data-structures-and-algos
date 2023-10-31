/**
 * *Problem: You are given a string consisting of lowercase English letters
 * Repeatedly remove adjacent duplicate letters, one pair at a time.
 * Both members of a pair of adjacent duplciate letters need to be removed.
 */

const removeDuplicates = (str) => {
    const stack = [];

    for (let i = 0; i < stack.length; i += 1) {
        if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    return stack.join("")
}
