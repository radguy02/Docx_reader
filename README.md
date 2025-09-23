# Docx_reader 🖋️

A simple browser extension / web tool to read `.docx` files in the browser and display their content using JavaScript.

---

## 📋 Description

Docx_reader implements a way to load Microsoft Word `.docx` documents right in the browser and render their contents. It uses the **Mammoth.js** library for parsing `.docx`, and includes UI components for selecting the file, rendering content, and basic styling.

This is useful when you want to preview `.docx` content without downloading or opening in Word, e.g. in web apps, extension, or personal projects.

---

## 🧰 Features

- Load and parse `.docx` files using **Mammoth.js**  
- Display parsed content in-browser  
- Minimal, clean UI (HTML/CSS/JS)  
- Works entirely on front-end (no server needed)

---

## 📂 Project Structure

Here are the main files and what each does:

| File / Folder | Purpose |
|---------------|---------|
| `index.html` | The core HTML page that provides UI to upload or select `.docx` file and view output. |
| `content.js` | The logic to handle `.docx` parsing (via Mammoth.js) and insertion of content into the page. |
| `popup.js` / `background.js` | If this is a browser extension component: background/popup logic. |
| `manifest.json` | For browser extension setup (permissions, popup page, etc.). |
| `mammoth.browser.min.js` | Mammoth.js library bundled for browser usage. |
| `styles.css` | Styling for the UI (appearance of uploaded content, layout, etc.). |

---

## 🔧 Installation & Usage

Here’s how to get it running locally, or use it as an extension (if applicable).

### Running locally / preview

1. Clone the repo:

   ```bash
   git clone https://github.com/radguy02/Docx_reader.git
   cd Docx_reader
2. Open index.html in your browser. (Please ensure mammoth.browser.min.js is correctly referenced.)

3. Upload / select a .docx file, and the content should render in the page.
