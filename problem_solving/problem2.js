// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    let results = [0, 0]
    a.forEach((val, id) => {
        results[id % 2] += val
    })
    return results.toString()
}

console.log(alternatingSums([60, 40, 55, 75, 64]))