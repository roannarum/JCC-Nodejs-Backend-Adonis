class Student{
    constructor(name){
        this._name = name
        this._scores = []
        this._finalScore = 0
    }
    get name(){
        return this._name
    }
    set name(nama) {
        this._name = nama
    }
    addScore(score){
        this._scores.push(score)
    }
    get finalScore(){
        return this._finalScore
    }
    set finalScore(score){
        this._finalScore = score
    }
    get scores(){
        return this._scores
    }
}
module.exports = Student