function HammingDistance(str1,str2){
    var count=0;
    var l1=str1.length;
    var l2=str2.length;
    if(l1!=l2) console.log("Unequal length string");
    else{ 
    for(var i=0;i<l1;i++){
      if(str1[i].toLowerCase()!=str2[i].toLowerCase()){
        count++;
      }
    }
    console.log(count);
    }
  }
  
  var string1='kathrin';
  var string2='karolin';
  HammingDistance(string1,string2);