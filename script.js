// ========== PASSWORD SYSTEM ==========
var CORRECT_PASSWORD = ‘hillock7’;

function initPasswordSystem() {
var overlay = document.getElementById(‘passwordOverlay’);
var input = document.getElementById(‘passwordInput’);
var errorMsg = document.getElementById(‘passwordError’);
var confirmBtn = document.getElementById(‘confirmBtn’);
var abortBtn = document.getElementById(‘abortBtn’);
var deniedScreen = document.getElementById(‘accessDeniedScreen’);

if (!overlay || !input || !confirmBtn || !abortBtn) return;

document.body.style.overflow = ‘hidden’;

function checkPassword() {
var val = input.value.trim();
if (val === CORRECT_PASSWORD) {
overlay.style.display = ‘none’;
document.body.style.overflow = ‘’;
} else {
input.style.borderBottomColor = ‘#8b2a2a’;
input.style.color = ‘#8b2a2a’;
if (errorMsg) errorMsg.textContent = ‘ACCESS DENIED — INVALID CODE’;
input.value = ‘’;
setTimeout(function () {
input.style.borderBottomColor = ‘’;
input.style.color = ‘’;
if (errorMsg) errorMsg.textContent = ‘’;
}, 2000);
}
}

confirmBtn.addEventListener(‘click’, checkPassword);

input.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Enter’) checkPassword();
});

abortBtn.addEventListener(‘click’, function () {
overlay.style.display = ‘none’;
if (deniedScreen) {
deniedScreen.style.display = ‘flex’;
}
});
}

// ========== BACK DOCUMENT OVERLAY ==========
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

// ========== IMAGE LOADING ==========
function tryLoadImage(imgEl, src, onSuccess) {
if (!imgEl) return;
var testImg = new Image();
testImg.onload = function () {
imgEl.src = src;
if (onSuccess) onSuccess();
};
testImg.onerror = function () {};
testImg.src = src;
}

function initImages() {
var backPhotos = [
{ src: ‘images/item01_photo.jpg’, id: ‘item01Photo’ },
{ src: ‘images/item02_photo.jpg’, id: ‘item02Photo’ },
{ src: ‘images/item03_photo.jpg’, id: ‘item03Photo’ },
{ src: ‘images/step3_photo.jpg’,  id: ‘step3Photo’  },
{ src: ‘images/step4_photo.jpg’,  id: ‘step4Photo’  },
];

backPhotos.forEach(function (cfg) {
var container = document.getElementById(cfg.id);
if (!container) return;
var placeholder = container.querySelector(’.back-photo-placeholder’);
var img = container.querySelector(’.back-photo-img’);
if (!img) return;
tryLoadImage(img, cfg.src, function () {
if (placeholder) placeholder.style.display = ‘none’;
img.style.display = ‘block’;
});
});

var frontPhotos = [
{ src: ‘images/exam_front.jpg’, id: ‘examFront’ },
{ src: ‘images/exam_side.jpg’,  id: ‘examSide’  },
{ src: ‘images/exam_back.jpg’,  id: ‘examBack’  },
];

frontPhotos.forEach(function (cfg) {
var container = document.getElementById(cfg.id);
if (!container) return;
var placeholder = container.querySelector(’.exam-photo-placeholder’);
var img = container.querySelector(’.exam-photo-img’);
if (!img) return;
tryLoadImage(img, cfg.src, function () {
if (placeholder) placeholder.style.display = ‘none’;
img.style.display = ‘block’;
container.style.padding = ‘0’;
});
});

var idImg = document.getElementById(‘idPhotoImg’);
if (idImg) {
tryLoadImage(idImg, ‘images/id_photo.jpg’, function () {
var ph = document.getElementById(‘idPhotoPlaceholder’);
if (ph) ph.style.display = ‘none’;
idImg.style.display = ‘block’;
});
}

var crestMain = document.getElementById(‘crestMain’);
if (crestMain) {
tryLoadImage(crestMain, ‘images/crest.png’, function () {
var ph = document.getElementById(‘crestPlaceholder’);
if (ph) ph.style.display = ‘none’;
crestMain.style.display = ‘block’;
});
}

var crestWatermark = document.getElementById(‘crestWatermark’);
if (crestWatermark) {
tryLoadImage(crestWatermark, ‘images/crest.png’, function () {
crestWatermark.style.display = ‘block’;
});
}

var crestPopup = document.getElementById(‘crestPopup’);
if (crestPopup) {
tryLoadImage(crestPopup, ‘images/crest_popup.png’, function () {
var ph = document.getElementById(‘crestPopupPlaceholder’);
if (ph) ph.style.display = ‘none’;
crestPopup.style.display = ‘block’;
});
}
}

// ========== INIT ==========
document.addEventListener(‘DOMContentLoaded’, function () {
initPasswordSystem();
initImages();
document.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Escape’) closeOverlay();
});
});
