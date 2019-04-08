function LongestWord(sen) { 

  const wordArr = sen.split(' ');
  const cleanWords = removeSymbols(wordArr);
  
  let longestWord;
  
  for(let i = 0; i < cleanWords.length-1; i++) {
      if(cleanWords[i].length > cleanWords[i+1].length || cleanWords[i].length === cleanWords[i+1].length) {
          longesWord = cleanWords[i];
      } else {
          longestWord = cleanWords[i+1];
      }
  }
  
  
    
  return longestWord; 
         
}

function removeSymbols(splitWords) {
    const cleanWords = splitWords.map(param => {
        replaced = param.split('!').join('').split('&').join('');
        return replaced;
            }
        );
    return cleanWords;
}


   
// keep this function call here 
LongestWord(readline());
