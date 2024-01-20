testObject = {
    "one": "hi there",
    "two": "this is the second line"
}
theKeys = Object.keys(testObject)

theKeys.forEach(element => {
    console.log(`Here is the text ${testObject[element]}`);
});
//console.log(theKeys);
//  This text is a comment and it was written on the new branch