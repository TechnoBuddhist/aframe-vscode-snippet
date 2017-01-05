// You might want to remove/comment out any methods you don't use if you're bothered about performance.

// <script src="mySystem.js"></script>

/**
 * The long description of the file's purpose goes here and
 * describes in detail the complete functionality of the file.
 * This description can span several lines and ends with a period.
 *
 * @summary   A short description of the file.
 *
 * @link      URL
 *
 * @property {string} propertyExample  Description of this property.
 * @property {multi-property} propertyExample  Description of this property.
 *
 */
AFRAME.registerSystem('mySystem.js', {
  // -------------------- Standard System Code --------------------
  /* For System Help see https://aframe.io/docs/master/core/systems.html
  
   Systems can help separate logic and behavior from data if desired. We let systems handle the heavy lifting,
   and components only worry about managing its data through its lifecycle methods:
   see https://aframe.io/docs/master/core/systems.html#separation-of-logic-and-data
  */
  
  /**
   * @summary Schema defines system properties.
   * see https://aframe.io/docs/master/core/systems.html#properties
   */
  schema: {
  /*
    e.g. colorTop: {
      type: 'array|asset|boolean|color|int|number|selector|selectorAll|string|vec2|vec3|vec4',
      default: 'black',
      // Takes "a/b" and turns to ["a", "b".
      parse: function (value) {
        return value.split('/');
      }
    },
  */
    
  },

  /**
   * @summary Called on scene initialization.
   *
   * Called once when the scene is initialized. Used to set up initial state and instantiate variables.
   *
   * @member data - Component data.
   */
  init: function () {
    // see https://aframe.io/docs/master/core/systems.html#gathering-all-components-of-a-system
    // Use this if you want to maintain references to all components in the system.
    this.entities = [];

    // Do stuff using `this.data`.
    var data = this.data;

  },

  // tick() - If defined, will be called on every tick of the scene’s render loop.
  tick: function (time, timeDelta) {
  },

  // pause() - Called when the scene pauses. Used to stop dynamic behavior.
  pause: function () {
  },

  // play()	- Called when the scene starts or resumes. Used to start dynamic behavior.
  play: function () {
  },

  // -------------------- Your Custom Commponent Code --------------------

  // see https://aframe.io/docs/master/core/systems.html#gathering-all-components-of-a-system
  // Use these 2 methods if you want to maintain references to all components in the system.
  registerComp: function (el) {
    this.entities.push(el);
  },

  unregisterComp: function (el) {
    var index = this.entities.indexOf(el);
  this.entities.splice(index, 1);
  }
});