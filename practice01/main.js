function biggerWords(str, myArray) {
    var newArray = [];
    for(var index = 0; index < myArray.length; index++){
        if(myArray[index].length > str.length){
            newArray.push(myArray[index]);
        }
    }

    return newArray;
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

var output = biggerWords('whales', myArray);

console.log('Output: ', output);