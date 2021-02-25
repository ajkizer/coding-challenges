const multiplesOf3and5 = (number) => {
    let multiples = []
    for(let i = 1; i < number; i++){
      if(i%3 === 0 || i%5 === 0) {
        multiples.push(i)
      }
    } 
    return multiples.reduce((acc, val) => acc+val,0)
  }
  
  module.exports = multiplesOf3and5