webpackJsonp([6],{FCDd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"SevenPage",data:function(){return{msg:"校验未开始",currentDate:""}},methods:{isLeapYear:function(e){return!!(e%4==0&&e%100!=0||e%400==0)},timestampToTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+"")},getAfterTwoDay:function(e){var t=new Date(e).getTime()-1728e5;return this.timestampToTime(t)},getAfterDay:function(e){var t=new Date(e).getTime()-864e5;return this.timestampToTime(t)},getNextDay:function(e){var t=new Date(e).getTime()+864e5;return this.timestampToTime(t)},getAfterNYear:function(e,t){var r=e.split("-"),a=parseInt(r[0])+t,n=r[1],i=r[2];if("02"===n||2===n){var s=new Date(a,n,0).getDate();parseInt(i)>s&&(i=s)}var u=new Date(a+"-"+n+"-"+i).getTime()-864e5;return this.timestampToTime(u)},getNextYearDate:function(e,t){var r=e.split("-"),a=parseInt(r[0])+t,n=r[1],i=r[2];if("02"===n||2===n){var s=new Date(a,n,0).getDate();parseInt(i)>s&&(i=s)}return a+"-"+n+"-"+i},getDaysInOneMonth:function(e,t){return t=parseInt(t,10),new Date(e,t,0).getDate()},getAfterThirdDate:function(e){var t=new Date(e);t.setMonth(t.getMonth()+3);var r=t.getFullYear(),a=t.getMonth()+1;console.log(a);var n=t.getDate();return a<10&&(a="0"+a),n<10&&(n="0"+n),r+"-"+a+"-"+n},isThirdMonthSpace:function(e,t){if(!e||!t)return!1;var r=new Date(e).getTime(),a=new Date(t).getTime();return!(r>a)&&a-r<10368e6},judgeThirdMonth:function(e,t){if(!e||!t)return!1;var r=e.split("-"),a=r[0],n=r[1],i=r[2],s=t.split("-"),u=(s[0],s[1],s[2],""),o="",f=this.getAfterThirdDate(e);if(f.split("-")[2]===i){var g=f,h=this.getNextDay(g),c=this.getAfterDay(g);if(t===g||t===h||t===c)return!0}else{var D=f,d=this.getAfterTwoDay(D),l=this.getAfterDay(D);if(t===D||t===d||t===l)return!0}if("01"===i){parseInt(n)+3>12?(u+=parseInt(a)+1+"",o=(parseInt(n)+3)%12):(u=a,o=parseInt(n)+3),o<10&&(o="0"+o);var p=u+"-"+o+"-"+i,v=this.getNextDay(p),m=this.getAfterDay(p);if(t===p||t===v||t===m)return!0}if(this.getDaysInOneMonth(a,n)===parseInt(i)){parseInt(n)+3>12?(u+=parseInt(a)+1+"",o=(parseInt(n)+3)%12):(u=a,o=parseInt(n)+3),o<10&&(o="0"+o);var y=u+"-"+o+"-"+(this.getDaysInOneMonth(u,o)+""),T=this.getNextDay(y),M=this.getAfterDay(y);if(t===y||t===T||t===M)return!0}return!1},judgeCardSpaceYear:function(e,t){return!(!e||!t)&&(!!this.validYearByAfterYear(e,t,5)||(!!this.validYearByAfterYear(e,t,10)||!!this.validYearByAfterYear(e,t,20)))},validYearByAfterYear:function(e,t,r){if(!e||!t)return!1;var a=this.getNextYearDate(e,r),n=this.getAfterDay(a),i=this.getNextDay(a);return a===t||n===t||i===t},isValidPolicyCardDate:function(e,t){if(!e||!t)return!1;var r=e.split("-"),a=(r[0],r[1],r[2],t.split("-"));a[0],a[1],a[2];if(this.isThirdMonthSpace(e,t)){if(this.judgeThirdMonth(e,t))return!0}else if(this.judgeCardSpaceYear(e,t))return!0;return!1},selDateChanged:function(){var e=this.currentDate[0],t=this.currentDate[1];this.isValidPolicyCardDate(e,t)?this.msg="校验通过，恭喜":this.msg="不符合需求大佬规定"}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block"},[r("span",{staticClass:"demonstration"},[e._v("证件有效期：")]),e._v(" "),r("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.selDateChanged},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}}),e._v(" "),r("div",{staticClass:"remind"},[e._v(e._s(e.msg))])],1)},staticRenderFns:[]};var i=r("VU/8")(a,n,!1,function(e){r("FWk0")},"data-v-181c5d91",null);t.default=i.exports},FWk0:function(e,t){}});