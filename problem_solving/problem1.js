// Prints help message to the console
// Returns a string
function allLongestStrings(inputArray) {
    let longestStrNChar = 0
    let longestStr = []
    inputArray.forEach(str => {
        if (str.length > longestStrNChar) {
            longestStr = [str]
            longestStrNChar = str.length
        }
        else if (str.length == longestStrNChar) {
            longestStr.push(str)
        }
    })
    return longestStr.toString()
}

console.log(allLongestStrings(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']))