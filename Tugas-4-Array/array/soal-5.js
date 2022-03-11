function balikKata(str){  
    var balik = "";      
     for (var i = str.length - 1; i >= 0; i--){         
       balik += str[i];  
     }     
    return balik;
}
console.log(balikKata("JabarCodingCamp"))
console.log(balikKata("racecar"))
console.log(balikKata("kasur rusak"))
console.log(balikKata("racecar"))
console.log(balikKata("haji ijah"))
console.log(balikKata("I am JCCs"))