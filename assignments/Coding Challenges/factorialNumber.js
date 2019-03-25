"use strict"

var fact=(num)=>{
  if (num === 0 || num === 1) {
    return 1;
  }
  else {
     return num * fact(num - 1); 
  }      
}

fact(5)