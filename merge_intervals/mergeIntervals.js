/**
 ** We are given an array of closed intervals [intervals] where each interval
 ** has a start and end time. The input array is sorted with respect to
 ** the start times of each interval. For Example, intervals = [[1, 4], [3, 6], [7,9]]
 ** is sorted in terms of start times 1,3 and 7. 
 */

 // Merge the overlapping intervals and return a new array with non-overlapping intervals

 const mergeIntervals = (intervals) => {
    // copy first interval from input list to output list
    if (!intervals.length) return;

    const result = [];

    // Adding the first pair in the result list from the input list
    result.push(new intervals(intervals[0].start, intervals[0].end));

    let lastAddedInterval, currStart, currEnd, prevEnd;
    for (let i = 1; i <intervals.length; i += 1) {
        // Getting the recent added interval from the result list
        lastAddedInterval = result[result.length - 1];

        // Getting and initializing the current start and end time
        currStart = intervals[i].start;
        currEnd = intervals[i].end;

        if (currStart <= prevEnd) {
            result[result.length - 1].end = Math.max(currEnd, prevEnd);
        } else {
            result.push(new Interval(currStart, currEnd));
        }
    }
    return result;
 }