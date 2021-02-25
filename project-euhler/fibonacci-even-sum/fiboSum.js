const fiboEvenSum = (n) => {
  
    let fibArr = [1,2];
    let idx1 = 0;
    let idx2 = 1;
  
    for(let i = 3; i <= n; i+=fibArr[idx1]){
      idx1 += 1;
      idx2 += 1;
      fibArr.push(i);
    }
  
    return fibArr.filter(num => num%2===0).reduce((acc, val) => acc + val, 0)
  }

  module.exports = fiboEvenSum