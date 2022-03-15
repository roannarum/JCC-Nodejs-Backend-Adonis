const Kelas = require('./kelas')

class Bootcamp{
    constructor(name){
        this._name = name
        this._classes = []
    }
    get name(){
        return this._name
    }
    set name(nama){
        this._name = nama
    }
    get classes(){
        return this._classes
    }
    createClass(namaKelas, level, instructor){
        let kelasBaru = new Kelas(namaKelas, level, instructor)
        this._classes.push(kelasBaru)
    }
    register(namaKelas, student){
        let kelasYangDituju = this._classes.find(kelas => kelas.name == namaKelas)
        kelasYangDituju.addStudent(student)
    }
    runBatch(){
        for (let j = 0; j < this._classes.length; j++){
            let currentKelas = this._classes[j]
            for (let i = 0; i < 4; i++){
                currentKelas.generateNilai()
            }
            console.log(`graduate from ${currentKelas.name}: `, currentKelas.graduate())
        }
    }
}

module.exports = Bootcamp