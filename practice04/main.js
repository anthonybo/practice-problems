function sort(array) {

    var newArray = [];

    sorted = false;

    while (!sorted){
        if(array[0] < array[1]) {
            var smallest = array.shift();

            // smallest = array[index];
            newArray.push(smallest);
        } else {
            var larger = array.shift();
            array.push(larger);
        }

        if(array.length <= 1){
            var lastItem = array.shift();
            newArray.push(lastItem);
            sorted = true;
        }
    }
    return newArray;
}

var myArray = ['mouse', 'cat', 'dog', 'human'];

var sorted = sort(myArray);

console.log('Original Array: ', myArray);
console.log('Sorted Array: ', sorted);