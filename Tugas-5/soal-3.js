function naikAngkot (arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var output = [{}]
        if (arrPenumpang.length == 0) {
            console.log([])
        }else {
            for (i = 0; i < arrPenumpang.length; i++) {
                var currentPenumpang = arrPenumpang[i]
                var namaPenumpang = currentPenumpang[0]
                var naikDari = currentPenumpang[1]
                var tujuan = currentPenumpang[2]
                var jarak = rute.indexof(tujuan) - rute.indexOf(naikDari)
                var bayar = jarak * 2000
                output[i] = {
                    Penumpang : namaPenumpang,
                    naikDari: naikDari,
                    tujuan: tujuan,
                    jarak : jarak,
                    bayar:bayar,
                } 
            }
            
        }
        return output;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
//[{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// { penumpang: 'Icha', naikDari: "A, tujuan: 'B', bayar: 2000 }
// console.log(naikAngkot([])); //[]