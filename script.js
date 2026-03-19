function g(id) { return document.getElementById(id); }

g(‘rxTrigger’).onclick = function() {
g(‘overlay’).style.display = ‘block’;
};
g(‘closeBtn’).onclick = function() {
g(‘overlay’).style.display = ‘none’;
};
document.onkeydown = function(e) {
if (e.key === ‘Escape’) g(‘overlay’).style.display = ‘none’;
};
