(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9966],{5185:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dark/portfolio-masonry-2",function(){return a(6863)}])},2627:function(e,s){"use strict";let a=()=>{let e;let s=document.querySelectorAll(".gallery"),a=document.querySelector(".filtering"),t=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach(s=>{e=new Isotope(s,{itemSelector:".items"})}),a){a.addEventListener("click",function(s){if(matchesSelector(s.target,"span")){var a=s.target.getAttribute("data-filter");e.arrange({filter:a})}});let s=e=>{e.addEventListener("click",s=>{matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))})};for(var i=0,r=t.length;i<r;i++)s(t[i])}};s.Z=a},7683:function(e,s,a){"use strict";var t=a(5893),i=a(7294),r=a(1664),n=a.n(r);s.Z=function(e){let{mainBg:s,subBg:a,noStatic:r,curve:l}=e,[c,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{function e(){let e=window.scrollY;o(e>300)}return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)("nav",{className:"navbar navbar-expand-lg ".concat(l?"nav-crev":""," ").concat(r?"":"static"," ").concat(s?"main-bg":""," ").concat(a?"sub-bg":""," ").concat(c?"nav-scroll":""),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("a",{className:"logo icon-img-100 mobile-logo-center",href:"#",children:c?(0,t.jsx)("img",{className:"img-custom-gc",src:"/dark/assets/imgs/logo-light.svg",alt:"Sticky Logo"}):(0,t.jsx)("img",{className:"img-custom-gc",src:"/dark/assets/imgs/logo-light.svg",alt:"Main Logo"})}),(0,t.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")},children:(0,t.jsx)("span",{className:"icon-bar",children:(0,t.jsx)("i",{className:"fas fa-bars"})})}),(0,t.jsx)("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",children:(0,t.jsxs)("ul",{className:"navbar-nav",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n(),{className:"nav-link text-white",href:"/servizi-gestione-immobili",children:(0,t.jsx)("span",{className:"rolling-text",children:"Servizi"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n(),{className:"nav-link text-white",href:"/chi-siamo",children:(0,t.jsx)("span",{className:"rolling-text",children:"Chi Siamo"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n(),{className:"nav-link text-white",href:"/contattaci",children:(0,t.jsx)("span",{className:"rolling-text",children:"Contattaci"})})})]})}),(0,t.jsxs)("div",{className:"search-form",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("input",{type:"text",name:"search",placeholder:"Search"}),(0,t.jsx)("button",{children:(0,t.jsx)("span",{className:"pe-7s-search"})})]}),(0,t.jsxs)("div",{className:"search-icon",onClick:function(){let e=document.querySelector(".navbar .search-form"),s=document.querySelector(".search-form .close-search");e.classList.toggle("open"),e.classList.contains("open")?s.style.display="block":s.style.display="none"},children:[(0,t.jsx)("span",{className:"pe-7s-search open-search"}),(0,t.jsx)("span",{className:"pe-7s-close close-search"})]})]})]})})}},5046:function(e,s,a){"use strict";var t=a(5893);a(7294),s.Z=function(e){let{data:s}=e;return(0,t.jsx)("header",{className:"work-header section-padding pb-0",children:(0,t.jsx)("div",{className:"container mt-80",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"caption",children:[(0,t.jsx)("h6",{className:"sub-title",children:s.subTitle}),(0,t.jsx)("h1",{children:s.title})]})})})})})}},8844:function(e,s,a){"use strict";a.d(s,{Z:function(){return o}});var t=a(5893),i=a(7294),r=a(1664),n=a.n(r),l=a(2627),c=JSON.parse('{"u":[{"id":1,"title":"All","filter":"*","count":"08"},{"id":2,"title":"Branding","filter":".brand","count":"03"},{"id":3,"title":"Mobile App","filter":".app","count":"02"},{"id":4,"title":"Creative","filter":".web","count":"03"}],"l":[{"id":1,"filter":"web","image":"/dark/assets/imgs/works/grid2/1.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":2,"filter":"app","image":"/dark/assets/imgs/works/grid2/v1.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":3,"filter":"brand","image":"/dark/assets/imgs/works/grid2/v2.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":4,"filter":"web","image":"/dark/assets/imgs/works/grid2/2.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":5,"filter":"brand","image":"/dark/assets/imgs/works/grid2/3.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":6,"filter":"app","image":"/dark/assets/imgs/works/grid2/v3.jpg","type":"Design ART","year":"2023","title":"Character Design"}]}'),o=function(){return(0,i.useEffect)(()=>{(0,l.Z)()},[]),(0,t.jsx)("section",{className:"portfolio section-padding pb-40",children:(0,t.jsxs)("div",{className:"container-xxl",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"filtering col-12 mb-80 text-center",children:(0,t.jsxs)("div",{className:"filter",children:[(0,t.jsx)("span",{className:"text",children:"Filter By :"}),c.u.map((e,s)=>(0,t.jsx)("span",{"data-filter":e.filter,className:0===s?"active":"","data-count":e.count,children:e.title},e.id))]})})}),(0,t.jsx)("div",{className:"gallery",children:(0,t.jsx)("div",{className:"row masonry max-margin",children:c.l.map(e=>(0,t.jsx)("div",{className:"col-md-6 items ".concat(e.filter," info-overlay mb-80"),children:(0,t.jsxs)("div",{className:"item-img o-hidden",children:[(0,t.jsx)(n(),{href:"/dark/project-details1",className:"imago wow",children:(0,t.jsx)("div",{className:"inner wow",children:(0,t.jsx)("img",{src:e.image,alt:"image"})})}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("span",{className:"mb-15",children:(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"sub-title tag",children:(0,t.jsxs)(n(),{href:"/dark/project-details1",children:["\xa9 ",e.year," ",(0,t.jsx)("br",{})," ",e.type]})}),(0,t.jsx)("h5",{children:(0,t.jsx)(n(),{href:"/dark/project-details1",children:e.title})})]})]})},e.id))})})]})})}},6863:function(e,s,a){"use strict";a.r(s);var t=a(5893),i=a(7294),r=a(9008),n=a.n(r),l=a(7283),c=a(7458),o=a(7683),d=a(4361),m=a(5046),g=a(8844);function h(){return(0,i.useEffect)(()=>(document.body.classList.add("main-bg"),()=>document.body.classList.remove("main-bg")),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n(),{children:(0,t.jsx)("title",{children:"Geekfolio - Portfolio Masonry 2 Col"})}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(o.Z,{mainBg:!0}),(0,t.jsxs)("main",{className:"main-bg",children:[(0,t.jsx)(m.Z,{data:{subTitle:"Our Works",title:"Masonry 2."}}),(0,t.jsx)(g.Z,{})]}),(0,t.jsx)(d.Z,{subBg:!0})]})}h.getLayout=e=>(0,t.jsx)(l.Z,{children:e}),s.default=h}},function(e){e.O(0,[1664,7455,9774,2888,179],function(){return e(e.s=5185)}),_N_E=e.O()}]);