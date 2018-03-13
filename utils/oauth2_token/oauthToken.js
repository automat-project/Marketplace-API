/*

Copyright 2018 Atos Spain S.A

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


// jshint node: true, jasmine: true

'use strict';

var config = require('./config');
var rp = require('request-promise');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var oauthTokenUrl = config.idmUrl + '/oauth2/token';
var username = process.argv[2];
var password = process.argv[3];
var auth = 'Basic ' +
  new Buffer(config.clientId + ':' + config.clientSecret).toString('base64');

var options = {
  method: 'POST',
  uri: oauthTokenUrl,
  headers: {
    'Authorization': auth,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    // jshint camelcase: false
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    grant_type: 'password',
    username: username,
    password: password,
    client_id: config.clientId,
    client_secret: config.clientSecret
    // jshint camelcase: true
    // jscs:enable
  }
};

rp(options)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err.error);
  });
