// Cara satu, caraku
let findMostChar = function(str){
    let max = 0
    let mostChar = ''
    for(i=0; i < str.length; i++){
      lengthSplit = str.split(str[i]).length
      console.log(str.split(str[i]))
      if(lengthSplit > max){
        max = lengthSplit
        mostChar = str[i]
      }
    }
    return mostChar
  }
  
  // console.log(findMostChar('aabac'))
  
  // Cara dua, Mas Yudi
  function check(str) {
    // cari jumlah
    let total = []
    for(let i=0; i < str.length; i++) {
      if(total[str[i]]) {
        total[str[i]]++
      }else{
        total[str[i]] = 1
      }
    }
    // console.log(total)
    let sortTotal = total.sort();
    let max = sortTotal[sortTotal.length-1]
  
    for(let i=0; i<str.length; i++) {
      if(total[str] === max){
        return str[i]
      }
    }
  }
  
  console.log(check('aaba'))