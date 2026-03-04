const images = [
  'banner.jpg',
  'banner1.jpg',
  'banner2.jpg',
  'banner3.jpg',
  'banner4.jpg',
  'banner6.jpg',
  'banner5.jpg'
];

const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
let currentIndex = 0;

function openPopup(index) {
  currentIndex = index;
  updatePopupContent();
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  popup.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function updatePopupContent() {
  popupImg.src = images[currentIndex];
  popupImg.alt = 'Dr Pooja Dental Clinic - ' + images[currentIndex];
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updatePopupContent();
}

// Close popup when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!popup.classList.contains('active')) return;
  
  switch(e.key) {
    case 'ArrowLeft':
      navigate(-1);
      break;
    case 'ArrowRight':
      navigate(1);
      break;
    case 'Escape':
      closePopup();
      break;
  }
});

// Prevent scrolling when popup is open
popup.addEventListener('wheel', (e) => {
  if (popup.classList.contains('active')) {
    e.preventDefault();
  }
});