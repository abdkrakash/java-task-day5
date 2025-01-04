function ad(arr) {
    return arr.reduce((sum, num) => sum + Math.abs(num),0 );
}

document.writeln(ad([-1, -3, -5, -4, -10, 0])); 