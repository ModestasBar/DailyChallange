function FirstReverse(str) {
if(str.length != 0){
    const stringInput = str.toString();
    const arrString = stringInput.split(' ');
    const reversOrderArr = arrString.reverse();
    
    if(reversOrderArr.length > 1) {
        //Iterate array of revers elements and reverting element letters
        const reversedWordsAndLetter = reversOrderArr.map(element => reversLetters(element));
        
        return reversedWordsAndLetter.join(' ');
        
    } else {
        //Revers letters if there is only one word
        return reversLetters(reversOrderArr);
    }
    
    }
    return 'Empty input';
}

function reversLetters(string) {
    //Make string => make an array of characters => reverse elements => make a string of elements
    return string.toString().split('').reverse().join('');
}


   
// keep this function call here 
FirstReverse(readline());
