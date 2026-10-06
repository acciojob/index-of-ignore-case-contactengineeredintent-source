function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(str.length == 0 || subStr.length == 0){
        return 0;
    }
    let s1 = str.toLowerCase();
    let s2 = subStr.toLowerCase();
    let resultIndex = 0;
    let j=0;
    let count = 0;
    for(let i=0; i<s1.length; i++){
        if(s1.charAt(i) === s2.charAt(j)){
            resultIndex = i;
            count++;
            j++;
        }
        
    }
    if(count == s2.length){
        return resultIndex-count+1;
    }
    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
