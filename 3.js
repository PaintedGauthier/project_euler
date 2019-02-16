var t = performance.now(),
	integer = 13195,
    primeArray = [],
    isPrime = false;

for(i = 2; i <= integer; i++){
	if (integer % i != 0) continue;

	for(var j = 2; j <= i/2; j++)
	  isPrime = (i % j != 0);
	if (!isPrime) continue;
		
	integer /= i
	primeArray.push(i);  
}
// .025 .04
console.log(`answer: ${primeArray} in (ms) ${(performance.now() - t).toFixed(4)}`);
// answer: 4613732 in (ms) 0.0350
