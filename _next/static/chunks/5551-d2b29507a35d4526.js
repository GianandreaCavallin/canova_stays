"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5551],{7683:function(s,e,i){var a=i(5893),l=i(7294),n=i(1664),t=i.n(n);e.Z=function(s){let{mainBg:e,subBg:i,noStatic:n,curve:c}=s,[r,d]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{function s(){let s=window.scrollY;d(s>300)}return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),(0,a.jsx)("nav",{className:"navbar navbar-expand-lg ".concat(c?"nav-crev":""," ").concat(n?"":"static"," ").concat(e?"main-bg":""," ").concat(i?"sub-bg":""," ").concat(r?"nav-scroll":""),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("a",{className:"logo icon-img-100 mobile-logo-center",href:"#",children:r?(0,a.jsx)("img",{className:"img-custom-gc",src:"/dark/assets/imgs/logo-light.svg",alt:"Sticky Logo"}):(0,a.jsx)("img",{className:"img-custom-gc",src:"/dark/assets/imgs/logo-light.svg",alt:"Main Logo"})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")},children:(0,a.jsx)("span",{className:"icon-bar",children:(0,a.jsx)("i",{className:"fas fa-bars"})})}),(0,a.jsx)("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",children:(0,a.jsxs)("ul",{className:"navbar-nav",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(t(),{className:"nav-link text-white",href:"/servizi-gestione-immobili",children:(0,a.jsx)("span",{className:"rolling-text",children:"Servizi"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(t(),{className:"nav-link text-white",href:"/chi-siamo",children:(0,a.jsx)("span",{className:"rolling-text",children:"Chi Siamo"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(t(),{className:"nav-link text-white",href:"/contattaci",children:(0,a.jsx)("span",{className:"rolling-text",children:"Contattaci"})})})]})}),(0,a.jsxs)("div",{className:"search-form",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("input",{type:"text",name:"search",placeholder:"Search"}),(0,a.jsx)("button",{children:(0,a.jsx)("span",{className:"pe-7s-search"})})]}),(0,a.jsxs)("div",{className:"search-icon",onClick:function(){let s=document.querySelector(".navbar .search-form"),e=document.querySelector(".search-form .close-search");s.classList.toggle("open"),s.classList.contains("open")?e.style.display="block":e.style.display="none"},children:[(0,a.jsx)("span",{className:"pe-7s-search open-search"}),(0,a.jsx)("span",{className:"pe-7s-close close-search"})]})]})]})})}},2637:function(s,e,i){var a=i(5893),l=i(7294);class n extends l.Component{render(){return"span"===this.props.tag?(0,a.jsx)("span",{ref:this.target,children:this.props.children}):"a"===this.props.tag?(0,a.jsx)("a",{href:this.props.href,className:this.props.className,ref:this.target,children:this.props.children}):(0,a.jsx)("div",{ref:this.target,children:this.props.children})}constructor(...s){super(...s),this.target=l.createRef(),this.split=()=>{this.target.current&&Splitting({target:this.target.current})},this.componentDidMount=this.split,this.componentDidUpdate=this.split}}e.Z=n},9426:function(s,e,i){i.d(e,{Z:function(){return c}});var a=i(5893);i(7294);var l=i(1664),n=i.n(l),t=JSON.parse('[{"id":1,"title":"Exploring our new series on overcoming adversity.","cover":"/dark/assets/imgs/blog/b1.jpg","author":"admin","date":"august 6, 2021","tag":"Wordpress"},{"id":2,"title":"Booktips: eight tips for service design with expert users.","cover":"/dark/assets/imgs/blog/b2.jpg","author":"admin","date":"august 6, 2021","tag":"Design"},{"id":3,"title":"Creativo Para J\xf3venes: the designer’s UI/UX checklist.","cover":"/dark/assets/imgs/blog/b3.jpg","author":"admin","date":"august 6, 2021","tag":"Envato"}]'),c=function(){return(0,a.jsxs)("section",{className:"blog-list2 section-padding",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row mb-80",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("h6",{children:[(0,a.jsx)("span",{className:"fz-14",children:"08 . "})," Latest News"]})}),(0,a.jsx)("div",{className:"col-lg-6 offset-lg-1",children:(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)("h3",{children:["We create ",(0,a.jsx)("span",{className:"sub-font",children:"experiences"})," and turn ideas into reality."]})})})]})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("div",{className:"items",children:t.map(s=>(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-2 d-flex align-items-center",children:(0,a.jsx)("div",{className:"categ fz-13 md-mb30",children:(0,a.jsx)(n(),{href:"/dark/blog-classic",children:s.tag})})}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h5",{children:(0,a.jsx)(n(),{href:"/dark/blog-details",children:s.title})})})}),(0,a.jsx)("div",{className:"col-lg-2 position-re",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:s.cover,alt:""})})}),(0,a.jsx)("div",{className:"col-lg-3 d-flex align-items-center justify-end",children:(0,a.jsxs)("div",{className:"info fz-13 ml-auto opacity-7",children:[(0,a.jsx)("span",{children:s.date}),(0,a.jsx)("span",{className:"ml-15 mr-15",children:"/"}),(0,a.jsxs)("span",{children:["By ",s.author]})]})})]})},s.id))})})})})]})}},3814:function(s,e,i){i.d(e,{Z:function(){return c}});var a=i(5893);i(7294);var l=JSON.parse('["/assets/imgs/brands/01.png","/assets/imgs/brands/02.png","/assets/imgs/brands/03.png","/assets/imgs/brands/04.png","/assets/imgs/brands/05.png","/assets/imgs/brands/03.png"]'),n=i(7513),t=i(2637),c=function(s){let{lightMode:e}=s;return(0,a.jsxs)("div",{className:"clients section-padding pb-100 position-re",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center mb-80",children:(0,a.jsxs)("div",{className:"col-lg-6 text-center",children:[(0,a.jsxs)("h6",{children:[(0,a.jsx)("span",{className:"fz-14",children:"06 . "})," Clients"]}),(0,a.jsx)("div",{className:"text",children:(0,a.jsxs)("h3",{children:["We create ",(0,a.jsx)("span",{className:"sub-font",children:"experiences"})," and turn ideas into reality."]})})]})})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-11",children:(0,a.jsx)("div",{className:"row md-marg",children:l.map(s=>(0,a.jsx)("div",{className:"col-md-4 col-6 brand box-bg",children:(0,a.jsxs)("div",{className:"item mb-30 wow fadeIn","data-wow-delay":".6s",children:[(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:"/".concat(e?"light":"dark").concat(s),alt:""})}),(0,a.jsx)(t.Z,{tag:"a",href:n.a,className:"link",children:"www.GeekFolio.com"})]})},Math.floor(1e4*Math.random())))})})})}),(0,a.jsx)("div",{className:"bg-pattern patrn1 bg-img opacity-5","data-background":"/".concat(e?"light":"dark","/assets/imgs/patterns/pattern.svg")})]})}},970:function(s,e,i){var a=i(5893),l=i(7294),n=i(8366);e.Z=function(s){let{lightMode:e}=s;return(0,l.useEffect)(()=>{(0,n.Z)()},[]),(0,a.jsx)("header",{className:"header-startup full-height valign bord-thin-bottom",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-11",children:(0,a.jsxs)("div",{className:"caption text-center mt-50",children:[(0,a.jsx)("div",{className:"sec-lg-head",children:(0,a.jsx)("h6",{className:"dot-titl-non mb-15",children:"Business Startup"})}),(0,a.jsxs)("h1",{className:"fw-700 fz-80",children:["We're"," ",(0,a.jsx)("span",{className:"img-in-text icon-img-120 radius-30 bg-img",style:{backgroundImage:"url('/".concat(e?"light":"dark","/assets/imgs/about/1.jpg')")}})," ","sharp brands ",(0,a.jsx)("span",{className:"sub-font",children:"creators"})," open for any"," ",(0,a.jsx)("span",{className:"icon-img-60",children:(0,a.jsx)("img",{src:"/".concat(e?"light":"dark","/assets/imgs/svg-assets/star.png"),alt:""})})," "]})]})})})})})}},1753:function(s,e,i){var a=i(5893);i(7294),e.Z=function(){return(0,a.jsx)("section",{className:"intro-imgs section-padding",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"img1 md-mb50",children:(0,a.jsx)("img",{src:"/dark/assets/imgs/about/sq1.jpg",alt:""})})}),(0,a.jsx)("div",{className:"col-lg-5 valign",children:(0,a.jsxs)("div",{className:"cont md-mb50",children:[(0,a.jsxs)("h6",{className:"mb-15",children:[(0,a.jsx)("span",{className:"fz-14",children:"01 . "})," Company"]}),(0,a.jsx)("p",{children:"We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow"}),(0,a.jsxs)("div",{className:"stauts d-flex align-items-center mt-80",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"20k"}),(0,a.jsx)("p",{className:"fz-14",children:"Satisfied Clients"})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("h2",{children:"500 +"}),(0,a.jsx)("p",{className:"fz-14",children:"Projects Completed"})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsx)("div",{className:"img1 mt-30",children:(0,a.jsx)("img",{src:"/dark/assets/imgs/about/1.jpg",alt:""})})})]})})})}},6846:function(s,e,i){var a=i(5893);i(7294),e.Z=function(){return(0,a.jsx)("section",{className:"serv-marq skew ontop",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("div",{className:"main-marq lrg opacity-4",children:(0,a.jsxs)("div",{className:"slide-har st1 strok",children:[(0,a.jsxs)("div",{className:"box",children:[(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"UI-UX Experience"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Web Development"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Digital Marketing"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Product Design"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Mobile Solutions"})})]}),(0,a.jsxs)("div",{className:"box",children:[(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"UI-UX Experience"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Web Development"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Digital Marketing"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Product Design"})}),(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:"Mobile Solutions"})})]})]})})})})})})}},4923:function(s,e,i){i.d(e,{Z:function(){return n}});var a=i(5893);i(7294);var l=JSON.parse('[{"BH":"/dark/assets/imgs/portfolio/2/1.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/3.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/2.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/4.jpg","ty":"2023","dt":"Branding"}]'),n=function(){return(0,a.jsx)("section",{className:"portfolio section-padding",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"sec-head md-mb80",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("h6",{children:[(0,a.jsx)("span",{className:"fz-14",children:"04 . "})," Our Portfolio"]})}),(0,a.jsx)("div",{className:"col-lg-5 offset-lg-3",children:(0,a.jsx)("div",{className:"text",children:(0,a.jsx)("h3",{className:"lg-text text-u",children:"Case Studies"})})})]})}),(0,a.jsxs)("div",{className:"row justify-content-center",children:[(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsxs)("div",{className:"item md-mb80",children:[(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)("div",{className:"img imago wow",children:(0,a.jsx)("img",{src:l[0].BH,alt:""})})}),(0,a.jsxs)("div",{className:"cont mt-30 d-flex",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"line-height-1",children:"From our gallery"}),(0,a.jsx)("p",{children:l[0].dt})]}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)("p",{className:"fz-14",children:["\xa9 ",l[0].ty]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-6 valign",children:(0,a.jsx)("div",{className:"item full-width",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsxs)("div",{className:"col-lg-8",children:[(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)("div",{className:"img imago wow",children:(0,a.jsx)("img",{src:l[1].BH,alt:""})})}),(0,a.jsxs)("div",{className:"cont mt-30 d-flex",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"line-height-1",children:"From our gallery"}),(0,a.jsx)("p",{children:l[1].dt})]}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)("p",{className:"fz-14",children:["\xa9 ",l[1].ty]})})]})]})})})}),(0,a.jsx)("div",{className:"col-lg-6 valign",children:(0,a.jsx)("div",{className:"item mt-80 full-width",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsxs)("div",{className:"col-lg-9",children:[(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)("div",{className:"img imago wow",children:(0,a.jsx)("img",{src:l[2].BH,alt:""})})}),(0,a.jsxs)("div",{className:"cont mt-30 d-flex",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"line-height-1",children:"From our gallery"}),(0,a.jsx)("p",{children:l[2].dt})]}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)("p",{className:"fz-14",children:["\xa9 ",l[2].ty]})})]})]})})})}),(0,a.jsx)("div",{className:"col-lg-6",children:(0,a.jsx)("div",{className:"item mt-80",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsxs)("div",{className:"col-lg-9",children:[(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)("div",{className:"img imago wow",children:(0,a.jsx)("img",{src:l[3].BH,alt:""})})}),(0,a.jsxs)("div",{className:"cont mt-30 d-flex",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{className:"line-height-1",children:"From our gallery"}),(0,a.jsx)("p",{children:l[3].dt})]}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)("p",{className:"fz-14",children:["\xa9 ",l[3].ty]})})]})]})})})})]})]})})}},5616:function(s,e,i){i.d(e,{Z:function(){return r}});var a=i(5893),l=i(7294),n=i(719),t=JSON.parse('[{"id":1,"image":"/dark/assets/imgs/team/1.jpg","name":"adrian parody","position":"Co-Founder"},{"id":2,"image":"/dark/assets/imgs/team/2.jpg","name":"adrian parody","position":"Co-Founder"},{"id":3,"image":"/dark/assets/imgs/team/3.jpg","name":"adrian parody","position":"Co-Founder"},{"id":4,"image":"/dark/assets/imgs/team/4.jpg","name":"adrian parody","position":"Co-Founder"},{"id":5,"image":"/dark/assets/imgs/team/3.jpg","name":"adrian parody","position":"Co-Founder"}]');let c={slidesPerView:4,loop:1e3,spaceBetween:60,loop:!0,centeredSlides:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:3},1024:{slidesPerView:4}}};var r=function(){let[s,e]=(0,l.useState)(!1);function i(){let s=document.getElementById("sticky_item");if(!s)return;let e=s.getBoundingClientRect().width,i=s.getBoundingClientRect().height,a=document.querySelector(".team-crev").getBoundingClientRect();if(a.top<-30&&a.height/2<a.bottom){if(s.style.position="fixed",s.style.top="0px",s.style.width=e+"px",s.classList.add("is_stuck"),"placeholder"!==s.nextElementSibling.id){let a=document.createElement("div");a.id="placeholder",a.style.height=i+"px",a.style.width=e+"px",s.after(a)}}else a.height/2>a.bottom?(s.style.position="absolute",s.style.top="auto",s.style.bottom="0",s.style.width=e+"px"):(s.style.position="unset",s.style.top="unset",s.style.bottom="unset",s.style.width="auto",s.classList.remove("is_stuck"),"placeholder"===s.nextElementSibling.id&&s.nextElementSibling.remove())}return(0,l.useEffect)(()=>{e(!0)},[]),(0,l.useEffect)(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[]),(0,a.jsx)("section",{className:"team-crev section-padding pb-0 bord-thin-bottom",children:(0,a.jsx)("div",{className:"container-fluid rest",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-12",style:{position:"relative"},children:[(0,a.jsx)("div",{className:"sec-head-lg text-center text-u mb-80",id:"sticky_item",children:(0,a.jsx)("h2",{children:"TEAM"})}),(0,a.jsx)("div",{className:"swiper4",children:s&&(0,a.jsx)(n.tq,{...c,id:"content-carousel-container-unq-team",className:"swiper-container",children:t.map(s=>(0,a.jsx)(n.o5,{children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:s.image,alt:""})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("div",{className:"main-marq team-position",children:(0,a.jsxs)("div",{className:"slide-har st1 non-strok",children:[(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((e,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:s.position})},i))}),(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((e,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:s.position})},i))})]})}),(0,a.jsx)("div",{className:"main-marq team-name",children:(0,a.jsxs)("div",{className:"slide-har st1 non-strok",children:[(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((e,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:s.name})},i))}),(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((e,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:s.name})},i))})]})})]})]})},s.id))})})]})})})})}},999:function(s,e,i){i.d(e,{Z:function(){return d}});var a=i(5893),l=i(7294),n=i(719),t=i(8116),c=JSON.parse('[{"id":1,"picture":"/dark/assets/imgs/testim/1.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":2,"picture":"/dark/assets/imgs/testim/2.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":3,"picture":"/dark/assets/imgs/testim/3.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":4,"picture":"/dark/assets/imgs/testim/4.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."}]');let r={modules:[t.W_,t.tl],slidesPerView:1,loop:!0,spaceBetween:30,speed:1e3,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"}};var d=function(s){let{lightMode:e}=s,[i,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{t(!0)},[]),(0,a.jsx)("section",{className:"testim-clasic section-padding sub-bg ".concat(e?"light":""),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"testim",children:[(0,a.jsx)("div",{className:"testim-swiper",children:i&&(0,a.jsx)(n.tq,{...r,id:"content-carousel-container-unq-testim",className:"swiper-container",children:c.map(s=>(0,a.jsx)(n.o5,{children:(0,a.jsx)("div",{className:"item",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-4",children:(0,a.jsx)("div",{className:"author-info valign",children:(0,a.jsxs)("div",{className:"full-width",children:[(0,a.jsx)("div",{className:"img circle-120 m-auto mb-30",children:(0,a.jsx)("img",{src:s.picture,alt:"",className:"circle-img"})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{children:s.name}),(0,a.jsx)("p",{className:"sub-title",children:s.position})]}),(0,a.jsx)("div",{className:"arrow sub-bg"})]})})}),(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("div",{className:"mb-30 icon-img-80 opacity-1",children:(0,a.jsx)("img",{src:"/dark/assets/imgs/svg-assets/quote.png",alt:""})}),(0,a.jsx)("h4",{className:"fw-300",children:s.content})]})})]})})},s.id))})}),(0,a.jsx)("div",{className:"swiper-controls",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-md-8 offset-md-4",children:(0,a.jsx)("div",{className:"arrows-carsouel testim-controls",children:(0,a.jsxs)("div",{className:"swiper-controls",children:[(0,a.jsx)("div",{className:"swiper-button-prev",children:(0,a.jsx)("span",{className:"left",children:(0,a.jsx)("img",{src:"/".concat(e?"light":"dark","/assets/imgs/svg-assets/arrow-right-top.svg"),alt:""})})}),(0,a.jsx)("div",{className:"swiper-pagination"}),(0,a.jsx)("div",{className:"swiper-button-next",children:(0,a.jsx)("span",{className:"right",children:(0,a.jsx)("img",{src:"/".concat(e?"light":"dark","/assets/imgs/svg-assets/arrow-right-top.svg"),alt:""})})})]})})})})})]})})})})})}}}]);