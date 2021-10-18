import{r as o}from"./vendor.f60fafbd.js";import{n as K,k as j,t as q,v as R,j as T,S as V,o as D,u as W,O as y,$ as I,c as H}from"./index.1e2a9128.js";import{m as B}from"./text.58bccc80.js";function z(r){r===void 0&&(r=!1);var[i,a]=o.exports.useState(r),t=o.exports.useCallback(()=>{a(!0)},[]),e=o.exports.useCallback(()=>{a(!1)},[]),n=o.exports.useCallback(()=>{a(u=>!u)},[]);return[i,{on:t,off:e,toggle:n}]}function v(){return v=Object.assign||function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},v.apply(this,arguments)}function N(r,i){if(r==null)return{};var a={},t=Object.keys(r),e,n;for(n=0;n<t.length;n++)e=t[n],!(i.indexOf(e)>=0)&&(a[e]=r[e]);return a}var[G,J]=K({strict:!1,name:"FormControlContext"});function Q(r){var{id:i,isRequired:a,isInvalid:t,isDisabled:e,isReadOnly:n}=r,u=N(r,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),f=W(),d=i||"field-"+f,x=d+"-label",b=d+"-feedback",h=d+"-helptext",[F,p]=o.exports.useState(!1),[P,g]=o.exports.useState(!1),[c,_]=z(),E=o.exports.useCallback(function(l,s){return l===void 0&&(l={}),s===void 0&&(s=null),v({id:h},l,{ref:B(s,m=>{!m||g(!0)})})},[h]),S=o.exports.useCallback(function(l,s){var m,k;return l===void 0&&(l={}),s===void 0&&(s=null),v({},l,{ref:s,"data-focus":y(c),"data-disabled":y(e),"data-invalid":y(t),"data-readonly":y(n),id:(m=l.id)!=null?m:x,htmlFor:(k=l.htmlFor)!=null?k:d})},[d,e,c,t,n,x]),A=o.exports.useCallback(function(l,s){return l===void 0&&(l={}),s===void 0&&(s=null),v({id:b},l,{ref:B(s,m=>{!m||p(!0)}),"aria-live":"polite"})},[b]),L=o.exports.useCallback(function(l,s){return l===void 0&&(l={}),s===void 0&&(s=null),v({},l,u,{ref:s,role:"group"})},[u]),M=o.exports.useCallback(function(l,s){return l===void 0&&(l={}),s===void 0&&(s=null),v({},l,{ref:s,role:"presentation","aria-hidden":!0,children:l.children||"*"})},[]);return{isRequired:!!a,isInvalid:!!t,isReadOnly:!!n,isDisabled:!!e,isFocused:!!c,onFocus:_.on,onBlur:_.off,hasFeedbackText:F,setHasFeedbackText:p,hasHelpText:P,setHasHelpText:g,id:d,labelId:x,feedbackId:b,helpTextId:h,htmlProps:u,getHelpTextProps:E,getErrorMessageProps:A,getRootProps:L,getLabelProps:S,getRequiredIndicatorProps:M}}var re=j((r,i)=>{var a=q("Form",r),t=R(r),e=Q(t),{getRootProps:n}=e,u=N(e,["getRootProps","htmlProps"]),f=T("chakra-form-control",r.className),d=o.exports.useMemo(()=>u,[u]);return o.exports.createElement(G,{value:d},o.exports.createElement(V,{value:a},o.exports.createElement(D.div,v({},n({},i),{className:f,__css:a.container}))))});function O(){return O=Object.assign||function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},O.apply(this,arguments)}function $(r,i){if(r==null)return{};var a={},t=Object.keys(r),e,n;for(n=0;n<t.length;n++)e=t[n],!(i.indexOf(e)>=0)&&(a[e]=r[e]);return a}function U(r){var i=X(r),{isDisabled:a,isInvalid:t,isReadOnly:e,isRequired:n}=i,u=$(i,["isDisabled","isInvalid","isReadOnly","isRequired"]);return O({},u,{disabled:a,readOnly:e,required:n,"aria-invalid":I(t),"aria-required":I(n),"aria-readonly":I(e)})}function X(r){var i,a,t,e=J(),{id:n,disabled:u,readOnly:f,required:d,isRequired:x,isInvalid:b,isReadOnly:h,isDisabled:F,onFocus:p,onBlur:P}=r,g=$(r,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),c=r["aria-describedby"]?[r["aria-describedby"]]:[];return e!=null&&e.hasFeedbackText&&e!=null&&e.isInvalid&&c.push(e.feedbackId),e!=null&&e.hasHelpText&&c.push(e.helpTextId),O({},g,{"aria-describedby":c.join(" ")||void 0,id:n!=null?n:e==null?void 0:e.id,isDisabled:(i=u!=null?u:F)!=null?i:e==null?void 0:e.isDisabled,isReadOnly:(a=f!=null?f:h)!=null?a:e==null?void 0:e.isReadOnly,isRequired:(t=d!=null?d:x)!=null?t:e==null?void 0:e.isRequired,isInvalid:b!=null?b:e==null?void 0:e.isInvalid,onFocus:H(e==null?void 0:e.onFocus,p),onBlur:H(e==null?void 0:e.onBlur,P)})}function C(){return C=Object.assign||function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t])}return r},C.apply(this,arguments)}var Y=j((r,i)=>{var a=q("Input",r),t=R(r),e=U(t),n=T("chakra-input",r.className);return o.exports.createElement(D.input,C({},e,{__css:a.field,ref:i,className:n}))});Y.id="Input";export{re as F,Y as I,J as a,U as u};
