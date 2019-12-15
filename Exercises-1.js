//13. Logic Challenge - Most Frequent Largest Numbers
//===================================================


function sorting(arrNumber) {
    // code di sini

    for ( var i = 0; i < arrNumber.length; i++){
        for ( var j = i+1; j < arrNumber.length; j++) {
            if ( arrNumber[i] > arrNumber[j]) {
                var tmp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = tmp
            }
        }
    }
    return arrNumber
}
function getTotal(arrNumber) {
    // code di sini
    var tmp1 = []
    for ( var i = 0; i < arrNumber.length; i++) {
        var periksa = true
        for ( var j = 0; j < tmp1.length; j++) {
            if ( arrNumber[i] === tmp1[j][0]) {
                periksa = false
                tmp1[j][1]++
            }
        }
        if (periksa) {
            tmp1.push([arrNumber[i], 1])
        }
    }

    var max = 0
    var index = 0
    for ( var i = 0; i < tmp1.length; i++) {
        if (max < tmp1[i][0]) {
            max = tmp1[i][0]
            index = tmp1[i][1]
        }
    }
    return `angka paling besar adalah ${max} dan jumlah kemunculannya sebanyak ${index}`
}
  
function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
//   console.log(mostFrequentLargestNumbers([]));
//   //''