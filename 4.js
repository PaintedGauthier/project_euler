
var t = performance.now(),
	x = 999,
	y = 999,
	temp = 0,
	answer = 0,
	orginal = 0,
	flipped = 0;

	function is_pali(num) {
		temp = 0;
		orginal = num;	
		flipped = 0;
		while(num > 0) {
			temp = num % 10;
			num = parseInt(num / 10);
			flipped = flipped * 10 + temp;
		}
		return flipped == orginal;
	}
	
	while (x > 99) {
		answer = x * y;
		if(is_pali(answer)) break;
		y--;
		if (y > 100) continue;
		x--;
		y = 999;
	}
// avg: 1.1012 | min: 0.635 | max: 4.435
console.log(`answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
// answer: 580085 in (ms) 5.0700
