(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(15),s=n.n(a),i=(n(26),n(27),n(4)),j=n(2),o=(n(28),n.p+"static/media/header1.e210d623.jpg"),l=n.p+"static/media/header2.26d6661b.jpg",d=n.p+"static/media/header3.1b8172a4.jpg",u=n(0),b=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(j.e,{children:[Object(u.jsx)(j.c,{path:"/",exact:!0,render:function(){return Object(u.jsx)("img",{src:o,alt:"town"})}}),Object(u.jsx)(j.c,{path:"/products",render:function(){return Object(u.jsx)("img",{src:l,alt:"town"})}}),Object(u.jsx)(j.c,{path:"/contact",render:function(){return Object(u.jsx)("img",{src:d,alt:"town"})}}),Object(u.jsx)(j.c,{path:"/admin",render:function(){return Object(u.jsx)("img",{src:d,alt:"town"})}}),Object(u.jsx)(j.c,{render:function(){return Object(u.jsx)("img",{src:d,alt:"town"})}})]})})},h=(n(35),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),p=function(){var e=h.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(i.c,{to:e.path,exact:!!e.exact,children:e.name})},e.name)}));return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"main",children:Object(u.jsx)("ul",{children:e})})})},x=function(){return Object(u.jsx)("div",{className:"admin",children:Object(u.jsx)(j.b,{to:"/login"})})},O=n(17),m=n(18),f=n(20),g=n(19),v=(n(36),function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(O.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)("h3",{children:"Napisz do nas"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107 ..."}),Object(u.jsx)("button",{children:"Wy\u015blij"})]}),Object(u.jsx)(j.a,{when:this.state.value,message:"Form not completed. Are you sure you want to leave this page?"})]})}}]),n}(r.a.Component)),y=function(){return Object(u.jsx)(u.Fragment,{children:"Error"})},w=n(21),N=function(e){var t=e.title,n=e.author,c=e.text;return Object(u.jsxs)("article",{style:{marginTop:25,marginLeft:12},children:[Object(u.jsx)("h3",{style:{textTransform:"uppercase"},children:t}),Object(u.jsx)("span",{style:{fontSize:12,display:"block",marginBottom:8},children:n}),Object(u.jsx)("p",{children:c})]})},k=[{id:1,title:"Czym jest teoria strun?",author:"Anna Kowalska",text:"111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem sapiente soluta."},{id:2,title:"Czym jest paradoks Fermiego?",author:"Jonna Nowak",text:"222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem sapiente soluta."},{id:3,title:"Ciemna materia i energia?",author:"Alicja Zegar",text:"333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem sapiente soluta."}],F=function(){var e=k.map((function(e){return Object(u.jsx)(N,Object(w.a)({},e),k.id)}));return Object(u.jsx)(u.Fragment,{children:e})},C=function(e){var t=e.id;return Object(u.jsx)("p",{children:t})},L=function(e){var t=e.match;return Object(u.jsxs)("div",{className:"product",children:[Object(u.jsx)("h2",{children:"Welcome to product's webpage!"}),Object(u.jsx)(C,{id:t.params.id}),Object(u.jsx)(i.b,{to:"/products",style:{display:"block",marginTop:15,textDecoration:"none",color:"black"},children:"Return"})]})},S=(n(37),["car","bike","motorcycle"]),Y=function(){var e=S.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/product/".concat(e),children:e})},e)}));return Object(u.jsxs)("div",{className:"products",children:[Object(u.jsx)("h3",{children:"Check products on our latest offer!"}),Object(u.jsx)("ul",{children:e})]})},z=function(){return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsxs)("label",{children:["Login",Object(u.jsx)("input",{type:"text"})]}),Object(u.jsxs)("label",{children:["Password",Object(u.jsx)("input",{type:"password"})]}),Object(u.jsx)("button",{children:"Log in"})]})},T=(n(38),function(){return Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(j.e,{children:[Object(u.jsx)(j.c,{path:"/",exact:!0,component:F}),Object(u.jsx)(j.c,{path:"/product/:id",component:L}),Object(u.jsx)(j.c,{path:"/products",component:Y}),Object(u.jsx)(j.c,{path:"/contact",component:v}),Object(u.jsx)(j.c,{path:"/admin",component:x}),Object(u.jsx)(j.c,{path:"/login",component:z}),Object(u.jsx)(j.c,{component:y})]})})}),A=(n(39),function(e){e.match;return Object(u.jsxs)("div",{className:"footer",children:["Footer",Object(u.jsxs)(j.e,{children:[Object(u.jsx)(j.c,{path:"/",exact:!0,render:function(){return Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:"HomePage"})]})}}),Object(u.jsx)(j.c,{path:"/:page",exact:!0,render:function(e){var t=e.match;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:t.params.page})]}),Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:t.url})]}),Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:t.path})]})]})}}),Object(u.jsx)(j.c,{path:"/:page/:productId",exact:!0,render:function(e){var t=e.match;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:t.params.productId})]}),Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:t.url})]}),Object(u.jsxs)("p",{children:["You are on ",Object(u.jsx)("span",{children:t.path})]})]})}})]})]})});var I=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("header",{children:Object(u.jsx)(b,{})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("aside",{children:Object(u.jsx)(p,{})}),Object(u.jsx)("section",{className:"page",children:Object(u.jsx)(T,{})})]}),Object(u.jsx)("footer",{children:Object(u.jsx)(A,{})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),P()}},[[40,1,2]]]);
//# sourceMappingURL=main.0d42eac4.chunk.js.map