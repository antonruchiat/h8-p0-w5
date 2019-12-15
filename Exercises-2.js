//14. Logic Challenge - Password Generator
//========================================

function changeVocals (str) {
    //code di sini
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var vocal = "aeiou"
    var tmp = ""

    for ( var i = 0; i < str.length; i++) {
        var periksa = false
        for ( var j = 0; j < vocal.length; j++) {
            if ( str[i] === vocal[j] ) {
              periksa = true
            } 
        }
        if (periksa===true) {
            for ( var k = 0; k < abjad.length; k++) {
                if (str[i] === abjad[k]) {
                    tmp += abjad[k+1]
                }
            }
        }
        else {
            tmp += str[i]
        }
    } 
    return tmp
}  
  function reverseWord (str) {
    //code di sini
    var tmpReverse = ""
    for ( var i = str.length-1; i >= 0; i--) {
        tmpReverse += str[i]
    }
    return tmpReverse
}


function setLowerUpperCase (str) {
    //code di sini
    var tmp = ""

    for ( var i = 0; i < str.length; i++) {
        if ( str[i] === str[i].toUpperCase()) {
            tmp += str[i].toLowerCase()
        }

        if ( str[i] === str[i].toLowerCase()) {
            tmp += str[i].toUpperCase()
        }
    }

    return tmp
}

function removeSpaces (str) {
    //code di sini
    var tmp = ""
    for ( var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            periksa = true
        }

        if ( str[i] !== " ") {
            tmp += str[i]
        }
    }
    return tmp
}

function passwordGenerator (name) {
    //code di sini
    var gantiVocal = changeVocals(name)
    var reveseLetter = reverseWord(gantiVocal)
    var uppLow = setLowerUpperCase(reveseLetter)
    var hapusSpasi = removeSpaces(uppLow)
    
    return hapusSpasi
}

// console.log(passwordGenerator("sabe A"))
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'