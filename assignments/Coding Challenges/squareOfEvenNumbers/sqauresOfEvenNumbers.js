var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

var evenSqaures=[];

for(var i=0;i<numbers.length;i++){
  if(numbers[i]%2==0){
    evenSqaures.push(numbers[i]*numbers[i])
  }
}

console.log(evenSqaures)


//functional way
var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

var evenSqrs=numbers.filter(x=>x%2==0).map(x=>x*x);
console.log(evenSqrs)
