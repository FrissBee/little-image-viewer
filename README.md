# Little Image Viewer

This repo contains an image viewer that is very easy to implement in your own website.

It can be visually adapted to your own site.

It also contains various animations.

The repo contains all the necessary files and various examples for illustration.

The Little Image Viewer was programmed in JavaScript with Web Component.

Individual image viewers are completely independent of each other.

## Preview

[You can view the demo here](https://little-image-viewer.frissbee.de/)

## Implementation

The HTML or PHP file

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- 1. implement "little-image-viewer.js" file -->
    <script src="./assets/js/little-image-viewer_v.1.1.0.js"></script>
    <!-- 2. implement own JS file -->
    <script src="./assets/js/my-script.js" defer></script>
  </head>
  <body style="background-color: #dbdbdb">
    <main>
      <!-- 3. implement "little-image-viewer" HTML tag -->
      <little-image-viewer></little-image-viewer>
    </main>
  </body>
</html>
```

The own JS file

```js
// the array with the image objects (structure is important)
// If an empty string is passed to the key `title` or `subtitle`, no title or subtitle is displayed.
// Important: All images should have the same width and height in pixels
const images = [
  { src: './path-to-the-image-file/little-image-viewer-01.jpg', alt: 'image alt text', title: '', subTitle: '' },
  { src: './path-to-the-image-file/little-image-viewer-02.jpg', alt: 'image alt text', title: '', subTitle: '' },
  { src: './path-to-the-image-file/little-image-viewer-03.jpg', alt: 'image alt text', title: '', subTitle: '' },
];

// select the "little-image-viewer" HTML tag
const littleImageViewer = document.querySelector('little-image-viewer');

// give the selected "little-image-viewer" HTML tag the images with the function "setImages()"
littleImageViewer.setImages(images);
```

## Functions

- `setImages(images)` => to pass the array with the image objects

## Attributes

The following attributes are available for the `<little-image-viewer></little-image-viewer>` HTML tag:

- `slide-time` => time for the animation in milliseconds (ms). Default is `1000`. Example: `<little-image-viewer slide-time="500"></little-image-viewer>`
- `icon-color` => for setting the color of the icons. Example: `<little-image-viewer icon-color="#3191d6"></little-image-viewer>`
- `is-animation` => for animation. Example: `<little-image-viewer is-animation="slide-h-endless"></little-image-viewer>`. Possible values:
  - `slide-h-to-start`
  - `slide-h-stop-end`
  - `slide-h-endless`

## CSS

### parts:

- `container-viewer`
- `image`
- `container-icon-left`
- `container-icon-right`
- `svg-icon-left`
- `svg-icon-right`
- `title`
- `sub-title`

Examples:

```css
little-image-viewer.viewer-style::part(container-viewer) {
  padding: 20px;
  background-color: rgb(51, 51, 51);
  border: 8px solid green;
}
little-image-viewer.viewer-style::part(image) {
  border: 4px solid rgb(38, 144, 185);
  border-radius: 28px;
}
little-image-viewer.viewer-style::part(container-icon-left),
little-image-viewer.viewer-style::part(container-icon-right) {
  padding: 10px 0;
  border: 2px solid rgb(226, 73, 13);
  border-radius: 8px;
  background-color: rgb(255, 246, 203);
}
little-image-viewer.viewer-style::part(svg-icon-left),
little-image-viewer.viewer-style::part(svg-icon-right) {
  padding: 6px 4px 0;
  height: 60px;
  width: 30px;
}
little-image-viewer.viewer-style::part(title) {
  color: #fff;
  padding: 0 0 8px;
  font-size: 28px;
  font-weight: normal;
  font-style: italic;
}
little-image-viewer.viewer-style::part(sub-title) {
  color: #ecdf1f;
  padding: 8px 0 0;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
}
```
