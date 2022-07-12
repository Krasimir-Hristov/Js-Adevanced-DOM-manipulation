function solve() {
 const text = document.querySelector(`#text `).value.toLowerCase();
 const convertor = document.getElementById(`naming-convention`).value;
 const resultPrinter = document.getElementById(`result`)
 
 
 let currResult = ``;
 let textArr = text.split(` `);
 if(convertor === `Camel Case`) { 
  currResult += textArr.shift();

    for(let word of textArr) {
       let toUpper = word.split(``)
       toUpper[0] = toUpper[0].toUpperCase();
       
      currResult += toUpper.join(``);
    
    }   
} else if (convertor === `Pascal Case`) {
  for(let word of textArr) {
    let toUpper = word.split(``)
    toUpper[0] = toUpper[0].toUpperCase();
    
   currResult += toUpper.join(``);
 
 } 
} else {
  currResult = `Error!`
}
 
 resultPrinter.textContent = currResult
}