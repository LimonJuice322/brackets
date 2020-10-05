module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const brackets = {};
    bracketsConfig.forEach(item => brackets[`${item[0]}`] = item[1]);

    for (let i = 0; i < str.length; i++) {
        let current = str[i];
        if (stack[stack.length-1] == current) stack.pop();
        else if (brackets[current]) stack.push(brackets[current]);
        else return false;
    }
    return (stack.length) ? false : true
}
