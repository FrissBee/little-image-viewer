"use strict";(()=>{const t=document.createElement("template");t.innerHTML=`
    <style>
      * { box-sizing: border-box; }
      .fb-width-100-p { width: 100%; }
      .fb-height-100-p { height: 100%; }
      .fb-height-auto { height: auto; }
      .fb-border { border: 1px solid #dee2e6; }
      .fb-d-flex { display: flex; }
      .fb-px-2 { padding: 0 .5rem; }
      .fb-bg-white { background-color: #ffffff; }
      .fb-bg-light { background-color:rgb(248, 248, 248); }
      .fb-rounded { border-radius: .25rem; }
      .fb-position-relative { position: relative; }
      .fb-position-absolute { position: absolute; }
      .fb-cursor-pointer { cursor: pointer; }
      .fb-shadow { -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15); box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15); }
      .fb-border-radius-50-p { border-radius: 50%; }
      .fb-center-vertical { top: 50%; left: 50%; transform: translate(-50%, -50%); }
      svg { height: 40px; width: 44px; fill: rgb(44, 44, 44); padding-top: 5px; }
      .text-center { text-align: center; }
      .text-top {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 24px; padding-top: .5rem; font-weight: bold; }
      .text-sub {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; padding-bottom: .5rem; font-style: italic; }
    </style>

    <div part="container-viewer" class="fb-bg-white fb-border fb-rounded">
      <div part="title" class="text-center text-top"></div>
      <div class="fb-d-flex fb-px-2 fb-position-relative">
        <div class="fb-position-relative fb-height-100-p;">
          <div part="container-icon" class="fb-bg-light fb-border fb-shadow fb-cursor-pointer fb-position-absolute fb-border-radius-50-p fb-center-vertical btn-left">
            <svg part="svg-icon" xmlns="http://www.w3.org/2000/svg" class="svg-left" style="" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
          </div>
        </div>
        <img part="image" class="fb-border fb-width-100-p fb-height-auto viewer-image" src="" alt="">
        <div class="fb-position-relative fb-height-100-p;">
          <div part="container-icon" class="fb-bg-light fb-border fb-shadow fb-cursor-pointer fb-position-absolute fb-border-radius-50-p fb-center-vertical btn-right">
            <svg part="svg-icon" xmlns="http://www.w3.org/2000/svg" class="svg-right" style="" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
          </div>
        </div>
      </div>
      <div part="sub-title" class="text-center text-sub"></div>
    </div>
    `;class e extends HTMLElement{#root=null;#btnLeft=null;#btnRight=null;#svgLeft=null;#svgRight=null;#viewerImage=null;#imageList=null;#imageIndex=0;#imageListLength=0;#textTop="";#textSub="";constructor(){super(),this.#root=this.attachShadow({mode:"closed"}),this.#root.appendChild(t.content.cloneNode(!0)),this.#btnLeft=this.#root.querySelector(".btn-left"),this.#btnRight=this.#root.querySelector(".btn-right"),this.#svgLeft=this.#root.querySelector(".svg-left"),this.#svgRight=this.#root.querySelector(".svg-right"),this.#viewerImage=this.#root.querySelector(".viewer-image"),this.#textTop=this.#root.querySelector(".text-top"),this.#textSub=this.#root.querySelector(".text-sub")}static get observedAttributes(){return["icon-color"]}attributeChangedCallback(t,e,i){"icon-color"===t&&(this.#svgLeft.style.fill=i,this.#svgRight.style.fill=i)}connectedCallback(){this.#btnLeft.addEventListener("click",t=>this.#onImageLeft(t)),this.#btnRight.addEventListener("click",t=>this.#onImageRight(t))}setImages(t){this.#imageList=t,this.#imageListLength=t.length-1,this.#setImage()}#onImageLeft(t){this.#imageIndex=0===this.#imageIndex?this.#imageListLength:this.#imageIndex-1,this.#setImage()}#onImageRight(t){this.#imageIndex=this.#imageIndex<this.#imageListLength?this.#imageIndex+1:0,this.#setImage()}#setImage(){this.#viewerImage.src=this.#imageList[this.#imageIndex].src,this.#viewerImage.alt=this.#imageList[this.#imageIndex].alt,this.#textTop.innerHTML=this.#imageList[this.#imageIndex].title,this.#textSub.innerHTML=this.#imageList[this.#imageIndex].subTitle}}customElements.define("little-image-viewer",e)})();