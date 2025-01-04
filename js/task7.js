function nuo(arr) {
    return arr.filter(element => typeof element !== 'string');
}

document.writeln(nuo(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 
