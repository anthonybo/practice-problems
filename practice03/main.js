function groupArray(array) {

    var newArray = [];
    var nums = [];
    var strings = [];
    var booleons = [];
    for(var index = 0; index < array.length; index++){
        // console.log(typeof array[index]);
        if( typeof array[index] === 'string' ) {
            strings.push(array[index]);
        } else if ( typeof array[index] === 'number' ){
            nums.push(array[index]);
        } else if ( typeof array[index] === 'boolean' ) {
            booleons.push(array[index]);
        }
    }
    console.log('Strings: ', strings);
    console.log('Nums: ', nums);
    console.log('Booleons: ', booleons);
    newArray.push(strings, nums, booleons);

    return newArray;
}

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

var newArray = groupArray(myArray);

console.log(newArray);