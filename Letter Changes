// This challenge requires you to change every letter in the string to the -
// letter following it in the alphabet, so a becomes b, z becomes a, etc.
// Once every letter is changed, we then need to capitalize only the vowels, namely: a, e, i, o, u.

//input String
//Output String

//Check if input is string
//If the letter is z or Z then swap the letter to an a.
//Make vowels capital

function moveLetters (string) {
     if(typeof string === 'string' && string.length > 0){
        const swapLetters = string.replace(/[a-z]/gi, value => {
            return(value === 'z' || value === 'Z')? 'a' : String.fromCharCode(value.charCodeAt()+1);
        }) 
     const vowelCap =swapLetters.replace(/a|e|i|o|u|e/gi, toCapital => {
        return toCapital.toUpperCase();
     })

     console.log(vowelCap);

     } else {
        console.log("Invalid input")
     }
     
}

moveLetters('zjd');

-------------------------Option two------------------------
function letterChanges(str) { 
    
    a = str.replace(/[a-z]/gi,replacer);
    b = a.replace(/[aeiou]/gi,replacer2)
  // code goes here  
  return b; 

}

function replacer (match){
    return String.fromCharCode(match.charCodeAt(0) + 1);

} 
function replacer2 (match){
    return match.toUpperCase();

}
