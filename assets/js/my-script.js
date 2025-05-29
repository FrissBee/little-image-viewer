'use strict';

(() => {
  // =========================
  // 	DOM
  const DOM = {};
  DOM.viewer_1 = document.querySelector('little-image-viewer.viewer-1');
  DOM.viewer_2 = document.querySelector('little-image-viewer.viewer-2');
  DOM.viewer_3 = document.querySelector('little-image-viewer.viewer-3');
  DOM.viewer_4 = document.querySelector('little-image-viewer.viewer-4');
  DOM.viewer_5 = document.querySelector('little-image-viewer.viewer-5');
  DOM.viewer_6 = document.querySelector('little-image-viewer.viewer-6');
  DOM.viewer_7 = document.querySelector('little-image-viewer.viewer-7');
  DOM.viewer_8 = document.querySelector('little-image-viewer.viewer-8');
  DOM.viewer_9 = document.querySelector('little-image-viewer.viewer-9');
  DOM.viewer_10 = document.querySelector('little-image-viewer.viewer-10');
  DOM.viewer_11 = document.querySelector('little-image-viewer.viewer-11');
  DOM.viewer_12 = document.querySelector('little-image-viewer.viewer-12');

  // =========================
  // 	VARS
  const images_1 = [
    { src: './_media/images/little-image-viewer-01.jpg', alt: 'image alt text', title: '', subTitle: '' },
    { src: './_media/images/little-image-viewer-02.jpg', alt: 'image alt text', title: '', subTitle: '' },
    { src: './_media/images/little-image-viewer-03.jpg', alt: 'image alt text', title: '', subTitle: '' },
  ];

  const images_2 = [
    { src: './_media/images/little-image-viewer-01.jpg', alt: 'image alt text', title: 'Title 1', subTitle: 'Subtitle 1' },
    { src: './_media/images/little-image-viewer-02.jpg', alt: 'image alt text', title: 'Title 2', subTitle: 'Subtitle 2' },
    { src: './_media/images/little-image-viewer-03.jpg', alt: 'image alt text', title: 'Title 3', subTitle: 'Subtitle 3' },
  ];

  const images_3 = [
    {
      src: './_media/images/little-image-viewer-01.jpg',
      alt: 'image alt text',
      title: 'Title 1 with <a part="title-link" href="https://frissbee.de/" target="_blank" rel="noopener noreferrer">Link</a>',
      subTitle:
        'Subtitle 1 with <a href="https://frissbee.de/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff">Link</a>',
    },
    {
      src: './_media/images/little-image-viewer-02.jpg',
      alt: 'image alt text',
      title: 'Title 2 with <a part="title-link" href="https://frissbee.de/" target="_blank" rel="noopener noreferrer">Link</a>',
      subTitle:
        'Subtitle 2 with <a href="https://frissbee.de/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff">Link</a>',
    },
    {
      src: './_media/images/little-image-viewer-03.jpg',
      alt: 'image alt text',
      title: 'Title 3 with <a part="title-link" href="https://frissbee.de/" target="_blank" rel="noopener noreferrer">Link</a>',
      subTitle:
        'Subtitle 3 with <a href="https://frissbee.de/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #ffffff;">Link</a>',
    },
  ];

  // =========================
  // 	INIT
  const init = () => {
    DOM.viewer_1.setImages(images_1);
    DOM.viewer_2.setImages(images_2);
    DOM.viewer_3.setImages(images_2);
    DOM.viewer_4.setImages(images_1);
    DOM.viewer_5.setImages(images_3);
    DOM.viewer_6.setImages(images_1);
    DOM.viewer_7.setImages(images_2);
    DOM.viewer_8.setImages(images_1);
    DOM.viewer_9.setImages(images_2);
    DOM.viewer_10.setImages(images_1);
    DOM.viewer_11.setImages(images_2);
    DOM.viewer_12.setImages(images_2);
  };

  // =========================
  // 	FUNCTIONS

  init();
})();
