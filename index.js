const AsciiChart = require('./asciichart');

function printProgress(thing){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(AsciiChart.plot(thing));
}

setInterval(() => {
	const s0 = new Array(120);
	for(let i = 0; i < s0.length; i++) {
		s0[i] = Math.round(Math.random() * 15) * Math.sin(i * ((Math.PI * 4) / s0.length));
	}
	printProgress(s0);
}, 1000);
// let o = 0;
// while(o < 1000000) {

// 	o++;
// }
