(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(31),r=a.n(n),s=a(6),l=a(17),o=a(3),i=function(){return window.localStorage.getItem("token")},j=function(){var e=i();if(!e)return!1;var t=e.split(".");if(t.length<3)return!1;var a=atob(t[1]);return JSON.parse(a)},b=a.p+"static/media/hero.8fb98ff5.jpg",u=a(0),d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"hero-container",children:[Object(u.jsx)("img",{className:"hero",src:b,alt:"couple confessing love"}),Object(u.jsxs)("p",{className:"hero-text",children:['Welcome to Ani-mate! An exclisive dating site for the 2d lonely hearts looking for true love. Tired of not finding "the one" in your universe? Too busy fighting those villians to meet someone new? Then look no further! Register above to start your journey. ',Object(u.jsx)("br",{})," Believe it!"]})]})})},h=a.p+"static/media/whitelogo.2cf7deec.png",m=function(){var e=Object(o.f)(),t=Object(o.g)(),a=(t.id,t.user);return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsxs)("span",{className:"navbar-brand mb-0 h1",children:[Object(u.jsx)("img",{src:h,alt:"",width:"40",height:"35",className:"d-inline-block align-text-top"}),"Ani-mate"]}),Object(u.jsx)("button",{className:"navbar-toggler navbar-dark",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon navbar-dark"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(u.jsxs)("div",{className:"navbar-nav ms-auto",children:[Object(u.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"}),Object(u.jsx)(l.b,{to:"/all",className:"nav-link",children:"Profiles"}),Object(u.jsx)(l.b,{to:"/personas/myprofile/".concat(a),className:"nav-link",children:"My Profile"}),Object(u.jsx)(l.b,{to:"/register",className:"nav-link",children:"Register"}),Object(u.jsx)(l.b,{to:"/login",className:"nav-link",children:"Login"}),Object(u.jsx)("button",{className:"nav-link",onClick:function(){window.localStorage.removeItem("token"),e("/")},children:"Logout"})]})})]})})},p=a(20),O=a(12),x=a(5),f=a.n(x),v=a(10),g=a(9),N=a.n(g),y=function(e){var t=e.handlePicChange,a=e.value,c=function(){var e=Object(v.a)(f.a.mark((function e(a){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("file",a.target.files[0]),c.append("upload_preset","n7g57bta"),e.next=5,N.a.post("https://api.cloudinary.com/v1_1/dfic7ddu8/image/upload",c);case 5:n=e.sent,t(n.data.url);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:a?Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:a,alt:"profile"})}):Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Profile Picture:"}),Object(u.jsx)("input",{className:"form-control",type:"file",onChange:c})]})})},w=function(e){return N.a.get("/personas/myprofile/".concat(e,"/"))},k=function(){var e=Object(o.f)(),t=Object(c.useState)({profile:""}),n=Object(s.a)(t,2),r=n[0],l=n[1],b=j().sub;console.log("this is user",b);var d=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(b);case 3:t=e.sent,l({profile:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();console.log("this is personaID",r.profile.id),Object(c.useEffect)((function(){d()}),[]);var h=Object(c.useState)({user:{id:"",email:"",username:""}}),m=Object(s.a)(h,2),x=m[0],g=m[1],k=Object(c.useState)({user:"",name:"",age:"",height:"",city:"",gender:"",sexuality:"",occupation:"",bio:"",profile_pic:""}),C=Object(s.a)(k,2),S=C[0],D=C[1],P=function(){var e=Object(v.a)(f.a.mark((function e(){var t,c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j().sub,console.log("the user id is:",t),c=a(9),n={method:"get",url:"http://localhost:8000/accounts/".concat(t,"/"),headers:{}},e.next=6,c(n).then((function(e){g({user:e.data}),console.log(JSON.stringify(e.data)),D(Object(O.a)(Object(O.a)({},S),{},{user:e.data.id}))})).catch((function(e){console.error("Something not right getting the user",e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){P()}),[]);var A=r.profile.id,E=function(e,t){var a={headers:{Authorization:"Bearer ".concat(i())}};return console.log("this is personaID in getProfileAPI",e),N.a.put("http://localhost:8000/personas/".concat(e,"/"),t,a)},B=function(){var t=Object(v.a)(f.a.mark((function t(a){var c,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c=j().sub,t.prev=2,t.next=5,E(A,S);case 5:n=t.sent,console.log("this is response",n),e("/personas/myprofile/".concat(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.error("Error updating persona data",t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),_=function(e){D(Object(O.a)(Object(O.a)({},S),{},Object(p.a)({},e.target.name,e.target.value)))};return console.log("handleChange",S),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{className:"",children:"Username:"}),Object(u.jsx)("input",{readOnly:!0,name:"user",className:"form-control-plaintext",value:x.user.username}),Object(u.jsxs)("form",{className:"",children:[Object(u.jsx)("div",{className:"col-autos",children:Object(u.jsx)("input",{name:"user",className:"form-control-plaintext"})}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Name:"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Ichigo",name:"name",value:S.name,onChange:_})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Age:"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"21",name:"age",value:S.age,onChange:_})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Height (cm):"}),Object(u.jsx)("input",{className:"form-control",placeholder:"152",name:"height",value:S.height,onChange:_})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"City:"}),Object(u.jsx)("input",{className:"form-control",placeholder:"Konoha",name:"city",value:S.city,onChange:_})]}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"form-label",children:"Gender:"}),Object(u.jsxs)("select",{className:"form-select","aria-label":"Default select example",name:"gender",value:S.gender,onChange:_,children:[Object(u.jsx)("option",{children:"Select Gender"}),Object(u.jsx)("option",{value:"Male",children:"Male"}),Object(u.jsx)("option",{value:"Female",children:"Female"}),Object(u.jsx)("option",{value:"Nonbinary",children:"Non-Binary"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"form-label",children:"Sexuality:"}),Object(u.jsxs)("select",{className:"form-select","aria-label":"Default select example",name:"sexuality",value:S.sexuality,onChange:_,children:[Object(u.jsx)("option",{children:"Select Sexuality"}),Object(u.jsx)("option",{value:"Straight",children:"Straight"}),Object(u.jsx)("option",{value:"Gay",children:"Gay"}),Object(u.jsx)("option",{value:"Bisexual",children:"Bisexual"}),Object(u.jsx)("option",{value:"Asexual",children:"Asexual"}),Object(u.jsx)("option",{value:"Pansexual",children:"Pansexual"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Occupation:"}),Object(u.jsx)("input",{className:"form-control",placeholder:"Chef",name:"occupation",value:S.occupation,onChange:_})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Enter Bio:"}),Object(u.jsx)("textarea",{className:"form-control",placeholder:"I love walks in the rain...",name:"bio",value:S.bio,onChange:_,rows:"3"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(y,{value:S.profile_pic,name:"profile_pic",handlePicChange:function(e){D(Object(O.a)(Object(O.a)({},S),{},{profile_pic:e}))}}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"col-auto",children:Object(u.jsx)("button",{type:"submit",onClick:B,className:"btn btn-primary mb-3",children:"Update Profile"})})]})]})};var C=function(e){var t=e.closeModel,a=Object(o.f)();return Object(u.jsx)("div",{className:"modalBackground",children:Object(u.jsxs)("div",{className:"modalContainer",children:[Object(u.jsxs)("div",{className:"newUser",children:[Object(u.jsx)("h3",{children:"First time logging in?"}),Object(u.jsx)("p",{children:"Please make sure you set up your profile"}),Object(u.jsx)("button",{onClick:function(){return t(!1)},children:"New Profile"})]}),Object(u.jsxs)("div",{className:"returnUser",children:[Object(u.jsx)("h3",{children:"Return user?"}),Object(u.jsx)("p",{children:"Welcome back! Would you like to see your profile or find a potential match?"}),Object(u.jsx)("button",{onClick:function(){return a("/all")},children:"See Matches"}),Object(u.jsx)("button",{onClick:function(){return a("/personas/myprofile/:user")},children:"My Profile"})]})]})})},S=function(){var e=Object(o.f)(),t=Object(c.useState)(!0),n=Object(s.a)(t,2),r=n[0],l=n[1],i=Object(c.useState)({user:{id:"",email:"",username:""}}),b=Object(s.a)(i,2),d=b[0],h=b[1],m=Object(c.useState)({user:"",name:"",age:"",height:"",city:"",gender:"",sexuality:"",occupation:"",bio:"",profile_pic:""}),x=Object(s.a)(m,2),g=x[0],w=x[1],k=function(){var e=Object(v.a)(f.a.mark((function e(){var t,c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j().sub,console.log("the user id is:",t),c=a(9),n={method:"get",url:"/accounts/".concat(t,"/"),headers:{}},e.next=6,c(n).then((function(e){h({user:e.data}),console.log(JSON.stringify(e.data)),w(Object(O.a)(Object(O.a)({},g),{},{user:e.data.id}))})).catch((function(e){console.error("Something not right getting the user",e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){k()}),[]);var S=function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,N.a.post("/personas/",g);case 4:console.log(g),e("/personas/myprofile/:user"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("Error creating persona data",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),D=function(e){w(Object(O.a)(Object(O.a)({},g),{},Object(p.a)({},e.target.name,e.target.value)))};console.log("handleChange",g);var P=d.user.id;return console.log("can i grab it?",P),Object(u.jsxs)(u.Fragment,{children:[r&&Object(u.jsx)(C,{closeModel:l}),Object(u.jsx)("div",{className:"new-profile-container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-3"}),Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"row g-3",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"",children:"Username:"}),Object(u.jsx)("input",{readOnly:!0,name:"user",className:"form-control-plaintext",value:d.user.username})]}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Name:"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Ichigo",name:"name",value:g.name,onChange:D})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"row g-3",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Age:"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"21",name:"age",value:g.age,onChange:D})]}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Height (cm):"}),Object(u.jsx)("input",{className:"form-control",placeholder:"152",name:"height",value:g.height,onChange:D})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"row g-3",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"City:"}),Object(u.jsx)("input",{className:"form-control",placeholder:"Konoha",name:"city",value:g.city,onChange:D})]}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Occupation:"}),Object(u.jsx)("input",{className:"form-control",placeholder:"Chef",name:"occupation",value:g.occupation,onChange:D})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"row g-3",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Gender:"}),Object(u.jsxs)("select",{className:"form-select","aria-label":"Default select example",name:"gender",value:g.gender,onChange:D,children:[Object(u.jsx)("option",{children:"Select Gender"}),Object(u.jsx)("option",{value:"Male",children:"Male"}),Object(u.jsx)("option",{value:"Female",children:"Female"}),Object(u.jsx)("option",{value:"Nonbinary",children:"Non-Binary"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Sexuality:"}),Object(u.jsxs)("select",{className:"form-select","aria-label":"Default select example",name:"sexuality",value:g.sexuality,onChange:D,children:[Object(u.jsx)("option",{children:"Select Sexuality"}),Object(u.jsx)("option",{value:"Straight",children:"Straight"}),Object(u.jsx)("option",{value:"Gay",children:"Gay"}),Object(u.jsx)("option",{value:"Bisexual",children:"Bisexual"}),Object(u.jsx)("option",{value:"Asexual",children:"Asexual"}),Object(u.jsx)("option",{value:"Pansexual",children:"Pansexual"}),Object(u.jsx)("option",{value:"Other",children:"Other"})]})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Enter Bio:"}),Object(u.jsx)("textarea",{className:"form-control",placeholder:"I love walks in the rain...",name:"bio",value:g.bio,onChange:D,rows:"3"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(y,{value:g.profile_pic,name:"profile_pic",handlePicChange:function(e){w(Object(O.a)(Object(O.a)({},g),{},{profile_pic:e}))}}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"col-auto",children:Object(u.jsx)("button",{type:"submit",onClick:S,className:"btn btn-primary mb-3",children:"Create New Profile"})})]})}),Object(u.jsx)("div",{className:"col-lg-3"})]})})]})},D="/personas",P=function(e){return N.a.get("".concat(D,"/").concat(e,"/"))},A=N.a.create({baseURL:"/personas/",headers:{Authorization:"Bearer ".concat(i())}}),E=a(79),B=a.n(E),_=function(){var e=Object(c.useState)({profile:[]}),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({search:""}),l=Object(s.a)(r,2),i=l[0],j=l[1],b=Object(o.f)(),d=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/"));case 3:t=e.sent,n({profile:t.data}),console.log("this is response.data",t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("An error occured getting all profiles",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]),console.log("this is profiles",a);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(B.a,{value:i.search,onChange:function(e){return j({search:e})},onRequestSearch:function(){return i.search,b({pathname:"/search/",search:"?search="+i.search}),void window.location.reload()}}),Object(u.jsx)("section",{children:a.profile.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:e.name},e.id),Object(u.jsx)("h2",{children:e.age}),Object(u.jsx)("img",{src:e.profile_pic,alt:"profile"}),Object(u.jsx)("button",{onClick:function(){return b("/personas/".concat(e.id,"/"))},children:"See More"})]})}))})]})},F="/accounts",I=function(){var e=Object(o.f)(),t=Object(c.useState)({profile:""}),a=Object(s.a)(t,2),n=a[0],r=a[1],l=j().sub;console.log("this is user",l);var i=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(l);case 3:t=e.sent,r({profile:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var t=Object(v.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a=l,N.a.delete("".concat(F,"/").concat(a,"/"));case 3:e("/register"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("failed deleting the user",t.t0);case 9:case"end":return t.stop()}var a}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){i()}),[]);var d=j().sub===n.profile.user;return console.log("isOwner is",d),Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsxs)("div",{children:[" ",Object(u.jsxs)("figure",{children:[Object(u.jsx)("img",{src:n.profile.profile_pic,alt:"the user profile"})," "]})," "]}),Object(u.jsx)("h1",{children:n.profile.name}),Object(u.jsxs)("h2",{children:[n.profile.age," years old"]}),Object(u.jsxs)("h3",{children:["City: ",n.profile.city]}),Object(u.jsxs)("h3",{children:["I work as a: ",n.profile.occupation]}),Object(u.jsxs)("p",{children:["Bio: ",n.profile.bio]}),Object(u.jsxs)("p",{children:["I identify as ",n.profile.gender," and ",n.profile.sexuality]}),Object(u.jsxs)("p",{children:["I am ",n.profile.height]}),d&&Object(u.jsx)("button",{onClick:function(){return e("/personas/myprofile/:user/edit")},children:"Edit"})," ",d&&Object(u.jsx)("button",{onClick:b,children:"Delete Profile"})," ",Object(u.jsx)("h3",{children:"Comments"})]})},M=function(){var e=Object(o.f)(),t=Object(c.useState)({formData:{username:"",password:""}}),a=Object(s.a)(t,2),n=a[0],r=a[1],l=function(e){var t=Object(O.a)(Object(O.a)({},n.formData),{},Object(p.a)({},e.target.name,e.target.value));console.log("this is a log of handleChange",t),r({formData:t})},i=function(){var t=Object(v.a)(f.a.mark((function t(a){var c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,N.a.post("/accounts/login/",n.formData);case 4:c=t.sent,r=c.data,console.log("data",r),console.log(n.formData),s=r.token,window.localStorage.setItem("token",s),console.log("TOKEN",s),e("/newprofile"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.error("Error logging in user",t.t0);case 15:case"end":return t.stop()}var s}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-3"}),Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)("label",{className:"form-label",children:"Username:"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"username",value:n.formData.username,onChange:l}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"form-label",children:"Password:"}),Object(u.jsx)("input",{className:"form-control",type:"password",name:"password",value:n.formData.password,onChange:l}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:i,children:"Login"})]})}),Object(u.jsx)("div",{className:"col-lg-3"})]})})},G=function(){var e=Object(o.f)(),t=Object(c.useState)({formData:{username:"",email:"",password:"",password_confirmation:""}}),a=Object(s.a)(t,2),n=a[0],r=a[1],l=function(e){var t=Object(O.a)(Object(O.a)({},n.formData),{},Object(p.a)({},e.target.name,e.target.value));console.log("this is a log of handleChange",t),r({formData:t})},i=function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,N.a.post("/accounts/register/",n.formData);case 4:console.log(n),e("/login"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("Error registering user",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"reg-container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-3"}),Object(u.jsx)("div",{className:"col-lg-6",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("h1",{children:"Register"}),Object(u.jsx)("label",{className:"form-label",children:"Username:"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"username",value:n.formData.username,onChange:l}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{className:"form-label",children:"Email Address:"}),Object(u.jsx)("input",{className:"form-control",type:"text",name:"email",value:n.formData.email,onChange:l}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"row g-3",children:[Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Password:"}),Object(u.jsx)("input",{className:"form-control",type:"password",name:"password",value:n.formData.password,onChange:l})]}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("label",{className:"form-label",children:"Confirm Password:"}),Object(u.jsx)("input",{className:"form-control",type:"password",name:"password_confirmation",value:n.formData.password_confirmation,onChange:l})]}),Object(u.jsx)("div",{id:"passwordHelpBlock",className:"form-text",children:"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:i,children:"Register"})]})}),Object(u.jsx)("div",{className:"col-lg-3"})]})})},U=function(){var e=Object(o.g)().id,t=Object(c.useState)({profile:""}),a=Object(s.a)(t,2),n=a[0],r=a[1],l=function(){var t=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:a=t.sent,r({profile:a.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("An error occurred fetching profile ".concat(e),t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("are we having a useEffet"),l()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:n.profile.name}),Object(u.jsxs)("h2",{children:[n.profile.age," years old"]}),Object(u.jsxs)("h3",{children:["City: ",n.profile.city]}),Object(u.jsxs)("h3",{children:["I work as a: ",n.profile.occupation]}),Object(u.jsxs)("p",{children:["Bio: ",n.profile.bio]}),Object(u.jsx)("h3",{children:"Comments"})]})})},R=function(){var e=Object(o.f)(),t=Object(c.useState)({profiles:[]}),a=Object(s.a)(t,2),n=a[0],r=a[1],l=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{A.get("search/"+window.location.search).then((function(e){r({profiles:e.data})}))}catch(t){console.error("An error occured getting the search",t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){l()}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){e("/all")},children:"Go Back"}),Object(u.jsx)("section",{children:n.profiles.map((function(t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:t.name},t.id),Object(u.jsx)("h2",{children:t.age}),Object(u.jsx)("img",{src:t.profile_pic,alt:"profile"}),Object(u.jsx)("button",{onClick:function(){return e("/personas/".concat(t.id,"/"))},children:"See More"})]})}))})]})};var J=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=i();if(!e)return!1;var t=e.split(".");return!(t.length<3)&&JSON.parse(atob(t[1]))})()&&n(!0)}),[]),Object(u.jsxs)(l.a,{children:[Object(u.jsx)(m,{isAuthenticated:a}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",element:Object(u.jsx)(d,{})}),Object(u.jsx)(o.a,{path:"/all",element:Object(u.jsx)(_,{})}),Object(u.jsx)(o.a,{path:"/search",element:Object(u.jsx)(R,{})}),Object(u.jsx)(o.a,{path:"/personas/myprofile/:user",element:Object(u.jsx)(I,{})}),Object(u.jsx)(o.a,{path:"/register",element:Object(u.jsx)(G,{})}),Object(u.jsx)(o.a,{path:"/login",element:Object(u.jsx)(M,{})}),Object(u.jsx)(o.a,{path:"/newprofile",element:Object(u.jsx)(S,{})}),Object(u.jsx)(o.a,{path:"/personas/myprofile/:user/edit",element:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{path:"/personas/:id",element:Object(u.jsx)(U,{})})]})]})};a(139);r.a.render(Object(u.jsx)(J,{}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.062d85c0.chunk.js.map