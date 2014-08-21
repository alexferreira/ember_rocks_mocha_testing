# Ember Rocks Client Testing Branch

> It is only a temporary repo. The purpose of this repo is for resolving client side testing via **mocha** and **karma** of the **Ember Rocks** generated project


## Installation

* `npm install`
* `bower install`
* `npm install -g karma-cli` (optional if not install)
* `em serve` (required, have to compile ES6 Ember modules)
* `karma start`

By default, `karma start` will run in *Chrome* browser.


## What is working

1> es6 compiler is working fine
2> write a custom require.js to load ember modules, *package.json* fetch from my repo fork
3> have a custom version of [ember-mocha-adapter](https://github.com/teddyzeenny/ember-mocha-adapter/blob/master/adapter.js), it supports AMD version instead of loading in the window. 
4> import `ember`, `ember-data`, all libraries via require.js or es6 `import` statement
5> *mocha* and *chai* setup correctly, able to run BDD tests

## Problems that I am having

I could not get *ember-testing* working. If you look at `~/tests/test.spec.es6`, this is the only file which is going to be tested now.

If you run `karma start`, all 7 tests are passed. They tested the features of ES6, importing libraries statements, etc. 

Then uncomment the last tests ( line 58 )

     describe('App Test', function () {

It will load up the `TestApp = StartApp();` the custom application from `~/tests/client/helpers/start-app.es6`. The problem that I am seeing is 

    1> Module name "ember/container-debug-adapter" has not been loaded yet for context: _. Use require([])

    2> Ember.Test.adapter:  {} 

When I do the assignment of `Ember.Test.adapter = MochaAdapter.create();` at `~/tests/client/helpers/start-app.es6`, does it load correctly? Mocha testing helper is being applied?

Question, what is this code doing `mocha.ui('ember-bdd');` at `~/tests/client/helpers/mocha-adapter.es6`


## Pull Requests or Sugguestions are needed

What should we do at this point to get `em test` to test client side **Ember** logic code? We need your help!

Send a PR or start from fresh. Whatever you could help, we would be greatly appreaciated. 


For more information, visit [Ember Rocks](https://github.com/mattma/ember-rocks).
