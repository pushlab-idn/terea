(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG01 = function() {
	this.initialize(img.BG01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.BGOasis = function() {
	this.initialize(img.BGOasis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,959);


(lib.BG_Black = function() {
	this.initialize(img.BG_Black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.BG_Green = function() {
	this.initialize(img.BG_Green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.BlackPurple = function() {
	this.initialize(img.BlackPurple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,45);


(lib.Black_Txt = function() {
	this.initialize(img.Black_Txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,170);


(lib.curiouslatin = function() {
	this.initialize(img.curiouslatin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,77);


(lib.Findmore = function() {
	this.initialize(img.Findmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,74);


(lib.NEWSENSATIONSWITHATWIST = function() {
	this.initialize(img.NEWSENSATIONSWITHATWIST);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,466,120);


(lib.NEW = function() {
	this.initialize(img.NEW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,80);


(lib.OasisPearl = function() {
	this.initialize(img.OasisPearl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,40);


(lib.Oasis = function() {
	this.initialize(img.Oasis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,181);


(lib.Oasis_Txt = function() {
	this.initialize(img.Oasis_Txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,169);


(lib.perint = function() {
	this.initialize(img.perint);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,181);


(lib.pop_black = function() {
	this.initialize(img.pop_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.pop_oasis = function() {
	this.initialize(img.pop_oasis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.price = function() {
	this.initialize(img.price);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,152);


(lib.Purple = function() {
	this.initialize(img.Purple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,181);


(lib._return = function() {
	this.initialize(img._return);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,88);


(lib.SunPearl = function() {
	this.initialize(img.SunPearl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,40);


(lib.Sun_Txt = function() {
	this.initialize(img.Sun_Txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,170);


(lib.touch = function() {
	this.initialize(img.touch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,382,94);


(lib.warning = function() {
	this.initialize(img.warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.warning_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.warning();
	this.instance.setTransform(-160,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.warning_1, new cjs.Rectangle(-160,-26.7,320,53.5), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(-0.5,162.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-168,76.1,335,171.9), null);


(lib.price_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.price();
	this.instance.setTransform(-76,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.price_1, new cjs.Rectangle(-76,-76,152,152), null);


(lib.pop_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.perint();
	this.instance.setTransform(-43,-45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pop_03, new cjs.Rectangle(-43,-45,86,90.5), null);


(lib.pop_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pop_black();
	this.instance.setTransform(-47.8,-47.8,0.5829,0.5829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pop_02, new cjs.Rectangle(-47.8,-47.8,95.6,95.6), null);


(lib.pop_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pop_oasis();
	this.instance.setTransform(-74.5,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pop_01, new cjs.Rectangle(-74.5,-74.5,149,149), null);


(lib.pearl1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Oasis();
	this.instance.setTransform(-42.9,-45.1,0.4991,0.4983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pearl1, new cjs.Rectangle(-42.9,-45.1,85.9,90.2), null);


(lib.pearl_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.perint();
	this.instance.setTransform(-43,-45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pearl_3, new cjs.Rectangle(-43,-45,86,90.5), null);


(lib.pearl_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Purple();
	this.instance.setTransform(-42.9,-45.1,0.4991,0.4983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pearl_2, new cjs.Rectangle(-42.9,-45.1,85.9,90.2), null);


(lib.newsensation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NEWSENSATIONSWITHATWIST();
	this.instance.setTransform(-116.5,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newsensation, new cjs.Rectangle(-116.5,-30,233,60), null);


(lib._new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NEW();
	this.instance.setTransform(-80,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._new, new cjs.Rectangle(-80,-40,160,80), null);


(lib.name = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlackPurple();
	this.instance.setTransform(-36.75,-11.05,0.5,0.4911);

	this.instance_1 = new lib.SunPearl();
	this.instance_1.setTransform(74.25,-11.05,0.5,0.4911);

	this.instance_2 = new lib.OasisPearl();
	this.instance_2.setTransform(-137.75,-11.05,0.5,0.4911);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.name, new cjs.Rectangle(-137.7,-11,275.5,22.1), null);


(lib.inst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.touch();
	this.instance.setTransform(-95,-23.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inst, new cjs.Rectangle(-95,-23.5,191,47), null);


(lib.curious = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Findmore();
	this.instance.setTransform(14,-27,0.546,0.546);

	this.instance_1 = new lib.curiouslatin();
	this.instance_1.setTransform(-141,-27,0.546,0.546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curious, new cjs.Rectangle(-141,-27,277.3,42.1), null);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._return();
	this.instance.setTransform(-35.5,-22,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_back, new cjs.Rectangle(-35.5,-22,71,44), null);


(lib.bg01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG01();
	this.instance.setTransform(-320,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg01, new cjs.Rectangle(-320,-480,640,960), null);


(lib.bg_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_Green();
	this.instance.setTransform(-320,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_sun, new cjs.Rectangle(-320,-480,640,960), null);


(lib.bg_oasis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BGOasis();
	this.instance.setTransform(-320,-479.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_oasis, new cjs.Rectangle(-320,-479.5,640,959), null);


(lib.bg_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_Black();
	this.instance.setTransform(-320,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_black, new cjs.Rectangle(-320,-480,640,960), null);


(lib.klik = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.inst();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.75},24).to({alpha:1},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-23.5,191,47);


(lib.btn_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pearl_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.5},29).to({y:0},30).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D86227").s().p("AjADBQhQhQAAhxQAAhwBQhQQBQhQBwAAQBxAABQBQQBQBQAABwQAABxhQBQQhQBQhxAAQhwAAhQhQg");
	this.shape.setTransform(-0.35,-3.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:-4},0).wait(1).to({y:-4.2},0).wait(1).to({y:-4.45},0).wait(1).to({y:-4.65},0).wait(1).to({y:-4.9},0).wait(1).to({y:-5.1},0).wait(1).to({y:-5.35},0).wait(1).to({y:-5.55},0).wait(1).to({y:-5.8},0).wait(1).to({y:-6.05},0).wait(1).to({y:-6.25},0).wait(1).to({y:-6.5},0).wait(1).to({y:-6.7},0).wait(1).to({y:-6.95},0).wait(1).to({y:-7.15},0).wait(1).to({y:-7.4},0).wait(1).to({y:-7.6},0).wait(1).to({y:-7.85},0).wait(1).to({y:-8.05},0).wait(1).to({y:-8.3},0).wait(1).to({y:-8.55},0).wait(1).to({y:-8.75},0).wait(1).to({y:-9},0).wait(1).to({y:-9.2},0).wait(1).to({y:-9.45},0).wait(1).to({y:-9.65},0).wait(1).to({y:-9.9},0).wait(1).to({y:-10.1},0).wait(1).to({y:-10.35},0).wait(1).to({y:-10.15},0).wait(1).to({y:-9.9},0).wait(1).to({y:-9.7},0).wait(1).to({y:-9.45},0).wait(1).to({y:-9.25},0).wait(1).to({y:-9.05},0).wait(1).to({y:-8.8},0).wait(1).to({y:-8.6},0).wait(1).to({y:-8.35},0).wait(1).to({y:-8.15},0).wait(1).to({y:-7.95},0).wait(1).to({y:-7.7},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.25},0).wait(1).to({y:-7.05},0).wait(1).to({y:-6.85},0).wait(1).to({y:-6.6},0).wait(1).to({y:-6.4},0).wait(1).to({y:-6.15},0).wait(1).to({y:-5.95},0).wait(1).to({y:-5.75},0).wait(1).to({y:-5.5},0).wait(1).to({y:-5.3},0).wait(1).to({y:-5.05},0).wait(1).to({y:-4.85},0).wait(1).to({y:-4.65},0).wait(1).to({y:-4.4},0).wait(1).to({y:-4.2},0).wait(1).to({y:-3.95},0).wait(1).to({y:-3.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-51.5,86,97);


(lib.btn_oasis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pearl1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.5},29).to({y:0},30).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB519A").s().p("AjBDCQhQhRAAhxQAAhxBQhQQBQhQBxAAQBxAABRBQQBQBQAABxQAABxhQBRQhRBQhxAAQhxAAhQhQg");
	this.shape.setTransform(0.25,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB519A").s().p("AjBDBQhQhQAAhxQAAhwBQhRQBQhQBxAAQBxAABRBQQBQBRAABwQAABxhQBQQhRBRhxAAQhxAAhQhRg");
	this.shape_1.setTransform(0.25,-3.15);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB519A").s().p("AjBDBQhQhPAAhyQAAhwBQhRQBQhQBxAAQBxAABRBQQBQBRAABwQAAByhQBPQhRBRhxAAQhxAAhQhRg");
	this.shape_2.setTransform(0.25,-3.4);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB519A").s().p("AjBDCQhQhQAAhyQAAhxBQhQQBQhQBxAAQBxAABRBQQBQBQAABxQAAByhQBQQhRBQhxAAQhxAAhQhQg");
	this.shape_3.setTransform(0.25,-4.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,y:-3.7},0).to({_off:true},1).wait(3).to({_off:false,y:-4.7},0).to({_off:true},1).wait(1).to({_off:false,y:-5.25},0).wait(1).to({y:-5.5},0).to({_off:true},1).wait(3).to({_off:false,y:-6.5},0).to({_off:true},1).wait(1).to({_off:false,y:-7.05},0).wait(1).to({y:-7.3},0).to({_off:true},1).wait(5).to({_off:false,y:-8.85},0).wait(1).to({y:-9.1},0).to({_off:true},1).wait(4).to({_off:false,y:-10.4},0).to({_off:true},1).wait(2).to({_off:false,y:-9.65},0).to({_off:true},1).wait(3).to({_off:false,y:-8.65},0).wait(1).to({y:-8.4},0).to({_off:true},1).wait(3).to({_off:false,y:-7.4},0).to({_off:true},1).wait(3).to({_off:false,y:-6.4},0).wait(1).to({y:-6.15},0).to({_off:true},1).wait(3).to({_off:false,y:-5.15},0).to({_off:true},1).wait(3).to({_off:false,y:-4.15},0).wait(1).to({y:-3.9},0).to({_off:true},1).wait(3).to({_off:false,y:-2.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,y:-4.95},0).to({_off:true},1).wait(18).to({_off:false,y:-9.9},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,y:-7.65},0).to({_off:true},1).wait(8).to({_off:false,y:-5.4},0).to({_off:true},1).wait(8).to({_off:false,y:-3.15},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:-3.95},0).wait(1).to({y:-4.2},0).to({_off:true},1).wait(5).to({_off:false,y:-5.75},0).wait(1).to({y:-6},0).to({_off:true},1).wait(2).to({_off:false,y:-6.8},0).to({_off:true},1).wait(2).to({_off:false,y:-7.55},0).wait(1).to({y:-7.8},0).to({_off:true},1).wait(1).to({_off:false,y:-8.35},0).wait(1).to({y:-8.6},0).to({_off:true},1).wait(2).to({_off:false,y:-9.35},0).wait(1).to({y:-9.6},0).to({_off:true},1).wait(1).to({_off:false,y:-10.15},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,y:-9.15},0).wait(1).to({y:-8.9},0).to({_off:true},1).wait(2).to({_off:false,y:-8.15},0).wait(1).to({y:-7.9},0).to({_off:true},1).wait(3).to({_off:false,y:-6.9},0).wait(1).to({y:-6.65},0).to({_off:true},1).wait(2).to({_off:false,y:-5.9},0).wait(1).to({y:-5.65},0).to({_off:true},1).wait(3).to({_off:false,y:-4.65},0).wait(1).to({y:-4.4},0).to({_off:true},1).wait(2).to({_off:false,y:-3.65},0).wait(1).to({y:-3.4},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,y:-6.25},0).to({_off:true},1).wait(6).to({_off:false,y:-8.05},0).to({_off:true},1).wait(12).to({_off:false,y:-9.4},0).to({_off:true},1).wait(8).to({_off:false,y:-7.15},0).to({_off:true},1).wait(8).to({_off:false,y:-4.9},0).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-51.6,85.9,96.7);


(lib.btn_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pearl_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.5},29).to({y:0},30).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#941BE2").s().p("Ai4C5QhOhMAAhtQAAhsBOhNQBMhMBsAAQBsAABNBMQBOBNAABsQAABthOBMQhNBNhsAAQhsAAhMhNg");
	this.shape.setTransform(-0.1,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#941BE2").s().p("Ai4C6QhOhNAAhtQAAhsBOhMQBMhOBsAAQBsAABNBOQBOBMAABsQAABthOBNQhNBMhsAAQhsAAhMhMg");
	this.shape_1.setTransform(-0.1,-5.25);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#941BE2").s().p("Ai4C6QhOhOAAhsQAAhsBOhNQBMhMBsAAQBsAABNBMQBOBNAABsQAABshOBOQhNBMhsAAQhsAAhMhMg");
	this.shape_2.setTransform(-0.1,-5.45);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#941BE2").s().p("Ai4C6QhOhOAAhsQAAhsBOhMQBMhOBsAAQBsAABNBOQBOBMAABsQAABshOBOQhNBNhsgBQhsABhMhNg");
	this.shape_3.setTransform(-0.1,-5.6);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#941BE2").s().p("Ai4C5QhOhMAAhtQAAhrBOhOQBMhNBsAAQBsAABNBNQBOBOAABrQAABthOBMQhNBOhsAAQhsAAhMhOg");
	this.shape_4.setTransform(-0.1,-5.75);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#941BE2").s().p("Ai4C5QhOhMAAhtQAAhrBOhOQBMhNBsABQBsgBBNBNQBOBOAABrQAABthOBMQhNBOhsAAQhsAAhMhOg");
	this.shape_5.setTransform(-0.1,-6.1);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#941BE2").s().p("Ai4C6QhOhNAAhtQAAhrBOhOQBMhMBsAAQBsAABNBMQBOBOAABrQAABthOBNQhNBMhsAAQhsAAhMhMg");
	this.shape_6.setTransform(-0.1,-6.25);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#941BE2").s().p("Ai4C5QhOhNAAhsQAAhsBOhMQBMhOBsAAQBsAABNBOQBOBMAABsQAABshOBNQhNBOhsAAQhsAAhMhOg");
	this.shape_7.setTransform(-0.1,-6.4);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#941BE2").s().p("Ai4C5QhOhNAAhsQAAhrBOhNQBMhOBsAAQBsAABNBOQBOBNAABrQAABshOBNQhNBOhsAAQhsAAhMhOg");
	this.shape_8.setTransform(-0.1,-6.75);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#941BE2").s().p("Ai4C5QhOhMAAhtQAAhsBOhNQBMhMBsAAQBsAABNBMQBOBNAABsQAABthOBMQhNBNhsABQhsgBhMhNg");
	this.shape_9.setTransform(-0.1,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#941BE2").s().p("Ai4C5QhOhMAAhtQAAhsBOhNQBMhMBsAAQBsAABNBMQBOBNAABsQAABthOBMQhNBOhsAAQhsAAhMhOg");
	this.shape_10.setTransform(-0.1,-8.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-5.1}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{y:-8.7}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{y:-7.8}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{y:-5.1}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:-7.05},0).to({_off:true},1).wait(7).to({_off:false,y:-8.4},0).to({_off:true},1).wait(2).to({_off:false,y:-8.85},0).to({_off:true},1).wait(14).to({_off:false,y:-8.4},0).to({_off:true},1).wait(2).to({_off:false,y:-7.95},0).to({_off:true},1).wait(16).to({_off:false,y:-5.25},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:-5.9},0).to({_off:true},1).wait(7).to({_off:false,y:-7.25},0).to({_off:true},1).wait(2).to({_off:false,y:-7.7},0).to({_off:true},1).wait(7).to({_off:false,y:-9.05},0).to({_off:true},1).wait(2).to({_off:false,y:-9.5},0).to({_off:true},1).wait(6).to({_off:false,y:-9.05},0).to({_off:true},1).wait(2).to({_off:false,y:-8.6},0).to({_off:true},1).wait(13).to({_off:false,y:-6.35},0).to({_off:true},1).wait(2).to({_off:false,y:-5.9},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:-7.4},0).to({_off:true},1).wait(10).to({_off:false,y:-9.2},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:-8.75},0).to({_off:true},1).wait(16).to({_off:false,y:-6.05},0).to({_off:true},1).wait(2).to({_off:false,y:-5.6},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:-7.55},0).to({_off:true},1).wait(10).to({_off:false,y:-9.35},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:-8.9},0).to({_off:true},1).wait(16).to({_off:false,y:-6.2},0).to({_off:true},1).wait(2).to({_off:false,y:-5.75},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(6).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,y:-6.55},0).to({_off:true},1).wait(7).to({_off:false,y:-7.9},0).to({_off:true},1).wait(10).to({_off:false,y:-9.7},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,y:-7.45},0).to({_off:true},1).wait(2).to({_off:false,y:-7},0).to({_off:true},1).wait(2).to({_off:false,y:-6.55},0).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(7).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:-8.05},0).to({_off:true},1).wait(10).to({_off:false,y:-9.85},0).to({_off:true},1).wait(16).to({_off:false,y:-7.15},0).to({_off:true},1).wait(2).to({_off:false,y:-6.7},0).to({_off:true},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(8).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:-8.2},0).to({_off:true},1).wait(11).to({_off:false,y:-9.55},0).to({_off:true},1).wait(13).to({_off:false,y:-7.3},0).to({_off:true},1).wait(2).to({_off:false,y:-6.85},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(10).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false,y:-8.55},0).to({_off:true},1).wait(18).to({_off:false,y:-8.1},0).to({_off:true},1).wait(2).to({_off:false,y:-7.65},0).to({_off:true},1).wait(13).to({_off:false,y:-5.4},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-51.6,85.9,96.7);


// stage content:
(lib.IqosTerea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Main:44,Oasis:79,Black:114,Sun:149};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [44,69,94,109,144,174];
	// timeline functions:
	this.frame_44 = function() {
		this.btn_oasis.addEventListener("click", function() {
		    this.gotoAndPlay("Oasis");
		}.bind(this));
		this.btn_black.addEventListener("click", function() {
		    this.gotoAndPlay("Black");
		}.bind(this));
		this.btn_sun.addEventListener("click", function() {
		    this.gotoAndPlay("Sun");
		}.bind(this));
		
		// Invisible stage button (opens URL)
		this.stageBtn.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/iqos-tembakau-yang-dipanaskan/iqos-terea.html", "_blank");
		    }, 100);
		}.bind(this));
		this.stageBtn.alpha = 0.05;
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.btn_back.addEventListener("click", function() {
		    this.gotoAndPlay("Main");
		}.bind(this));
	}
	this.frame_109 = function() {
		this.stop();
	}
	this.frame_144 = function() {
		this.stop();
	}
	this.frame_174 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(25).call(this.frame_69).wait(25).call(this.frame_94).wait(15).call(this.frame_109).wait(35).call(this.frame_144).wait(30).call(this.frame_174).wait(6));

	// Layer_1
	this.instance = new lib.warning_1();
	this.instance.setTransform(160,453.75);
	this.instance.compositeOperation = "hard-light";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// Layer_4
	this.instance_1 = new lib._new();
	this.instance_1.setTransform(-40,43.8,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({x:40},11).wait(161));

	// Layer_16
	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(284.5,81);
	this.btn_back._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_back).wait(94).to({_off:false},0).to({_off:true},20).wait(15).to({_off:false},0).to({_off:true},20).wait(15).to({_off:false},0).wait(16));

	// Layer_15
	this.instance_2 = new lib.Oasis_Txt();
	this.instance_2.setTransform(44,331,0.5,0.5);

	this.instance_3 = new lib.Black_Txt();
	this.instance_3.setTransform(29,324,0.5,0.5);

	this.instance_4 = new lib.Sun_Txt();
	this.instance_4.setTransform(33,330,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},94).to({state:[]},20).to({state:[{t:this.instance_3}]},15).to({state:[]},20).to({state:[{t:this.instance_4}]},15).wait(16));

	// Layer_14
	this.instance_5 = new lib.pop_01();
	this.instance_5.setTransform(58.15,214.1,0.5248,0.5248,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.pop_02();
	this.instance_6.setTransform(159.8,213.6,0.8556,0.8556,0,0,0,0,0.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.pop_03();
	this.instance_7.setTransform(262.3,216.4,0.9817,0.9817,0,0,0,0.2,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).to({scaleX:0.6458,scaleY:0.6458,x:160.05,y:169.45,alpha:1},15).to({_off:true},20).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:235.45,y:158.05,alpha:0},15).to({_off:true},20).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:239.8,y:161.9,alpha:0},15).wait(16));

	// Layer_13
	this.instance_8 = new lib.bg_oasis();
	this.instance_8.setTransform(160.05,239.6,0.4995,0.4995,0,0,0,0.1,0.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.bg_black();
	this.instance_9.setTransform(160.1,240.5,0.5,0.5,0,0,0,0.2,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.bg_sun();
	this.instance_10.setTransform(160.05,240.05,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).to({regY:0.1,scaleX:0.7396,scaleY:0.7396,x:160,y:288.3,alpha:1},15).to({_off:true},20).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(114).to({_off:false},0).to({regX:0.4,regY:0.2,scaleX:0.5594,scaleY:0.5594,x:158.85,y:254.9,alpha:1},15).to({_off:true},20).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(149).to({_off:false},0).to({scaleX:0.5793,scaleY:0.5793,y:264.45,alpha:1},15).wait(16));

	// Layer_10
	this.instance_11 = new lib.curious();
	this.instance_11.setTransform(133.15,399.75,0.7612,0.7612);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(39).to({_off:false},0).to({scaleX:0.7157,scaleY:0.7157,x:162.35,alpha:1},10).wait(131));

	// Layer_11
	this.instance_12 = new lib.klik();
	this.instance_12.setTransform(160,329.5,1.2316,1.2316);
	this.instance_12.alpha = 0.75;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(126));

	// Layer_8
	this.instance_13 = new lib.name();
	this.instance_13.setTransform(156.75,285.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(34).to({_off:false},0).to({y:273.05,alpha:1},10).wait(136));

	// Layer_7
	this.btn_sun = new lib.btn_sun();
	this.btn_sun.name = "btn_sun";
	this.btn_sun.setTransform(177.2,217.1,0.6281,0.6281);
	this.btn_sun.alpha = 0;
	this.btn_sun._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_sun).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,x:262,alpha:1},10).wait(146));

	// Layer_6
	this.btn_black = new lib.btn_black();
	this.btn_black.name = "btn_black";
	this.btn_black.setTransform(160,217.1,0.6281,0.6281);
	this.btn_black.alpha = 0;
	this.btn_black._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_black).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(151));

	// Layer_5
	this.btn_oasis = new lib.btn_oasis();
	this.btn_oasis.name = "btn_oasis";
	this.btn_oasis.setTransform(146,217.1,0.6281,0.6281,0,0,0,0.1,0);
	this.btn_oasis.alpha = 0;
	this.btn_oasis._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_oasis).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:58,alpha:1},10).wait(156));

	// Layer_17
	this.stageBtn = new lib.stageBtn();
	this.stageBtn.name = "stageBtn";
	this.stageBtn.setTransform(163.45,294.25,1,0.8462,0,0,0,0,0.2);
	this.stageBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stageBtn).wait(44).to({_off:false},0).wait(136));

	// Layer_20
	this.instance_14 = new lib.price_1();
	this.instance_14.setTransform(272.8,151.9,0.3638,0.3638);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({scaleX:0.5256,scaleY:0.5256,x:274.05,y:139.15,alpha:1},10).wait(141));

	// Layer_9
	this.instance_15 = new lib.newsensation();
	this.instance_15.setTransform(160.05,111.65,0.545,0.545,0,0,0,0.1,0);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:160,y:93.8,alpha:1},10).wait(151));

	// Layer_2
	this.instance_16 = new lib.bg01();
	this.instance_16.setTransform(160.05,240,0.5327,0.5327,0,0,0,0.1,0);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:0.6697,scaleY:0.6697,y:321.45,alpha:1},14).wait(166));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(225,81,80,0.8)").ss(1,1,1).p("Ega4gnjMA1wAAAMAAABPHMg1wAAAg");
	this.shape.setTransform(158.4,239.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F81AE").s().p("Ega4AnkMAAAhPHMA1xAAAMAAABPHg");
	this.shape_1.setTransform(158.4,239.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(180));

	// stageBackground
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgajgnDMA1HAAAMAAABOHMg1HAAAg");
	this.shape_2.setTransform(160,240);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgajAnEMAAAhOHMA1HAAAMAAABOHg");
	this.shape_3.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(80,173.6,316.6,469.29999999999995);
// library properties:
lib.properties = {
	id: '596748646871B244A1F2EA4609E41BFB',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG01.jpg", id:"BG01"},
		{src:"images/BGOasis.png", id:"BGOasis"},
		{src:"images/BG_Black.png", id:"BG_Black"},
		{src:"images/BG_Green.png", id:"BG_Green"},
		{src:"images/BlackPurple.png", id:"BlackPurple"},
		{src:"images/Black_Txt.png", id:"Black_Txt"},
		{src:"images/curiouslatin.png", id:"curiouslatin"},
		{src:"images/Findmore.png", id:"Findmore"},
		{src:"images/NEWSENSATIONSWITHATWIST.png", id:"NEWSENSATIONSWITHATWIST"},
		{src:"images/NEW.png", id:"NEW"},
		{src:"images/OasisPearl.png", id:"OasisPearl"},
		{src:"images/Oasis.png", id:"Oasis"},
		{src:"images/Oasis_Txt.png", id:"Oasis_Txt"},
		{src:"images/perint.png", id:"perint"},
		{src:"images/pop_black.png", id:"pop_black"},
		{src:"images/pop_oasis.png", id:"pop_oasis"},
		{src:"images/price.png", id:"price"},
		{src:"images/Purple.png", id:"Purple"},
		{src:"images/_return.png", id:"_return"},
		{src:"images/SunPearl.png", id:"SunPearl"},
		{src:"images/Sun_Txt.png", id:"Sun_Txt"},
		{src:"images/touch.png", id:"touch"},
		{src:"images/warning.png", id:"warning"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['596748646871B244A1F2EA4609E41BFB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;