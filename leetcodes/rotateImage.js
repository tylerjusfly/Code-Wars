// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

//Constraints:
// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 var rotate = function(matrix) {
    transposeInplace(matrix)
    reverseEachRow(matrix)
}

 function reverseEachRow(matrix){
            matrix.forEach(r => r.reverse())
        }
    
    function transposeInplace(matrix){
    
    let result
    for(let i= 0; i < matrix.length; i++){
        
        for(let j= 0; j< matrix[i].length; j++){
            if(i !== j){
                // let temp = matrix[i][j]
                // matrix[i][j] = matrix[j][i]
                // matrix[j][i] = temp
                [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
            }
            else{
                break;
            }
        }
    }
    
}