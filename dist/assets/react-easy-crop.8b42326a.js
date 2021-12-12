import{R as y}from"./vendor.cfb83e27.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var N=function(r,o){return N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},N(r,o)};function he(r,o){N(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var u=function(){return u=Object.assign||function(o){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},u.apply(this,arguments)},B=!1,w,L,W,P,R,U,M,Z,O,F,k,I,H,G,V;function d(){if(!B){B=!0;var r=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(r),e=/(Mac OS X)|(Windows)|(Linux)/.exec(r);if(I=/\b(iPhone|iP[ao]d)/.exec(r),H=/\b(iP[ao]d)/.exec(r),F=/Android/i.exec(r),G=/FBAN\/\w+;/i.exec(r),V=/Mobile/i.exec(r),k=!!/Win64/.exec(r),o){w=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,w&&document&&document.documentMode&&(w=document.documentMode);var t=/(?:Trident\/(\d+.\d+))/.exec(r);U=t?parseFloat(t[1])+4:w,L=o[2]?parseFloat(o[2]):NaN,W=o[3]?parseFloat(o[3]):NaN,P=o[4]?parseFloat(o[4]):NaN,P?(o=/(?:Chrome\/(\d+\.\d+))/.exec(r),R=o&&o[1]?parseFloat(o[1]):NaN):R=NaN}else w=L=W=R=P=NaN;if(e){if(e[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(r);M=n?parseFloat(n[1].replace("_",".")):!0}else M=!1;Z=!!e[2],O=!!e[3]}else M=Z=O=!1}}var X={ie:function(){return d()||w},ieCompatibilityMode:function(){return d()||U>w},ie64:function(){return X.ie()&&k},firefox:function(){return d()||L},opera:function(){return d()||W},webkit:function(){return d()||P},safari:function(){return X.webkit()},chrome:function(){return d()||R},windows:function(){return d()||Z},osx:function(){return d()||M},linux:function(){return d()||O},iphone:function(){return d()||I},mobile:function(){return d()||I||H||F||V},nativeApp:function(){return d()||G},android:function(){return d()||F},ipad:function(){return d()||H}},ce=X,b=!!(typeof window!="undefined"&&window.document&&window.document.createElement),pe={canUseDOM:b,canUseWorkers:typeof Worker!="undefined",canUseEventListeners:b&&!!(window.addEventListener||window.attachEvent),canUseViewport:b&&!!window.screen,isInWorker:!b},ue=pe,q=ue,$;q.canUseDOM&&($=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function de(r,o){if(!q.canUseDOM||o&&!("addEventListener"in document))return!1;var e="on"+r,t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&$&&r==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var le=de,fe=ce,me=le,J=10,K=40,Q=800;function ee(r){var o=0,e=0,t=0,n=0;return"detail"in r&&(e=r.detail),"wheelDelta"in r&&(e=-r.wheelDelta/120),"wheelDeltaY"in r&&(e=-r.wheelDeltaY/120),"wheelDeltaX"in r&&(o=-r.wheelDeltaX/120),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(o=e,e=0),t=o*J,n=e*J,"deltaY"in r&&(n=r.deltaY),"deltaX"in r&&(t=r.deltaX),(t||n)&&r.deltaMode&&(r.deltaMode==1?(t*=K,n*=K):(t*=Q,n*=Q)),t&&!o&&(o=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:o,spinY:e,pixelX:t,pixelY:n}}ee.getEventType=function(){return fe.firefox()?"DOMMouseScroll":me("wheel")?"wheel":"mousewheel"};var ve=ee,ge=ve;function we(r,o,e,t,n,i){i===void 0&&(i=0);var s=x(r,o,i),a=s.width,h=s.height,c=Math.min(a,e),p=Math.min(h,t);return c>p*n?{width:p*n,height:p}:{width:c,height:c/n}}function Ce(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function z(r,o,e,t,n){n===void 0&&(n=0);var i=x(o.width,o.height,n),s=i.width,a=i.height;return{x:te(r.x,s,e.width,t),y:te(r.y,a,e.height,t)}}function te(r,o,e,t){var n=o*t/2-e/2;return D(r,-n,n)}function oe(r,o){return Math.sqrt(Math.pow(r.y-o.y,2)+Math.pow(r.x-o.x,2))}function re(r,o){return Math.atan2(o.y-r.y,o.x-r.x)*180/Math.PI}function ye(r,o,e,t,n,i,s){i===void 0&&(i=0),s===void 0&&(s=!0);var a=s?xe:_e,h=x(o.width,o.height,i),c=x(o.naturalWidth,o.naturalHeight,i),p={x:a(100,((h.width-e.width/n)/2-r.x/n)/h.width*100),y:a(100,((h.height-e.height/n)/2-r.y/n)/h.height*100),width:a(100,e.width/h.width*100/n),height:a(100,e.height/h.height*100/n)},l=Math.round(a(c.width,p.width*c.width/100)),v=Math.round(a(c.height,p.height*c.height/100)),_=c.width>=c.height*t,f=_?{width:Math.round(v*t),height:v}:{width:l,height:Math.round(l/t)},m=u(u({},f),{x:Math.round(a(c.width-f.width,p.x*c.width/100)),y:Math.round(a(c.height-f.height,p.y*c.height/100))});return{croppedAreaPercentages:p,croppedAreaPixels:m}}function xe(r,o){return Math.min(r,Math.max(0,o))}function _e(r,o){return o}function Ee(r,o,e,t,n,i){var s=x(o.width,o.height,e),a=D(t.width/s.width*(100/r.width),n,i),h={x:a*s.width/2-t.width/2-s.width*a*(r.x/100),y:a*s.height/2-t.height/2-s.height*a*(r.y/100)};return{crop:h,zoom:a}}function Se(r,o,e){var t=Ce(o);return e.height>e.width?e.height/(r.height*t):e.width/(r.width*t)}function Pe(r,o,e,t,n,i){e===void 0&&(e=0);var s=x(o.naturalWidth,o.naturalHeight,e),a=D(Se(r,o,t),n,i),h=t.height>t.width?t.height/r.height:t.width/r.width,c={x:((s.width-r.width)/2-r.x)*h,y:((s.height-r.height)/2-r.y)*h};return{crop:c,zoom:a}}function ne(r,o){return{x:(o.x+r.x)/2,y:(o.y+r.y)/2}}function Re(r){return r*Math.PI/180}function x(r,o,e){var t=Re(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}function D(r,o,e){return Math.min(Math.max(r,o),e)}function A(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return r.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var Me=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,be=1,ze=3,De=function(r){he(o,r);function o(){var e=r!==null&&r.apply(this,arguments)||this;return e.imageRef=null,e.videoRef=null,e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){document.removeEventListener("mousemove",e.onMouseMove),document.removeEventListener("mouseup",e.onDragStopped),document.removeEventListener("touchmove",e.onTouchMove),document.removeEventListener("touchend",e.onDragStopped)},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var n=Ee(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=n.crop,s=n.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(s)}else if(e.props.initialCroppedAreaPixels){var a=Pe(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=a.crop,s=a.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(s)}},e.computeSizes=function(){var t,n,i,s,a,h,c=e.imageRef||e.videoRef;if(c&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var p=e.containerRect.width/e.containerRect.height,l=((t=e.imageRef)===null||t===void 0?void 0:t.naturalWidth)||((n=e.videoRef)===null||n===void 0?void 0:n.videoWidth)||0,v=((i=e.imageRef)===null||i===void 0?void 0:i.naturalHeight)||((s=e.videoRef)===null||s===void 0?void 0:s.videoHeight)||0,_=c.offsetWidth<l||c.offsetHeight<v,f=l/v,m=void 0;if(_)switch(e.props.objectFit){default:case"contain":m=p>f?{width:e.containerRect.height*f,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/f};break;case"horizontal-cover":m={width:e.containerRect.width,height:e.containerRect.width/f};break;case"vertical-cover":m={width:e.containerRect.height*f,height:e.containerRect.height};break}else m={width:c.offsetWidth,height:c.offsetHeight};e.mediaSize=u(u({},m),{naturalWidth:l,naturalHeight:v});var g=e.props.cropSize?e.props.cropSize:we(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((a=e.state.cropSize)===null||a===void 0?void 0:a.height)!==g.height||((h=e.state.cropSize)===null||h===void 0?void 0:h.width)!==g.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(g),e.setState({cropSize:g},e.recomputeCropPosition),g}},e.onMouseDown=function(t){t.preventDefault(),document.addEventListener("mousemove",e.onMouseMove),document.addEventListener("mouseup",e.onDragStopped),e.onDragStart(o.getMousePoint(t))},e.onMouseMove=function(t){return e.onDrag(o.getMousePoint(t))},e.onTouchStart=function(t){document.addEventListener("touchmove",e.onTouchMove,{passive:!1}),document.addEventListener("touchend",e.onDragStopped),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(o.getTouchPoint(t.touches[0]))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(o.getTouchPoint(t.touches[0]))},e.onDragStart=function(t){var n,i,s=t.x,a=t.y;e.dragStartPosition={x:s,y:a},e.dragStartCrop=u({},e.props.crop),(i=(n=e.props).onInteractionStart)===null||i===void 0||i.call(n)},e.onDrag=function(t){var n=t.x,i=t.y;e.rafDragTimeout&&window.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=window.requestAnimationFrame(function(){if(!!e.state.cropSize&&!(n===void 0||i===void 0)){var s=n-e.dragStartPosition.x,a=i-e.dragStartPosition.y,h={x:e.dragStartCrop.x+s,y:e.dragStartCrop.y+a},c=e.props.restrictPosition?z(h,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):h;e.props.onCropChange(c)}})},e.onDragStopped=function(){var t,n;e.cleanEvents(),e.emitCropData(),(n=(t=e.props).onInteractionEnd)===null||n===void 0||n.call(t)},e.onWheel=function(t){t.preventDefault();var n=o.getMousePoint(t),i=ge(t).pixelY,s=e.props.zoom-i*e.props.zoomSpeed/200;e.setNewZoom(s,n),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var a,h;return(h=(a=e.props).onInteractionStart)===null||h===void 0?void 0:h.call(a)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=window.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var a,h;return(h=(a=e.props).onInteractionEnd)===null||h===void 0?void 0:h.call(a)})},250)},e.getPointOnContainer=function(t){var n=t.x,i=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-e.containerRect.left),y:e.containerRect.height/2-(i-e.containerRect.top)}},e.getPointOnMedia=function(t){var n=t.x,i=t.y,s=e.props,a=s.crop,h=s.zoom;return{x:(n+a.x)/h,y:(i+a.y)/h}},e.setNewZoom=function(t,n){if(!(!e.state.cropSize||!e.props.onZoomChange)){var i=e.getPointOnContainer(n),s=e.getPointOnMedia(i),a=D(t,e.props.minZoom,e.props.maxZoom),h={x:s.x*a-i.x,y:s.y*a-i.y},c=e.props.restrictPosition?z(h,e.mediaSize,e.state.cropSize,a,e.props.rotation):h;e.props.onCropChange(c),e.props.onZoomChange(a)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?z(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return ye(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(!!t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(n,i),e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(!!t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.recomputeCropPosition=function(){if(!!e.state.cropSize){var t=e.props.restrictPosition?z(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return o.prototype.componentDidMount=function(){window.addEventListener("resize",this.computeSizes),this.containerRef&&(this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.preventZoomSafari),this.containerRef.addEventListener("gesturechange",this.preventZoomSafari)),this.props.disableAutomaticStylesInjection||(this.styleRef=document.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.styleRef.innerHTML=Me,document.head.appendChild(this.styleRef)),this.imageRef&&this.imageRef.complete&&this.onMediaLoad()},o.prototype.componentWillUnmount=function(){var e;window.removeEventListener("resize",this.computeSizes),this.containerRef&&(this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.containerRef.removeEventListener("gesturechange",this.preventZoomSafari)),this.styleRef&&((e=this.styleRef.parentNode)===null||e===void 0||e.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent()},o.prototype.componentDidUpdate=function(e){var t,n,i,s,a,h,c,p,l;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((n=this.props.cropSize)===null||n===void 0?void 0:n.height)||((i=e.cropSize)===null||i===void 0?void 0:i.width)!==((s=this.props.cropSize)===null||s===void 0?void 0:s.width)?this.computeSizes():(((a=e.crop)===null||a===void 0?void 0:a.x)!==((h=this.props.crop)===null||h===void 0?void 0:h.x)||((c=e.crop)===null||c===void 0?void 0:c.y)!==((p=this.props.crop)===null||p===void 0?void 0:p.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((l=this.videoRef)===null||l===void 0||l.load())},o.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},o.prototype.onPinchStart=function(e){var t=o.getTouchPoint(e.touches[0]),n=o.getTouchPoint(e.touches[1]);this.lastPinchDistance=oe(t,n),this.lastPinchRotation=re(t,n),this.onDragStart(ne(t,n))},o.prototype.onPinchMove=function(e){var t=this,n=o.getTouchPoint(e.touches[0]),i=o.getTouchPoint(e.touches[1]),s=ne(n,i);this.onDrag(s),this.rafPinchTimeout&&window.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=window.requestAnimationFrame(function(){var a=oe(n,i),h=t.props.zoom*(a/t.lastPinchDistance);t.setNewZoom(h,s),t.lastPinchDistance=a;var c=re(n,i),p=t.props.rotation+(c-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(p),t.lastPinchRotation=c})},o.prototype.render=function(){var e=this,t=this.props,n=t.image,i=t.video,s=t.mediaProps,a=t.transform,h=t.crop,c=h.x,p=h.y,l=t.rotation,v=t.zoom,_=t.cropShape,f=t.showGrid,m=t.style,g=m.containerStyle,ie=m.cropAreaStyle,j=m.mediaStyle,T=t.classes,ae=T.containerClassName,se=T.cropAreaClassName,Y=T.mediaClassName,C=t.objectFit;return y.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(S){return e.containerRef=S},"data-testid":"container",style:g,className:A("reactEasyCrop_Container",ae)},n?y.createElement("img",u({alt:"",className:A("reactEasyCrop_Image",C==="contain"&&"reactEasyCrop_Contain",C==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",C==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",Y)},s,{src:n,ref:function(S){return e.imageRef=S},style:u(u({},j),{transform:a||"translate("+c+"px, "+p+"px) rotate("+l+"deg) scale("+v+")"}),onLoad:this.onMediaLoad})):i&&y.createElement("video",u({autoPlay:!0,loop:!0,muted:!0,className:A("reactEasyCrop_Video",C==="contain"&&"reactEasyCrop_Contain",C==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",C==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",Y)},s,{ref:function(S){return e.videoRef=S},onLoadedMetadata:this.onMediaLoad,style:u(u({},j),{transform:a||"translate("+c+"px, "+p+"px) rotate("+l+"deg) scale("+v+")"}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(function(E){return y.createElement("source",u({key:E.src},E))})),this.state.cropSize&&y.createElement("div",{style:u(u({},ie),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:A("reactEasyCrop_CropArea",_==="round"&&"reactEasyCrop_CropAreaRound",f&&"reactEasyCrop_CropAreaGrid",se)}))},o.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:ze,minZoom:be,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},o.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o}(y.Component),Te=De;export{Te as C};
