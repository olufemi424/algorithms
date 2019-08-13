
const countRepeatingLetter =(letters)=>{
   const tempArr = letters.split('')
   let arrLetter = []
   let count = 1

   for(let i = 0; i < tempArr.length; i++){
      if(tempArr[i] === tempArr[i + 1]){
         count++
      }else{
         let value = `${count}${tempArr[i]}`
         arrLetter = [...arrLetter, value]
         count = 1
      }
   }

   return arrLetter.join('')
}


console.log(countRepeatingLetter('ffffeerttttooo'))