const PapanCatur = 8;
let bentukpapan = '';
for (let baris = 0; baris <= PapanCatur; baris++){
  if(baris % 2 != 0) {
      for (let index = 0; index < PapanCatur; index++){
          if(index % 2 == 0) bentukpapan += '#';
          else bentukpapan += ' ';
      }
  } else{
      for (let index = 0; index < PapanCatur; index++){
          if (index % 2 == 0) bentukpapan += ' ';
          else bentukpapan += "#";
      }
  }
  bentukpapan += "\n";
}
console.log(bentukpapan);