//16. Logic Challenge - Total Digit (Rekursif)
//============================================

function totalDigitRekursif(angka) {
    // you can only write your code here!
    var keString = angka.toString()

    if (keString.length === 0) {
        return 0
    } else {
        return parseInt(keString[0]) + totalDigitRekursif(keString.slice(1))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
//   console.log(totalDigitRekursif(5)); // 5
//   console.log(totalDigitRekursif(21)); // 3
//   console.log(totalDigitRekursif(11111)); // 5