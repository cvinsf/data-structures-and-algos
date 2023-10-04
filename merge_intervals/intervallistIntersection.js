/**
 * * Problem: Interval List Intersection - For two arrays of closed intervals given as 
 * input, intervalsA and intervalsB, where each interval has its own start/end time,
 * write a function that returns the intersection of the two intervals
 */

const intervalIntersection = (firstList, secondList) => {
    // If either first or second list is empty
    if (firstList.length === 0 || secondList.length === 0) return [];

    // Sort the lists by start time
    firstList.sort((a, b) => a[0] - b[0]);
    secondList.sort((a, b) => a[0] - b[0]);

    // Array and pointer intialization
    const intersection = [];
    let i = 0;
    let j = 0;

    // While i < length of firstlist and j < length of secondlist
    while (i < firstList.length && j < secondList.length) {
        const firstInterval = firstList[i];
        const secondInterval = secondList[j];

        // If first interval and second intersect
        if (firstInterval[1] >= secondInterval[0] && secondInterval[1] >= firstInterval[0]) {
            const start = Math.max(firstInterval[0], secondInterval[0]);
            const end = Math.min(firstInterval[1], secondInterval[1]);

            // Add start, end to intersection array
            intersection.push([start, end]);
        }

        if (firstInterval[1] < secondInterval[1]) i += 1;
        else j += 1;
    }
    return intersection;
};