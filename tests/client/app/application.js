define("rocks/app",
  ["ember","ember/resolver","ember/load-initializers","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    var Resolver = __dependency2__["default"] || __dependency2__;
    var loadInitializers = __dependency3__["default"] || __dependency3__;
    //import registerComponents from 'rocks/utils/register-components';
    //
    console.log('__dependency1__.VERSION: ', __dependency1__.VERSION);
    console.log('Ember.VERSION: ', Ember.VERSION);
    console.log('__dependency1__.App: ', typeof __dependency1__.Application);

    var App = Ember.Application.extend({
        LOG_ACTIVE_GENERATION: true,
        LOG_VIEW_LOOKUPS: true,
        // LOG_MODULE_RESOLVER: true,
        // LOG_TRANSITIONS: true,
        // LOG_TRANSITIONS_INTERNAL: true,
        modulePrefix: 'rocks',
        Resolver: Resolver
    });

    loadInitializers(App, 'rocks');

    // App.initializer({
    //  name: 'Register Components',
    //  initialize: function(container) {
    //    registerComponents(container);
    //  }
    // });
    console.log('App.create: ', typeof App.create);

    __exports__["default"] = App;
  });
define("rocks/router",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    // ensure we don't share routes between all Router instances
    var Router = Ember.Router.extend({
      // Create a clean URL, without the #/
      // 'history', 'auto', 'hash'
      location: 'auto'
    });

    Router.map(function() {
      this.resource('users', function() {
        this.route('user', { path: '/:user_id' } );
      });
    });

    __exports__["default"] = Router;
  });
define("rocks/adapters/application",
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"] || __dependency1__;

    var ApplicationAdapter = DS.RESTAdapter.extend({
    	namespace: 'api'
    });
    __exports__["default"] = ApplicationAdapter;
  });
define("rocks/helpers/if-all-exists",
  ["./if-condition","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    'use strict';

    var ifConditionHelper = __dependency1__["default"] || __dependency1__;

    function exists(value) {
      return value !== undefined;
    }

    /**
     * Logical AND Existence Conditional Block
     *
     * Usage: {{#if-all-exists field1 field2}}Either field1 or field2 is truthy{{/if-all-exists}}
     *
     * Executes the given block if all arguments are defined
     */
    __exports__["default"] = function() {
      var options = arguments[arguments.length - 1];

      options.conditional = function(results) {
        return results.every(exists);
      };

      return ifConditionHelper.apply(this, arguments);
    }
  });
define("rocks/helpers/if-all",
  ["./if-condition","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    'use strict';

    var ifConditionHelper = __dependency1__["default"] || __dependency1__;

    function identity(value) {
      return value;
    }

    /**
     * Logical AND Conditional Block
     *
     * Usage: {{#if-all field1 field2}}Both field1 and field2 are truthy{{/if-all}}
     *
     * Executes the given block if all arguments are truthy
     */
    __exports__["default"] = function() {
      var options = arguments[arguments.length - 1];

      options.conditional = function(results) {
        return results.every(identity);
      };

      return ifConditionHelper.apply(this, arguments);
    }
  });
define("rocks/helpers/if-any-exists",
  ["./if-condition","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    'use strict';

    var ifConditionHelper = __dependency1__["default"] || __dependency1__;

    function exists(value) {
      return value !== undefined;
    }

    /**
     * Logical OR Existence Conditional Block
     *
     * Usage: {{#if-any-exists field1 field2}}Either field1 or field2 is truthy{{/if-any-exists}}
     *
     * Executes the given block if any argument is defined
     */
    __exports__["default"] = function() {
      var options = arguments[arguments.length - 1];

      options.conditional = function(results) {
        return results.any(exists);
      };

      return ifConditionHelper.apply(this, arguments);
    }
  });
define("rocks/helpers/if-any",
  ["./if-condition","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    'use strict';

    var ifConditionHelper = __dependency1__["default"] || __dependency1__;

    function identity(value) {
      return value;
    }

    /**
     * Logical OR Conditional Block
     *
     * Usage: {{#if-any field1 field2}}Either field1 or field2 is truthy{{/if-any}}
     *
     * Executes the given block if any argument is truthy
     */
    __exports__["default"] = function() {
      var options = arguments[arguments.length - 1];

      options.conditional = function(results) {
        return results.any(identity);
      };

      return ifConditionHelper.apply(this, arguments);
    }
  });
define("rocks/helpers/if-condition",
  ["exports"],
  function(__exports__) {
    "use strict";
    'use strict';

    /**
     * Bound Conditional if/else Block
     *
     * Executes the given block if all arguments are equal
     * NOTE: this helper is meant to be used by other helpers by specifying
     * a callback as the `conditional` option
     */
    __exports__["default"] = function() {
    	var args = [].slice.call(arguments);
    	var options = args.pop();
    	var context = (options.contexts && options.contexts[0]) || this;

    	if (!options.conditional) {
    		throw new Error('A conditional callback must be specified when using the if-condition helper');
    	}

    	// Gather all bound property names to pass in order to observe them
    	var properties = options.types.reduce(function(results, type, index) {
    		if (type === 'ID') {
    			results.push(args[index]);
    		}
    		return results;
    	}, []);

    	// Resolve actual values for all params to pass to the conditional callback
    	var normalizer = function() {
    		return Ember.Handlebars.resolveParams(context, args, options);
    	};

    	// This effectively makes the helper a bound helper
    	// NOTE: 'content' path is used so that multiple properties can be bound to
      //using the `childProperties` argument, however this means that it can only be used
      // with a controller that proxies values to the 'content' property
    	return Ember.Handlebars.bind.call(
        context, 'content', options,
        true, options.conditional,
        normalizer, properties
      );
    }
  });
define("rocks/helpers/if-equal",
  ["./if-condition","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ifConditionHelper = __dependency1__["default"] || __dependency1__;

    /**
     * Equality Comparison Conditional Block
     *
     * Usage: {{#if-equal field1 field2 "foo"}}field1 and field2 are equal to 'foo'{{/if-equal}}
     *
     * Executes the given block if all arguments are equal
     */
    __exports__["default"] = function() {
      var options = arguments[arguments.length - 1];

      // Find all unique values in the array; if one is left, they were all equal
      options.conditional = function(results) {
        return results.uniq().length === 1;
      };

      return ifConditionHelper.apply(this, arguments);
    }
  });
define("rocks/models/other",
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"] || __dependency1__;

    var attr = DS.attr,
      belongsTo = DS.belongsTo;

    var Others = DS.Model.extend({
      idField: attr(),
      other: attr('string'),
      users: belongsTo('user')
    });

    __exports__["default"] = Others;
  });
define("rocks/models/user",
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"] || __dependency1__;

    // http://emberjs.com/guides/models/defining-models/
    var attr = DS.attr,
      hasMany = DS.hasMany;

    var UserModel = DS.Model.extend({
      idField: attr(),
      firstName: attr('string'),
      lastName: attr('string'),
      occupation: attr('string'),
      // lookup for models/other.js
      others: hasMany('other'),
      fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
      }.property('firstName', 'lastName')
    });

    __exports__["default"] = UserModel;
  });
define("rocks/routes/application",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var UsersRoute = Ember.Route.extend({
      setupController: function(controller, model){
        this._super(controller, model);
        this.controllerFor('application').set('isMenuOpen', false);
      },

      actions: {
        toggleMenu: function(){
          var app = this.controllerFor('application'),
            status = app.get('isMenuOpen');
          return app.set('isMenuOpen', !status);
        },
        close: function() {
          var app = this.controllerFor('application'),
            status = app.get('isMenuOpen');
          if ( status === true ) {
            return app.set('isMenuOpen', !status);
          }
          return false;
        }
      }
    });

    __exports__["default"] = UsersRoute;
  });
define("rocks/routes/user",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var UserRoute = Ember.Route.extend({
      model: function(params) {
        var users = this.modelFor('users');
        return users.get('store').find('user', params.user_id);
      }
    });

    __exports__["default"] = UserRoute;
  });
define("rocks/routes/users",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var UsersRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('user');
      }
    });

    __exports__["default"] = UsersRoute;
  });
define("rocks/store/application",
  ["ember-data","rocks/adapters/application","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"] || __dependency1__;
    var ApplicationAdapter = __dependency2__["default"] || __dependency2__;

    var Store = DS.Store.extend({
        adapter: ApplicationAdapter
    });

    __exports__["default"] = Store;
  });
define("rocks/utils/register-components",
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global requirejs */
    /* global require */

    function registerComponents(container) {
      var seen = requirejs._eak_seen,
        templates = seen,
        match;

      if (!templates) { return; }

      for (var prop in templates) {
        if ( match = prop.match(/templates\/components\/(.*)$/) ) {
          require(prop, null, null, true);
          registerComponent(container, match[1]);
        }
      }
    }


    function registerComponent(container, name) {
      Ember.assert('You provided a template named \'components/' +
        name + '\', but custom components must include a \'-\'', name.match(/-/));

      var fullName         = 'component:' + name,
          templateFullName = 'template:components/' + name;

      container.injection(fullName, 'layout', templateFullName);

      var Component = container.lookupFactory(fullName);

      if (!Component) {
        container.register(fullName, Ember.Component);
        Component = container.lookupFactory(fullName);
      }

      Ember.Handlebars.helper(name, Component);
    }

    __exports__["default"] = registerComponents;
  });
