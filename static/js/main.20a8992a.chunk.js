(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{37:function(e,t,n){},61:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),r=n.n(a),i=(n(61),n(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function o(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(6),l=(n(38),n(27)),j=n(11),d=n(94),b=n(108),u=n(95),O=n(96),h=(n(97),n(2));var x=n(98),v=n(99),f=n(100),p=n(101),g=n(102),m=n(103),C=n(104),k=n(105),S=n(109),L=n(110),w=n(111),A=n(106),M=Object(c.createContext)(null),y=n(52),I=n.n(y),N=n(53);var B=function(){var e=Object(c.useContext)(M),t=(e.mcc,e.mnc,e.lac,e.cid,e.setLon),n=e.setLat,a=e.isget,r=e.setIsget,i=(e.startLon,e.setStartLon,e.starLat,e.setStarLat,e.map,e.setMap,e.zoom,e.setZoom,e.startCenter,e.setStartCenter);return Object(h.jsx)("div",{children:Object(h.jsx)(N.a,{onClick:function(){!function(){r("true"),console.log("isget =>",a),console.log("GETLOCATIONVITHLC");var e={version:"1.0",api_key:"ABM6WU0BAAAANfFuIQIAV1pUEYIBeogyUNvVbhNaJPWeM-AAAAAAAAAAAACRXgDsaYNpZWpBczn4Lq6QmkwK6g=="};I.a.post("http://api.lbs.yandex.net/geolocation",{params:{data:"open",countrycode:250,operatorid:2,cellid:197403650,lac:9900,signal_strength:-90,age:1e3}},{headers:e}).then((function(e){var c=e.data.data.lat;n(c);var a=e.data.data.lon;t(a),i(c,a),console.log("lat =>",c),console.log("lon =>",a)})).catch((function(e){console.log("Error =>",e)}))}()},children:"Get Location"})})};function W(){var e=Object(c.useContext)(M),t=(e.markers,e.setMarkers,e.mcc,e.setMcc),n=(e.mnc,e.setMnc),a=e.isOpen,r=e.setIsOpen,i=e.isrus,o=e.setIsrus,s=e.lac,l=e.setLac,j=e.cid,d=e.setCid;return Object(h.jsx)("div",{children:Object(h.jsxs)(x.a,{color:"light",light:!0,expand:"md",children:[Object(h.jsx)(v.a,{href:"/",children:"Location"}),Object(h.jsx)(f.a,{onClick:function(){return r(!a)}}),Object(h.jsx)(p.a,{isOpen:a,navbar:!0,children:Object(h.jsxs)(g.a,{className:"ml-auto",navbar:!0,children:[Object(h.jsx)(m.a,{inline:!0,onSubmit:function(e){e.preventDefault(),console.log(s,j)},children:Object(h.jsxs)(C.a,{children:[Object(h.jsx)(k.a,{style:{marginRight:".9rem"},type:"text",name:"LAC",id:"LAC",value:s,onChange:function(e){return l(e.target.value)},placeholder:"LAC"}),Object(h.jsx)("p",{}),Object(h.jsx)(k.a,{type:"text",name:"CID",id:"CID",value:j,onChange:function(e){return d(e.target.value)},placeholder:"CID"})]})}),Object(h.jsxs)(S.a,{nav:!0,inNavbar:!0,children:[Object(h.jsx)(L.a,{nav:!0,caret:!0,children:"MCC"}),Object(h.jsxs)(w.a,{right:!0,children:[Object(h.jsx)(A.a,{onClick:function(){o("true"),t("250")},children:"Russia"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){o("false"),t("255")},children:"Ukraine"})]})]}),"false"==i?Object(h.jsxs)(S.a,{nav:!0,inNavbar:!0,children:[Object(h.jsx)(L.a,{nav:!0,caret:!0,children:"MNC"}),Object(h.jsxs)(w.a,{right:!0,children:[Object(h.jsx)(A.a,{onClick:function(){return n("01")},children:"Vodafone (01)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("02")},children:"Kievstar (02)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("03")},children:"Kievstar (03)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("04")},children:"Intertelekom (04)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("06")},children:"Lifecell (06)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("07")},children:"3Mob; Lycamobile (07)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("08")},children:"Ukr telekom (08)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("09")},children:"Vega (09)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("21")},children:"PEOPLEnet (21)"})]})]}):Object(h.jsxs)(S.a,{nav:!0,inNavbar:!0,children:[Object(h.jsx)(L.a,{nav:!0,caret:!0,children:"MNC"}),Object(h.jsxs)(w.a,{right:!0,children:[Object(h.jsx)(A.a,{onClick:function(){return n("32")},children:"WIN-Mobile (32)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("33")},children:"Sev-Mobile (33)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("34")},children:"Crim-telekom (34)"}),Object(h.jsx)(A.a,{divider:!0}),Object(h.jsx)(A.a,{onClick:function(){return n("60")},children:"Volna-Mobile (60)"}),Object(h.jsx)(A.a,{divider:!0})]})]}),Object(h.jsx)(B,{})]})})]})})}var z=n(107),E=n(112);var U=function(){var e=Object(c.useContext)(M),t=e.lon,n=e.lat,a=e.isget,r=e.startCenter,i=(e.setStartCenter,e.zoom),o=(e.setZoom,e.map,e.setMap,[n,t]);return Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{center:r,zoom:i,scrollWheelZoom:!0,children:Object(h.jsxs)(z.a,{position:"topright",children:[Object(h.jsx)(z.a.BaseLayer,{checked:!0,name:"Color MAP",children:Object(h.jsx)(b.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png"})}),Object(h.jsx)(z.a.BaseLayer,{name:"Black-White MAP",children:Object(h.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})}),"false"==a?null:Object(h.jsxs)("div",{children:[Object(h.jsx)(z.a.Overlay,{name:"Base station",children:Object(h.jsx)(u.a,{position:o,icon:new j.Icon({iconUrl:l.a,iconSize:[25,41],iconAnchor:[12,41]}),children:Object(h.jsx)(O.a,{sticky:!0,minWidth:90,children:"Base Station"})})}),Object(h.jsx)(z.a.Overlay,{checked:!0,name:"Radius BS",children:Object(h.jsx)(E.a,{center:o,pathOptions:{fillColor:"blue"},radius:15e3,children:Object(h.jsx)(O.a,{children:"Radius BS"})})})]})]})})})};function P(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(""),d=Object(s.a)(j,2),b=d[0],u=d[1],O=Object(c.useState)(""),x=Object(s.a)(O,2),v=x[0],f=x[1],p=Object(c.useState)(""),g=Object(s.a)(p,2),m=g[0],C=g[1],k=Object(c.useState)("false"),S=Object(s.a)(k,2),L=S[0],w=S[1],A=Object(c.useState)("false"),y=Object(s.a)(A,2),I=y[0],N=y[1],B=Object(c.useState)("false"),z=Object(s.a)(B,2),E=z[0],P=z[1],R=Object(c.useState)(""),V=Object(s.a)(R,2),D=V[0],T=V[1],Z=Object(c.useState)(""),J=Object(s.a)(Z,2),K=J[0],Q=J[1],G=Object(c.useState)("7"),Y=Object(s.a)(G,2),_=Y[0],q=Y[1],F=Object(c.useState)([45.71168,34.39274]),H=Object(s.a)(F,2),X=H[0],$=H[1],ee=Object(c.useState)(null),te=Object(s.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useMemo)((function(){return{mcc:o,setMcc:l,mnc:b,setMnc:u,isOpen:L,setIsOpen:w,isrus:I,setIsrus:N,lac:v,setLac:f,cid:m,setCid:C,markers:n,setMarkers:a,lon:D,setLon:T,lat:K,setLat:Q,isget:E,setIsget:P,startCenter:X,setStartCenter:$,zoom:_,setZoom:q,map:ne,setMap:ce}}),[o,l,b,u,L,w,I,N,v,f,m,C,n,a,D,T,K,Q,E,P,X,$,_,q,ne,ce]);return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(M.Provider,{value:ae,children:[Object(h.jsx)("div",{className:"",children:Object(h.jsx)(W,{})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(U,{markers:n})})]})})}n(92);r.a.render(Object(h.jsx)(P,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/OSM-Location",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/OSM-Location","/service-worker.js");i?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):o(e)}))}}()}},[[93,1,2]]]);
//# sourceMappingURL=main.20a8992a.chunk.js.map