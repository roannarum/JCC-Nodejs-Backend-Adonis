function arrayToObject(arr) {
    var thisYear = (new Date()).getFullYear()

    for (var i = 0; i < arr.length; i++) {
        var currentArr = arr[i]
        var objPerson = {}
        objPerson.firstName = currentArr[0]
        objPerson.lastName = currentArr[1]
        objPerson.gender = currentArr[2]
        var age = thisYear - currentArr[3]       
        if (currentArr[3] == undefined || currentArr[3] > thisYear){
            objPerson.age = 'invalid'
        } else {
            var age = thisYear - currentArr[3]
            objPerson.age = age
        }        
        console.log(i + 1, ". ", objPerson.firstName, objPerson.lastName, ": ", objPerson)
    }
}
                        
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people) 

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 