//Skapa en konstruktor som beskriver en person 
//Använd function för att lagra egenskaper (den personens information) och metoden i function.
function Person(name,epost,mobil){  
    this.name = name;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = {};      //adressen lagrar egenskaper av gatuadress,postnummer och ort
    this.print  = function(){
         return `\n${this.name}\n\n${this.adress.gatuAdress}\n${this.adress.postNummer}\t${this.adress.ort}`};
              
}
// Skapa en instans av en person() som lagrar den personens information
let toshiko = new Person('Tocico', 'kufgffddd@gmail.com','0888-99999'); 
// Skapa adress egenskaper
toshiko.adress = {
     gatuAdress : 'Skol4',
     postNummer : 12345,
     ort        :  'solna',
}
console.log(toshiko.print());

let aoi = new Person('Aoi Sonoda', 'aoisonoda@gmail.com','078-864432');

aoi.adress = {
    gatuAdress : 'jarlaberg',
    postNummer : 13456,
    ort        : 'Nacka',
}
console.log(aoi.print());



