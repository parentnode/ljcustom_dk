Util.Objects["front"] = new function() {
	this.init = function(scene) {
		// u.bug("scene init:", scene);

		scene.resized = function() {
			// u.bug("scene.resized:", this);

		}

		scene.scrolled = function() {
			// u.bug("scrolled:", this);

		}

		scene.ready = function() {
			// u.bug("scene.ready:", this);

			// map reference
			page.cN.scene = this;

		}

		// scene is ready
		scene.ready();

	}

}
