import { readFile, writeFile} from 'fs/promises'
import "regenerator-runtime"
const path = "data.json"
export default async(namaSiswa, namaTrainer) => {
    try {
        let data = await readFile(path)
        let realData = JSON.parse(data)
        console.log(realData)
        let foundTrainer = realData.find(person => person.name == namaTrainer)
        foundTrainer.students.push({ name : namaSiswa})

        let dataToWrite = JSON.stringify(realData)
        await  writeFile(path, dataToWrite)
        console.log("berhasil masuk")
    }catch (error){
        console.log(error)
    }
    
}

