module.exports = function check(str, bracketsConfig) {
  var a = [];
	var b = {};
	bracketsConfig.forEach(e => {a.push(e[0]); b[e[1]] = e[0];})
	var s = [];
	for (var i = 0; i < str.length; i++) {
		var c = str[i];
		((s.length !== 0) && (b[c] === s[s.length - 1])) ? s.pop() : s.push(c);
	}
	return s.length === 0;
}
