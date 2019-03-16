module.exports = function check(str, bracketsConfig) {
  // your solution
//   var t=str.split('');
//   for(var i=0; i< t.length; i++){
//     if (t[i]=t[i+1]){
//       t.splice(i, 2);
//     }
//   }
// if(t.length==0) {return true;}
// else {return false;}
// }
var t=str.split('');
for (var m=0; m<t.length; m++){
  for (var z=0; z<t.length; z++){
    for(var k=0; k<t.length; k++){
      for(var i=0; i< t.length; i++){
        for (var j=0;j< bracketsConfig.length; j++){
          if (t[i]==bracketsConfig[j][0] && t[i+1]==bracketsConfig[j][1]){
            t.splice(i, 2);
          }
        }
      }
    }
  }
}
if(t.length==0) {return true;}
else {return false;}
}
