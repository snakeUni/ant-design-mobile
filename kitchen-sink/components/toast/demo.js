webpackJsonp([21,141],{6:function(n,a,s){"use strict";s(13),s(12)},12:function(n,a){},13:function(n,a){},16:function(n,a,s){"use strict";s(20)},17:function(n,a){"use strict";a.__esModule=!0,a["default"]=function(n,a){var s={};for(var t in n)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t]);return s}},20:function(n,a){},21:function(n,a,s){"use strict";s(6),s(24)},24:function(n,a){},26:function(n,a,s){"use strict";s(6),s(37)},29:function(n,a,s){"use strict";s(6),s(16),s(38)},37:function(n,a){},38:function(n,a){},166:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a;return h&&(h.destroy(),h=null),h=k["default"].newInstance({prefixCls:v,style:{},transitionName:"am-fade",className:(0,g["default"])((a={},(0,c["default"])(a,v+"-mask",n),(0,c["default"])(a,v+"-nomask",!n),a))})}function o(n,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=arguments[3],p=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c={info:"",success:s(185),fail:s(184),offline:s(183),loading:"loading"}[a],u=e(p);u.notice({duration:t,style:{},content:c?i["default"].createElement("div",{className:v+"-text "+v+"-text-icon",role:"alert","aria-live":"assertive",__source:{fileName:l,lineNumber:35}},i["default"].createElement(d["default"],{type:c,size:"lg",__source:{fileName:l,lineNumber:36}}),i["default"].createElement("div",{className:v+"-text-info",__source:{fileName:l,lineNumber:37}},n)):i["default"].createElement("div",{className:v+"-text",role:"alert","aria-live":"assertive",__source:{fileName:l,lineNumber:38}},i["default"].createElement("div",{__source:{fileName:l,lineNumber:39}},n)),onClose:function(){o&&o(),u.destroy(),u=null,h=null}})}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),c=t(p),l="/Users/silentcloud/Desktop/ant-design-mobile/components/toast/index.web.tsx",u=s(1),i=t(u),r=s(179),k=t(r),f=s(27),d=t(f),m=s(8),g=t(m),h=void 0,v="am-toast";a["default"]={SHORT:3,LONG:8,show:function(n,a,s){return o(n,"info",a,function(){},s)},info:function(n,a,s,t){return o(n,"info",a,s,t)},success:function(n,a,s,t){return o(n,"success",a,s,t)},fail:function(n,a,s,t){return o(n,"fail",a,s,t)},offline:function(n,a,s,t){return o(n,"offline",a,s,t)},loading:function(n,a,s,t){return o(n,"loading",a,s,t)},hide:function(){h&&(h.destroy(),h=null)}},n.exports=a["default"]},167:function(n,a,s){"use strict";s(6),s(16),s(175)},175:function(n,a){},177:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(7),o=t(e),p=s(3),c=t(p),l=s(15),u=t(l),i=s(5),r=t(i),k=s(4),f=t(k),d=s(1),m=t(d),g=s(8),h=t(g),v=s(11),y=t(v),b=function(n){function a(){var n,s,t,e;(0,c["default"])(this,a);for(var o=arguments.length,p=Array(o),l=0;l<o;l++)p[l]=arguments[l];return s=t=(0,r["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(p))),t.clearCloseTimer=function(){t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=null)},t.close=function(){t.clearCloseTimer(),t.props.onClose()},e=s,(0,r["default"])(t,e)}return(0,f["default"])(a,n),(0,u["default"])(a,[{key:"componentDidMount",value:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var n,a=this.props,s=a.prefixCls+"-notice",t=(n={},(0,o["default"])(n,""+s,1),(0,o["default"])(n,s+"-closable",a.closable),(0,o["default"])(n,a.className,!!a.className),n);return m["default"].createElement("div",{className:(0,h["default"])(t),style:a.style},m["default"].createElement("div",{className:s+"-content"},a.children),a.closable?m["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:s+"-close"},m["default"].createElement("span",{className:s+"-close-x"})):null)}}]),a}(d.Component);b.propTypes={duration:y["default"].number,onClose:y["default"].func,children:y["default"].any},b.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},a["default"]=b,n.exports=a["default"]},178:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){return"rcNotification_"+W+"_"+O++}Object.defineProperty(a,"__esModule",{value:!0});var o=s(17),p=t(o),c=s(7),l=t(c),u=s(2),i=t(u),r=s(3),k=t(r),f=s(15),d=t(f),m=s(5),g=t(m),h=s(4),v=t(h),y=s(1),b=t(y),C=s(11),x=t(C),_=s(9),N=t(_),T=s(157),E=t(T),w=s(180),M=t(w),F=s(8),B=t(F),S=s(177),j=t(S),O=0,W=Date.now(),L=function(n){function a(){var n,s,t,o;(0,k["default"])(this,a);for(var p=arguments.length,c=Array(p),l=0;l<p;l++)c[l]=arguments[l];return s=t=(0,g["default"])(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(c))),t.state={notices:[]},t.add=function(n){var a=n.key=n.key||e();t.setState(function(s){var t=s.notices;if(!t.filter(function(n){return n.key===a}).length)return{notices:t.concat(n)}})},t.remove=function(n){t.setState(function(a){return{notices:a.notices.filter(function(a){return a.key!==n})}})},o=s,(0,g["default"])(t,o)}return(0,v["default"])(a,n),(0,d["default"])(a,[{key:"getTransitionName",value:function(){var n=this.props,a=n.transitionName;return!a&&n.animation&&(a=n.prefixCls+"-"+n.animation),a}},{key:"render",value:function(){var n,a=this,s=this.props,t=this.state.notices.map(function(n){var t=(0,M["default"])(a.remove.bind(a,n.key),n.onClose);return b["default"].createElement(j["default"],(0,i["default"])({prefixCls:s.prefixCls},n,{onClose:t}),n.content)}),e=(n={},(0,l["default"])(n,s.prefixCls,1),(0,l["default"])(n,s.className,!!s.className),n);return b["default"].createElement("div",{className:(0,B["default"])(e),style:s.style},b["default"].createElement(E["default"],{transitionName:this.getTransitionName()},t))}}]),a}(y.Component);L.propTypes={prefixCls:x["default"].string,transitionName:x["default"].string,animation:x["default"].oneOfType([x["default"].string,x["default"].object]),style:x["default"].object},L.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},L.newInstance=function(n){var a=n||{},s=a.getContainer,t=(0,p["default"])(a,["getContainer"]),e=void 0;s?e=s():(e=document.createElement("div"),document.body.appendChild(e));var o=N["default"].render(b["default"].createElement(L,t),e);return{notice:function(n){o.add(n)},removeNotice:function(n){o.remove(n)},component:o,destroy:function(){N["default"].unmountComponentAtNode(e),s||document.body.removeChild(e)}}},a["default"]=L,n.exports=a["default"]},179:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(178),o=t(e);a["default"]=o["default"],n.exports=a["default"]},180:function(n,a){"use strict";function s(){var n=[].slice.call(arguments,0);return 1===n.length?n[0]:function(){for(var a=0;a<n.length;a++)n[a]&&n[a].apply&&n[a].apply(this,arguments)}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},183:function(n,a,s){var t=s(19),e='<symbol viewBox="0 0 72 72" id="dislike" ><title>&#x54ED;&#x8138;</title><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zM23 22h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></symbol>';n.exports=t.add(e,"dislike")},184:function(n,a,s){var t=s(19),e='<symbol viewBox="0 0 72 72" id="fail" ><title>&#x5931;&#x8D25;</title><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304M22 50.304L50.304 22" stroke="#FFF" stroke-width="2"/></g></symbol>';n.exports=t.add(e,"fail")},185:function(n,a,s){var t=s(19),e='<symbol viewBox="0 0 72 72" id="success" ><title>&#x6210;&#x529F;</title><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></symbol>';n.exports=t.add(e,"success")},685:function(n,a,s){n.exports={content:[["p","text\u3001icon\u3001success\u3001failure\u3001offline\u3001loading"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a toast tips !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">showToastNoMask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'Toast without mask !!!\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Load success !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'Load failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'Network connection failed !!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Loading...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Load complete !!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Text toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToastNoMask<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Without mask<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./reload.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n      Cumstom Icon\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Failed toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Network failure toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Loading toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(){v["default"].info("This is a toast tips !!!",1)}function t(){v["default"].info("Toast without mask !!!",2,null,!1)}function e(){v["default"].success("Load success !!!",1)}function o(){v["default"].fail("Load failed !!!",1)}function p(){v["default"].offline("Network connection failed !!!",1)}function c(){v["default"].loading("Loading...",1,function(){console.log("Load complete !!!")})}var l=s(1),u=(s(9),s(26),s(50)),i=n(u),r=(s(16),s(27)),k=n(r),f=(s(29),s(53)),d=n(f),m=(s(21),s(31)),g=n(m),h=(s(167),s(166)),v=n(h),y=function(){return l.createElement(i["default"],null,l.createElement(g["default"],null),l.createElement(d["default"],{onClick:a},"Text toast"),l.createElement(g["default"],null),l.createElement(d["default"],{onClick:t},"Without mask"),l.createElement(g["default"],null),l.createElement(d["default"],{onClick:function(){return v["default"].info(l.createElement(k["default"],{type:s(954)}),1)}},"Cumstom Icon"),l.createElement(g["default"],null),l.createElement(d["default"],{onClick:e},"Success toast"),l.createElement(g["default"],null),l.createElement(d["default"],{onClick:o},"Failed toast"),l.createElement(g["default"],null),l.createElement(d["default"],{onClick:p},"Network failure toast"),l.createElement(g["default"],null),l.createElement(d["default"],{onClick:c},"Loading toast"),l.createElement(g["default"],null))};return l.createElement(y,null)}}},740:function(n,a,s){n.exports={basic:s(685)}},954:function(n,a,s){var t=s(19),e='<symbol viewBox="0 0 64 64" id="reload" ><title>Share Icons Copy</title><path d="M59.177 29.5s-1.25 0-1.25 2.5c0 14.471-11.786 26.244-26.253 26.244C17.206 58.244 5.417 46.47 5.417 32c0-13.837 11.414-25.29 25.005-26.26v6.252c0 .622-.318 1.635.198 1.985a1.88 1.88 0 0 0 1.75.19l21.37-8.545c.837-.334 1.687-1.133 1.687-2.384C55.425 1.99 53.944 2 53.044 2h-21.37C15.134 2 1.667 15.46 1.667 32c0 16.543 13.467 30 30.007 30 16.538 0 29.918-13.458 29.993-30 .01-2.5-1.24-2.5-1.24-2.5h-1.25" fill-rule="evenodd"/></symbol>';n.exports=t.add(e,"reload")}});