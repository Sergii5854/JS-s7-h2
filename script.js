function res(data){ 

	var sum = null,  
  	pic = null,
    picArr = [],
    arrWater = [];
    

    for(var i = 0; i < data.length; i++){
      if(pic < data[i]){
      	pic = data[i];
        picArr.push(i);
      }
      
      if(data[i] > data[i+1]){
      	 wsum = data[i] - data[i+1] ;
 				 arrWater.push(wsum);
      }

    }
    	var sum =  Object.values(arrWater).reduce((a, b) => a + b);
     console.log("picArr",picArr);
    console.log("arrWater",arrWater);

    return sum;
}



console.log("result is: ", res(a) , "a - result must be 10");
console.log("result is: ", res(b), "b - result must be 17");
console.log("result is: ", res(c), "c - result must be 10");
console.log("result is: ", res(d), "d - result must be 9");
console.log("result is: ", res(e), "e - result must be 10");
console.log("result is: ", res(f), "f - result must be 4");
console.log("result is: ", res(j), "j - result must be 24");
console.log("result is: ", res(k), "k - result must be 0");