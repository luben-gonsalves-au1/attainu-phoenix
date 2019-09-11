function convertToRoman(num) {
  var roman="";
  var numbers=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romanNumbers=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

for(var i=0;i<numbers.length;i++){
  while(num>=numbers[i]){
    roman=roman+romanNumbers[i];
    num=num-numbers[i]
  }
}
return roman;
}

console.log(convertToRoman(97));