function mul(arr) {
    var length = arr.length; 
    return arr.map(element => element * length); 
}
document.writeln(mul([4, 2, 5])); 