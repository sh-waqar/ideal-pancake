import angular from 'angular';
import AppController from './app.controller.js';

// Loading styles
import './styles/main.scss';

const ng = angular
  .module('tradeApp', [])
  .controller('AppController', AppController);

export default ng;
