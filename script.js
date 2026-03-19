var PW = ‘hillock7’;
function g(id) { return document.getElementById(id); }

// PASSWORD
g(‘confirmBtn’).onclick = function() {
var inp = g(‘passwordInput’);
if (inp.value.trim() === PW) {
g(‘passwordPopup’).style.display = ‘none’;
} else {
g(‘passwordError’).textContent = ‘ACCESS DENIED’;
inp.value = ‘’;
setTimeout(function() { g(‘passwordError’).textContent = ‘’; }, 2000);
}
};
g(‘passwordInput’).onkeydown = function(e) {
if (e.key === ‘Enter’) g(‘confirmBtn’).onclick();
};

// OVERLAY
g(‘rxTrigger’).onclick = function() {
g(‘overlay’).style.display = ‘block’;
};
g(‘closeBtn’).onclick = function() {
g(‘overlay’).style.display = ‘none’;
};
document.onkeydown = function(e) {
if (e.key === ‘Escape’) g(‘overlay’).style.display = ‘none’;
};
