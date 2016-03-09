Package.describe({
  name: 'hanskohls:linearicons',
  version: '0.0.1',
  summary: 'Package to integrate free version of linearicons via cloudfront CDN. See https://linearicons.com/free',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hanskohls/meteorjs-linearicons',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('linearicons.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hanskohls:linearicons');
  api.addFiles('linearicons-tests.js');
});
