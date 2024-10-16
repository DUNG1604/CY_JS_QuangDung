const strs = ["dog","racecar","car"]
const fn = (strs) => {
    for (let i = 0; i < strs[0].length; ++i)
        for (let j = 1; j < strs.length; ++j)
            if (i == strs[j].length || strs[j][i] != strs[0][i])
                return strs[0].slice(0, i);
    return strs[0];
}
if (strs.length == 0) {
    console.log(".");
} else {
    if (fn(strs) == '') {
        console.log(".");
    } else {
        console.log(fn(strs))
    }
}