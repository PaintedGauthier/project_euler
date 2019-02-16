var t = performance.now(),
	max = 4000000,
	x = 1, y = 2,
	tmp = 0,
	answer = 0;
while (x < max) {
	if (x % 2 == 0)
		answer += x;
		
  	tmp = x;
  	x = y;
  	y = tmp + y;
    // [x, y] = [y, x + y]; // slow .035 / .04
}
console.log(`answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
/* answer: 4613732 in (ms) 0.0100 */
