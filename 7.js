var t = performance.now(),
	temp = 0,
	limit = 10001,
	i = 0,
	answer = 0;
	
const is_prime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
while (true) {
	++i;
	if (!is_prime(i) ||
		++temp != limit) continue;
	answer = i;
	break;
}
			
console.log(`// answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
VM809:20 // answer: 104743 in (ms) 17.0500
