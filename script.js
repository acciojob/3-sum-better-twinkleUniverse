function threeSum(arr, target) {
// write your code here
	let sum=arr[0]+[1]+[2];
	arr.sort((a, b) => a - b);
	for(let i=0;i<arr.length-2;i++){
		let j=i+1;
		let k=arr.length-1;
		while(j<k){
         let currSum=arr[i]+arr[j]+arr[k];
		 if(Math.abs(target-currSum)<Math.abs(target-sum))
			 sum=currSum;
		 if(target<arr[j]){
			 j++;
		 }else
			 k--;
		}
	}
	return sum;
	
}

module.exports = threeSum;
