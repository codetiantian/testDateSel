webpackJsonp([2],{"1alW":function(e,r,t){var n=t("kM2E");n(n.S,"Number",{isInteger:t("AKgy")})},AKgy:function(e,r,t){var n=t("EqjI"),o=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&o(e)===e}},QMAn:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("RRo+"),o=t.n(n),s={name:"FourPage",data:function(){return{ruleForm:{age:""},rules:{age:[{validator:function(e,r,t){if(!r)return t(new Error("年龄不能为空"));o()(r)?r<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))},trigger:"blur"}]},arrData:[],student:{name:"张三",age:18}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields();this.arrData=["1","2"],this.student.name="李四"},getCurrenrAge:function(e,r){var t=void 0,n=parseInt(e.substr(0,4)),o=parseInt(e.substr(4,2)),s=parseInt(e.substr(6,2)),u=parseInt(r.substr(0,4)),a=parseInt(r.substr(4,2)),l=parseInt(r.substr(6,2));if(u===n)t=0;else{var i=u-n;if(i>0)if(a===o)t=l-s<0?i-1:i;else t=a-o<0?i-1:i;else t=-1}return t}},watch:{arrData:{handler:function(e,r){for(var t=0;t<e.length;t++)r[t]!=e[t]&&console.log("新数组为："+e)},deep:!0},student:{handler:function(e,r){console.log("新的名字为："+e.name),console.log("旧的名字为:"+r.name)},deep:!0}},mounted:function(){}},u={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"four-page"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{model:{value:e.ruleForm.age,callback:function(r){e.$set(e.ruleForm,"age",e._n(r))},expression:"ruleForm.age"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var a=t("VU/8")(s,u,!1,function(e){t("iC+g")},"data-v-0de0dd12",null);r.default=a.exports},"RRo+":function(e,r,t){e.exports={default:t("c45H"),__esModule:!0}},c45H:function(e,r,t){t("1alW"),e.exports=t("FeBl").Number.isInteger},"iC+g":function(e,r){}});