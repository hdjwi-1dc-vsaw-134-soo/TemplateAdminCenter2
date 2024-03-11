class w{constructor(e){this.properties=e??[]}get(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.value);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,r){const n=this.get(e);if(n!==void 0){if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,r){const n=this.get(e);if(n===void 0)throw new Error('Property "'+e+'" is missing');if(r!=="json"&&typeof n!==r)throw new Error('Expected property "'+e+'" to have type "'+r+'"');return n}getType(e){const r=this.properties.filter(n=>n.name===e).map(n=>n.type);if(r.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(r.length!==0)return r[0]}}const Y="https://unpkg.com/@workadventure/scripting-api-extra@1.7.4/dist";class oe{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new w(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function U(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(Y+"/configuration.html"+e,!0)}async function se(t,e){const r=await WA.room.getTiledMap(),n=new Map;return J(r.layers,n,t,e),n}function J(t,e,r,n){for(const o of t)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(r&&o.name!==r||n&&!n.includes(s.name))continue;e.set(s.name,new oe(s))}}else o.type==="group"&&J(o.layers,e,r,n)}let x;async function T(){return x===void 0&&(x=ae()),x}async function ae(){return ie(await WA.room.getTiledMap())}function ie(t){const e=new Map;return X(t.layers,"",e),e}function X(t,e,r){for(const n of t)n.type==="group"?X(n.layers,e+n.name+"/",r):(n.name=e+n.name,r.set(n.name,n))}async function Q(){const t=await T(),e=[];for(const r of t.values())if(r.type==="objectgroup")for(const n of r.objects)(n.type==="area"||n.class==="area")&&e.push(n);return e}function ue(t){let e=1/0,r=1/0,n=0,o=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)s[i+a*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),r=Math.min(r,a),n=Math.max(n,a));return{top:r,left:e,right:o+1,bottom:n+1}}function F(t){let e=1/0,r=1/0,n=0,o=0;for(const s of t){const a=ue(s);a.left<e&&(e=a.left),a.top<r&&(r=a.top),a.right>o&&(o=a.right),a.bottom>n&&(n=a.bottom)}return{top:r,left:e,right:o,bottom:n}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ce=Object.prototype.toString,L=Array.isArray||function(e){return ce.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function le(t){return L(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function D(t,e){return t!=null&&typeof t=="object"&&e in t}function fe(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var pe=RegExp.prototype.test;function he(t,e){return pe.call(t,e)}var ge=/\S/;function de(t){return!he(ge,t)}var ye={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function me(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return ye[r]})}var ve=/\s*/,be=/\s+/,O=/\s*=/,Ae=/\s*\}/,we=/#|\^|\/|>|\{|&|=|!/;function We(t,e){if(!t)return[];var r=!1,n=[],o=[],s=[],a=!1,i=!1,u="",l=0;function p(){if(a&&!i)for(;s.length;)delete o[s.pop()];else s=[];a=!1,i=!1}var d,m,k;function S(b){if(typeof b=="string"&&(b=b.split(be,2)),!L(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(V(b[0])+"\\s*"),m=new RegExp("\\s*"+V(b[1])),k=new RegExp("\\s*"+V("}"+b[1]))}S(e||g.tags);for(var f=new M(t),v,c,y,C,B,A;!f.eos();){if(v=f.pos,y=f.scanUntil(d),y)for(var R=0,ne=y.length;R<ne;++R)C=y.charAt(R),de(C)?(s.push(o.length),u+=C):(i=!0,r=!0,u+=" "),o.push(["text",C,v,v+1]),v+=1,C===`
`&&(p(),u="",l=0,r=!1);if(!f.scan(d))break;if(a=!0,c=f.scan(we)||"name",f.scan(ve),c==="="?(y=f.scanUntil(O),f.scan(O),f.scanUntil(m)):c==="{"?(y=f.scanUntil(k),f.scan(Ae),f.scanUntil(m),c="&"):y=f.scanUntil(m),!f.scan(m))throw new Error("Unclosed tag at "+f.pos);if(c==">"?B=[c,y,v,f.pos,u,l,r]:B=[c,y,v,f.pos],l++,o.push(B),c==="#"||c==="^")n.push(B);else if(c==="/"){if(A=n.pop(),!A)throw new Error('Unopened section "'+y+'" at '+v);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+v)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&S(y)}if(p(),A=n.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+f.pos);return Se(Le(o))}function Le(t){for(var e=[],r,n,o=0,s=t.length;o<s;++o)r=t[o],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function Se(t){for(var e=[],r=e,n=[],o,s,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":r.push(o),n.push(o),r=o[4]=[];break;case"/":s=n.pop(),s[5]=o[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(o)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};M.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function W(t,e){this.view=t,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var o=this,s,a,i,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,a=e.split("."),i=0;s!=null&&i<a.length;)i===a.length-1&&(u=D(s,a[i])||fe(s,a[i])),s=s[a[i++]];else s=o.view[e],u=D(o.view,e);if(u){n=s;break}o=o.parent}r[e]=n}return G(n)&&(n=n.call(this.view)),n};function h(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,r){var n=this.templateCache,o=e+":"+(r||g.tags).join(":"),s=typeof n<"u",a=s?n.get(o):void 0;return a==null&&(a=We(e,r),s&&n.set(o,a)),a};h.prototype.render=function(e,r,n,o){var s=this.getConfigTags(o),a=this.parse(e,s),i=r instanceof W?r:new W(r,void 0);return this.renderTokens(a,i,n,e,o)};h.prototype.renderTokens=function(e,r,n,o,s){for(var a="",i,u,l,p=0,d=e.length;p<d;++p)l=void 0,i=e[p],u=i[0],u==="#"?l=this.renderSection(i,r,n,o,s):u==="^"?l=this.renderInverted(i,r,n,o,s):u===">"?l=this.renderPartial(i,r,n,s):u==="&"?l=this.unescapedValue(i,r):u==="name"?l=this.escapedValue(i,r,s):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};h.prototype.renderSection=function(e,r,n,o,s){var a=this,i="",u=r.lookup(e[1]);function l(m){return a.render(m,r,n,s)}if(u){if(L(u))for(var p=0,d=u.length;p<d;++p)i+=this.renderTokens(e[4],r.push(u[p]),n,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],r.push(u),n,o,s);else if(G(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(r.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],r,n,o,s);return i}};h.prototype.renderInverted=function(e,r,n,o,s){var a=r.lookup(e[1]);if(!a||L(a)&&a.length===0)return this.renderTokens(e[4],r,n,o,s)};h.prototype.indentPartial=function(e,r,n){for(var o=r.replace(/[^ \t]/g,""),s=e.split(`
`),a=0;a<s.length;a++)s[a].length&&(a>0||!n)&&(s[a]=o+s[a]);return s.join(`
`)};h.prototype.renderPartial=function(e,r,n,o){if(n){var s=this.getConfigTags(o),a=G(n)?n(e[1]):n[e[1]];if(a!=null){var i=e[6],u=e[5],l=e[4],p=a;u==0&&l&&(p=this.indentPartial(a,l,i));var d=this.parse(p,s);return this.renderTokens(d,r,n,p,o)}}};h.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};h.prototype.escapedValue=function(e,r,n){var o=this.getConfigEscape(n)||g.escape,s=r.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===g.escape?String(s):o(s)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return L(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!L(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){P.templateCache=t},get templateCache(){return P.templateCache}},P=new h;g.clearCache=function(){return P.clearCache()};g.parse=function(e,r){return P.parse(e,r)};g.render=function(e,r,n,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+le(e)+'" was given as the first argument for mustache#render(template, view, partials)');return P.render(e,r,n,o)};g.escape=me;g.Scanner=M;g.Context=W;g.Writer=h;class Z{constructor(e,r){this.template=e,this.state=r,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const r=[];for(const n of this.getUsedVariables().values())r.push(this.state.onVariableChange(n).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const n of r)n.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,r){for(const n of e){const o=n[0],s=n[1],a=n[4];["name","&","#","^"].includes(o)&&r.add(s),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,r)}}}async function Ce(){var t;const e=await Q();for(const r of e){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const o of n){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new Z(o.value,WA.state);if(s.isPureString())continue;const a=s.getValue();await N(r.name,o.name,a),s.onChange(async i=>{await N(r.name,o.name,i)})}}}async function Ee(){var t;const e=await T();for(const[r,n]of e.entries())if(n.type!=="objectgroup"){const o=(t=n.properties)!==null&&t!==void 0?t:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const a=new Z(s.value,WA.state);if(a.isPureString())continue;const i=a.getValue();q(r,s.name,i),a.onChange(u=>{q(r,s.name,u)})}}}async function N(t,e,r){console.log(t),(await WA.room.area.get(t)).setProperty(e,r)}function q(t,e,r){WA.room.setProperty(t,e,r),e==="visible"&&(r?WA.room.showLayer(t):WA.room.hideLayer(t))}const Pe="https://admin.workadventu.re/html";let _,j=0,I=0;function K(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.showLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.hideLayer(r)}else{let e=t.properties.mustGetString("openLayer");for(const r of e.split(`
`))WA.room.hideLayer(r);e=t.properties.mustGetString("closeLayer");for(const r of e.split(`
`))WA.room.showLayer(r)}}function Te(t){const e=t.properties.getString("openSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=te(t.properties.mustGetString("openLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function Me(t){const e=t.properties.getString("closeSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=te(t.properties.mustGetString("closeLayer").split(`
`));if(o>r)return;n=1-o/r}e&&WA.sound.loadSound(e).play({volume:n})}function ee(t){return t.map(e=>_.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function te(t){const e=ee(t),r=F(e),n=((r.right-r.left)/2+r.left)*32,o=((r.bottom-r.top)/2+r.top)*32;return Math.sqrt(Math.pow(j-n,2)+Math.pow(I-o,2))}function ke(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Te(t):Me(t),K(t)}),K(t)}function z(t,e,r,n){const o=t.name;let s,a,i=!1;const u=r.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const p=!!u;function d(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=r.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function k(){let c;if(t.type==="tilelayer")c=F(ee(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}a=WA.room.website.create({name:"doorKeypad"+o,url:n+"/keypad.html#"+encodeURIComponent(o),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function S(){a&&(WA.room.website.delete(a.name),a=void 0)}function f(){if(i=!0,r.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(r.getString("code")||r.getString("codeVariable"))){k();return}l&&(WA.state[e.name]?d():m())}function v(){i=!1,r.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),S()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(v)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(v)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!r.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),a&&WA.state[e.name]===!0&&S(),!r.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Be(t){const e=t.properties.mustGetString("bellSound"),r=t.properties.getNumber("soundRadius");let n=1;if(r){const o=Math.sqrt(Math.pow(t.x-j,2)+Math.pow(t.y-I,2));if(o>r)return;n=1-o/r}WA.sound.loadSound(e).play({volume:n})}function Re(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Be(t)})}function H(t,e,r){let n;const o=e.getString("bellPopup");if(r.type==="tilelayer"){const s=r.name;WA.room.onEnterLayer(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{n&&(n.close(),n=void 0)})}else{const s=r.name;WA.room.area.onEnter(s).subscribe(()=>{var a;o?n=WA.ui.openPopup(o,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{n&&(n.close(),n=void 0)})}}async function xe(t){t=t??Pe;const e=await se();_=await T();for(const r of e.values())r.properties.get("door")&&ke(r),r.properties.get("bell")&&Re(r);for(const r of _.values()){const n=new w(r.properties),o=n.getString("doorVariable");if(o&&r.type==="tilelayer"){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+r.name+'"');z(r,a,n,t)}const s=n.getString("bellVariable");s&&r.type==="tilelayer"&&H(s,n,r)}for(const r of await Q()){const n=new w(r.properties),o=n.getString("doorVariable");if(o){const a=e.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+r.name+'"');z(r,a,n,t)}const s=n.getString("bellVariable");s&&H(s,n,r)}WA.player.onPlayerMove(r=>{j=r.x,I=r.y})}function Ve(t,e){const r=t.getString("bindVariable");if(r){const n=t.get("enterValue"),o=t.get("leaveValue"),s=t.getString("triggerMessage"),a=t.getString("tag");_e(r,e,n,o,s,a)}}function _e(t,e,r,n,o,s){s&&!WA.player.tags.includes(s)||(r!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=r)}),n!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=n}))}async function Ge(){const t=await T();for(const e of t.values()){const r=new w(e.properties);Ve(r,e.name)}}let $;async function je(t){const e=await WA.room.getTiledMap();t=t??Y,$=await T();const r=e.layers.find(n=>n.name==="configuration");if(r){const o=new w(r.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of $.values()){const a=new w(s.properties),i=a.getString("openConfig");i&&s.type==="tilelayer"&&Ie(i.split(","),s.name,a)}}}function Ie(t,e,r){let n;const o=r.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function a(){var u;n&&n.remove(),n=WA.ui.displayActionMessage({message:(u=r.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>U(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=r.getString("openConfigTrigger");s&&(u&&u==="onaction"?a():U(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{n&&n.remove(),i()})}function Ue(){return WA.onInit().then(()=>{xe().catch(t=>console.error(t)),Ge().catch(t=>console.error(t)),je().catch(t=>console.error(t)),Ee().catch(t=>console.error(t)),Ce().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let E;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("clockZone").subscribe(()=>{const t=new Date,e=t.getHours()+":"+t.getMinutes();E=WA.ui.openPopup("clockPopup","It's "+e,[])}),WA.room.onLeaveLayer("clockZone").subscribe(re),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));WA.room.onEnterLayer("floor").subscribe(()=>{WA.room.hideLayer("roof"),WA.room.hideLayer("walls-bg-front"),WA.room.hideLayer("signs")});WA.room.onLeaveLayer("floor").subscribe(()=>{WA.room.showLayer("roof"),WA.room.showLayer("walls-bg-front"),WA.room.showLayer("signs")});WA.room.onEnterLayer("rooms_floor").subscribe(()=>{WA.room.hideLayer("facade"),WA.room.hideLayer("facade-furniture-fg"),WA.room.hideLayer("facade-furniture-bg")});WA.room.onLeaveLayer("rooms_floor").subscribe(()=>{WA.room.showLayer("facade"),WA.room.showLayer("facade-furniture-fg"),WA.room.showLayer("facade-furniture-bg")});WA.room.onEnterLayer("room_walls_remove").subscribe(()=>{WA.room.hideLayer("facade"),WA.room.hideLayer("facade-furniture-fg"),WA.room.hideLayer("facade-furniture-bg")});WA.room.onEnterLayer("room_walls_remove").subscribe(()=>{WA.room.hideLayer("facade"),WA.room.hideLayer("facade-furniture-fg"),WA.room.hideLayer("facade-furniture-bg")});WA.room.onLeaveLayer("room_walls_remove").subscribe(()=>{WA.room.showLayer("facade"),WA.room.showLayer("facade-furniture-fg"),WA.room.showLayer("facade-furniture-bg")});WA.room.onEnterLayer("test_popup").subscribe(()=>{E=WA.ui.openPopup("test_popup","Hello This is Julia's test",[{label:"Test",className:"primary",callback:()=>{WA.ui.website.open({url:"https://docs.google.com/document/d/1-mSPDgih5i0VsidlaNj_lZq3sP3KGSTqizcYGb8Kq4o/edit?usp=sharing",position:{vertical:"middle",horizontal:"middle"},size:{height:"50vh",width:"50vw"}})}}])});WA.room.onLeaveLayer("test_popup").subscribe(re);function re(){E!==void 0&&(E.close(),E=void 0)}
