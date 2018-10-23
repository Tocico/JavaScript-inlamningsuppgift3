//Skapa en konstruktor som besktiver en person som blir en typ
//Använd function för att lagra egenskaper (den persons information) och metoden i function.
function Person(name,epost,mobil){  
    this.name = name;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = {};      //adressen lagrar egenskaper av gatuadress,postnummer och ort
    this.print  = function(){
         return `\n${this.name}\n\n${this.adress.gatuAdress}\n${this.adress.postNummer}\t${this.adress.ort}`};
              
}
// Skapa en instans av en person() som lagrar den persons information
let toshiko = new Person('Toshiko kuno', 'kunotoshiko17@gmail.com','0733-286333'); 
// Skapa adress egenskaper
toshiko.adress = {
     gatuAdress : 'Skolgången4',
     postNummer : 12345,
     ort        :  'Sundbyberg',
}
console.log(toshiko.print());

let aoi = new Person('Aoi Sonoda', 'aoisonoda@gmail.com','078-864432');

aoi.adress = {
    gatuAdress : 'jarlaberg',
    postNummer : 13456,
    ort        : 'Nacka',
}
console.log(aoi.print());



