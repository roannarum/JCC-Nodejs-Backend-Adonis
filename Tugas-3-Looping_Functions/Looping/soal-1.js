let Angka = 2;
let maxAngka = 20;
let loop1 = true;
let loop2 = false;

while (Angka <= maxAngka && Angka > 0){
    if (loop1){
        console.log("LOOPING 1");
        loop1 = false ;
    } else if (loop2 == false ){
        console.log(`${Angka} - I LOVE CODING`);
        Angka += 2;
        if (Angka === maxAngka && loop2 == false){
            loop2 = true;
            console.log(`${Angka} - I love coding`);
            console.log('Looping 2')
        }
    }
    if (loop2){
        console.log(`${Angka} - I will become a backend developer`);
        Angka -= 2;
    }
}