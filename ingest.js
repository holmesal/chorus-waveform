var fs = require('fs');

// read in the file
var buf = fs.readFileSync('./waveform.data');
console.info(buf.length);

for (var i = 0; i <= buf.length-1; i++) {
	// console.info(i);
	const sint = buf.readInt16LE(i);
	// console.info(sint);
	const frac = sint / 32767;
	let string = '';
	const level = Math.abs(Math.round(frac * 20));
	for (var j = 0; j < level; j++) {
		string += ' ';
	}
	string += `. \n`;
	console.info(string)
	// console.info(buf.readInt16LE(i) / 32767)
}