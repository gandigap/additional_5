module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) return false;
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    for (let count = 0; count < bracketsConfig.length; count++) {
      if (arr[i] === bracketsConfig[count][0] && arr[i + 1] === bracketsConfig[count][1]) {
        arr.splice(i, 2);
        i = -1;
      }
    }
  }
  return !arr.length;


  // let array = [];
  // for (let i in str) {
  //   let currentElement = str[i];
  //   for (let j in bracketsConfig) {
  //     if (currentElement == bracketsConfig[j][1]) {
  //       if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
  //         if (array[array.length - 1] == bracketsConfig[j][0]) {
  //           array.pop();
  //         } else {
  //           return false;
  //         }
  //       } else {
  //         if (array[array.length - 1] == bracketsConfig[j][0]) {
  //           array.pop();
  //         } else {
  //           array.push(currentElement);
  //         }
  //       }
  //     } else if (currentElement == bracketsConfig[j][0]) {
  //       array.push(currentElement);
  //     }
  //   }
  // }

  // if (array.length == 0) {
  //   return true;
  // }
  // return false;

}
