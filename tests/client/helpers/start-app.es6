/* global require */

import RockApplication from "rocks/app";
import RockRouter from "rocks/router";
import Ember from 'ember';
import MochaAdapter from 'mocha-adapter';

var Application = RockApplication['default'],
  Router = RockRouter['default'];

document.write(
  '<div id="ember-testing-container"><div id="ember-testing"></div></div>'
);

export default function startApp(attrs) {
  console.log('hello from start app');
  var App;

  var attributes = Ember.merge({
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false,
    LOG_MODULE_RESOLVER: false,
    LOG_TRANSITIONS: false,
    LOG_TRANSITIONS_INTERNAL: false
  }, attrs); // but you can override;

  Router.reopen({
    location: 'none'
  });

  Ember.run(function(){
    Ember.Test.adapter = MochaAdapter.create();
    console.log('Ember.Test.adapter: ', Ember.Test.adapter);
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}
