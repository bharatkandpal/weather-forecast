(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{34:function(e,c,t){},60:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(28),r=t.n(n),i=(t(34),t(13)),l=t(2),j=t(5),d=t.n(j),o=t(10),h=t(9),b=t(16),m=t.n(b),x="f42dc105cd0c9ddeab9066c3fcaf37a9",O=function(){var e=Object(o.a)(d.a.mark((function e(c){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:c,units:"metric",APPID:x}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(d.a.mark((function e(c){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:c,units:"metric",APPID:x}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),p=t(0),v=function(e){var c=e.setDay,t=e.setCity,s=e.setActive,n=Object(a.useState)(""),r=Object(h.a)(n,2),i=r[0],l=r[1],j=Object(a.useState)({}),b=Object(h.a)(j,2),m=b[0],x=b[1],u=function(){var e=Object(o.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(i);case 2:c=e.sent,x(c),t(i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l("delhi"),u()}),[]);var v=function(){var e=Object(o.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===c.key&&u();case 1:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)("input",{type:"text",className:"form-control search-box",placeholder:"Please Enter City Name...",value:i,onChange:function(e){return l(e.target.value)},onKeyPress:v})}),Object(p.jsx)("main",{children:Object(p.jsx)("div",{className:"row mb-3 text-center main-area",children:m.list&&m.list.filter((function(e){return"00:00:00"===e.dt_txt.split(" ")[1]})).map((function(e){return Object(p.jsxs)("div",{className:"card col-lg-2 col-md-3 col-sm-6",onClick:function(t){return function(e,t){c(t),s("daycast")}(0,e)},children:[Object(p.jsxs)("div",{className:"card-header",children:[Object(p.jsx)("h3",{children:e.dt_txt.split(" ")[0]}),Object(p.jsx)("div",{})]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("h1",{children:[e.main.temp,Object(p.jsx)("sup",{children:"o"})]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/"+"".concat(e.weather[0].icon)+"@2x.png",alt:e.weather[0].description}),Object(p.jsx)("p",{children:e.weather[0].description})]})]}),Object(p.jsx)("div",{className:"card-footer",children:Object(p.jsxs)("h2",{children:[Object(p.jsxs)("span",{children:[m.city.name,","]}),m.city.country]})})]})}))})})]})},f=function(e){var c=e.day,t=e.city;e.setActive;return Object(p.jsx)(p.Fragment,{children:c&&Object(p.jsx)("div",{className:"box font-lg",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"card card-custom col-md-5",children:[Object(p.jsxs)("div",{className:"card-header",children:[Object(p.jsx)("h3",{children:t}),Object(p.jsx)("div",{})]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("h1",{children:[c.main.temp,Object(p.jsx)("sup",{children:"o"})]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/"+"".concat(c.weather[0].icon)+"@2x.png",alt:c.weather[0].description}),Object(p.jsx)("p",{children:c.weather[0].description})]})]}),Object(p.jsx)("div",{className:"card-footer",children:Object(p.jsx)("h2",{children:Object(p.jsx)("span",{children:c.dt_txt.split(" ")[0]})})})]}),Object(p.jsxs)("div",{className:"card card-custom col-md-5",children:[Object(p.jsx)("div",{className:"card-header",children:"Detailed Weather"}),Object(p.jsxs)("div",{className:"card-body card-detail",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)("h2",{children:"Temprature: "})}),Object(p.jsxs)("div",{className:"col-6",children:[c.main.temp,Object(p.jsx)("sup",{children:"o"})]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)("h2",{children:"Feels Like: "})}),Object(p.jsxs)("div",{className:"col-6",children:[c.main.feels_like,Object(p.jsx)("sup",{children:"o"})]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)("h2",{children:"Humidity: "})}),Object(p.jsx)("div",{className:"col-6",children:c.main.humidity})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)("h2",{children:"Pressure: "})}),Object(p.jsx)("div",{className:"col-6",children:c.main.pressure})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-6",children:Object(p.jsx)("h2",{children:"Wind: "})}),Object(p.jsxs)("div",{className:"col-6",children:[c.wind.speed,"Km/h"]})]})]})]})]})})})},w=Object(l.f)((function(){var e=Object(a.useState)("forecast"),c=Object(h.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)({}),r=Object(h.a)(n,2),i=r[0],l=r[1],j=Object(a.useState)(""),d=Object(h.a)(j,2),o=d[0],b=d[1];return Object(p.jsxs)("div",{children:["forecast"===t&&Object(p.jsx)(v,{setDay:l,setCity:b,setActive:s}),"daycast"===t&&Object(p.jsx)(f,{day:i,city:o,setActive:s})]})})),N=function(){var e=Object(a.useState)({}),c=Object(h.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)({}),r=Object(h.a)(n,2),i=r[0],l=r[1],j=Object(a.useState)({}),b=Object(h.a)(j,2),m=b[0],x=b[1],O=Object(a.useState)({}),v=Object(h.a)(O,2),f=v[0],w=v[1],N=function(){var e=Object(o.a)(d.a.mark((function e(){var c,t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("delhi");case 2:return c=e.sent,s(c),e.next=6,u("mumbai");case 6:return t=e.sent,l(t),e.next=10,u("bengaluru");case 10:return a=e.sent,x(a),e.next=14,u("kolkata");case 14:n=e.sent,w(n);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N()}),[]),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{id:"carousel-main",className:"carousel slide main-area font-lg","data-bs-ride":"false",children:[Object(p.jsxs)("ol",{className:"carousel-indicators",children:[Object(p.jsx)("li",{"data-bs-target":"#carousel-main","data-bs-slide-to":"0",className:"active"}),Object(p.jsx)("li",{"data-bs-target":"#carousel-main","data-bs-slide-to":"1"}),Object(p.jsx)("li",{"data-bs-target":"#carousel-main","data-bs-slide-to":"2"}),Object(p.jsx)("li",{"data-bs-target":"#carousel-main","data-bs-slide-to":"3"})]}),Object(p.jsxs)("div",{className:"carousel-inner",children:[Object(p.jsx)("div",{className:"carousel-item active",children:t.main&&Object(p.jsxs)("div",{className:"w-block",children:[Object(p.jsxs)("h2",{children:[t.main.temp,Object(p.jsx)("sup",{children:"o"})]}),Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/"+"".concat(t.weather[0].icon)+"@2x.png",alt:t.weather[0].description}),Object(p.jsx)("p",{children:t.weather[0].description}),Object(p.jsx)("h1",{children:"Delhi, India"})]})}),Object(p.jsx)("div",{className:"carousel-item",children:m.main&&Object(p.jsxs)("div",{className:"w-block",children:[Object(p.jsxs)("h2",{children:[m.main.temp,Object(p.jsx)("sup",{children:"o"})]}),Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/"+"".concat(m.weather[0].icon)+"@2x.png",alt:m.weather[0].description}),Object(p.jsx)("p",{children:m.weather[0].description}),Object(p.jsx)("h1",{children:"Bengaluru, India"})]})}),Object(p.jsx)("div",{className:"carousel-item",children:f.main&&Object(p.jsxs)("div",{className:"w-block",children:[Object(p.jsxs)("h2",{children:[f.main.temp,Object(p.jsx)("sup",{children:"o"})]}),Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/"+"".concat(f.weather[0].icon)+"@2x.png",alt:f.weather[0].description}),Object(p.jsx)("p",{children:f.weather[0].description}),Object(p.jsx)("h1",{children:"Kolkata, India"})]})}),Object(p.jsx)("div",{className:"carousel-item",children:i.main&&Object(p.jsxs)("div",{className:"w-block",children:[Object(p.jsxs)("h2",{children:[i.main.temp,Object(p.jsx)("sup",{children:"o"})]}),Object(p.jsx)("img",{className:"city-icon",src:"https://openweathermap.org/img/wn/"+"".concat(i.weather[0].icon)+"@2x.png",alt:i.weather[0].description}),Object(p.jsx)("p",{children:i.weather[0].description}),Object(p.jsx)("h1",{children:"Mumbai, India"})]})})]}),Object(p.jsx)("a",{className:"carousel-control-prev",href:"#carousel-main",role:"button","data-bs-slide":"prev",children:Object(p.jsx)("span",{className:"carousel-control-prev-icon"})}),Object(p.jsx)("a",{className:"carousel-control-next",href:"#carousel-main",role:"button","data-bs-slide":"next",children:Object(p.jsx)("span",{className:"carousel-control-next-icon"})})]})})},g=function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"mailto:kandpalbharat83@gmail.com",className:"footer-w",children:"Bharat Kandpal"})}),Object(p.jsx)("div",{children:"Contact: 8191960391"})]})},y=function(){return Object(p.jsxs)(i.a,{children:[Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsxs)(i.b,{to:"/",className:"navbar-brand font-header",children:[Object(p.jsx)("img",{className:"d-inline-block align-text-top",src:"https://openweathermap.org/img/wn/02d@2x.png",width:"50",height:"40",alt:""}),Object(p.jsx)("strong",{children:" Weather"})]}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(i.b,{to:"/forecast",className:"nav-link font-lg",children:"5-Day Forecast"})})})})]})}),Object(p.jsx)(g,{}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(N,{})}),Object(p.jsx)(l.a,{path:"/Forecast",children:Object(p.jsx)(w,{})})]})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),k()}},[[60,1,2]]]);
//# sourceMappingURL=main.26b45e4d.chunk.js.map