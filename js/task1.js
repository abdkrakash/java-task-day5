function findSmallest(arr) {
    if (arr.length === 0) {
    }
    // return Math.max(...arr); If we want the max value. for information and benefit, Coach Leen 
    return Math.min(...arr);

}

document.writeln(findSmallest([30, 45, 60, 7])); 



// ---------------------------------------
// Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:

// Function arguments list (myFunction(a, ...iterableObj, b))
// Array literals ([1, ...iterableObj, '4', 'five', 6])
// Object literals ({ ...obj, key: 'value' })


// The source is from the MDN website, and this is its link for information and benefit, Coach Leen 
// https://developer.mozilla.org/en-US/