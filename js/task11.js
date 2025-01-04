function numw(str) {
    var w = str.split(/\s+/); 
    return w.length; 
}

document.writeln(numw('hello from CodingAcademy!')); 



// // The source is from the MDN website, and this is its link for information and benefit, Coach Leen 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split