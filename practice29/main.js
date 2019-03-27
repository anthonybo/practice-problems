function do_math(num1, num2, string) {
    var result = null;
    switch(string) {
        case '*':
        case 'x':
        case 'X':
            result = (num1 * num2);
            return result;
        case '/':
            result = (num1 / num2);
            return result;
        case '+':
            result = (num1 + num2);
            return result;
        case '-':
            result = (num1 - num2);
            return result;
        default:
            console.log('error');
    }
}

var result = do_math(5,2,'/');
console.log(result);






function changeCase(sentence, caseSelect){
    if( caseSelect === 'uppercase' ) {
        var newSentence = sentence.toUpperCase();
        return newSentence;
    } else if (caseSelect === 'lowercase') {
        var newSentence = sentence.toLowerCase();
        return newSentence;
    }
}

var changedSentence = changeCase('I am crazy', 'uppercase');
console.log(changedSentence);





function trimAndRepeat(trimAmount, trimAmount, repeatCount) {
    // var stringLength = num1.length;
    // var newString = string.slice(num1, -2).repeat(3);
    var trimmedSentence = sentence.slice(trimAmount, 0-trimAmount);
    var repeatedSection = trimmedSentence.repeat(repeatCount);
    return repeatedSection;
}

var trimmedOutput = trimAndRepeat('canary',1 ,3);
//var trimmedOutput = trimAndRepeat('canary',2 ,2);
//var trimmedOutput = trimAndRepeat('superfluous',4 ,6);


console.log(trimmedOutput);