function printArray(symbol,bool){
	var arr = ["James","Jill","Jane","Jack"]
	if(bool==true){
		//reverse array
		for(var i=arr.length-1; i>=0; i-- ){
			console.log(i+" " + symbol+" "+arr[i])
		}
	}
	else{
		//prints in order starting from the first element in the array 
		for(var i=0; i<arr.length; i++){
		console.log(i +  symbol + arr[i])
		}
	}
} 
printArray("=>",true) 