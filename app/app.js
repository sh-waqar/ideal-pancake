import angular from 'angular';
import AppController from './app.controller.js';

import feedForm from './feed-form/feed-form.component.js';
import productCard from './product-card/product-card.component.js';

// Loading styles
import './styles/main.scss';

const ng = angular
  .module('tradeApp', [])
  .controller('AppController', AppController)
  .component('feedForm', feedForm)
  .component('productCard', productCard);

export default ng;
