(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(10),a=n.n(s),o=(n(16),n(3)),i=n(2),r=n(9),u=(n(17),n(18),n(6)),l=n(1),j=function(e){var t=[],n=Object(u.useState)([]),c=Object(o.a)(n,2),s=c[0],a=c[1],i=Object(u.useState)(!1),r=Object(o.a)(i,2),j=r[0],b=r[1];return Object(u.useEffect)((function(){b(!0),fetch("https://meme-generator-4ac47-default-rtdb.firebaseio.com/favourites.json").then((function(e){e.json().then((function(e){for(var n in e)t.push(String(e[n]));a(t),b(!1)}))}))}),[]),Object(l.jsxs)(l.Fragment,{children:[e.showloginButton&&Object(l.jsx)("p",{className:"signIn",children:"Sign in to save your memes"}),!s.length&&!j&&!e.showloginButton&&Object(l.jsxs)("div",{className:"noMeme",children:[Object(l.jsx)("h2",{children:"You do not have any saved memes"}),Object(l.jsx)("a",{href:"/",children:"Create One!"})]}),j&&Object(l.jsx)("h3",{className:"loadingText",children:"Loading..."}),!j&&e.showlogoutButton&&s.length&&Object(l.jsxs)("div",{className:"myMemes",children:[" ",s.map((function(e,t){return Object(l.jsx)("img",{className:"mymemeimages",src:e,alt:"meme"},t)})),Object(l.jsx)("a",{href:"/",children:"Create More!"})," "]})]})},b=(n(20),function(){return Object(l.jsxs)("div",{className:"heading",children:[Object(l.jsx)("h1",{children:"Create your own meme\ud83d\ude01"}),Object(l.jsx)("a",{href:"/favourites",children:"Favourites"})]})}),m=n(11),d=(n(23),function(e){var t=e.temp,n=e.clickHandler;return Object(l.jsxs)("div",{className:"newImage",children:[Object(l.jsx)("img",{src:t.url,alt:t.name,onClick:n},t.id),Object(l.jsx)("div",{children:t.name})]})}),f=(n(24),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),i=Object(o.a)(a,2),r=i[0],u=i[1],j=Object(c.useState)(null),b=Object(o.a)(j,2),f=b[0],h=b[1],O=Object(c.useState)([]),p=Object(o.a)(O,2),g=p[0],x=p[1],v=Object(c.useState)(!1),S=Object(o.a)(v,2),N=S[0],y=S[1],k=Object(m.useClipboard)();return Object(c.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){e.json().then((function(e){s(e.data.memes)}))}))}),[]),Object(c.useEffect)((function(){r&&x(Array(r.box_count).fill(""))}),[r]),Object(l.jsxs)("div",{className:"wrapper",children:[r&&Object(l.jsxs)("div",{className:"makeNew",children:[Object(l.jsx)("img",{src:r.url,alt:r.name},r.id),Object(l.jsxs)("form",{className:"newForm",onSubmit:function(e){return function(e){e.preventDefault();var t=r,n=new FormData;n.append("username","arijitg10"),n.append("password","@rijitGHOSH10"),n.append("template_id",t.id),g.forEach((function(e,t){return n.append("boxes[".concat(t,"][text]"),e)})),fetch("https://api.imgflip.com/caption_image",{method:"POST",body:n}).then((function(e){e.json().then((function(e){h(e.data.url),y(!1)}))}))}(e)},children:[g&&g.map((function(e,t){return Object(l.jsx)("input",{typeof:"text",placeholder:"Enter text",onChange:function(e){return function(e,t){var n=e.target.value||"";x(g.map((function(e,c){return t===c?n:e})))}(e,t)}},t)})),Object(l.jsx)("button",{className:"btn",typeof:"submit",children:"Create"}),Object(l.jsx)("button",{typeof:"buttom",className:"btn cancel",onClick:function(){u(null),h(null),x([]),y(!1)},children:"Back"})]})]}),f&&Object(l.jsxs)("div",{className:"savememDiv",children:[Object(l.jsx)("img",{src:f,alt:"meme"}),Object(l.jsxs)("div",{className:"savememe",children:[Object(l.jsx)("button",{className:"btn",onClick:function(){k.copy(f),y(!0)},children:N?"Link Copied":"Copy Link"}),Object(l.jsx)("button",{className:"btn",onClick:function(){fetch("https://meme-generator-4ac47-default-rtdb.firebaseio.com/favourites.json",{method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json"}})},children:"Add to favourites"}),Object(l.jsx)("button",{className:"btn cancel",onClick:function(){h(null),y(!1)},children:"Cancel"})]})]}),!r&&n.map((function(e){return Object(l.jsx)(d,{temp:e,clickHandler:function(){u(e)}})}))]})}),h=function(){var e="561198278802-krums0hsisfrp5atk6ekhul8ajtvgus3.apps.googleusercontent.com",t=Object(c.useState)(!0),n=Object(o.a)(t,2),s=n[0],a=n[1],u=Object(c.useState)(!1),m=Object(o.a)(u,2),d=m[0],h=m[1];return Object(l.jsxs)("div",{className:"layout",children:[Object(l.jsx)(b,{}),s&&Object(l.jsx)(r.GoogleLogin,{clientId:e,buttonText:"Sign In with google",onSuccess:function(e){a(!1),h(!0)},onFailure:function(e){alert("Login Failed")},cookiePolicy:"single_host_origin",isSignedIn:!0}),d&&Object(l.jsx)(r.GoogleLogout,{clientId:e,buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),a(!0),h(!1)}}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",element:Object(l.jsx)(f,{})}),Object(l.jsx)(i.a,{exact:!0,path:"/favourites",element:Object(l.jsx)(j,{showloginButton:s,showlogoutButton:d})})]})]})},O=n(8);a.a.render(Object(l.jsx)(O.a,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.6d5b4ae4.chunk.js.map