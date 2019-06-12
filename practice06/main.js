function fibSequence(num) {
    var sum = [0, 1];

    for(var index = 2; index < num; index++) {
        sum[index] = sum[index-2] + sum[index-1];
    }

    return sum;
}

console.log(fibSequence(13));