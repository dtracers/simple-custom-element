function CustomElement() {
	/**
     * @param {Node} templateClone is a clone of the custom HTML Element for the text box
     * Makes the exit button close the box and enables dragging
     */
    this.initializeElement = function(templateClone) {
        var localScope = this; // This sets the variable to the level of the custom element tag
        var shadowRoot = this.createShadowRoot();
        shadowRoot.appendChild(templateClone);
    };
	
}

CustomElement.prototype = Object.create(HTMLElement.prototype);