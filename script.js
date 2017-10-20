// ///////////////////////////
// v1
// ///////////////////////////
console.info("v1.2");
var a = [2,1,5,0,3,4,7,2,3,1,0] , //10
	b = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6] , // 17
	c = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] , // 10
	d = [7, 0, 1, 3, 4, 1, 2, 1] , // 9
	e = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] , // 10
	f = [2, 2, 1, 2, 2, 3, 0, 1, 2] ,// 4
	j = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] , // 24
	k = [2, 2, 2, 2, 2] ;// 0

var h = [7, 0, 1, 3, 4, 1, 2, 1] , // 9 
	i = [10, 0, 5, 5, 5, 0, 1, 5, 0, 0] ,// 14 
	l = [100, 0, 5, 6, 8, 0] ;// 13 

function res( data ){ 

  var sum = 0,
  between = null,
  left = null,
  right = data[ data.length - 1 ];

  data.forEach( function  ( elem, index ){

	  if( left > elem ) {
	    sum = sum + (left - elem)
	  } else {
	    left = elem;
	    between = index;        
	  }
 
 }); //end  forEach function

  for ( i = data.length - 1; i > between; i-- ) {

    if( data[ i ] > right) {
      right = data[ i ];      
    } else {
    	null
    }

  	sum = sum - ( data[ between ] - right ); 

  }// end for 

  return sum;

};// end res function 


// console.log("result is: ", res(a) , "a - result must be 10");
// console.log("result is: ", res(b), "b - result must be 17");
console.log("result is: ", res( c ), "c - result must be 10");
console.log("result is: ", res( d ), "d - result must be 9");
console.log("result is: ", res( e ), "e - result must be 10");
console.log("result is: ", res( f ), "f - result must be 4");
console.log("result is: ", res( j ), "j - result must be 24");
console.log("result is: ", res( k ), "k - result must be 0"); 

console.log("result is: ", res( [7, 0, 1, 3, 4, 1, 2, 1] ), "- result must be 9"); 
console.log("result is: ", res( [10, 0, 5, 5, 5, 0, 1, 5, 0, 0] ), "- result must be 14"); 
console.log("result is: ", res( [100, 0, 5, 6, 8, 0]), " - result must be 13"); 

console.log("result is: ", res( h ), "- result must be 9"); 
console.log("result is: ", res( i ), "- result must be 14"); // why brouser show error in this array ? 
console.log("result is: ", res( l ), " - result must be 13"); 



