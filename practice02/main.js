function reverseArray(array){

    var newArray = [];
    // debugger;
    for(var index = array.length - 1; index >= 0; index--){
        var last = array[index];
        newArray.push(last);
    }
    return newArray;
}

var myArray = ['hello', 45, 'Bob', 'what', '23'];

var newArray = reverseArray(myArray);
console.log('Original Array: ', myArray);
console.log('Reversed Array: ', newArray);