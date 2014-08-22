/* global require */

import Application from "rocks/app";
import Router from "rocks/router";
import Ember from 'ember';
import MochaAdapter from 'mocha-adapter';

document.write(
  '<div id="mocha"></div><div id="ember-testing-container"><div id="ember-testing"></div></div>'
);

export default function startApp(attrs) {
  var attributes = Ember.merge({
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false,
    LOG_MODULE_RESOLVER: false,
    LOG_TRANSITIONS: false,
    LOG_TRANSITIONS_INTERNAL: false
  }, attrs); // but you can override;

  Router.reopen({
    location: 'hash'
  });

  Ember.run(function(){
    Application = Application.create(attributes);
    Application.setupForTesting();
    Application.injectTestHelpers();
    Ember.Test.adapter = MochaAdapter.create();
  });

  Application.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return Application;
}
