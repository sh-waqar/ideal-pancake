import controller from './product-card.controller.js';
import template from './product-card.html';

import './product-card.scss';

let productCard = {
  bindings: {
    cardData: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default productCard;
