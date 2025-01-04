function add(num) {
    var x = 0; 
    for (var i = num; i >= 0; i--) {
        x += i;  
    }
    return x;  
}

document.writeln(add(8));  
