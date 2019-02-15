let t = performance.now(),
	fin = 0;
for (let i = 0; i < 1000; ++i)
	if (i % 3 == 0 || i % 5 == 0) 
		fin+= i;
console.log('answer:',fin,'in (ms) ', (performance.now() - t).toFixed(4));
/* answer: 233168 in (ms)  0.0450 */
