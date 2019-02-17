var t = performance.now(),
	limit = 2000000,
	answer = 0;
	
const is_prime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

for (var i = 1; i <= limit; ++i)
	if (is_prime(i))
		answer += i;
			
console.log(`// answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
// answer: 142913828922 in (ms) 671.7600
