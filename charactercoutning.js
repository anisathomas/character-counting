
var letterCounter = {}

function countLetters(someString) {
  var noSpacesString = someString.replace(/\s+/g,'');

  for(var i = 0; i < noSpacesString.length; i++) {
   if(letterCounter[noSpacesString[i]] === undefined){
      letterCounter[noSpacesString[i]] = 1;
    //if letter exist doesnt exist in object push letter into object that starts at one
    } else{
      letterCounter[noSpacesString[i]] += 1
    //increment the letter already in the object by 1
    }
  }
return letterCounter;

}

console.log(countLetters("lighthouse in the house"));

