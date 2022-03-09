var nama = "Jane"
var peran = ""

if (nama == 'John'){
    console.log("Halo John, Pilih peranmu untuk memulai game!")
}else if(peran == 'Penyihir' || nama == 'Jane'){
    console.log("Selamat datang di Dunia Werewolf!","Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf")
}else if(peran == 'Guard' || nama == 'Jenita'){
    console.log("Selamat datang di Dunia Werewolf!","Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
}else if(peran == 'Werewolf' || nama == 'Junaedi'){
    console.log("Selamat datang di Dunia Werewolf!","Halo Guard Junaedi,  Kamu akan memakan mangsa setiap malam!.")
}
else {
    console.log("Nama Harus diisi!")
}