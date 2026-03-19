document.addEventListener(‘DOMContentLoaded’, function() {

var PW = ‘hillock7’;
function $(id){ return document.getElementById(id); }

// AUTO TRANSITION
var msgs = [‘ACCESSING SECURE NODE…’, ‘VERIFYING CLEARANCE…’, ‘CONNECTION ESTABLISHED.’];
var el = $(‘entryLoading’);
var i = 0;
var interval = setInterval(function() {
i++;
if (i < msgs.length) {
el.textContent = msgs[i];
} else {
clearInterval(interval);
$(‘entryScreen’).style.opacity = ‘0’;
$(‘entryScreen’).style.transition = ‘opacity 0.3s ease’;
setTimeout(function() {
$(‘entryScreen’).style.display = ‘none’;
$(‘mainContent’).style.display = ‘flex’;
$(‘passwordPopup’).style.display = ‘flex’;
document.body.style.overflow = ‘hidden’;
$(‘passwordInput’).focus();
}, 300);
}
}, 500);

// PASSWORD
function checkPW() {
var inp = $(‘passwordInput’);
var err = $(‘passwordError’);
if (inp.value.trim() === PW) {
$(‘passwordPopup’).style.display = ‘none’;
document.body.style.overflow = ‘’;
} else {
inp.style.borderBottomColor = ‘#8b1a1a’;
inp.style.color = ‘#8b1a1a’;
err.textContent = ‘ACCESS DENIED — INVALID CODE’;
inp.value = ‘’;
setTimeout(function() {
inp.style.borderBottomColor = ‘’;
inp.style.color = ‘’;
err.textContent = ‘’;
}, 2000);
}
}
$(‘confirmBtn’).addEventListener(‘click’, checkPW);
$(‘passwordInput’).addEventListener(‘keydown’, function(e){
if (e.key === ‘Enter’) checkPW();
});

// BACK OVERLAY
$(‘rxTrigger’).addEventListener(‘click’, function() {
$(‘overlay’).style.display = ‘block’;
document.body.style.overflow = ‘hidden’;
});
$(‘closeBtn’).addEventListener(‘click’, function() {
$(‘overlay’).style.display = ‘none’;
document.body.style.overflow = ‘’;
});
document.addEventListener(‘keydown’, function(e) {
if (e.key === ‘Escape’) {
$(‘overlay’).style.display = ‘none’;
document.body.style.overflow = ‘’;
}
});

// IMAGES
function tryImg(el, src, cb) {
if (!el) return;
var t = new Image();
t.onload = function(){ el.src = src; if(cb) cb(); };
t.onerror = function(){};
t.src = src;
}
tryImg($(‘crestEntry’), ‘images/crest_popup.png’, function(){
$(‘crestEntry’).style.display = ‘block’;
$(‘crestEntryPh’).style.display = ‘none’;
});
tryImg($(‘crestMain’), ‘images/crest.png’, function(){
$(‘crestMain’).style.display = ‘block’;
$(‘crestMainPh’).style.display = ‘none’;
});
tryImg($(‘docWatermark’), ‘images/crest.png’, function(){
$(‘docWatermark’).style.display = ‘block’;
});
tryImg($(‘idImg’), ‘images/id_photo.jpg’, function(){
$(‘idImg’).style.display = ‘block’;
$(‘idPh’).style.display = ‘none’;
});
[‘examFront’,‘examSide’,‘examBack’].forEach(function(id, i) {
var names = [‘exam_front’,‘exam_side’,‘exam_back’];
var box = $(id); if(!box) return;
var img = box.querySelector(‘img’);
var ph  = box.querySelector(’.exam-ph’);
tryImg(img, ‘images/’+names[i]+’.jpg’, function(){
img.style.display = ‘block’;
box.style.padding = ‘0’;
if(ph) ph.style.display = ‘none’;
});
});
[[‘item01Photo’,‘item01_photo.jpg’],[‘item02Photo’,‘item02_photo.jpg’],
[‘item03Photo’,‘item03_photo.jpg’],[‘step3Photo’,‘step3_photo.jpg’],
[‘step4Photo’,‘step4_photo.jpg’]
].forEach(function(p) {
var c = $(p[0]); if(!c) return;
var img = c.querySelector(’.b-photo-img’);
var ph  = c.querySelector(’.b-photo-ph’);
tryImg(img, ‘images/’+p[1], function(){
img.style.display = ‘block’;
if(ph) ph.style.display = ‘none’;
});
});

});
