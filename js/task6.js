function fa(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * fa(n - 1); 
}
document.writeln(fa(8)); 