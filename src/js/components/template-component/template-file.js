/**
 * The template-file web component module.
 *
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

// Define template.
const template = document.createElement('template')
template.innerHTML = `
<style>
</style>
<div id="container">
</div>
`

customElements.define('template-file',
  /**
   * Anonymous class representing a template-file custom element.
   */
  class extends HTMLElement {
    /**
     * AbortController instance.
     *
     * @type {AbortController}
     */
    #abortController

    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

      this.#abortController = new AbortController()
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      window.addEventListener('click', async (event) => {
        console.log('Hello')
      }, { signal: this.#abortController.signal })
    }

    /**
     * Attributes to monitor for changes.
     *
     * @returns {string[]} - A string array of attributes to monitor.
     */
    static get observedAttributes () {
      return ['']
    }

    /**
     * When the attributes are changed.
     *
     * @param {string} name - The name of the attribute.
     * @param {any} oldValue - The old attirbute value.
     * @param {any} newValue - The new attribute value.
     */
    attributeChangedCallback (name, oldValue, newValue) {
      // Check if newValue is different from oldValue.
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this.#abortController.abort()
      // Remove all eventlisteners.
    }
  })
