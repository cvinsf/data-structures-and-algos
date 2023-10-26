import { MinHeap } from './minHeap'
import { MaxHeap } from './maxHeap'

const maxCapital = (c, k, capitals, profits) => {
    let currentCapital = c;
    let capitalsMinHeap = new MinHeap();
    let profitsMaxHeap = new MaxHeap();

    for (let i = 0; i < capitals.length; i++) {
        capitalsMinHeap.push([capitals[i], i]);
    }

    for (let counter = 0; counter < k; counter++) {
        while (
            capitalsMinHeap.size() > 0 && 
            capitalsMinHeap.peek()[0] <= currentCapital
        ) {
            let element = capitalsMinHeap.pop();
            c = element[0];
            let i = element[1];
            profitsMaxHeap.push([profits[i], i]);
        }

        if (profitsMaxHeap.size() === 0) {
            break;
        }

        let element = profitsMaxHeap.pop();
        let j = element[0];
        currentCapital = currentCapital + j;
    }
    return currentCapital;
}
