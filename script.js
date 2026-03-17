var CORRECT_PASSWORD = ‘hillock7’;

document.addEventListener(‘DOMContentLoaded’, function () {

var entryScreen  = document.getElementById(‘entryScreen’);
var mainContent  = document.getElementById(‘mainContent’);
var passPopup    = document.getElementById(‘passwordPopup’);
var enterBtn     = document.getElementById(‘enterBtn’);
var confirmBtn   = document.getElementById(‘confirmBtn’);
var input        = document.getElementById(‘passwordInput’);
var errorMsg     = document.getElementById(‘passwordError’);

// — initial state —
// entryScreen is visible (block) via CSS
// mainContent is hidden (display:none) via CSS
// passPopup is hidden (display:none) via CSS

// STEP 1: ENTER button
if (enterBtn) {
enterBtn.addEventListener(‘click’, function () {
entryScreen.style.display = ‘none’;
mainContent.style.display = ‘flex’;
passPopup.style.display   = ‘flex’;
document.body.style.overflow = ‘hidden’;
});
}

// STEP 2: password confirm
function checkPassword() {
if (!input) return;
var val = input.value.trim();
if (val === CORRECT_PASSWORD) {
passPopup.style.display = ‘none’;
document.body.style.overflow = ‘’;
} else {
input.style.borderBottomColor = ‘#8b1a1a’;
input.style.color = ‘#8b1a1a’;
if (errorMsg) errorMsg.textContent = ‘ACCESS DENIED — INVALID CODE’;
input.value = ‘’;
setTimeout(function () {
input.style.borderBottomColor = ‘’;
input.style.color = ‘’;
if (errorMsg) errorMsg.textContent = ‘’;
}, 2000);
}
}

if (confirmBtn) confirmBtn.addEventListener(‘click’, checkPassword);
if (input) {
input.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Enter’) checkPassword();
});
}

// back overlay
document.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Escape’) closeOverlay();
});

// images
initImages();
});

// ========== BACK OVERLAY ==========
function openOverlay() {
var el = document.getElementById(‘overlay’);
if (el) {
el.style.display = ‘block’;
document.body.style.overflow = ‘hidden’;
}
}

function closeOverlay() {
var el = document.getElementById(‘overlay’);
if (el) {
el.style.display = ‘none’;
document.body.style.overflow = ‘’;
}
}

// ========== IMAGES ==========
function tryLoad(id, src, onLoad) {
var el = document.getElementById(id);
if (!el) return;
var t = new Image();
t.onload = function () { el.src = src; if (onLoad) onLoad(el); };
t.onerror = function () {};
t.src = src;
}

function tryLoadInContainer(containerId, src) {
var container = document.getElementById(containerId);
if (!container) return;
var ph  = container.querySelector(’.back-photo-placeholder’);
var img = container.querySelector(’.back-photo-img’);
if (!img) return;
var t = new Image();
t.onload = function () {
img.src = src;
img.style.display = ‘block’;
if (ph) ph.style.display = ‘none’;
};
t.onerror = function () {};
t.src = src;
}

function tryLoadExam(containerId, src) {
var container = document.getElementById(containerId);
if (!container) return;
var ph  = container.querySelector(’.exam-photo-placeholder’);
var img = container.querySelector(’.exam-photo-img’);
if (!img) return;
var t = new Image();
t.onload = function () {
img.src = src;
img.style.display = ‘block’;
container.style.padding = ‘0’;
if (ph) ph.style.display = ‘none’;
};
t.onerror = function () {};
t.src = src;
}

function initImages() {
// crest — entry
tryLoad(‘crestEntry’, ‘images/crest_popup.png’, function (el) {
el.style.display = ‘block’;
var ph = document.getElementById(‘crestEntryPlaceholder’);
if (ph) ph.style.display = ‘none’;
});

// crest — header
tryLoad(‘crestMain’, ‘images/crest.png’, function (el) {
el.style.display = ‘block’;
var ph = document.getElementById(‘crestPlaceholder’);
if (ph) ph.style.display = ‘none’;
});

// crest — watermark
tryLoad(‘crestWatermark’, ‘images/crest.png’, function (el) {
el.style.display = ‘block’;
});

// id photo
tryLoad(‘idPhotoImg’, ‘images/id_photo.jpg’, function (el) {
el.style.display = ‘block’;
var ph = document.getElementById(‘idPhotoPlaceholder’);
if (ph) ph.style.display = ‘none’;
});

// exam photos
tryLoadExam(‘examFront’, ‘images/exam_front.jpg’);
tryLoadExam(‘examSide’,  ‘images/exam_side.jpg’);
tryLoadExam(‘examBack’,  ‘images/exam_back.jpg’);

// back photos
tryLoadInContainer(‘item01Photo’, ‘images/item01_photo.jpg’);
tryLoadInContainer(‘item02Photo’, ‘images/item02_photo.jpg’);
tryLoadInContainer(‘item03Photo’, ‘images/item03_photo.jpg’);
tryLoadInContainer(‘step3Photo’,  ‘images/step3_photo.jpg’);
tryLoadInContainer(‘step4Photo’,  ‘images/step4_photo.jpg’);
}
