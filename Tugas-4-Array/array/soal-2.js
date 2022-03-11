
function rangeWithStep(startNum, finishNum, step) {
    var result = [];
    if (startNum <= finishNum ) {
        for (var i = startNum; i <= finishNum; i+=step) {
            result.push(i); 
        }
    } else if (startNum > finishNum ){
            for (var i = startNum; i >= finishNum; i-=step) {
                result.push(i); 
            }
        }
    return result
}

console.log(rangeWithStep(10, 1, 2))