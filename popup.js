// Get all wallpaper option buttons
const wallpaperOptions = document.querySelectorAll('.wallpaper-option');
const uploadBtn = document.getElementById('uploadBtn');
const imageUpload = document.getElementById('imageUpload');
const resetBtn = document.getElementById('resetBtn');
const currentPreview = document.getElementById('currentPreview');

// Default wallpaper color
const DEFAULT_WALLPAPER = '#667eea';

// Load current wallpaper when popup opens
document.addEventListener('DOMContentLoaded', loadCurrentWallpaper);

// Add click listeners to wallpaper options
wallpaperOptions.forEach(option => {
  option.addEventListener('click', () => {
    const color = option.getAttribute('data-color');
    setWallpaper(color);
    updateSelected(color);
  });
});

// Upload custom image
uploadBtn.addEventListener('click', () => {
  const file = imageUpload.files[0];
  
  if (!file) {
    alert('Please select an image first!');
    return;
  }

  // Read the file
  const reader = new FileReader();
  reader.onload = (e) => {
    const imageData = e.target.result;
    
    // Save to Chrome storage
    chrome.storage.local.set({
      wallpaper: imageData,
      wallpaperType: 'image'
    }, () => {
      alert('Wallpaper updated! Refresh your new tab page to see changes.');
      updatePreview(imageData);
    });
  };
  
  reader.readAsDataURL(file);
});

// Reset to default wallpaper
resetBtn.addEventListener('click', () => {
  setWallpaper(DEFAULT_WALLPAPER);
  updateSelected(DEFAULT_WALLPAPER);
  imageUpload.value = '';
});

// Set wallpaper (color or image)
function setWallpaper(wallpaper) {
  chrome.storage.local.set({
    wallpaper: wallpaper,
    wallpaperType: wallpaper.startsWith('#') ? 'color' : 'image'
  }, () => {
    console.log('Wallpaper saved:', wallpaper);
    updatePreview(wallpaper);
  });
}

// Update the preview display
function updatePreview(wallpaper) {
  if (wallpaper.startsWith('#')) {
    currentPreview.style.backgroundImage = 'none';
    currentPreview.style.backgroundColor = wallpaper;
  } else {
    currentPreview.style.backgroundImage = `url('${wallpaper}')`;
  }
}

// Update visual selection
function updateSelected(wallpaper) {
  wallpaperOptions.forEach(option => {
    option.classList.remove('selected');
    if (option.getAttribute('data-color') === wallpaper) {
      option.classList.add('selected');
    }
  });
}

// Load current wallpaper from storage
function loadCurrentWallpaper() {
  chrome.storage.local.get(['wallpaper', 'wallpaperType'], (result) => {
    const wallpaper = result.wallpaper || DEFAULT_WALLPAPER;
    const wallpaperType = result.wallpaperType || 'color';
    
    updatePreview(wallpaper);
    
    if (wallpaperType === 'color') {
      updateSelected(wallpaper);
    }
  });
}
