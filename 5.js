var t = performance.now(),
	max = 20,
	temp = 0,
	answer = max,
	working = true;
	
while (working) {
	answer++;
	if (answer % 2 != 0) continue;
    for (var i = 3; i <= max; i++) {
		temp = answer / i;
		if (Math.floor(temp) != temp) break;
		if (i == max) working = false;
    }
}
			
console.log(`answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
answer: 232792560 in (ms) 1927.8950
