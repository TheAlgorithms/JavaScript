// Convert binary
function convertToBinary(number)
{
    let result = []
    let i
    for(i = number; i > 0; i = parseInt(i / 2))
    {
        result.push(i % 2)
    }
    return result.reverse().join(" ")
}
console.log(convertToBinary(12))
