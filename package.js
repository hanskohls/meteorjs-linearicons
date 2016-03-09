Package.describe({
  name: 'hanskohls:linearicons',
  version: '0.1.1',
  summary: 'Package to integrate free version of linearicons. https://linearicons.com/free',
  git: 'https://github.com/hanskohls/meteorjs-linearicons',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['templating']);
  api.addFiles([
    'lnr.css',
    'lnr.html'
  ], [
    'client'
  ]);
});

/*
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hanskohls:linearicons');
  api.addFiles('lnr-tests.js');
});
*/