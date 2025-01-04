


function douc(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += str[i] + str[i]; 
    }
    return result;
}

document.writeln(douc('karkash'));  
