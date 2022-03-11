function sum(startNum, finishNum){
    var rangeArray = [];
    if (startNum >= finishNum){
        for (var i = startNum; i >= finishNum; i--){
            rangeArray.push(i);
        }
    }else if (startNum <= finishNum){
        for (var i = startNum; i <= finishNum; i++){
            rangeArray.push(i);
        }
    }
    return rangeArray
}
console.log(sum(1,10));