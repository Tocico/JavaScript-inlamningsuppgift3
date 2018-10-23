// En funktion med två parametrar och retunerar hypotenusans längd

// Har lagt 0 för att undvika NaN. 
function triangel(a =0 ,b =0){   
    
    return  Math.pow(a,2) + Math.pow(b,2) ; // Plussa ihop dem två kateterna

}
// De två heltal skickas till funktionen triangel.
console.log(triangel(2,5)); 