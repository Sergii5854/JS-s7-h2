// ///////////////////////////
// v1
// ///////////////////////////
console.info("v1.2");
var a = [2,1,5,0,3,4,7,2,3,1,0], //10
	b = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6], // 17
	c = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], // 10
	d = [7, 0, 1, 3, 4, 1, 2, 1], // 9
	e = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], // 10
	f = [2, 2, 1, 2, 2, 3, 0, 1, 2] ,// 4
	j = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8], // 24
	k = [2, 2, 2, 2, 2] ;// 0


function res(data){ 

	var sum = 0,
    left = null,
    between = null,
   	right = data[data.length - 1];
    
    data.forEach(function(elem, index){
    
      if(left > elem) {
				sum = sum + (left - elem)
      }else{
      	left = elem;
        between = index;        
      }
      
    });
    
    for (i = data.length - 1; i > right; i--) {
    if(data[i] > right){
         right = data[i];      
         }
        sum = sum - (data[between] - right); 
       
    }
    return sum;
}

// ///////////////////////////
// v2
// ///////////////////////////

console.log("result is: ", res(a) , "a - result must be 10");
console.log("result is: ", res(b), "b - result must be 17");
console.log("result is: ", res(c), "c - result must be 10");
console.log("result is: ", res(d), "d - result must be 9");
console.log("result is: ", res(e), "e - result must be 10");
console.log("result is: ", res(f), "f - result must be 4");
console.log("result is: ", res(j), "j - result must be 24");
console.log("result is: ", res(k), "k - result must be 0"); 



console.info("v2 - no ready ")
var a = [2,1,5,0,3,4,7,2,3,1,0]  ;

function res(data){ 

	// var sum = null,  
 //  	pic = null,
 //    pic_arr = [],
 //    arr_water = [];
    
 //    for(var i = 0; i < data.length; i++){
 //      if( pic < data[i] ){
 //      	pic = data[i];
 //        pic_arr.push( i );
 //       // picArr.push( data[i] );
 //      }
      
 //      if(data[i] < pic && pic <= pic ){
 //      	var water_sum = pic - data[i];
 // 				 arr_water.push(water_sum);
 //      }

 //    }

    // for(var i = 0; i < data.length; i++){
    //   if( pic < data[i] ){
    //   	pic = data[i];
    //     picArr.push( i );
    //    // picArr.push( data[i] );
    //   }
      
    //   if(data[i] > data[i+1]){
    //   	 wsum = data[i] - data[i+1] ;
 			// 	 arrWater.push(wsum);
    //   }

    // }
    	// var sum =  Object.values(arr_water).reduce((a, b) => a + b);
    	 // console.log("pic",pic);
     // console.log("picArr",pic_arr);
    // console.log("arrWater",arr_water);

    // return sum;
}



console.log("result is: ", res(a) , "a - result must be 10");
// console.log("result is: ", res(b), "b - result must be 17");
// console.log("result is: ", res(c), "c - result must be 10");
// console.log("result is: ", res(d), "d - result must be 9");
// console.log("result is: ", res(e), "e - result must be 10");
// console.log("result is: ", res(f), "f - result must be 4");
// console.log("result is: ", res(j), "j - result must be 24");
// console.log("result is: ", res(k), "k - result must be 0");