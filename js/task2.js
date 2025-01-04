function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}

document.writeln(AlphabeticalOrder('hello')); 