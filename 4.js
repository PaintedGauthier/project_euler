var t = performance.now(),
	list = [],
	temp = 0,
	answer = 0,
	orginal = 0,
	flipped = 0;

function is_pali(num) {
	// lets not redeclare vars everytime
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
	
for (var x = 999;x > 99 && answer == 0; --x) 
for (var y = 999;y > 99 && answer == 0; --y) 
	if (is_pali(x * y)) 
		list.push(x * y);
answer = Math.max(...list)
			
console.log(`answer: ${answer} in (ms) ${(performance.now() - t).toFixed(4)}`);
// answer: 906609 in (ms) 145.9200 // answer: 580085 in (ms) 5.0700
