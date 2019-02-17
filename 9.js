var t = performance.now(),
	limit = 1000,
	answer = [],
	temp = 0,
	max = 0,
	c = 0;
	
for (var a = 1; a < limit; ++a)
for (var b = a + 1; b < limit; ++b) {
	c = limit - a - b;
	if (a * a + b * b != c * c ||
		a + b + c != 1000) continue;
	answer = a * b * c;
	a = b = limit;
}
			
console.log(`// answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
VM2151:17 // answer: 31875000 in (ms) 2.4000
