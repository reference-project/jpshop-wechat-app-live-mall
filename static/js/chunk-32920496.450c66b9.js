(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32920496"],{"027f":function(t,a,e){},"02f4":function(t,a,e){var i=e("4588"),n=e("be13");t.exports=function(t){return function(a,e){var s,r,o=String(n(a)),c=i(e),l=o.length;return c<0||c>=l?t?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===l||(r=o.charCodeAt(c+1))<56320||r>57343?t?o.charAt(c):s:t?o.slice(c,c+2):r-56320+(s-55296<<10)+65536)}}},"0390":function(t,a,e){"use strict";var i=e("02f4")(!0);t.exports=function(t,a,e){return a+(e?i(t,a).length:1)}},"082c":function(t,a,e){"use strict";var i=e("a544"),n=e.n(i);n.a},"0ab7":function(t,a,e){t.exports=e.p+"static/img/打印.99f6def9.png"},"0bfb":function(t,a,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"0c99":function(t,a,e){},"11c5":function(t,a,e){},2034:function(t,a,e){t.exports=e.p+"static/img/更新.0b241323.png"},"214f":function(t,a,e){"use strict";e("b0c5");var i=e("2aba"),n=e("32e9"),s=e("79e5"),r=e("be13"),o=e("2b4c"),c=e("520a"),l=o("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),v=function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,a,e){var d=o(t),f=!s((function(){var a={};return a[d]=function(){return 7},7!=""[t](a)})),p=f?!s((function(){var a=!1,e=/a/;return e.exec=function(){return a=!0,null},"split"===t&&(e.constructor={},e.constructor[l]=function(){return e}),e[d](""),!a})):void 0;if(!f||!p||"replace"===t&&!u||"split"===t&&!v){var h=/./[d],_=e(r,d,""[t],(function(t,a,e,i,n){return a.exec===c?f&&!n?{done:!0,value:h.call(a,e,i)}:{done:!0,value:t.call(e,a,i)}:{done:!1}})),m=_[0],g=_[1];i(String.prototype,t,m),n(RegExp.prototype,d,2==a?function(t,a){return g.call(t,this,a)}:function(t){return g.call(t,this)})}}},"28a5":function(t,a,e){"use strict";var i=e("aae3"),n=e("cb7c"),s=e("ebd6"),r=e("0390"),o=e("9def"),c=e("5f1b"),l=e("520a"),u=e("79e5"),v=Math.min,d=[].push,f="split",p="length",h="lastIndex",_=4294967295,m=!u((function(){RegExp(_,"y")}));e("214f")("split",2,(function(t,a,e,u){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,a){var n=String(this);if(void 0===t&&0===a)return[];if(!i(t))return e.call(n,t,a);var s,r,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,f=void 0===a?_:a>>>0,m=new RegExp(t.source,u+"g");while(s=l.call(m,n)){if(r=m[h],r>v&&(c.push(n.slice(v,s.index)),s[p]>1&&s.index<n[p]&&d.apply(c,s.slice(1)),o=s[0][p],v=r,c[p]>=f))break;m[h]===s.index&&m[h]++}return v===n[p]?!o&&m.test("")||c.push(""):c.push(n.slice(v)),c[p]>f?c.slice(0,f):c}:"0"[f](void 0,0)[p]?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,i){var n=t(this),s=void 0==e?void 0:e[a];return void 0!==s?s.call(e,n,i):g.call(String(n),e,i)},function(t,a){var i=u(g,t,this,a,g!==e);if(i.done)return i.value;var l=n(t),d=String(this),f=s(l,RegExp),p=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),y=new f(m?l:"^(?:"+l.source+")",h),x=void 0===a?_:a>>>0;if(0===x)return[];if(0===d.length)return null===c(y,d)?[d]:[];var b=0,C=0,D=[];while(C<d.length){y.lastIndex=m?C:0;var S,w=c(y,m?d:d.slice(C));if(null===w||(S=v(o(y.lastIndex+(m?0:C)),d.length))===b)C=r(d,C,p);else{if(D.push(d.slice(b,C)),D.length===x)return D;for(var k=1;k<=w.length-1;k++)if(D.push(w[k]),D.length===x)return D;C=b=S}}return D.push(d.slice(b)),D}]}))},"2aab":function(t,a,e){"use strict";var i=e("027f"),n=e.n(i);n.a},"308f":function(t,a,e){"use strict";var i=e("eda5"),n=e.n(i);n.a},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"4ac9":function(t,a,e){"use strict";var i=e("c2a2"),n=e.n(i);n.a},"4e8a":function(t,a,e){"use strict";var i=e("4ee0"),n=e.n(i);n.a},"4ee0":function(t,a,e){},"4fef":function(t,a,e){"use strict";var i=e("8be2"),n=e.n(i);n.a},"520a":function(t,a,e){"use strict";var i=e("0bfb"),n=RegExp.prototype.exec,s=String.prototype.replace,r=n,o="lastIndex",c=function(){var t=/a/,a=/b*/g;return n.call(t,"a"),n.call(a,"a"),0!==t[o]||0!==a[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(r=function(t){var a,e,r,u,v=this;return l&&(e=new RegExp("^"+v.source+"$(?!\\s)",i.call(v))),c&&(a=v[o]),r=n.call(v,t),c&&r&&(v[o]=v.global?r.index+r[0].length:a),l&&r&&r.length>1&&s.call(r[0],e,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)})),r}),t.exports=r},"5d58":function(t,a,e){t.exports=e("d8d6")},"5f1b":function(t,a,e){"use strict";var i=e("23c6"),n=RegExp.prototype.exec;t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var s=e.call(t,a);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,a)}},"5fd4":function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return s}));var i=e("b775");function n(t){return Object(i["a"])({url:"/merchantShopTotal",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/merchantVersion",method:"get",params:t})}},"619a":function(t,a,e){t.exports=e.p+"static/img/3.4c303e65.png"},"67bb":function(t,a,e){t.exports=e("f921")},"6a85":function(t,a,e){"use strict";var i=e("11c5"),n=e.n(i);n.a},"6b54":function(t,a,e){"use strict";e("3846");var i=e("cb7c"),n=e("0bfb"),s=e("9e1e"),r="toString",o=/./[r],c=function(t){e("2aba")(RegExp.prototype,r,t,!0)};e("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)})):o.name!=r&&c((function(){return o.call(this)}))},7618:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var i=e("5d58"),n=e.n(i),s=e("67bb"),r=e.n(s);function o(t){return o="function"===typeof r.a&&"symbol"===typeof n.a?function(t){return typeof t}:function(t){return t&&"function"===typeof r.a&&t.constructor===r.a&&t!==r.a.prototype?"symbol":typeof t},o(t)}},"77ed":function(t,a,e){"use strict";var i=e("88af"),n=e.n(i);n.a},"7e1d":function(t,a,e){"use strict";var i=e("0c99"),n=e.n(i);n.a},"83dc":function(t,a,e){"use strict";var i=e("8bb7"),n=e.n(i);n.a},"88af":function(t,a,e){},"8bb7":function(t,a,e){},"8be2":function(t,a,e){},"8c2a3":function(t,a,e){t.exports=e.p+"static/img/帮助.182f844d.png"},9406:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:19}},[e("messages",{staticClass:"container-margin"}),t._v(" "),e("div",{staticClass:"container-margin"},[e("guide")],1),t._v(" "),e("div",{staticClass:"container-margin"},[e("manage-status",{attrs:{totalData:t.totalData}})],1),t._v(" "),e("div",{staticClass:"container-margin",staticStyle:{display:"flex"}},[e("div",{staticStyle:{flex:"1",margin:"0 1% 0 0"}},[e("to-do",{attrs:{toDo:t.totalData.matter}})],1),t._v(" "),e("div",{staticStyle:{flex:"1",margin:"0 0 0 1%"}},[e("comm-menu")],1)]),t._v(" "),e("div",{staticClass:"container-margin",staticStyle:{"background-color":"#fff"}},[e("el-radio-group",{staticClass:"chart-type",attrs:{size:"mini"},model:{value:t.lineType,callback:function(a){t.lineType=a},expression:"lineType"}},[e("el-radio-button",{attrs:{label:"按时"}}),t._v(" "),e("el-radio-button",{attrs:{label:"按天"}})],1),t._v(" "),e("line-chart",{attrs:{chartData:t.chartData}})],1)],1),t._v(" "),e("el-col",{attrs:{span:5}},[e("right",{attrs:{qCode:t.totalData.qcode}})],1)],1)],1)},n=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isShowMes?e("div",{staticClass:"upmes"},[e("div",{staticStyle:{float:"left"}},[e("span",{staticStyle:{color:"rgb(97,97,97)"}},[t._v(t._s(t.message))]),t._v(" "),e("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"text"},on:{click:t.skip}},[t._v("立即去升级")])],1),t._v(" "),e("div",{staticStyle:{float:"right"}},[e("el-button",{staticStyle:{padding:"8px 12px"},attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){t.isShowMes=!1}}},[t._v("我知道了")])],1)]):t._e()},r=[],o={computed:{message:function(){return"小程序有更新，请点击去提交新版本升级哦!"}},data:function(){return{isShowMes:!0}},methods:{skip:function(){this.$router.push("/applet/publish")}}},c=o,l=(e("2aab"),e("2877")),u=Object(l["a"])(c,s,r,!1,null,"5612c223",null),v=u.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"title-container"},[t._v("新手引导")]),t._v(" "),e("div",{staticClass:"fun-container"},t._l(t.panelData,(function(t,a){return e("guide-item",{key:a,attrs:{title:t.title,isSuccess:t.isSuccess}})})),1)])},f=[],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"item-container"},[e("div",{staticClass:"item-icon"},[e("svg-icon",{attrs:{"icon-class":"tijiao"}})],1),t._v(" "),e("div",{staticClass:"item-fun"},[e("div",{staticClass:"item-title"},[t._v(t._s(t.title))]),t._v(" "),t.isSuccess?e("el-button",{staticClass:"item-button",attrs:{type:"success",plain:"",size:"mini"},on:{click:function(a){t.isSuccess=t.falsse}}},[t._v("已完成")]):e("el-button",{staticClass:"item-button",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){t.isSuccess=!0}}},[t._v("去设置")])],1)])},h=[],_={name:"GuideItem",props:{title:{type:String,required:!0},isSuccess:{type:Boolean,required:!0,default:!1}}},m=_,g=(e("4ac9"),Object(l["a"])(m,p,h,!1,null,"60049ddf",null)),y=g.exports,x={name:"Guid",components:{GuideItem:y},data:function(){return{panelData:[{title:"授权小程序",isSuccess:!0},{title:"首页排版",isSuccess:!1},{title:"上传商品",isSuccess:!1},{title:"服务器域名",isSuccess:!1},{title:"审核发布",isSuccess:!1}]}}},b=x,C=(e("7e1d"),Object(l["a"])(b,d,f,!1,null,"448abee0",null)),D=C.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("el-row",{staticStyle:{padding:"20px 25px"}},[e("el-col",{staticClass:"manage-header-title",attrs:{span:2}},[t._v("经营概况")]),t._v(" "),e("el-col",{staticStyle:{display:"flex"},attrs:{span:6}},[e("div",{class:1==t.activeIndex?"manage-menu-active":"manage-menu",on:{click:function(a){t.activeIndex=1}}},[t._v("实 时")]),t._v(" "),e("div",{class:2==t.activeIndex?"manage-menu-active":"manage-menu",on:{click:function(a){t.activeIndex=2}}},[t._v("近7天")]),t._v(" "),e("div",{class:3==t.activeIndex?"manage-menu-active":"manage-menu",on:{click:function(a){t.activeIndex=3}}},[t._v("近30天")])]),t._v(" "),e("el-col",{staticClass:"manage-time",attrs:{span:16}},[e("span",[t._v("更新时间：")]),t._v(" "),e("span",[t._v(t._s(t.time))])])],1),t._v(" "),e("div",[e("manage-item",{attrs:{activeIndex:t.activeIndex,totalData:t.tData}})],1)],1)},w=[],k=e("ed08"),E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"item-container"},[e("div",[e("div",{staticClass:"item-text"},[t._v(t._s(t.displayText().up)+"订单量")]),t._v(" "),e("div",{staticClass:"item-data"},[t._v("\n      "+t._s(t.totalData.order)+"\n    ")]),t._v(" "),e("div",{staticClass:"item-text"},[e("span",[t._v(t._s(t.displayText().bottom))]),t._v(" "),e("span",[t._v("368")])])]),t._v(" "),e("div",[e("div",{staticClass:"item-text"},[t._v(t._s(t.displayText().up)+"支付金额")]),t._v(" "),e("div",{staticClass:"item-data"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("￥")]),t._v(" "),e("span",[t._v(t._s(t.totalData.average_price))])]),t._v(" "),e("div",{staticClass:"item-text"},[e("span",[t._v(t._s(t.displayText().bottom))]),t._v(" "),e("span",[t._v("368")])])]),t._v(" "),e("div",[e("div",{staticClass:"item-text"},[t._v(t._s(t.displayText().up)+"访客数")]),t._v(" "),e("div",{staticClass:"item-data"},[t._v("\n      "+t._s(t.totalData.visitor)+"\n    ")]),t._v(" "),e("div",{staticClass:"item-text"},[e("span",[t._v(t._s(t.displayText().bottom))]),t._v(" "),e("span",[t._v("368")])])]),t._v(" "),e("div",[e("div",{staticClass:"item-text"},[t._v(t._s(t.displayText().up)+"客单价")]),t._v(" "),e("div",{staticClass:"item-data"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("￥")]),t._v(" "),e("span",[t._v(t._s(t.totalData.turnover))])]),t._v(" "),e("div",{staticClass:"item-text"},[e("span",[t._v(t._s(t.displayText().bottom))]),t._v(" "),e("span",[t._v("368")])])])])},O=[],I=(e("c5f6"),{name:"ManageItem",props:{activeIndex:{type:Number,required:!0,default:1},totalData:{type:Object,default:function(){return{}}}},methods:{displayText:function(){return 1==this.activeIndex?{up:"今日",bottom:"昨日："}:2==this.activeIndex?{up:"进7天",bottom:"上周："}:{up:"近30天",bottom:"上月："}}}}),j=I,$=(e("4e8a"),Object(l["a"])(j,E,O,!1,null,"a1af7aa6",null)),T=$.exports,F={name:"ManageStatus",components:{ManageItem:T},props:{totalData:{type:Object,default:function(){return{}}}},data:function(){return{activeIndex:1,time:Object(k["a"])(new Date),tData:{turnover:this.totalData.today.today_turnover,visitor:this.totalData.today.today_visitor,order:this.totalData.today.today_order,average_price:this.totalData.today.today_average_price}}},watch:{activeIndex:function(t){this.tData=1===t?{turnover:this.totalData.today.today_turnover,visitor:this.totalData.today.today_visitor,order:this.totalData.today.today_order,average_price:this.totalData.today.today_average_price}:2===t?{turnover:this.totalData.week.seven_turnover,visitor:this.totalData.week.seven_visitor,order:this.totalData.week.seven_order,average_price:this.totalData.week.seven_average_price}:{turnover:this.totalData.month.thirt_turnover,visitor:this.totalData.month.thirt_visitor,order:this.totalData.month.thirt_order,average_price:this.totalData.month.thirt_average_price}}}},q=F,M=(e("83dc"),Object(l["a"])(q,S,w,!1,null,"0cd77344",null)),R=M.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"todo-title"},[t._v("待处理事项")]),t._v(" "),e("div",{staticClass:"todo-container"},[e("div",[e("div",{staticClass:"item-text"},[t._v("待发货")]),t._v(" "),e("div",{staticClass:"item-data"},[t._v(t._s(t.toDo.un_shipped_order))])]),t._v(" "),e("div",[e("div",{staticClass:"item-text"},[t._v("退款中")]),t._v(" "),e("div",{staticClass:"item-data"},[t._v(t._s(t.toDo.refund_order))])]),t._v(" "),e("div",[e("div",{staticClass:"item-text"},[t._v("库存预警")]),t._v(" "),e("div",{staticClass:"item-data"},[t._v(t._s(t.toDo.warehouse_order))])])])])},z=[],G={props:{toDo:{type:Object,default:function(){return{}}}}},L=G,N=(e("a16b"),Object(l["a"])(L,A,z,!1,null,"16477d20",null)),B=N.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"todo-title"},[t._v("常用功能")]),t._v(" "),e("div",{staticClass:"todo-container"},[e("div",[e("div",{staticClass:"item-data"},[e("svg-icon",{attrs:{"icon-class":"duihao"}})],1),t._v(" "),e("div",{staticClass:"item-text"},[t._v("发布商品")])]),t._v(" "),e("div",[e("div",{staticClass:"item-data"},[e("svg-icon",{attrs:{"icon-class":"duihao"}})],1),t._v(" "),e("div",{staticClass:"item-text"},[t._v("订单管理")])]),t._v(" "),e("div",[e("div",{staticClass:"item-data"},[e("svg-icon",{attrs:{"icon-class":"duihao"}})],1),t._v(" "),e("div",{staticClass:"item-text"},[t._v("打单发货")])])])])},H=[],P=(e("6a85"),{}),Q=Object(l["a"])(P,J,H,!1,null,"3c0001ae",null),V=Q.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,staticStyle:{padding:"15px"},style:{height:t.height,width:t.width}})},K=[],U=e("313e"),W=e.n(U);e("817d");var X={props:{className:{type:String,default:"chart"},width:{type:String,default:"90%"},height:{type:String,default:"300px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=W.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.day,e=t.visitor,i=t.turnover,n=t.visit;this.chart.setOption({xAxis:{data:a,boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["成交额","访客","访问量"]},series:[{name:"成交额",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:i,animationDuration:2800,animationEasing:"cubicInOut"},{name:"访客",itemStyle:{normal:{color:"#ff9800",lineStyle:{color:"#ff9800",width:2}}},smooth:!0,type:"line",data:n,animationDuration:2800,animationEasing:"cubicInOut"},{name:"访问量",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})}}},Z=X,tt=Object(l["a"])(Z,Y,K,!1,null,null,null),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("shop-qcode",{staticStyle:{"margin-bottom":"25px"},attrs:{qCode:t.qCode}}),t._v(" "),e("out-link",{staticStyle:{"margin-bottom":"25px"}})],1)},it=[],nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"qcode-container"},[e("img",{staticStyle:{height:"210px",width:"210px"},attrs:{src:t.qCode}})]),t._v(" "),e("div",{staticClass:"text-container"},[e("div",[t._v("店铺二维码 扫码体验")]),t._v(" "),e("div",[e("span",[t._v("需小程序审核发布")]),t._v(" "),e("el-button",{staticStyle:{color:"#FFA116"},attrs:{type:"text"}},[t._v("立即上传")])],1)])])},st=[],rt={props:{qCode:{type:String,default:"https://imgs.juanpao.com/qcode%2F2019%2F07%2F02%2Fwxe501e33f642dd63e.png"}}},ot=rt,ct=(e("082c"),Object(l["a"])(ot,nt,st,!1,null,"2b2591e4",null)),lt=ct.exports,ut=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("router-link",{staticClass:"box-container",attrs:{to:"/",tag:"div"}},[i("div",[i("img",{staticClass:"img-box",attrs:{src:e("619a"),alt:""}})]),t._v(" "),i("div",{staticClass:"box-text"},[t._v("商家社区")])]),t._v(" "),i("router-link",{staticClass:"box-container",attrs:{to:"/",tag:"div"}},[i("div",[i("img",{staticClass:"img-box",attrs:{src:e("0ab7"),alt:""}})]),t._v(" "),i("div",{staticClass:"box-text"},[t._v("打印发货")])]),t._v(" "),i("router-link",{staticClass:"box-container",attrs:{to:"/",tag:"div"}},[i("div",[i("img",{staticClass:"img-box",attrs:{src:e("8c2a3"),alt:""}})]),t._v(" "),i("div",{staticClass:"box-text"},[t._v("帮助教程")])]),t._v(" "),i("router-link",{staticClass:"box-container",attrs:{to:"/",tag:"div"}},[i("div",[i("img",{staticClass:"img-box",attrs:{src:e("2034"),alt:""}})]),t._v(" "),i("div",{staticClass:"box-text"},[t._v("更新日志")])])],1)},vt=[],dt=(e("4fef"),{}),ft=Object(l["a"])(dt,ut,vt,!1,null,"06528266",null),pt=ft.exports,ht={components:{ShopQcode:lt,OutLink:pt},props:{qCode:{type:String,default:"https://imgs.juanpao.com/qcode%2F2019%2F07%2F02%2Fwxe501e33f642dd63e.png"}}},_t=ht,mt=Object(l["a"])(_t,et,it,!1,null,null,null),gt=mt.exports,yt=e("5fd4"),xt={name:"Dashboard",components:{Messages:v,Guide:D,ManageStatus:R,ToDo:B,CommMenu:V,LineChart:at,Right:gt},data:function(){return{totalData:{today:{today_turnover:0,today_visitor:0,today_order:"0",today_average_price:0},week:{seven_day_turnover:0,seven_day_visitor:0,seven_day_order:"0",seven_day_average_price:0},month:{thirty_days_turnover:0,thirty_days_visitor:0,thirty_days_order:"0",thirty_days_average_price:0},matter:{un_shipped_order:"0",refund_order:"0",warehouse_order:"0"},total_day:{h:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],turnover:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],visitor:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],visit:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},total_month:{day:["2019-11-16","2019-11-17","2019-11-18","2019-11-19","2019-11-20","2019-11-21","2019-11-22","2019-11-23","2019-11-24","2019-11-25","2019-11-26","2019-11-27","2019-11-28","2019-11-29","2019-11-30","2019-12-01","2019-12-02","2019-12-03","2019-12-04","2019-12-05","2019-12-06","2019-12-07","2019-12-08","2019-12-09","2019-12-10","2019-12-11","2019-12-12","2019-12-13","2019-12-14","2019-12-15"],turnover:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],visitor:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],visit:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},qcode:"https://imgs.juanpao.com/qcode%2F2019%2F07%2F02%2Fwxe501e33f642dd63e.png"},lineType:"按天",chartData:{day:["2019-11-16","2019-11-17","2019-11-18","2019-11-19","2019-11-20","2019-11-21","2019-11-22","2019-11-23","2019-11-24","2019-11-25","2019-11-26","2019-11-27","2019-11-28","2019-11-29","2019-11-30","2019-12-01","2019-12-02","2019-12-03","2019-12-04","2019-12-05","2019-12-06","2019-12-07","2019-12-08","2019-12-09","2019-12-10","2019-12-11","2019-12-12","2019-12-13","2019-12-14","2019-12-15"],visitor:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],turnover:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],visit:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}},watch:{lineType:function(t){this.chartData="按天"===t?{day:this.totalData.total_month.day,visitor:this.totalData.total_month.visitor,turnover:this.totalData.total_month.turnover,visit:this.totalData.total_month.visit}:{day:this.totalData.total_day.h,visitor:this.totalData.total_day.visitor,turnover:this.totalData.total_day.turnover,visit:this.totalData.total_day.visit}}},mounted:function(){this.getShopTotal()},methods:{getShopTotal:function(){var t=this,a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(yt["a"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?(t.totalData=e.data,t.chartData={day:t.totalData.total_month.day,visitor:t.totalData.total_month.visitor,turnover:t.totalData.total_month.turnover,visit:t.totalData.total_month.visit},a.close()):(t.$messages.error(e.messages),a.close())})),a.close()}}},bt=xt,Ct=(e("308f"),e("77ed"),Object(l["a"])(bt,i,n,!1,null,"1da882da",null));a["default"]=Ct.exports},a16b:function(t,a,e){"use strict";var i=e("cf64"),n=e.n(i);n.a},a481:function(t,a,e){"use strict";var i=e("cb7c"),n=e("4bf8"),s=e("9def"),r=e("4588"),o=e("0390"),c=e("5f1b"),l=Math.max,u=Math.min,v=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};e("214f")("replace",2,(function(t,a,e,h){return[function(i,n){var s=t(this),r=void 0==i?void 0:i[a];return void 0!==r?r.call(i,s,n):e.call(String(s),i,n)},function(t,a){var n=h(e,t,this,a);if(n.done)return n.value;var v=i(t),d=String(this),f="function"===typeof a;f||(a=String(a));var m=v.global;if(m){var g=v.unicode;v.lastIndex=0}var y=[];while(1){var x=c(v,d);if(null===x)break;if(y.push(x),!m)break;var b=String(x[0]);""===b&&(v.lastIndex=o(d,s(v.lastIndex),g))}for(var C="",D=0,S=0;S<y.length;S++){x=y[S];for(var w=String(x[0]),k=l(u(r(x.index),d.length),0),E=[],O=1;O<x.length;O++)E.push(p(x[O]));var I=x.groups;if(f){var j=[w].concat(E,k,d);void 0!==I&&j.push(I);var $=String(a.apply(void 0,j))}else $=_(w,d,k,E,I,a);k>=D&&(C+=d.slice(D,k)+$,D=k+w.length)}return C+d.slice(D)}];function _(t,a,i,s,r,o){var c=i+t.length,l=s.length,u=f;return void 0!==r&&(r=n(r),u=d),e.call(o,u,(function(e,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,i);case"'":return a.slice(c);case"<":o=r[n.slice(1,-1)];break;default:var u=+n;if(0===u)return e;if(u>l){var d=v(u/10);return 0===d?e:d<=l?void 0===s[d-1]?n.charAt(1):s[d-1]+n.charAt(1):e}o=s[u-1]}return void 0===o?"":o}))}}))},a544:function(t,a,e){},aae3:function(t,a,e){var i=e("d3f4"),n=e("2d95"),s=e("2b4c")("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[s])?!!a:"RegExp"==n(t))}},b0c5:function(t,a,e){"use strict";var i=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c2a2:function(t,a,e){},cf64:function(t,a,e){},ed08:function(t,a,e){"use strict";e.d(a,"a",(function(){return n})),e.d(a,"b",(function(){return s}));e("28a5"),e("a481"),e("6b54");var i=e("7618");function n(t,a){if(0===arguments.length)return null;var e,n=a||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(t)?e=t:("string"===typeof t&&/^[0-9]+$/.test(t)&&(t=parseInt(t)),"number"===typeof t&&10===t.toString().length&&(t*=1e3),e=new Date(t));var s={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()},r=n.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,a){var e=s[a];return"a"===a?["日","一","二","三","四","五","六"][e]:(t.length>0&&e<10&&(e="0"+e),e||0)}));return r}function s(t,a){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(a-t+1)+t,10);default:return 0}}},eda5:function(t,a,e){}}]);