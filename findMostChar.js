let findMostChar = function(str){
    let max = 0
    let mostChar = ''
    for(i=0; i < str.length; i++){
      lengthSplit = str.split(str[i]).length
      if(lengthSplit > max){
        max = lengthSplit
        mostChar = str[i]
      }
    }
    return mostChar
  }
  
  console.log(findMostChar('a1a11b1b221133aa'))