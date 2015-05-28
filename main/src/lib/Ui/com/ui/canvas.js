// reference from react UI js library, thks to react lib 

function Canvas (width, height, scale) {
  // Re-purposing an existing canvas element.
  if (!this._canvas) {
    this._canvas = document.createElement('canvas');
  }

  this.width = width;
  this.height = height;
  this.scale = scale || window.devicePixelRatio;

  this._canvas.width = this.width * this.scale;
  this._canvas.height = this.height * this.scale;
  this._canvas.getContext('2d').scale(this.scale, this.scale);
}


Canvas.prototype = {
	
  getRawCanvas: function () {
    return this._canvas;
  },

  getContext: function () {
    return this._canvas.getContext('2d');
  }

}

module.exports = Canvas;