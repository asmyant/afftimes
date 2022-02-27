import {Offcanvas, Tab} from "bootstrap";
import LazyLoad from "vanilla-lazyload";

import {header} from "./modules/header.js";
import {container} from "./modules/container.js";
import {search} from "./modules/search.js";
import {togglePassword} from "./modules/password.js";
import {floatPopup} from "./modules/float-popup.js";
import {loadImage} from './modules/load-image.js';
import {copy} from './modules/copy.js';
import {indexSelect} from './modules/index-select.js';
import {tooltip} from './modules/tooltip.js';
import {loadContentSingle} from "./modules/single-content-load.js";
import {fancyboxContainer} from "./modules/fancybox-container.js";

import {homeVideos} from "./sliders/home-videos.js";
import {gutenbergSingeSlider} from "./sliders/single-slider.js";
import {banner} from "./sliders/banner-slider.js";

import {loginForm, regForm, replayForm} from "./validation/user.js";
import {authorPageEdit} from './validation/author-edit.js';
import {subscribeForm} from "./validation/subscribe.js";
import {commentsForm} from "./validation/comments.js";


document.addEventListener("DOMContentLoaded", function (event) {
   // Плагины
   svg4everybody(); // Спрайт иконок
   new LazyLoad({});

   // Компоненты
   header();
   container();
   search();
   togglePassword();
   floatPopup();
   loadImage();
   copy();
   tooltip();
   loadContentSingle();
   fancyboxContainer();
   indexSelect();

   // Слайдеры
   homeVideos();
   gutenbergSingeSlider();
   banner();

   // Валидация форм
   regForm();
   loginForm();
   replayForm();
   subscribeForm();
   authorPageEdit();
   commentsForm();
});
