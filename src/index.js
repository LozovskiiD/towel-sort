
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let b=[]
  if( matrix==undefined ) {return b} 
  for (let i=0; i<matrix.length; i++) {    
    b= i%2==0 ?  b.concat(matrix[i]) : b.concat(matrix[i].reverse())
  } 
  return b;  
}
