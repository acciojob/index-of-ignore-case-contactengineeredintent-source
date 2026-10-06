function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s2.length == 0){
        return 0;
    }
    if(s1.length == 0){
        return -1;
    }
    let pool = s1.toLowerCase();
    let target = s2.toLowerCase();
    if(pool.includes(target)){
        return pool.indexOf(target);
    }
    // console.log(pool.includes(target));
    return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
