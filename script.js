// ///////////////////////////
// v1
// ///////////////////////////
console.info("v1.1");
var a = [2,1,5,0,3,4,7,2,3,1,0], //10
	b = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6], // 17
	c = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], // 10
	d = [7, 0, 1, 3, 4, 1, 2, 1], // 9
	e = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], // 10
	f = [2, 2, 1, 2, 2, 3, 0, 1, 2] ,// 4
	j = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8], // 24
	k = [2, 2, 2, 2, 2] ;// 0


function res(data){ 

	var sum = null;

    diffArr=[];
    for(var i=0; i<data.length-1; i++){
        diffArr.push(data[i+1]-data[i]);
 			sum = sum + data[i];   
    }
    return sum;
}



console.log(res(a) , "result must be 10");
console.log(res(b), "result must be 17");
console.log(res(c), "result must be 10");
console.log(res(d), "result must be 9");
console.log(res(e), "result must be 10");
console.log(res(f), "result must be 4");
console.log(res(j), "result must be 24");
console.log(res(k), "result must be 0");
