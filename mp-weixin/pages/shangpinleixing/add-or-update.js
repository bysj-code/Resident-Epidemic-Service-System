(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinleixing/add-or-update"],{"1b2f":function(e,t,n){"use strict";var r=n("68cc"),i=n.n(r);i.a},6371:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},"68cc":function(e,t,n){},"87ab":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,i,a,s){try{var u=e[a](s),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function u(e){a(s,r,i,u,o,"next",e)}function o(e){a(s,r,i,u,o,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},o=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c={data:function(){return{cross:"",ruleForm:{shangpinleixing:""},user:{},ro:{shangpinleixing:!1}}},components:{wPicker:u,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(r.default.mark((function t(n){var i,a,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(a=t.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=13;break}return this.ruleForm.id=n.id,t.next=11,this.$api.info("shangpinleixing",this.ruleForm.id);case 11:a=t.sent,this.ruleForm=a.data;case 13:if(this.cross=n.cross,!n.cross){t.next=25;break}s=e.getStorageSync("crossObj"),t.t0=r.default.keys(s);case 17:if((t.t1=t.t0()).done){t.next=25;break}if(u=t.t1.value,"shangpinleixing"!=u){t.next=23;break}return this.ruleForm.shangpinleixing=s[u],this.ro.shangpinleixing=!0,t.abrupt("continue",17);case 23:t.next=17;break;case 25:this.styleChange();case 26:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(r.default.mark((function t(){var n,i,a,s,u,o,c,l,f,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.shangpinleixing){t.next=3;break}return this.$utils.msg("商品类型不能为空"),t.abrupt("return");case 3:if(!this.cross){t.next=19;break}if(u=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==u){t.next=19;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=15;break}for(c in n)c==u&&(n[c]=o);return l=e.getStorageSync("crossTable"),t.next=13,this.$api.update("".concat(l),n);case 13:t.next=19;break;case 15:i=Number(e.getStorageSync("userid")),a=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 19:if(!a||!i){t.next=41;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=25,this.$api.list("shangpinleixing",f);case 25:if(d=t.sent,!(d.data.total>=s)){t.next=31;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!this.ruleForm.id){t.next=36;break}return t.next=34,this.$api.update("shangpinleixing",this.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,this.$api.add("shangpinleixing",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!this.ruleForm.id){t.next=46;break}return t.next=44,this.$api.update("shangpinleixing",this.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,this.$api.add("shangpinleixing",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])},a933:function(e,t,n){"use strict";n.r(t);var r=n("87ab"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},c1ff:function(e,t,n){"use strict";n.r(t);var r=n("6371"),i=n("a933");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("1b2f");var s,u=n("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"7f2486db",null,!1,r["a"],s);t["default"]=o.exports},e29e:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("c1ff"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["e29e","common/runtime","common/vendor"]]]);