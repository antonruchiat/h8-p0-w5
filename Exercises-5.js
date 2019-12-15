//17. Logic Challenge - Kali Terus (Rekursif)
//===========================================


function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka = angka.toString()
    var sum = 1
    if ( strAngka.length <= 1) {
        return angka
    } else {
        for ( var i = 0; i < strAngka.length; i++) {
            sum *= Number(strAngka[i])
        }   
        return kaliTerusRekursif(sum)
    }


  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6