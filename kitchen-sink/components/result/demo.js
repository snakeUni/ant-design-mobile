webpackJsonp([32,141],{6:function(n,s,a){"use strict";a(13),a(12)},12:function(n,s){},13:function(n,s){},16:function(n,s,a){"use strict";a(20)},20:function(n,s){},21:function(n,s,a){"use strict";a(6),a(24)},24:function(n,s){},29:function(n,s,a){"use strict";a(6),a(16),a(38)},38:function(n,s){},492:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(7),p=t(e),o=a(3),c=t(o),l=a(5),u=t(l),i=a(4),k=t(i),r="/Users/silentcloud/Desktop/ant-design-mobile/components/result/index.web.tsx",m=a(1),g=t(m),d=a(53),f=t(d),v=a(8),b=t(v),h=function(n){function s(){return(0,c["default"])(this,s),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(s,n),s.prototype.render=function(){var n,s=this.props,a=s.prefixCls,t=s.className,e=s.img,o=s.imgUrl,c=s.title,l=s.message,u=s.buttonText,i=s.buttonClick,k=s.buttonType,m=s.style,d=(0,b["default"])((n={},(0,p["default"])(n,""+a,!0),(0,p["default"])(n,t,t),n)),v=null;return e?v=g["default"].createElement("div",{className:a+"-pic",__source:{fileName:r,lineNumber:14}},e):o&&(v=g["default"].createElement("div",{className:a+"-pic",style:{backgroundImage:"url("+o+")"},__source:{fileName:r,lineNumber:17}})),g["default"].createElement("div",{className:d,style:m,role:"alert",__source:{fileName:r,lineNumber:19}},v,c?g["default"].createElement("div",{className:a+"-title",__source:{fileName:r,lineNumber:21}},c):null,l?g["default"].createElement("div",{className:a+"-message",__source:{fileName:r,lineNumber:22}},l):null,u?g["default"].createElement("div",{className:a+"-button",__source:{fileName:r,lineNumber:23}},g["default"].createElement(f["default"],{type:k,onClick:i,__source:{fileName:r,lineNumber:24}},u)):null)},s}(g["default"].Component);s["default"]=h,h.defaultProps={prefixCls:"am-result",buttonType:"",buttonClick:function(){}},n.exports=s["default"]},493:function(n,s,a){"use strict";a(6),a(29),a(807)},641:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/result/demo/basic.md",id:"components-result-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Result<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ResultExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>result-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./alipay.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u652f\u4ed8\u6210\u529f"</span>\n    message<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token number">998.00</span>\u5143 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span><span class="token number">1098</span>\u5143<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9a8c\u8bc1\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"check-circle"</span> className<span class="token operator">=</span><span class="token string">"icon"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fill<span class="token punctuation">:</span> <span class="token string">\'#1F90E6\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u9a8c\u8bc1\u6210\u529f"</span>\n    message<span class="token operator">=</span><span class="token string">"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"cross-circle-o"</span> className<span class="token operator">=</span><span class="token string">"icon"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fill<span class="token punctuation">:</span> <span class="token string">\'#F13642\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u652f\u4ed8\u5931\u8d25"</span>\n    message<span class="token operator">=</span><span class="token string">"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7b49\u5f85\u5904\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./waiting.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u7b49\u5f85\u5904\u7406"</span>\n    message<span class="token operator">=</span><span class="token string">"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u64cd\u4f5c\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./notice.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c"</span>\n    message<span class="token operator">=</span><span class="token string">"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}var s=a(1),t=(a(9),a(21),a(31)),e=n(t),p=(a(493),a(492)),o=n(p),c=(a(16),a(27)),l=n(c),u=function(){return s.createElement("div",{className:"result-example"},s.createElement("div",{className:"sub-title"},"\u652f\u4ed8\u6210\u529f"),s.createElement(o["default"],{img:s.createElement(l["default"],{type:a(951),className:"icon"}),title:"\u652f\u4ed8\u6210\u529f",message:s.createElement("div",null,"998.00\u5143 ",s.createElement("del",null,"1098\u5143"))}),s.createElement(e["default"],null),s.createElement("div",{className:"sub-title"},"\u9a8c\u8bc1\u6210\u529f"),s.createElement(o["default"],{img:s.createElement(l["default"],{type:"check-circle",className:"icon",style:{fill:"#1F90E6"}}),title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"}),s.createElement(e["default"],null),s.createElement("div",{className:"sub-title"},"\u652f\u4ed8\u5931\u8d25"),s.createElement(o["default"],{img:s.createElement(l["default"],{type:"cross-circle-o",className:"icon",style:{fill:"#F13642"}}),title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"}),s.createElement(e["default"],null),s.createElement("div",{className:"sub-title"},"\u7b49\u5f85\u5904\u7406"),s.createElement(o["default"],{img:s.createElement(l["default"],{type:a(953),className:"icon"}),title:"\u7b49\u5f85\u5904\u7406",message:"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"}),s.createElement(e["default"],null),s.createElement("div",{className:"sub-title"},"\u64cd\u4f5c\u5931\u8d25"),s.createElement(o["default"],{img:s.createElement(l["default"],{type:a(952),className:"icon"}),title:"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c",message:"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"}))};return s.createElement(u,null)},style:".sub-title {\n  margin-left: 0.3rem;\n}\n.result-example .icon {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">0.3</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.result-example</span> <span class="token class">.icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">1.2</span>rem<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">1.2</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},727:function(n,s,a){n.exports={basic:a(641)}},807:function(n,s){},951:function(n,s,a){var t=a(19),e='<symbol viewBox="0 0 120 120" id="alipay" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch --> <title>&#x652F;</title> <desc>Created with Sketch.</desc> <defs/> <g id="alipay_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="alipay_&#x652F;"> <ellipse id="alipay_bg" fill="#108EE9" cx="60" cy="60" rx="60" ry="60"/> <path d="M119.019881,92.852 L119.020881,92.852 C119.020881,92.852 119.019881,95.381 119.019881,96.909 C119.019881,100.908 119.024881,100.985 119.024881,100.985 C119.024881,100.985 87.3698811,85.206 71.0828811,77.263 C65.9418811,83.123 58.3398811,88.999 49.7558811,91.553 C44.3598811,93.158 39.4978811,93.77 34.4138811,92.729 C29.3788811,91.698 25.6698811,89.342 23.5098811,86.979 C22.4078811,85.773 21.1428811,84.239 20.2288811,82.417 C20.3138811,82.647 20.3728811,82.786 20.3728811,82.786 C20.3728811,82.786 19.8458811,81.878 19.4438811,80.432 C19.2378811,79.736 19.0978811,79.008 19.0428811,78.244 C18.9988811,77.746 18.9868811,77.219 19.0158811,76.672 C18.9728811,75.743 19.0098811,74.768 19.2178811,73.768 C19.7228811,71.329 20.7658811,68.485 23.4608811,65.847 C29.3788811,60.052 37.3038811,59.74 41.4098811,59.765 C47.4908811,59.8 58.0588811,62.459 66.9558811,65.608 C69.4218811,60.357 71.0038811,54.744 72.0248811,51 L35.0248811,51 L35.0248811,47 L54.0248811,47 L54.0248811,39 L31.0248811,39 L31.0248811,35 L54.0248811,35 L54.0248811,27 C54.0248811,25.902 54.2418811,25 56.0248811,25 L65.0248811,25 L65.0248811,35 L90.0248811,35 L90.0248811,39 L65.0248811,39 L65.0248811,47 L85.0248811,47 C85.0248811,47 83.0158811,58.196 76.7358811,69.231 C93.6658811,75.281 119.020881,85.316 119.020881,85.316 C119.020881,85.316 119.019881,88.682 119.019881,92.852 L119.019881,92.852 Z M25.2578811,82.776 C28.7348811,86.315 34.0188811,87.286 36.3018811,87.451 C42.4998811,87.9 49.1088811,84.827 54.0898811,81.318 C56.0408811,79.943 59.3828811,77.177 62.5788811,72.91 C55.4178811,69.214 46.4788811,65.123 36.9248811,65.523 C32.0418811,65.728 28.5468811,66.739 25.9908811,68.091 C24.5318811,69.264 22.9688811,70.976 22.5168811,73.156 C21.8998811,76.13 22.3868811,79.854 25.2578811,82.776 L25.2578811,82.776 Z" id="alipay_Imported-Layers-2" fill="#FFFFFF"/> </g> </g> </symbol>';n.exports=t.add(e,"alipay")},952:function(n,s,a){var t=a(19),e='<symbol viewBox="0 0 120 120" id="notice" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 40.3 (33839) - http://www.bohemiancoding.com/sketch --> <title>&#x8B66;&#x793A;</title> <desc>Created with Sketch.</desc> <defs/> <g id="notice_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="notice_&#x8B66;&#x793A;"> <path d="M60,120 C93.137085,120 120,93.137085 120,60 C120,26.862915 93.137085,0 60,0 C26.862915,0 0,26.862915 0,60 C0,93.137085 26.862915,120 60,120 Z" id="notice_Oval-61" fill="#FFC600"/> <circle id="notice_Oval-514" fill="#FFFFFF" cx="59.5" cy="84.5" r="3.5"/> <rect id="notice_Rectangle-1087" fill="#FFFFFF" x="57" y="25" width="5" height="50" rx="2.5"/> </g> </g> </symbol>';n.exports=t.add(e,"notice")},953:function(n,s,a){var t=a(19),e='<symbol viewBox="0 0 120 120" id="waiting" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 40.3 (33839) - http://www.bohemiancoding.com/sketch --> <title>&#x7B49;&#x5F85;&#x5904;&#x7406;</title> <desc>Created with Sketch.</desc> <defs/> <g id="waiting_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="waiting_&#x7B49;&#x5F85;&#x5904;&#x7406;"> <circle id="waiting_Oval-61" fill="#2CD7AA" cx="60" cy="60" r="60"/> <path d="M62,59.171 L62,24 C62,22.896 61.105,22 60,22 C58.895,22 58,22.896 58,24 L58,60 C58,60.66 58.324,61.241 58.818,61.606 C58.875,61.682 58.931,61.759 59,61.828 L81.627,84.456 C82.409,85.237 83.675,85.237 84.456,84.456 C85.237,83.675 85.237,82.409 84.456,81.628 L62,59.171 Z" id="waiting_Imported-Layers" fill="#FFFFFF"/> </g> </g> </symbol>';n.exports=t.add(e,"waiting")}});