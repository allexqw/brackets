module.exports = function check(str, bracketsConfig) {
let a =0;
let b = 0;
for (let i = 0; i < bracketsConfig.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if(bracketsConfig[i][0]==bracketsConfig[i][1]){
        continue   
    }
    if (bracketsConfig[i][0] == str[j]) {
        a++;
      } else if (bracketsConfig[i][1] == str[j]) {
        if(a>b){
          b++;
        }
      }
    }
}
if (a == b) return true;
else return false;
}
