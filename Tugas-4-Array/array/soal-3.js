function range(start, end, step) {
    var numbers = [];
    if(step === undefined)
      step = 1;
    if(step>0)
      for(var i=start; i<=end; i+=step) {
        numbers.push(i);
    }
    else
      for(var i=end; i>=start; i+=step) {
        numbers.push(i);
    }
    return numbers;
}
  
function sum(array) {
if(array.length === 0)
    return 0;
return array.pop() + sum(array);
}
  
console.log(sum(range(1,10)));
console.log(sum(range(5,50, 2)));