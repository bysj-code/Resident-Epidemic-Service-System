(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiuzhenxinxi/add-or-update"],{"095c":function(e,i,n){"use strict";n.r(i);var t=n("c3f3"),r=n("99ed");for(var a in r)"default"!==a&&function(e){n.d(i,e,(function(){return r[e]}))}(a);n("1c84");var s,u=n("f0c5"),o=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,"0a0475ac",null,!1,t["a"],s);i["default"]=o.exports},"1c84":function(e,i,n){"use strict";var t=n("1f60"),r=n.n(t);r.a},"1f60":function(e,i,n){},"8f04":function(e,i,n){"use strict";(function(e){n("6cdc"),n("921b");t(n("66fd"));var i=t(n("095c"));function t(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,n("543d")["createPage"])},"99ed":function(e,i,n){"use strict";n.r(i);var t=n("f87d"),r=n.n(t);for(var a in t)"default"!==a&&function(e){n.d(i,e,(function(){return t[e]}))}(a);i["default"]=r.a},c3f3:function(e,i,n){"use strict";var t,r=function(){var e=this,i=e.$createElement,n=(e._self._c,e.ruleForm.xiangpian.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return t}))},f87d:function(e,i,n){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,i,n,t,r,a,s){try{var u=e[a](s),o=u.value}catch(c){return void n(c)}u.done?i(o):Promise.resolve(o).then(t,r)}function s(e){return function(){var i=this,n=arguments;return new Promise((function(t,r){var s=e.apply(i,n);function u(e){a(s,t,r,u,o,"next",e)}function o(e){a(s,t,r,u,o,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{yiyuanmingcheng:"",yiyuandizhi:"",yishengxingming:"",xingbie:"",xiangpian:"",zhiwei:"",guahaofei:"",keshimingcheng:"",jiuzhenshijian:"",yishengjianjie:""},xingbieOptions:[],xingbieIndex:0,zhiweiOptions:[],zhiweiIndex:0,keshimingchengOptions:[],keshimingchengIndex:0,user:{},ro:{yiyuanmingcheng:!1,yiyuandizhi:!1,yishengxingming:!1,xingbie:!1,xiangpian:!1,zhiwei:!1,guahaofei:!1,keshimingcheng:!1,jiuzhenshijian:!1,yishengjianjie:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var i=s(t.default.mark((function i(n){var r,a,s,u;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.getStorageSync("nowTable"),i.next=3,this.$api.session(r);case 3:return a=i.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.zhiweiOptions="主治医生,副主任,主任".split(","),i.next=9,this.$api.option("keshimingcheng","keshimingcheng",{});case 9:if(a=i.sent,this.keshimingchengOptions=a.data,this.keshimingchengOptions.unshift("请选择科室名称"),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=20;break}return this.ruleForm.id=n.id,i.next=18,this.$api.info("jiuzhenxinxi",this.ruleForm.id);case 18:a=i.sent,this.ruleForm=a.data;case 20:if(this.cross=n.cross,!n.cross){i.next=68;break}s=e.getStorageSync("crossObj"),i.t0=t.default.keys(s);case 24:if((i.t1=i.t0()).done){i.next=68;break}if(u=i.t1.value,"yiyuanmingcheng"!=u){i.next=30;break}return this.ruleForm.yiyuanmingcheng=s[u],this.ro.yiyuanmingcheng=!0,i.abrupt("continue",24);case 30:if("yiyuandizhi"!=u){i.next=34;break}return this.ruleForm.yiyuandizhi=s[u],this.ro.yiyuandizhi=!0,i.abrupt("continue",24);case 34:if("yishengxingming"!=u){i.next=38;break}return this.ruleForm.yishengxingming=s[u],this.ro.yishengxingming=!0,i.abrupt("continue",24);case 38:if("xingbie"!=u){i.next=42;break}return this.ruleForm.xingbie=s[u],this.ro.xingbie=!0,i.abrupt("continue",24);case 42:if("xiangpian"!=u){i.next=46;break}return this.ruleForm.xiangpian=s[u].split(",")[0],this.ro.xiangpian=!0,i.abrupt("continue",24);case 46:if("zhiwei"!=u){i.next=50;break}return this.ruleForm.zhiwei=s[u],this.ro.zhiwei=!0,i.abrupt("continue",24);case 50:if("guahaofei"!=u){i.next=54;break}return this.ruleForm.guahaofei=s[u],this.ro.guahaofei=!0,i.abrupt("continue",24);case 54:if("keshimingcheng"!=u){i.next=58;break}return this.ruleForm.keshimingcheng=s[u],this.ro.keshimingcheng=!0,i.abrupt("continue",24);case 58:if("jiuzhenshijian"!=u){i.next=62;break}return this.ruleForm.jiuzhenshijian=s[u],this.ro.jiuzhenshijian=!0,i.abrupt("continue",24);case 62:if("yishengjianjie"!=u){i.next=66;break}return this.ruleForm.yishengjianjie=s[u],this.ro.yishengjianjie=!0,i.abrupt("continue",24);case 66:i.next=24;break;case 68:this.styleChange();case 69:case"end":return i.stop()}}),i,this)})));function n(e){return i.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhiweiChange:function(e){this.zhiweiIndex=e.target.value,this.ruleForm.zhiwei=this.zhiweiOptions[this.zhiweiIndex]},keshimingchengChange:function(e){this.keshimingchengIndex=e.target.value,this.ruleForm.keshimingcheng=this.keshimingchengOptions[this.keshimingchengIndex]},xiangpianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.xiangpian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=s(t.default.mark((function i(){var n,r,a,s,u,o,c,h,g,f;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.yiyuanmingcheng){i.next=3;break}return this.$utils.msg("医院名称不能为空"),i.abrupt("return");case 3:if(this.ruleForm.yiyuandizhi){i.next=6;break}return this.$utils.msg("医院地址不能为空"),i.abrupt("return");case 6:if(this.ruleForm.yishengxingming){i.next=9;break}return this.$utils.msg("医生姓名不能为空"),i.abrupt("return");case 9:if(this.ruleForm.keshimingcheng){i.next=12;break}return this.$utils.msg("科室名称不能为空"),i.abrupt("return");case 12:if(!this.cross){i.next=28;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){i.next=28;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){i.next=24;break}for(c in n)c==u&&(n[c]=o);return h=e.getStorageSync("crossTable"),i.next=22,this.$api.update("".concat(h),n);case 22:i.next=28;break;case 24:r=Number(e.getStorageSync("userid")),a=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 28:if(!a||!r){i.next=50;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,g={page:1,limit:10,crossuserid:r,crossrefid:a},i.next=34,this.$api.list("jiuzhenxinxi",g);case 34:if(f=i.sent,!(f.data.total>=s)){i.next=40;break}return this.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 40:if(!this.ruleForm.id){i.next=45;break}return i.next=43,this.$api.update("jiuzhenxinxi",this.ruleForm);case 43:i.next=47;break;case 45:return i.next=47,this.$api.add("jiuzhenxinxi",this.ruleForm);case 47:this.$utils.msgBack("提交成功");case 48:i.next=58;break;case 50:if(!this.ruleForm.id){i.next=55;break}return i.next=53,this.$api.update("jiuzhenxinxi",this.ruleForm);case 53:i.next=57;break;case 55:return i.next=57,this.$api.add("jiuzhenxinxi",this.ruleForm);case 57:this.$utils.msgBack("提交成功");case 58:case"end":return i.stop()}}),i,this)})));function n(){return i.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,n=i.getFullYear(),t=i.getMonth()+1,r=i.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(n,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=c}).call(this,n("543d")["default"])}},[["8f04","common/runtime","common/vendor"]]]);