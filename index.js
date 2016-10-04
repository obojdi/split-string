String.prototype.splitChars = function(len) {
a = this.split('');
res = [];
i = 0;
[].forEach.call(a, function(b, c) {
	if (c % len == 0) {
		i++;
		res.push([])
	}
	res[i - 1].push(b);
});
f = [];
res.forEach(function(d) {
	f.push(d.join(''));
	return true;
});
g =f.join('\n');
return g;
};