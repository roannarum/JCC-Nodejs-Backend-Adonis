function shoppingTime (memberId, money) {
    var output = {}
    var barang = [ 'Sepatu' ,'Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    var harga = [1500000, 500000, 250000, 175000, 50000]
    var maaf = "Mohon maaf, toko X hanya berlaku untuk member saja"
    var maaf2 = "Mohon maaf, uang tidak cukup"

    if (memberId === undefined || money === undefined) {
        return maaf
    }else if(money < 50000){
        return maaf2
    }else {
        output.memberId = memberId
        output.money = money
        output.listPurchased = []
        var totalHarga = 0
        for (var i = 0; i < barang.length; i++){
            if(harga[i] + totalHarga <= money){
            output.listPurchased.push(barang[i])
            totalHarga += harga[i]
            }
        }
    }
    return output;
}
console.log(shoppingTime('', 247500));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());