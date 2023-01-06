var array = [-3,1,6,0,4,-1,2,1];
var positiveCounter = 0;
console.log(array);

for(var i = 0; i <= array.length; i++){
	if(array[i] > 0){
      console.log("This part of the array is positive!");
      positiveCounter++;
    }
    if(array[i] < 0){
       console.log("This part of the array is negative!");
    }
    if(array[i] === 0){
      console.log("This part of the array is zero!");
    }
}
console.log("There are " + positiveCounter + " positive numbers in the array!");
