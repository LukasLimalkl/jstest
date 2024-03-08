function inverteString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
 
    return newString;
}

let string1 = inverteString("Lukas")

console.log(string1)