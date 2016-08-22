import angular from 'angular';
import AppController from './app.controller.js';

import feedFormComponent from './feed-form/feed-form.component.js';

// Loading styles
import './styles/main.scss';

const ng = angular
  .module('tradeApp', [])
  .controller('AppController', AppController)
  .component('feedForm', feedFormComponent);

export default ng;
