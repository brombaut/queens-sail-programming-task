(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/queens-sail-programming-task/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0524":function(t,e,n){"use strict";var a=n("6ddc"),i=n.n(a);i.a},"095f":function(t,e,n){"use strict";var a=n("a1de"),i=n.n(a);i.a},1:function(t,e){},"13e8":function(t,e,n){},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MainHeader",{attrs:{isRefreshing:t.isRefreshing,filterType:t.filterTypes[t.filterType],filterDateRange:t.filterDateRange,filterTag:t.filterTag,filterPageSize:t.filterPageSize},on:{refresh:t.handleRefreshEvent,changeFilterType:t.handleFilterTypeChange,changeFilterDateRange:t.handleFilterDateRangeChange,changeFilterPageSize:t.handleFilterPageSizeChange}}),n("main",[n("section",[n("h2",[t._v(t._s(t.filterTypes[t.filterType])+" Questions")]),t.questionSummaries.length>0?n("SummaryTable",{attrs:{title:t.filterType,rows:t.questionSummaries,filterTag:t.filterTag},on:{tagClicked:t.handleRefreshEvent,rowClicked:t.handleQuestionSelected}}):n("h3",[t._v("No Data Found")])],1)]),n("QuestionDetailsModal",{attrs:{show:t.showModal,questionSummaryDetails:t.selectedQuestionSummaryDetails,questionBodyDetails:t.selectedQuestionBodyDetails,filterTag:t.filterTag},on:{modalClosed:t.resetSelectedQuestion,tagClicked:t.handleRefreshEvent}})],1)},s=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=(n("7514"),n("768b")),l=(n("28a5"),n("c5f6"),n("bc3a")),c=n.n(l),d=n("02cc"),u="https://cors-anywhere.herokuapp.com/",f="https://stackoverflow.com";function h(t){var e=g(t),n=e(".js-search-results .question-summary"),a=[];return n.each((function(){var t=e(this).find(".question-hyperlink").text().substring(3),n=e(this).find(".question-hyperlink").attr("href"),i="".concat(f).concat(n),s=Number(n.split("/")[2]),r=Number(e(this).find(".vote-count-post > strong").text()),l=Number(e(this).find(".status > strong").text()),c=e(this).find(".status").attr("class").split(" "),d=Object(o["a"])(c,2),u=(d[0],d[1]),h=e(this).find(".relativetime"),p=h.text(),g=h.attr("title"),v=e(this).find(".tags").children(),m=[];v.each((function(){m.push(e(this).text())})),a.push({id:s,title:t,relativeHyperlink:n,absoluteHyperlink:i,voteCount:r,answers:l,relativeTime:p,dateTimeString:g,status:u,tagsArray:m})})),a}function p(t){var e=g(t),n=e("#question-header"),a=e(n).find(".question-hyperlink").text(),i=e(".question"),s=e(i).find(".post-text"),r=e(s).text(),o=e(s).html();return{fullTitle:a,questionBodyRawText:r,questionBodyRawHtml:o}}function g(t){return d.load(t)}function v(t,e,n,a){return"/search?tab=".concat(t,"&pagesize=").concat(a,"&q=%5b").concat(e,"%5d%20is%3aquestion%20created%3a").concat(n,"d..")}var m={scrapeStackOverflowSummaryQuestions:function(t,e,n,a){var i=v(t,e,n,a),s="".concat(u).concat(f).concat(i);return c.a.get(s).then((function(t){if(200===t.status){var e=h(t.data);return e}throw console.error(t),new Error({code:t.status,message:"Could not retrieve data from Stack Overflow"})}))},scrapeStackOverflowQuestionDetails:function(t){var e="".concat(u).concat(t);return c.a.get(e).then((function(t){if(200===t.status){var e=p(t.data);return e}throw console.error(t),new Error({code:t.status,message:"Could not retrieve data from Stack Overflow"})}))}},y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"summary-table"},[t._m(0),a("tbody",t._l(t.rows,(function(e){return a("tr",{key:e.id,on:{click:function(n){return t.handleRowClick(e)}}},[a("td",[t._v(t._s(e.id))]),a("td",[a("b",[t._v(t._s(e.title))])]),a("td",[t._v(t._s(e.relativeTime))]),a("td",[t._v(t._s(e.voteCount))]),a("td",[t._v(t._s(e.answers))]),a("td",{class:{answered:t.isAnswered(e.status),accepted:t.isAccepted(e.status)}},[t._v("\n                "+t._s(t.formatStatusString(e.status))+"\n            ")]),a("td",{staticClass:"tags-column"},t._l(e.tagsArray,(function(e){return a("div",{key:e,class:{tag:!0,"current-tag":t.filterTag===e},attrs:{"data-tag-value":e},on:{click:function(e){return e.stopPropagation(),t.handleTagClick(e)}}},[t._v("\n                    "+t._s(e)+"\n                ")])})),0),a("td",[a("div",{staticClass:"so-link-container"},[a("a",{attrs:{href:e.absoluteHyperlink,target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[a("img",{staticClass:"so-link-image",attrs:{src:n("70a4")}})])])])])})),0)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("ID")]),n("th",[t._v("Title")]),n("th",[t._v("Posted")]),n("th",[t._v("Votes")]),n("th",[t._v("Answers")]),n("th",[t._v("Status")]),n("th",[t._v("Tags")]),n("th")])])}],S=(n("6762"),n("2fdb"),n("a481"),{props:{title:String,rows:Array,filterTag:String},methods:{formatStatusString:function(t){var e=t.split("-"),n="";return e.forEach((function(t){n+="".concat(t.replace(/^\w/,(function(t){return t.toUpperCase()}))," & ")})),n.substring(0,n.length-3)},isAnswered:function(t){return t.includes("answered")&&!t.includes("unanswered")},isAccepted:function(t){return t.includes("accepted")},handleTagClick:function(t){var e=t.target.dataset.tagValue;this.$emit("tagClicked",e)},handleRowClick:function(t){this.$emit("rowClicked",t.id)}}}),b=S,_=(n("095f"),n("2877")),D=Object(_["a"])(b,y,w,!1,null,null,null),k=D.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("img",{staticClass:"scraper-logo",attrs:{src:n("cf35")}}),a("h3",[t._v("Stack Overflow Data Scraper")]),a("div",{staticClass:"expand"}),a("div",{staticClass:"actions-container"},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"dropbtn border-left"},[t._v("Filter By: "+t._s(t.filterType))]),a("div",{staticClass:"dropdown-content"},[a("span",{attrs:{"data-filter-type-string":"newest","data-filter-type-title":"Newest"},on:{click:t.handleFilterTypeDropdownSelection}},[t._v("\n                    Newest\n                ")]),a("span",{attrs:{"data-filter-type-string":"votes","data-filter-type-title":"Most Votes"},on:{click:t.handleFilterTypeDropdownSelection}},[t._v("\n                    Most Votes\n                ")]),a("span",{attrs:{"data-filter-type-string":"relevance","data-filter-type-title":"Relevance"},on:{click:t.handleFilterTypeDropdownSelection}},[t._v("\n                    Relevance\n                ")]),a("span",{attrs:{"data-filter-type-string":"active","data-filter-type-title":"Active"},on:{click:t.handleFilterTypeDropdownSelection}},[t._v("\n                    Active\n                ")])])]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"dropbtn border-left"},[t._v(t._s(t.filterDateSelectorString))]),a("div",{staticClass:"dropdown-content"},[a("span",{attrs:{"data-filter-date-range":"1"},on:{click:t.handleFilterDateRangeDropdownSelection}},[t._v("\n                    1 Day\n                ")]),a("span",{attrs:{"data-filter-date-range":"7"},on:{click:t.handleFilterDateRangeDropdownSelection}},[t._v("\n                    7 Days\n                ")]),a("span",{attrs:{"data-filter-date-range":"15"},on:{click:t.handleFilterDateRangeDropdownSelection}},[t._v("\n                    15 Days\n                ")]),a("span",{attrs:{"data-filter-date-range":"30"},on:{click:t.handleFilterDateRangeDropdownSelection}},[t._v("\n                    30 Days\n                ")])])]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"dropbtn border-left"},[t._v("Query Size: "+t._s(t.filterPageSize)+" Rows")]),a("div",{staticClass:"dropdown-content"},[a("span",{attrs:{"data-filter-page-size":"10"},on:{click:t.handlePageSizeDropdownSelection}},[t._v("\n                    10 Rows\n                ")]),a("span",{attrs:{"data-filter-page-size":"15"},on:{click:t.handlePageSizeDropdownSelection}},[t._v("\n                    15 Rows\n                ")]),a("span",{attrs:{"data-filter-page-size":"30"},on:{click:t.handlePageSizeDropdownSelection}},[t._v("\n                    30 Rows\n                ")]),a("span",{attrs:{"data-filter-page-size":"50"},on:{click:t.handlePageSizeDropdownSelection}},[t._v("\n                    50 Rows\n                ")])])]),a("div",{staticClass:"action",attrs:{id:"tag-filter-container"}},[a("span",{staticClass:"tag-container"},[t._v("\n                Tag: \n                "),a("input",{attrs:{id:"filter-tag-input",type:"text",placeholder:"Enter a tag..."},domProps:{value:t.filterTag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleRefreshClick(e)}}})]),t._m(0)]),a("button",{staticClass:"border-left",attrs:{id:"refresh"},on:{click:t.handleRefreshClick}},[t.isRefreshing?a("div",{staticClass:"lds-dual-ring"}):a("span",[t._v("Refresh")])])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-error-content"},[n("p",{staticClass:"tag-error-message"},[n("b",[t._v("Invlid Tag. ")]),t._v("Only alphanumeric characters and '.', '#', '+' and '-' characters are allowed.")])])}],R=(n("4917"),{props:{isRefreshing:Boolean,filterType:String,filterDateRange:Number,filterTag:String,filterPageSize:Number},computed:{filterDateSelectorString:function(){return"Search Period: ".concat(this.filterDateRange," ").concat(1===this.filterDateRange?"Day":"Days")}},methods:{handleRefreshClick:function(){var t=document.querySelector("#filter-tag-input"),e=t.value.toLowerCase();this.validateTag(e)?(document.querySelector("#tag-filter-container").classList.remove("tag-error"),this.$emit("refresh",e)):document.querySelector("#tag-filter-container").classList.add("tag-error")},handleFilterTypeDropdownSelection:function(t){var e=t.target.dataset.filterTypeString;this.$emit("changeFilterType",e)},handleFilterDateRangeDropdownSelection:function(t){var e=Number(t.target.dataset.filterDateRange);this.$emit("changeFilterDateRange",e)},handlePageSizeDropdownSelection:function(t){var e=Number(t.target.dataset.filterPageSize);this.$emit("changeFilterPageSize",e)},validateTag:function(t){if(0===t.length)return!0;var e=t.match(/^[0-9a-z+\-.#]+$/);return e}}}),O=R,q=(n("d63c"),Object(_["a"])(O,C,T,!1,null,null,null)),P=q.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{modal:!0,"modal-show":t.isVisible,"modal-hide":!t.isVisible},attrs:{id:"modal-wrapper"},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t.detailsAreLoaded?a("h4",[t._v(t._s(t.questionBodyDetails.fullTitle))]):a("h4",[t._v(t._s(t.questionSummaryDetails.title))]),a("div",{staticClass:"expand"}),a("div",{staticClass:"actions-container"},[a("div",{staticClass:"so-link-container action"},[a("a",{attrs:{href:t.questionSummaryDetails.absoluteHyperlink,target:"_blank"}},[a("img",{staticClass:"so-link-image",attrs:{src:n("70a4")}})])]),a("span",{staticClass:"close action",on:{click:t.closeModal}},[t._v("\n                        ×\n                    ")])])]),a("div",{staticClass:"modal-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.detailsAreLoaded,expression:"detailsAreLoaded"}],staticClass:"question-body-container"},[a("div",{attrs:{id:"question-body-question-container"}}),a("div",{attrs:{id:"question-body-tags-contaer"}},t._l(t.questionSummaryDetails.tagsArray,(function(e){return a("div",{key:e,class:{"current-tag":t.filterTag===e},attrs:{"data-tag-value":e},on:{click:function(e){return e.stopPropagation(),t.handleTagClick(e)}}},[t._v("\n                            "+t._s(e)+"\n                        ")])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.detailsAreLoaded,expression:"!detailsAreLoaded"}],staticClass:"lds-dual-ring"})]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"stat-container"},[a("span",[t._v("Posted: "+t._s(t.questionSummaryDetails.relativeTime))])]),a("div",{staticClass:"stat-container"},[a("span",[t._v("Votes: "+t._s(t.questionSummaryDetails.voteCount))])]),a("div",{staticClass:"stat-container"},[a("span",[t._v("Answers: "+t._s(t.questionSummaryDetails.answers))])]),a("div",{class:{"stat-container":!0,answered:t.isAnswered(t.questionSummaryDetails.status),accepted:t.isAccepted(t.questionSummaryDetails.status)}},[a("span",[t._v("Status: "+t._s(t.formatStatusString(t.questionSummaryDetails.status)))])])])])])},Q=[],x={props:{show:Boolean,questionSummaryDetails:Object,questionBodyDetails:Object,filterTag:String},data:function(){return{isVisible:!1}},computed:{detailsAreLoaded:function(){return this.questionBodyDetails&&Object.keys(this.questionBodyDetails).length>0}},methods:{closeModal:function(){this.isVisible=!1,this.$emit("modalClosed")},formatStatusString:function(t){if(!t)return"";var e=t.split("-"),n="";return e.forEach((function(t){n+="".concat(t.replace(/^\w/,(function(t){return t.toUpperCase()}))," & ")})),n.substring(0,n.length-3)},isAnswered:function(t){return t&&t.includes("answered")&&!t.includes("unanswered")},isAccepted:function(t){return t&&t.includes("accepted")},handleTagClick:function(t){var e=t.target.dataset.tagValue;this.$emit("tagClicked",e),this.closeModal()}},watch:{show:function(t){this.isVisible=t},detailsAreLoaded:function(t){var e=document.querySelector("#question-body-question-container");e.innerHTML=t?this.questionBodyDetails.questionBodyRawHtml:""}},mounted:function(){var t=this;document.addEventListener("keyup",(function(e){"Escape"===e.code&&t.closeModal()}))},beforeDestroy:function(){this.closeModal()}},z=x,F=(n("0524"),Object(_["a"])(z,j,Q,!1,null,null,null)),A=F.exports;function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $={name:"app",components:{SummaryTable:k,MainHeader:P,QuestionDetailsModal:A},data:function(){return{questionSummaries:[],specificQuestionDetails:{},isRefreshing:!1,filterTypes:{newest:"Newest",votes:"Most Votes",relevance:"Relevance",active:"Active"},filterType:"newest",filterDateRange:7,filterTag:"android",filterPageSize:10,showModal:!1,selectedQuestionId:null}},computed:{stacktackString:function(){return"stacktack-".concat(this.stacktackId)},selectedQuestionSummaryDetails:function(){var t=this;return this.selectedQuestionId?this.questionSummaries.find((function(e){return e.id===t.selectedQuestionId})):{}},selectedQuestionBodyDetails:function(){return this.selectedQuestionId?this.specificQuestionDetails[this.selectedQuestionId]:{}}},methods:{fetchData:function(){var t=this;this.isRefreshing=!0,m.scrapeStackOverflowSummaryQuestions(this.filterType,this.filterTag,this.filterDateRange,this.filterPageSize).then((function(e){t.questionSummaries=e.slice(0,t.filterPageSize+1),t.isRefreshing=!1})).catch((function(e){t.isRefreshing=!1}))},handleRefreshEvent:function(t){this.isRefreshing||(this.filterTag=t,this.fetchData())},handleFilterTypeChange:function(t){this.filterType=t,this.fetchData()},handleFilterDateRangeChange:function(t){this.filterDateRange=t,this.fetchData()},handleFilterPageSizeChange:function(t){this.filterPageSize=t,this.fetchData()},handleQuestionSelected:function(t){var e=this;this.selectedQuestionId=t;var n=this.questionSummaries.find((function(e){return e.id===t}));if(!n.detailsFetched){var a=this.selectedQuestionSummaryDetails;a&&m.scrapeStackOverflowQuestionDetails(a.absoluteHyperlink).then((function(t){e.addQuestionDetails(t)}))}document.body.style.overflow="hidden",this.showModal=!0},addQuestionDetails:function(t){var e=E({},t);this.$set(this.specificQuestionDetails,"".concat(this.selectedQuestionId),e)},resetSelectedQuestion:function(){this.selectedQuestionId=null,document.body.style.overflow="auto",this.showModal=!1}},mounted:function(){this.fetchData()}},B=$,N=(n("5c0b"),Object(_["a"])(B,i,s,!1,null,null,null)),L=N.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("e332"),i=n.n(a);i.a},"6ddc":function(t,e,n){},"70a4":function(t,e,n){t.exports=n.p+"img/so_logo.2d47e939.png"},a1de:function(t,e,n){},cf35:function(t,e,n){t.exports=n.p+"img/scraper.7664dd57.png"},d63c:function(t,e,n){"use strict";var a=n("13e8"),i=n.n(a);i.a},e332:function(t,e,n){}});
//# sourceMappingURL=app.638e730c.js.map