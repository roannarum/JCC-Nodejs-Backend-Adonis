class Kelas{
    constructor(name, level, instructor){
        this._name = name
        this._level = level
        this._instructor = instructor
        this._students = []
    }
    get name(){
        return this._name
    }
    set name(nama){
        this._name = nama
    }
    get level(){
        return this._level
    }
    set level(nama){
        this._level = nama
    }
    get instructor(){
        return this._instructor
    }
    set instructor(nama){
        this._instructor = nama
    }

    get students(){
        return this._students
    }
    addStudent(newStudent){
        this._students.push(newStudent)
    }
    generateRandomScore(){
        return Math.floor(Math.random() * (100 -50)) + 50;
    }
    generateNilai(){
        this._students.map(student => {
            student.addScore(this.generateRandomScore())
        })
    }
    getFinalScore(scores){
        let sum = scores.reduce((a, b) => a + b, 0)
        return Math.ceil(sum / scores.length)
    }
    graduate(){
        let output = {
            participant: [],
            completed: [],
            mastered: []
        }
        this._students.map(student => {
            let finalScore = this.getFinalScore(student.scores)
            student.finalScore = finalScore
            if (finalScore < 60){
                output.participant.push(student)
            }else if(finalScore < 85 && finalScore > 60){
                output.completed.push(student)
            }else if (finalScore > 85){
                output.mastered.push(student)
            }
        })

        return output
    }
}

module.exports = Kelas