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


var config = {};

// URL to the FI-WARE Identity Management GE
// default: https://account.lab.fi-ware.org
config.idmUrl = 'http://automat-idm.atosresearch.eu';

// Oauth2 configuration

// Client ID for the application
config.clientId = '4eb38b20f68241bfa0d6761e4be83668';

// Client Secret for the application
config.clientSecret = 'fface421bb0d474b8cb4e60c02b2bc4b'

// Callback URL for the application
config.callbackUrl = 'http://localhost/login';

config.responseType = 'code';

module.exports = config;
