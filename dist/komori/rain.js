function random(t){return Math.floor(Math.random()*t)+1}function Canvas(t){this.elm=t,this.canvasCtx=this.elm.getContext("2d"),this.width=this.elm.width,this.height=this.elm.height,this.children=new Array,this.init()}function Sakura(t,i,e,h,s,a,n,r){this.parent=t,this.x_pos=i,this.y_pos=e,this.scale=h,this.direction=s,this.rotate=a,this.wind=n,this.gr=5,this.phase=0,this.color=r}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,i){window.setTimeout(t,1)},Canvas.prototype={resize:function(t){this.width=this.elm.width=t?2*this.elm.parentNode.clientWidth:2*window.innerWidth,this.height=this.elm.height=t?2*this.elm.parentNode.clientHeight:2*window.innerHeight},clear:function(){this.canvasCtx.clearRect(0,0,this.width,this.height)},addChild:function(t){this.children.push(t)},removeChild:function(t){this.children.splice(t,1)},rendering:function(){this.clear();for(var t=this.children.length-1;t>=0;t--){this.children[t].draw(this.canvasCtx)&&this.removeChild(t)}},createSakura:function(t,i,e,h,s){for(var a=["#f29fb5","#f5cbd4","#783791"],n=0;n<t;n++){var r=Math.floor(Math.random()*(h-i))+i,o=Math.floor(Math.random()*(s-e))+e;this.addChild(new Sakura(this,r,o,Math.random()+.5,{x:random(360),y:random(360),z:random(360)},{x:random(10),y:random(10),z:random(10)},random(5),a[random(3)-1]))}console.log(t)},animate:function(){var t=this;Math.random()>.15&&this.children.length<30&&this.createSakura(20,1,1,this.width,0),this.rendering(),window.requestAnimationFrame((function(){t.animate()}))},init:function(){this.resize(!0),this.animate()}},Sakura.prototype={draw:function(t){t.save(),t.beginPath(),t.translate(this.x_pos,this.y_pos),t.rotate(this.direction.y/100*Math.PI),t.scale(this.scale,this.scale),t.fillStyle=this.color;var i=Math.cos(this.direction.x*Math.PI/100),e=Math.cos(this.direction.z*Math.PI/100);return t.moveTo(-6*e,-10*i),t.bezierCurveTo(-10*e,0*i,-5*e,10*i,0*e,10*i),t.bezierCurveTo(0*e,0*i,0*e,0*i,-1*e,-1*i),t.fill(),t.restore(),this.moveSakura()},moveSakura:function(){if(0===this.phase){var t=1+this.scale/10;this.y_pos>this.parent.height*t&&(this.gr=0,this.wind=0,this.rotate.x=0,this.rotate.y=0,this.rotate.z=0,this.phase=1,this.parent.fallenSakura++)}else 2===this.phase&&(this.gr>-3&&(this.gr+=this.gr/10),this.gr*this.scale);return this.y_pos=this.y_pos+this.gr*this.scale/2,this.x_pos=this.x_pos+this.wind/-2,this.direction.x+=this.rotate.x/3,this.direction.y+=this.rotate.y/3,this.direction.z+=this.rotate.z/3,this.x_pos>this.parent.width||this.y_pos>this.parent.height}};var canvas=document.getElementById("sakura"),SakuraCanvas=new Canvas(canvas);