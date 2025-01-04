function newone(arr) {
    
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var length = arr.length;
    var average = arr.reduce((sum, current) => sum + current ) / 5;
    return [min, max, length, average];
}
document.writeln(newone([7, 13, 3, 77, 100])); 