var CORRECT_PASSWORD = ‘hillock7’;

// ========== ENTRY SCREEN ==========
function initEntryScreen() {
var enterBtn = document.getElementById(‘enterBtn’);
var entryScreen = document.getElementById(‘entryScreen’);
var mainContent = document.getElementById(‘mainContent’);
var passwordPopup = document.getElementById(‘passwordPopup’);

if (!enterBtn || !entryScreen || !mainContent) return;

enterBtn.addEventListener(‘click’, function () {
entryScreen.style.display = ‘none’;
mainContent.style.display = ‘block’;
if (passwordPopup) passwordPopup.style.display = ‘flex’;
document.body.style.overflow = ‘hidden’;
});
}

// ========== PASSWORD POPUP ==========
function initPasswordPopup() {
var popup = document.getElementById(‘passwordPopup’);
var input = document.getElementById(‘passwordInput’);
var errorMsg = document.getElementById(‘passwordError’);
var confirmBtn = document.getElementById(‘confirmBtn’);

if (!popup || !input || !confirmBtn) return;

function checkPassword() {
var val = input.value.trim();
if (val === CORRECT_PASSWORD) {
popup.style.display = ‘none’;
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

confirmBtn.addEventListener(‘click’, checkPassword);
input.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Enter’) checkPassword();
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
var t = new Image();
t.onload = function () {
imgEl.src = src;
if (onSuccess) onSuccess();
};
t.onerror = function () {};
t.src = src;
}

function initImages() {
// Back document photos
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

// Front exam photos
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

// ID photo
var idImg = document.getElementById(‘idPhotoImg’);
if (idImg) {
tryLoadImage(idImg, ‘images/id_photo.jpg’, function () {
var ph = document.getElementById(‘idPhotoPlaceholder’);
if (ph) ph.style.display = ‘none’;
idImg.style.display = ‘block’;
});
}

// Crest — entry screen
var crestEntry = document.getElementById(‘crestEntry’);
if (crestEntry) {
tryLoadImage(crestEntry, ‘images/crest_popup.png’, function () {
var ph = document.getElementById(‘crestEntryPlaceholder’);
if (ph) ph.style.display = ‘none’;
crestEntry.style.display = ‘block’;
});
}

// Crest — header
var crestMain = document.getElementById(‘crestMain’);
if (crestMain) {
tryLoadImage(crestMain, ‘images/crest.png’, function () {
var ph = document.getElementById(‘crestPlaceholder’);
if (ph) ph.style.display = ‘none’;
crestMain.style.display = ‘block’;
});
}

// Crest — watermark
var crestWatermark = document.getElementById(‘crestWatermark’);
if (crestWatermark) {
tryLoadImage(crestWatermark, ‘images/crest.png’, function () {
crestWatermark.style.display = ‘block’;
});
}
}

// ========== INIT ==========
document.addEventListener(‘DOMContentLoaded’, function () {
initEntryScreen();
initPasswordPopup();
initImages();
document.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Escape’) closeOverlay();
});
});
