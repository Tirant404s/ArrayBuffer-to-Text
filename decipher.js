let str = '';
//e is the input buffer
let hex = [...new Uint8Array(e)]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
        console.log(str)
