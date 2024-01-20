testObject = {
    "one": "hi there",
    "two": "this is the second line"
}
theKeys = Object.keys(testObject)

theKeys.forEach(element => {
    console.log(`Here is the text ${testObject[element]}`);
});
//console.log(theKeys);