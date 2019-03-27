function randomize_list(array){
    var newArray = [];
    var randomized = false;

    while(!randomized){
        var randomNum = Math.floor(Math.random() * array.length);

        var randomSelection = array.splice(Math.floor(Math.random()*array.length), 1);

        newArray.push(randomSelection);

        if(array.length <= 0){
            randomized = true;
        }

    }
    return newArray;
}

var input_array = [5,3,2,5,1];

console.log('Original Array: ',input_array);

var output = randomize_list(input_array);

console.log('Randomized Array: ',output);