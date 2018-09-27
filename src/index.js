module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = [];
  for(let i in str) {
    let currentElement = str[i];
    for(let j in bracketsConfig) {
      if(currentElement == bracketsConfig[j][1]) {
        if(bracketsConfig[j][0] != bracketsConfig[j][1]){
          if(array[array.length - 1] == bracketsConfig[j][0]) {
            array.pop();
          } else {
            return false;
          }          
        } else {
          if(array[array.length - 1] == bracketsConfig[j][0]) {
            array.pop();
          } else {
            array.push(currentElement);
          }
        }
      } else if(currentElement == bracketsConfig[j][0]) {
        array.push(currentElement);
      }
    }
  }

  if(array.length == 0) {
    return true;
  }
  return false;

}
