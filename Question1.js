function getEvenNumbers(arr) {
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
          }
    }
}
var arr = [1,2,3,4,5,6];
getEvenNumbers(arr);