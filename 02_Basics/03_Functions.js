//  using rest
function getNums(...nums) {
    return nums
}

console.log(getNums(200, 300, 400, 500));

function getNums2(val1, val2, ...nums) {
    return nums
}

console.log(getNums2(200, 300, 400, 500));
