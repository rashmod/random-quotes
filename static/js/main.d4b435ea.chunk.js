(this["webpackJsonprandom-quotes-app"]=this["webpackJsonprandom-quotes-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),a=n.n(r),i=(n(13),n(14),n(4)),o=n.n(i),j=n(8),u=n(6),d=n(5),p=n.n(d),l=n(0),h=function(){return Object(l.jsx)("div",{className:p.a["place-spinner"],children:Object(l.jsxs)("div",{className:p.a["ring-spinner"],children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})},b=n(2),x=n.n(b),O=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),a=Object(u.a)(r,2),i=a[0],d=a[1],p=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,fetch("https://type.fit/api/quotes");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c=Math.floor(Math.random()*n.length),s(n[c]),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),d(!0);case 16:d(!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){p()}),[]),n.text?i?Object(l.jsx)("div",{className:x.a.card,children:Object(l.jsx)(h,{})}):Object(l.jsxs)("div",{className:x.a.card,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:x.a.text,children:n.text}),Object(l.jsxs)("p",{className:x.a.author,children:["- ",n.author]})]}),Object(l.jsx)("button",{onClick:p,children:"Get new quote"})]}):Object(l.jsxs)("div",{className:x.a.card,children:[Object(l.jsx)("h1",{children:"no quotes available"}),Object(l.jsx)("button",{onClick:p,children:"Get new quote"})]})};var f=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(O,{})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()},2:function(e,t,n){e.exports={card:"Quotes_card__1ELPS",text:"Quotes_text__xmHsO",author:"Quotes_author__3v2d7"}},5:function(e,t,n){e.exports={"place-spinner":"LoadingSpinner_place-spinner__S0KF4","ring-spinner":"LoadingSpinner_ring-spinner__1nWz0","ring-spin":"LoadingSpinner_ring-spin__2FthP"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d4b435ea.chunk.js.map