// 20. Logic Challenge - Hapus Simbol (Regex)
//===========================================

function hapusSimbol(str) {
    // you can only write your code here!
    var arr = str.match(/[a-z\d]+/gi)
    var tmp = ""


    for (var i = 0; i < arr.length; i++) {
        tmp += arr[i]
    }

    return tmp
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100