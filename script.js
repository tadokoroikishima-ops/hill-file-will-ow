// ========== PASSWORD SYSTEM ==========
const CORRECT_PASSWORD = ‘hillock7’;

function initPasswordSystem() {
const overlay = document.getElementById(‘passwordOverlay’);
const input = document.getElementById(‘passwordInput’);
const errorMsg = document.getElementById(‘passwordError’);
const confirmBtn = document.getElementById(‘confirmBtn’);
const abortBtn = document.getElementById(‘abortBtn’);
const deniedScreen = document.getElementById(‘accessDeniedScreen’);

// Show password overlay on load
overlay.classList.remove(‘hidden’);
document.body.style.overflow = ‘hidden’;

// Confirm button
confirmBtn.addEventListener(‘click’, function () {
checkPassword();
});

// Enter key
input.addEventListener(‘keydown’, function (e) {
if (e.key === ‘Enter’) checkPassword();
input.classList.remove(‘error’);
errorMsg.textContent = ‘’;
});

// Abort button
abortBtn.addEventListener(‘click’, function () {
overlay.classList.add(‘hidden’);
deniedScreen.classList.add(‘visible’);
document.body.style.overflow = ‘hidden’;
});

function checkPassword() {
const val = input.value.trim();
if (val === CORRECT_PASSWORD) {
overlay.classList.add(‘hidden’);
document.body.style.overflow = ‘’;
} else {
input.classList.add(‘error’);
errorMsg.textContent = ‘ACCESS DENIED — INVALID CODE’;
input.value = ‘’;
setTimeout(() => {
input.classList.remove(‘error’);
errorMsg.textContent = ‘’;
}, 2000);
}
}
}

// ========== BACK DOCUMENT OVERLAY ==========
function openOverlay() {
document.getElementById(‘overlay’).classList.add(‘active’);
document.body.style.overflow = ‘hidden’;
}

function closeOverlay() {
document.getElementById(‘overlay’).classList.remove(‘active’);
document.body.style.overflow = ‘’;
}

// ========== IMAGE LOADING ==========
function initImages() {
// For each back photo
const photoConfigs = [
{ img: ‘images/item01_photo.jpg’, containerId: ‘item01Photo’ },
{ img: ‘images/item02_photo.jpg’, containerId: ‘item02Photo’ },
{ img: ‘images/item03_photo.jpg’, containerId: ‘item03Photo’ },
{ img: ‘images/step3_photo.jpg’,  containerId: ‘step3Photo’  },
{ img: ‘images/step4_photo.jpg’,  containerId: ‘step4Photo’  },
];

photoConfigs.forEach(function (config) {
const container = document.getElementById(config.containerId);
if (!container) return;

```
const placeholder = container.querySelector('.back-photo-placeholder');
const img = container.querySelector('.back-photo-img');

if (!img) return;

img.src = config.img;
img.onload = function () {
  if (placeholder) placeholder.style.display = 'none';
  img.classList.add('loaded');
};
img.onerror = function () {
  // Image not found — keep placeholder
};
```

});

// Front exam photos
const frontPhotoConfigs = [
{ img: ‘images/exam_front.jpg’, containerId: ‘examFront’ },
{ img: ‘images/exam_side.jpg’,  containerId: ‘examSide’  },
{ img: ‘images/exam_back.jpg’,  containerId: ‘examBack’  },
];

frontPhotoConfigs.forEach(function (config) {
const container = document.getElementById(config.containerId);
if (!container) return;

```
const placeholder = container.querySelector('.exam-photo-placeholder');
const img = container.querySelector('.exam-photo-img');

if (!img) return;

img.src = config.img;
img.onload = function () {
  if (placeholder) placeholder.style.display = 'none';
  img.classList.add('loaded');
  container.classList.add('has-image');
};
img.onerror = function () {
  // Keep placeholder
};
```

});

// Front ID photo
const idImg = document.getElementById(‘idPhotoImg’);
const idPlaceholder = document.getElementById(‘idPhotoPlaceholder’);
if (idImg) {
idImg.src = ‘images/id_photo.jpg’;
idImg.onload = function () {
if (idPlaceholder) idPlaceholder.style.display = ‘none’;
idImg.style.display = ‘block’;
};
idImg.onerror = function () {};
}

// Crest images
const crestMain = document.getElementById(‘crestMain’);
const crestWatermark = document.getElementById(‘crestWatermark’);
const crestPopup = document.getElementById(‘crestPopup’);
const crestPopupPlaceholder = document.getElementById(‘crestPopupPlaceholder’);

if (crestMain) {
crestMain.src = ‘images/crest.png’;
crestMain.onload = function () {
document.getElementById(‘crestPlaceholder’).style.display = ‘none’;
crestMain.style.display = ‘block’;
};
crestMain.onerror = function () {};
}

if (crestWatermark) {
crestWatermark.src = ‘images/crest.png’;
crestWatermark.onload = function () {
crestWatermark.style.display = ‘block’;
};
crestWatermark.onerror = function () {};
}

if (crestPopup) {
crestPopup.src = ‘images/crest_popup.png’;
crestPopup.onload = function () {
if (crestPopupPlaceholder) crestPopupPlaceholder.style.display = ‘none’;
crestPopup.style.display = ‘block’;
};
crestPopup.onerror = function () {};
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
