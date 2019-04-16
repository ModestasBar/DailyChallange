function VowelSquare(strArr) { 

   return vowelSquareSearch(vowelFinder(strArr));

}

//Function to return all the vovles "couples" position indexes and store it to array;
function vowelFinder(strArr) {
    let vovelIndexArr = [];
    //Array element (row)
    strArr.forEach(val => {
        let vovelIndexString = '';
        //Element characters (col)
        for(let i = 0; i < val.length-1; i++) {
            //Check if char is equal to a vowel and if next char his "couple" is also a vowel
            if(val[i].toLowerCase() === 'a' || val[i].toLowerCase() === 'e' || val[i].toLowerCase() === 'i' || val[i].toLowerCase() === 'o' || val[i].toLowerCase() === 'u') 
            {
               if(val[i+1].toLowerCase() === 'a' || val[i+1].toLowerCase() === 'e' || val[i+1].toLowerCase() === 'i' || val[i+1].toLowerCase() === 'o' || val[i+1].toLowerCase() === 'u')
               {
                //Constructing vovels "couples" string
               vovelIndexString += (i.toString() + (i+1).toString())
               }
            }
        }
        //Storing vovels string into an array
        vovelIndexArr.push(vovelIndexString);
    })
   return vovelIndexArr;
}

//Function compare vovels index value
function vowelSquareSearch(indexArr) {
    //Array values (row)
    for(let i = 0; i < indexArr.length-1; i++) {
        //Values numbers(collumns)
        for(let j = 0; j < indexArr[i].length-1; j++) {
            //Check if values number matching with next values same position number (values like a row's)
            if(indexArr[i][j] === indexArr[i+1][j] && indexArr[i][j+1] === indexArr[i+1][j+1]) {
              //Returning first match row and (row) and value (collumn)
              return(i+"-"+indexArr[i][j]);
            }
        }
    }
    
    return "not found";
}
   
// keep this function call here 
VowelSquare(readline());


------------------Second solution--------------------
function VowelSquare(strArr) { 

    for (let row = 0; row < strArr.length-1; row++) {
        for (let col = 0; col < strArr[0].length-1; col++) {
            if (isVowels2x2(strArr, row, col)) {
                // Good!  Return first one because we
                // searche in a good order
                return row + '-' + col;
            }
        }
    }
    return 'not found';
         
         
    function isVowels2x2(strArr, row, col) {
        // Could do bounds checking here but it is done in main()
        
        if (!isVowel(strArr[row][col])) return false;
        if (!isVowel(strArr[row+1][col])) return false;
        if (!isVowel(strArr[row][col+1])) return false;
        if (!isVowel(strArr[row+1][col+1])) return false;
        return true;
    }
    
    function isVowel(letter) {
        const VOWELS = 'aeiou';
        return VOWELS.includes(letter);
    }
}
   
// keep this function call here 
VowelSquare(readline());
