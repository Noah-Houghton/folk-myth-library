(this["webpackJsonpfolk-myth-library"]=this["webpackJsonpfolk-myth-library"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=(a(40),a(24)),s=a(25),c=a(26),u=a(12),h=a(33),m=a(27),d=a.n(m),f=(a(41),a(32)),g=a(21),v=a.n(g);function E(e,t){var a=!1,n=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var s=i.value;a=a||s.includes(t)}}catch(c){r=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}function p(e){return r.a.createElement("button",{onClick:e.onClick},"Reset Filters")}var k=a(76),b=a(82),y=a(84),T=a(78),x=a(80),B=a(83),C=a(79),A=a(81),S=a(30),P=a.n(S),w=a(28),O=a.n(w),j=a(85),L=(a(42),Object(k.a)({table:{minWidth:650}}));function I(e){return r.a.createElement(C.a,null,r.a.createElement(T.a,null,e.Title),r.a.createElement(T.a,null,e.Author),r.a.createElement(T.a,null,e.Shelf),r.a.createElement(T.a,null,e.Publisher),r.a.createElement(T.a,null,e.Translator),r.a.createElement(T.a,null,e.Volume),r.a.createElement(T.a,null,e.Region),r.a.createElement(T.a,null,e.Type),r.a.createElement(T.a,null,e.Published),r.a.createElement(T.a,null,e.Copies),r.a.createElement(T.a,null,e.Tags),r.a.createElement(T.a,null,e.Language),r.a.createElement(T.a,null,e.Editor))}function F(e){var t=L();if(0===e.data.length)return r.a.createElement("p",null,"Loading...");var a=[],n=!0,l=!1,i=void 0;try{for(var o,s=e.data[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;a.push(I(c))}}catch(h){l=!0,i=h}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}var u=[{target:"Title",text:"Title"},{target:"Author",text:"Author"},{target:"Shelf",text:"Shelf Location"},{target:"Publisher",text:"Publisher"},{target:"Translator",text:"Translator"},{target:"Volume",text:"Volume"},{target:"Region",text:"Region"},{target:"Type",text:"Type"},{target:"Published",text:"Published"},{target:"Copies",text:"Copies"},{target:"Tags",text:"Tags"},{target:"Language",text:"Language"},{target:"Editor",text:"Editor"}].map((function(t,a){return function(e){var t=e.active?e.ascending?r.a.createElement(O.a,{fontSize:"small"}):r.a.createElement(P.a,{fontSize:"small"}):"";return r.a.createElement(j.a,{title:e.active?"Sorting "+(e.ascending?"Ascending":"Descending"):"Click to sort by this column"},r.a.createElement(T.a,{onClick:e.handler},e.text," ",t))}({handler:e.onClick(t.target),text:t.text,active:a===e.activeHeaderIndex,ascending:e.ascending})}));return r.a.createElement(x.a,{component:A.a},r.a.createElement(b.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(B.a,null,r.a.createElement(C.a,{className:"header",key:"Columns"},u||"")),r.a.createElement(y.a,null,a||"")))}a(49);function H(e){return r.a.createElement("div",{className:"filter"},r.a.createElement("input",{placeholder:"Enter a term to filter the library",id:"searchTerm",type:"text",onChange:e.handler}),r.a.createElement("button",{onClick:e.handler},"Filter"))}var N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,allBooks:[],filteredBooks:[],searchTerm:"",filters:null,activeHeaderIndex:-1,sortAscending:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"filterBooks",value:function(){var e=this,t=v()("#searchTerm").val()||"";this.setState({filteredBooks:this.state.allBooks.filter((function(a){return""!==t?a.Title.includes(t)||E(a.Author,t)||E(a.Editor,t)||E(a.Tags,t):e.state.allBooks})),searchTerm:t,filters:this.state.filters})}},{key:"loadBooks",value:function(){var e=this;this.setState({loading:!0}),Object(f.a)("https://docs.google.com/spreadsheets/d/e/2PACX-1vT2v2Ka1L9i28QBUQq_-GgZtcHO6UGHw6M5Po7GxGd5Iczn0dyhhIJMFO82PbZUWpd9xjqx4wzhCoEF/pub?gid=0&single=true&output=csv").then((function(t){var a=[];t.forEach((function(e){var t={Title:e.Title.trim(),Author:e.Author.split(",").map((function(e){return e.trim()})),Shelf:e.Shelf.trim(),Publisher:e.Publisher.trim(),Translator:e.Translator.trim(),Volume:+e.Volume,Region:e.Region.trim(),Type:e.Type.trim(),Published:+e.Published,Copies:+e.Copies,Tags:e.Tags.split(",").map((function(e){return e.trim()})),Language:e.Language.trim(),Editor:e.Editor.split(",").map((function(e){return e.trim()}))};a.push(t)})),e.setState({allBooks:a,loading:!1}),e.filterBooks()}))}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"sortByColumn",value:function(e){var t=this;return function(){t.setState({activeHeaderIndex:Object.keys(t.state.allBooks[0]).indexOf(e),filteredBooks:t.state.filteredBooks.sort((function(a,n){return(t.state.sortAscending?a[e]<n[e]:a[e]>n[e])?1:-1})),sortAscending:!t.state.sortAscending})}}},{key:"removeFilter",value:function(){v()("#searchTerm").val(""),this.setState({filteredBooks:this.state.allBooks,searchTerm:"",filters:null})}},{key:"render",value:function(){var e=this.state.filteredBooks,t=this.state.searchTerm||this.state.filters?r.a.createElement(p,{onClick:this.removeFilter.bind(this)}):"";return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"The Folklore and Mythology Library"),r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,'"To Vincent, Who Shared the Quest"'),r.a.createElement("p",null,"\u2014 Esther Casier-Quinn")),r.a.createElement(H,{handler:this.filterBooks.bind(this)}),t,r.a.createElement(F,{ascending:this.state.sortAscending,activeHeaderIndex:this.state.activeHeaderIndex,onClick:this.sortByColumn.bind(this),data:e}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9507d06f.chunk.js.map