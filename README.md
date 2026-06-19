# 🎨 Chrome Wallpaper Customizer

A beginner-friendly Chrome extension that lets you customize your new tab page with beautiful wallpapers!

## Features

✨ **8 Beautiful Colors** - Choose from pre-made color wallpapers  
📸 **Custom Images** - Upload your own images as wallpapers  
🎯 **Easy to Use** - Simple, intuitive interface  
💾 **Persistent** - Your wallpaper choice is saved automatically  

## Installation

### Step 1: Clone or Download This Repository
```bash
git clone https://github.com/pavithran2008/chrome-wallpaper-customization.git
```

Or download as ZIP and extract.

### Step 2: Load the Extension in Chrome

1. Open Chrome and go to **`chrome://extensions/`**
2. Turn on **Developer mode** (toggle switch in top-right corner)
3. Click **Load unpacked**
4. Select the `chrome-wallpaper-customization` folder
5. Done! ✅ The extension is now installed

### Step 3: Use the Extension

1. Click the extension icon in your Chrome toolbar (puzzle piece icon, top-right)
2. Choose a wallpaper:
   - **Select from 8 pre-made colors**, OR
   - **Upload your own image**
3. Your wallpaper is automatically saved!
4. Click **Reset to Default** to go back anytime

## File Structure

```
chrome-wallpaper-customization/
├── manifest.json      # Extension configuration
├── popup.html         # Main UI interface
├── popup.css          # Styling & layout
├── popup.js           # JavaScript logic
└── README.md          # This file
```

## How It Works

| Feature | How It Works |
|---------|-------------|
| **Color Selection** | Click a color → saved to Chrome storage → preview updates |
| **Image Upload** | Select image → converts to data URL → saves to storage |
| **Persistence** | Data stays saved even after closing Chrome |
| **Preview** | Shows your current wallpaper selection |

## Troubleshooting

### Wallpaper not showing?
- Make sure you're on a **new tab page** (blank/empty tab)
- Try **refreshing the page** (press F5)
- This is normal - the extension saves the data, but Chrome's new tab page needs to be configured separately

### Want to apply wallpapers to new tab page?
1. Open a new tab
2. Click the **Customize Chrome** button at the bottom-right
3. Click on the upload icon and select your wallpaper
4. Your extension stores the data, you can apply it manually from here!

### Extension not showing up?
- Make sure **Developer mode** is ON in `chrome://extensions/`
- Try clicking "Load unpacked" again
- Restart Chrome if needed

## What's Next? (Learning Ideas)

Here are some features you could add to learn more:

- ✅ Add **gradient backgrounds** (instead of just solid colors)
- ✅ Add a **color picker** to create custom colors
- ✅ Add **wallpaper scheduling** (change wallpaper daily)
- ✅ Fetch wallpapers from **Unsplash or Pixabay API**
- ✅ Create a **settings page** (separate from popup)
- ✅ Add **dark mode** support

## Learning Resources

- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Guide](https://developer.chrome.com/docs/extensions/mv3/)
- [Chrome Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)
- [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## Contributing

Found a bug or have ideas? Feel free to:
- Create an issue
- Fork and improve
- Submit a pull request

## License

MIT License - Feel free to use, modify, and share!

---

**Made for beginners learning Chrome extension development** 🚀

Happy coding! 🎉
