 // Skapa en funktion för att räkna en sfärs volymen och arean
// Har lagt 0 för att undvika NaN
//toFixed(2) avrundar till två decimaler
function sphere(r = 0){

    return `Volymen är ${(4 * Math.PI * Math.pow(r,3) / 3).toFixed(2)} \nArean är ${(4 * Math.PI * Math.pow(r,2)).toFixed(2)}`; 

}
console.log(sphere(3));  // Argument 3 skickas till funktionen sphere.


