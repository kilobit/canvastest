// ball.js

function init() {
    window.requestAnimationFrame(animateBall);
}

var animation = {
    ready: false,
    canvas: null,
    ctx: null,

    setup: function() {
	if(this.ready) { return }

	this.canvas = document.getElementById("ball");
	this.ctx = this.canvas.getContext("2d");
	this.ready = true;
    },
}

var ball = {
    x: 100,
    y:100,
    radius: 60,
    color: 'red',

    draw: function(ctx) {

	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
    }
};

function animateBall() {

    animation.setup();

    var ctx = animation.ctx;
    ctx.clearRect(0, 0, 600, 300);
    
    var time = new Date();
    ball.radius = 60 * ((Math.cos(time.getMilliseconds() / 100) / 2) + 0.5);
    ball.draw(animation.ctx);

    window.requestAnimationFrame(animateBall);
}

init();
