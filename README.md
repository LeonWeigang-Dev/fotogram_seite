# Fotogram – Photo Gallery

## 📖 About the Project

This repository contains **Fotogram**, a responsive photo gallery built with HTML, CSS and vanilla JavaScript.

The project focuses on dynamically rendering a collection of images and presenting each image in an interactive dialog with detailed navigation and a larger preview.

---

## ✨ Key Features

### 🖼️ Dynamic Photo Gallery

- Gallery content is generated dynamically from JavaScript arrays
- 12 supplied photographs are displayed in a responsive image grid
- Image titles and alternative descriptions are stored separately from the image paths
- Hover interaction enlarges the selected image and highlights it visually

### 🔍 Image Dialog

- Larger image preview in a native HTML `<dialog>`
- Displays the current image title and image description
- Shows the current image number and total number of images
- Previous and next navigation with wrap-around behavior
- Dedicated close button
- Keyboard controls for opening, closing and navigating the dialog

### 📱 Responsive Design

- Responsive gallery layout using flexible wrapping
- Dedicated breakpoints for desktop, tablet and mobile widths
- Dialog dimensions and navigation controls adapt to smaller screens
- Image sizes are reduced on narrow devices

### ♿ Accessibility Considerations

- Alternative text is provided for gallery and dialog images
- Gallery images can be focused with the keyboard
- Keyboard interactions are implemented for opening images and navigating the dialog
- The dialog uses the native browser `<dialog>` element and `showModal()` for modal presentation

### 🎨 Visual Design

- Dark blue page background with contrasting white typography
- Figtree font supplied locally with the project
- Rounded image cards and dialog styling
- Hover feedback for gallery and dialog controls
- Developer Akademie branding in the footer

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Native HTML `<dialog>` element

### Assets & Typography

- Local Figtree font files
- JPG photographs
- SVG and PNG interface assets

### Development

- No external JavaScript libraries or frontend frameworks
- Live Server / local static web server for development

---

## 📁 Project Structure

```text
fotogram/
├── fonts/
│   ├── Figtree-*.ttf          # Local Figtree font files
│   └── static/                 # Static font variants
├── img/
│   ├── *_scaled_up.jpg        # High-resolution gallery images
│   ├── *.jpg                   # Image thumbnails / supplied assets
│   ├── main_logo.svg           # Main website logo
│   ├── close_icon*.png/svg     # Dialog close assets
│   ├── da_Icon.png             # Developer Akademie icon
│   └── DA.png                  # Developer Akademie branding
├── index.html                  # Main gallery page
├── script.js                   # Gallery rendering and dialog logic
├── style.css                   # Layout, styling and responsive rules
└── README.md                   # Project documentation
```

---

## 🚀 Installation & Setup

### 1. Download or clone the project

```bash
git clone <YOUR-REPOSITORY-URL>
cd <YOUR-REPOSITORY-FOLDER>
```

### 2. Run the frontend

Open the project with a local web server such as VS Code Live Server.

The application is a static frontend and does not require a backend, package manager or build step.

### 3. Open the application

Open `index.html` through the local server and use the gallery to select an image.

---

## ✏️ Customization

The gallery content can be changed directly in `script.js`.

Update the following arrays together when adding or replacing images:

- `myImgs` – image file names
- `myImgDescriptions` – alternative text and image descriptions
- `myImgNames` – titles shown in the dialog

The image files themselves belong in the `img/` directory.

The visual appearance can be adjusted in `style.css`, including image sizes, spacing, dialog dimensions, colors and responsive breakpoints.

---

## 🧩 JavaScript Structure

The application logic is kept intentionally small and focused:

- `init()` starts the gallery rendering
- `imgRender()` creates the gallery contents
- `getImagesHtml()` generates the markup for each gallery image
- `openDialog()` loads the selected image into the dialog
- `closeDialog()` closes the dialog
- `nextImage()` and `previousImage()` switch between images

The current image position is tracked with `currentImgIndex`.

---

## ⚠️ Before Publishing

The current uploaded project archive references the following files from `index.html`, but they are not included in the supplied archive:

- `img/favicon.svg`
- `img/button_left.png`
- `img/button_right.png`

The corresponding files should be added or the references should be updated before publishing so that the favicon and dialog navigation images work as intended.

---

## 📌 Project Notes

Fotogram is a frontend-focused gallery project without a database, API or server-side processing.

The current implementation uses inline event handlers for some interactions and stores all gallery data directly in `script.js`. The project is therefore easy to understand and extend without additional dependencies.
