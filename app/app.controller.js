import X2JS from 'x2js';

class AppController {
  constructor($http) {
    this.ctrl = 'appCtrl';

    $http
      .get('https://crossorigin.me/http://pf.tradetracker.net/?aid=1&type=xml&encoding=utf-8&fid=251713&categoryType=2&additionalType=2&limit=10')
      .then(function(res) {
        let x2js = new X2JS();
        let jsonOut = x2js.xml2js(res.data);
        console.log(jsonOut);
      });
  }
}

AppController.$inject = ['$http'];

export default AppController;
