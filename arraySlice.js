let arraySlice = (arr,arrLength) => {
    result = []
    for(let i = 0; i<arr.length; i+=arrLength){
      result.push(arr.slice(i,i+arrLength))
    }
    return result
  }
  
  console.log(arraySlice([1, 3, 4, 5, 6], 2))
  console.log(arraySlice([3, 5, 6, 7, 9, 10], 3))
  console.log(arraySlice([1, 3, 5, 6, 7], 4))