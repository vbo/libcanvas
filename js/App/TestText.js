window.App = window.App || {};

(function () {

App.TestText = new Class({
	Extends : LibCanvas.Interfaces.Drawable,
	initialize : function (toPoint) {
		this.toPoint = toPoint;
		this.bind('canvasSet', function () {
			this.canvas.addElement(
				new App.ControllPoint(this.toPoint, '#fcc')
					.listenMouse()
					.draggable()
					.bind('moveDrag', function () {
						this.canvas.update();
					})
			);
		});
	},
	draw : function () {
		this.shape.set({
			from : [200, 100],
			to : this.toPoint
		});
		this.canvas.ctx.text({
			text   : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\nullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			color  : '#000', /* @color */
			wrap   : 'normal', /* no|normal */
			to     : this.shape,
			align  : 'right', /* center|left|right */
			size   : 14,
			weigth : 'normal', /* bold|normal */
			style  : 'italic', /* italic|normal */
			family : 'sans-serif', /* @fontFamily */
			lineHeight : 20,
			overflow   : 'visible', /* hidden|visible */
		});
	}
});

})();