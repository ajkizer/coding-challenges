//write a function that generates a fibonacci sequence as an array of "n" values

function fibonacci(n) {
    if(n <= 0) return []
    else if (n === 1) return [1]
    
    let array = [0,1]
    
    let last = 1
    let secondToLast = 0
    
    for(let i=2; i < n; i++){
      const num = array[last] + array[secondToLast]
      array.push(num)
      last++
      secondToLast++
    }
    
    return array
  }