# Ember Rocks Client Testing Branch

> It is only a temporary repo. The purpose of this repo is for resolving client side testing via **mocha** and **karma** of the **Ember Rocks** generated project


## Installation

* `npm install`
* `bower install`
* `npm install -g karma-cli` (optional if not install)
* `em serve` (required, have to compile ES6 Ember modules)
* `karma start`

By default, `karma start` will run in *Chrome* browser. If you prefer `PhantomJS`, you could uncomment the line 71 and 83 of `./karma.conf.js`.

You should see **2** successfully (green) tests in the console. That indicates that **mocha** and **karma** have been setup correctly. Head to `./tests/client/testing.spec.js`, you should see the two tests there. Any files end up with `.spec.js` will be run via `karma start`. Those two green tests are purely static, which needs to replace with the Ember Client side logic test.


## Problems that I am having

1.  Karma ES6 Module preprocessors

There are a couple of candidates of ES6 Module preprocessors. 1> [karma-es6-module-preprocessor](https://github.com/Attamusc/karma-es6-module-preprocessor), which does not seem to work. Maybe it is my fault setting.  2> [karma-traceur-preprocessor](https://github.com/karma-runner/karma-traceur-preprocessor), which maintained by the [vojtajina](https://github.com/vojtajina), the maintainer of Karma project. I do not find any luck on any of those two projects. 

Solution 1: 

find a good Karma ES6 Module preprocessor so that I could compile ES6 code like `import Resolver from 'ember/resolver';`, currently, it will have an **parse error** in the karma runner. so that I have to implement the *amd* style in `testing-spec.js`. But I could not include `./client/assets/build/application.js` and `./client/assets/build/template.js` to test any client side logic since those two files are already *amd* ready. 

Solution 2: 

I have implemented another task in *gulpfile.js*. Line 318, `test` command. When you run `gulp test`, it will compile any ES6 modules in *./tests/client/*.spec.js* into a *amd* ready *./tests/build/*.spec.js* format. Then go to `./tests/client/karma-config.js`, shift the comment on line 4 and line 5. Well, it still won't work out of box since you need to add some es6 implemenation code there. Some addtional configurations are needed. 

Solution 3: 

It may have to switch to [testem](https://github.com/airportyh/testem) instead of [karma](https://github.com/karma-runner/karma). But I really really like **karma**, and I have a lot of successful stories with Karma runner without ES6 modules. 


## Pull Requests or Sugguestions are needed

What should we do at this point to get `em test` to test client side **Ember** logic code? We need your help!

Send a PR or start from fresh. Whatever you could help, we would be greatly appreaciated. 


For more information, visit [Ember Rocks](https://github.com/mattma/ember-rocks).
