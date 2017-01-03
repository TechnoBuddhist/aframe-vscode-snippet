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
AFRAME.registerComponent('exampleOutput', {
  // -------------------- Standard Commponent Code --------------------
  // For Component Help see https://aframe.io/docs/0.4.0/core/component.html
  
  //dependencies: ['nameOfComponentmyComponent.jsDependsOn'],
  
  // By default, a component can only have one instance. This enables multiple instancing on your component.
  // see https://aframe.io/docs/0.4.0/core/component.html#multiple-instancing
  //multiple: true,
  
  /**
   * @summary Schema defines component properties.
   * see https://aframe.io/docs/0.4.0/core/component.html#property-types
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
   * @summary Run when component is attached.
   *
   * Called once when the component is attached to an entity. Used to set up initial state and instantiate variables.
   *
  * @member {Element}   el - Entity.
  * @member           data - Component data.
  */
  init: function () {
    // Do stuff using `this.el` and `this.data`.
    var data = this.data;
    var el = this.el;

    //el.addEventListener();
  },

  // update() - Called both when the component is initialized and whenever the component’s data changes (e.g, via setAttribute). Used to modify the entity.
  // see https://aframe.io/docs/0.4.0/core/component.html#update-olddata
  update: function (oldData) {
    // Do stuff using `this.el` and `this.data` and possibly `oldData`(as it was prior to this update).
  },

  // remove() - Called when the component detaches from the element (e.g., via removeAttribute). Used to undo all previous modifications to the entity.
  remove: function () {
  },

  // tick() - Called on each render loop or tick of the scene. Used for continuous changes.
  tick: function (time, timeDelta) {
  },

  // play() - Called whenever the scene or entity plays to add any background or dynamic behavior. Used to start or resume behavior.
  // Useful to addEventListeners()
  play: function () {
    //var el = this.el;
    //el.addEventListener('hit', this.onHit);
  },

  // pause()	- Called whenever the scene or entity pauses to remove any background or dynamic behavior. Used to pause behavior.
  // Useful to removeEventListeners()
  pause: function () {
    //var el = this.el;
    //el.removeEventListener('hit', this.onHit);
  },

  // updateSchema() - Called on every update. Can be used to dynamically modify the schema.
  updateSchema: function (data) {
  },

  // flushToDOM() - Called on every update. Can be used to dynamically modify the schema.
  flushToDOM: function (data) {
  }

  // -------------------- Your Custom Commponent Code --------------------
});