const Bootcamp = require('./lib/bootcamp')
const Student = require('./lib/student')
const jcc = new Bootcamp('jabarcodingcamp')

jcc.createClass('Laravel', 'Beginner', 'abduh')

jcc.createClass('React', 'beginner', 'abdul')

let names = ['regi', 'ahmad', 'bondra', 'iqbal', 'putri', 'rezky']


names.map((nama, index) => {
    let newStud = new Student(nama)
    let kelas = jcc.classes[index % 2].name
    jcc.register(kelas, newStud)
})

jcc.runBatch()