function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(str.length == 0 || subStr.length == 0){
        return -1;
    }
    let pool = str.toLowerCase();
    let target = subStr.toLowerCase();
    let resultIndex = 0;
    let j=0;
    let count = 0;
    for(let i=0; i<pool.length; i++){
        if(pool.charAt(i) === target.charAt(j)){
            resultIndex = i;
            count++;
            j++;
        }
        
    }
    if(count == target.length){
        return resultIndex-count+1;
    }
    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
