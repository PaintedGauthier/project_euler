var t = performance.now(),
	temp = 0,
	answer = 0;
	
for (var i = 1; i <= 100; ++i) {
	answer += Math.pow(i, 2);
	temp += i;
}
answer = Math.pow(temp, 2) - answer;
			
console.log(`// answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
// answer: 25164150 in (ms) 0.0350
