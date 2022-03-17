import addSiswa from "./lib/addSiswa"

const args = process.argv.slice(2)
let command = args[0]


switch (command){
    case 'addSiswa':
        let [namaSiswa, namaTrainer]=args[1].split(',')
        addSiswa(namaSiswa, namaTrainer)
        break;
    default:
        break;

}