const blessed = require('blessed');
const AsciiChart = require('../asciichart');

const s0 = new Array(120);
for(let i = 0; i < s0.length; i++) {
	s0[i] = Math.round(Math.random() * 15) * Math.sin(i * ((Math.PI * 4) / s0.length));
}

// Create a screen object.
const screen = blessed.screen({
	smartCSR: true,
});

screen.title = 'my window title';

// Create a box perfectly centered horizontally and vertically.
const box = blessed.box({
	top: 'center',
	left: 'center',
	width: '100%',
	height: '100%',
	content: AsciiChart.plot(s0),
	tags: true,
	border: {
		type: 'line',
	},
	style: {
		fg: 'white',
		bg: 'magenta',
		border: {
			fg: '#f0f0f0',
		},
		hover: {
			bg: 'green',
		},
	},
});

// Append our box to the screen.
screen.append(box);
// Focus our element.
box.focus();

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
	return process.exit(0);
});

// Render the screen.
screen.render();
