const angka = 21;
for (let index = 1; index <= angka; index++){
    if (index %3 == 0 && index % 2 != 0)console.log(`${index} - I love Coding`);
    else if (index % 2 == 0) console.log(`${index} - Berkualitas`);
    else if (index % 2 != 0) console.log(`${index} - Santai`);
}