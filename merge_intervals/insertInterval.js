/**
 * * Problem: Insert Interval
 * Given a sorted list of nonoverlapping intervals and a new interval, 
 * your task is to insert the new interval into the correct position 
 * while ensuring that the resulting list of intervals remains sorted 
 * and nonoverlapping. Each interval is a pair of nonnegative numbers, 
 * the first being the start time and the second being the end time 
 * of the interval. Return the resulting list.            
 */

const insertInterval = (intervals, newInterval) => {
    const result = [];
    let i = 0;
    // skip (and add to output) all intervals that come before the 'newInterval'
    while (i < intervals.length && intervals[i].end < newInterval.start) {
        result.push(intervals[i]);
        i += 1;
    }

    // merge all intervals that overlap with 'newInterval'
    while (i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval.start = Math.min(intervals[i].start, newInterval.start);
        newInterval.end = Math.max(intervals[i].end, newInterval.end);
        i += 1;
    }

    // insert the newInterval
    result.push(newInterval);

    // add all the remaining intervals to the output
    while (i < intervals.length) {
        result.push(intervals[i]);
        i += 1;
    }

    return result;
}