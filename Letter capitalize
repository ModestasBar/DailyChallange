function LetterCapitalize(str) { 

  // code goes here 
  if(str.length > 0) {
  const arrString = str.split(" ");
  
  //Iterate array elements and uppercase first character
  const capitalizeLetter = arrString.map(value => {
      return value[0].toUpperCase() + value.slice(1);
  })
  const capString = capitalizeLetter.join(' ');
  return capString;     
  }
  
  return 'Empty param';


         
}
   
// keep this function call here 
LetterCapitalize(readline());

------------------Second solution--------------------

function LetterCapitalize(str) { 

    let newString = '';
    for (let i = 0, newWord = true; i < str.length; i++) {
        if (newWord) {
            newString += str[i].toUpperCase();
        } else {
            newString += str[i];
        }
        
        newWord =  (str[i] === ' ') ? true : false;
    }
         
    return newString;
}
   
// keep this function call here 
LetterCapitalize(readline());
