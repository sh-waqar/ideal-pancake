import controller from './feed-form.controller.js';
import template from './feed-form.html';

let feedForm = {
  bindings: {
  	feedUrl: '<',
    makeRequest: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default feedForm;
