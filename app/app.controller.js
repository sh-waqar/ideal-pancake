import X2JS from 'x2js';

class AppController {
  constructor($http) {
    let defaultUrl = 'http://pf.tradetracker.net/?aid=1&type=xml&encoding=utf-8&fid=251713&categoryType=2&additionalType=2&limit=10';

    this.$http = $http;
    this.urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    this.showError = false;
    this.feedUrl = defaultUrl;
    this.feeds = [];

    this.loadFeeds(defaultUrl);
  }

  requestFeed(formFields) {
    if (formFields.$invalid) {
      this.showError = true;
      return;
    }

    this.showError = false;
    loadFeeds(formFields.$viewValue);
  }

  loadFeeds(url) {
    this.requestService(url)
      .then(res => {
        this.feeds = res.products.product;
      });
  }

  requestService(url) {
    const CORS_PROXY = 'https://crossorigin.me/';

    return this.$http
      .get(CORS_PROXY + url)
      .then(res => {
        let x2js = new X2JS();
        let jsonOut = x2js.xml2js(res.data);
        return jsonOut;
      });
  }
}

AppController.$inject = ['$http'];

export default AppController;
