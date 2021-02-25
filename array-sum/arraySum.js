const arraySum = (arr) => {
    const reducer = (acc, num) => {
        if(typeof num === "string"){
            return "Array must only contain numbers"
        }
        return acc + num
    }


    return arr.reduce(reducer, 0);
}

module.exports = arraySum