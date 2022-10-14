var Promise = require('bluebird');

module.exports = {
  create: (cowInfo, successCB, errorCB = null) => {
    return new Promise((res, rej) => {
      res($.ajax({
        url: 'http://127.0.0.1:3000/api/cows',
        type: 'POST',
        data: cowInfo,
        success: successCB,
        error: errorCB || function(err) {
          console.error('failed to get cow info', err);
        }
      }));
    })
  },
  getAll: function (successCB, errorCB = null) {
    return new Promise((res, rej) => {
      res($.ajax({
        url: 'http://127.0.0.1:3000/api/cows',
        type: 'GET',
        contentType: 'application/json',
        success: successCB,
        error: errorCB || function(err) {
          console.error('failed to get cow info', err);
        }
      }));
    });
  }
}