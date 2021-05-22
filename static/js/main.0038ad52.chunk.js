(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{190:function(e,n,t){"use strict";t.r(n);var i,c,r,a,o,s,j,d,l,b,x,p,h,g,O,u,m,f,w,v,y,P,k,M,H,z,D,A,S,C,B,G,L,T,Y,q,V,E,W,F,I,X,R,J,N,_,K,Q,U,Z=t(221),$=t(0),ee=t.n($),ne=t(23),te=t.n(ne),ie=t(31),ce=t(103),re=Object(ce.b)({name:"projects",initialState:{projectList:[]},reducers:{setProjectList:function(e,n){e.projectList.push(n.payload)},overrideProjectList:function(e,n){e.projectList=n.payload},deleteProject:function(e,n){var t=n.payload;e.projectList=e.projectList.filter((function(e){return e.id!==t}))},toggleHidden:function(e,n){var t=n.payload;e.projectList.map((function(e){e.id===t&&(e.hidden=!e.hidden)}))},toggleProject:function(e,n){var t=n.payload;console.log(t),e.projectList.map((function(e){e.id===t&&("programming"===e.project?e.project="editing":e.project="programming")}))},toggleFeatured:function(e,n){var t=n.payload;e.projectList.map((function(e){e.id===t&&(e.featured=!e.featured)}))}}}),ae=re.actions,oe=ae.setProjectList,se=ae.toggleFeatured,je=ae.toggleHidden,de=ae.toggleProject,le=ae.deleteProject,be=ae.overrideProjectList,xe=function(e){return e.projects.projectList},pe=re.reducer,he=Object(ce.a)({reducer:{projects:pe}}),ge=t(220),Oe=t(225),ue=t(63),me=t(16),fe=(t(166),t(7)),we=t(8),ve=t(228),ye=t(129),Pe=t.n(ye),ke=t(130),Me=t.n(ke),He=t(32),ze=t(2),De=we.a.nav(i||(i=Object(fe.a)(["\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),Ae=we.a.div(c||(c=Object(fe.a)(["\n  text-align: right;\n  span {\n    font-weight: 900;\n  }\n"]))),Se=we.a.div(r||(r=Object(fe.a)(["\n  flex: 1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n\n  span {\n    margin: 0 15px;\n  }\n"]))),Ce=Object(we.a)(ve.a)(a||(a=Object(fe.a)(["\n  margin-left: auto;\n"]))),Be=we.a.div(o||(o=Object(fe.a)(["\n  flex-basis: 200px;\n  text-align: center;\n"]))),Ge=function(){var e=Object(He.useMediaPredicate)("(min-width: 700px)"),n=Object(He.useMediaPredicate)("(min-width: 330px)");return Object(ze.jsxs)(De,{children:[Object(ze.jsx)(Be,{children:Object(ze.jsx)(Ae,{children:Object(ze.jsxs)(ue.b,{to:"/",children:[n&&Object(ze.jsx)("span",{children:" MM "}),"Mauricio Mu\xf1oz"]})})}),e&&Object(ze.jsxs)(Se,{children:[Object(ze.jsx)(Pe.a,{}),Object(ze.jsx)("span",{children:" Developer \u2022 Video Editor"}),Object(ze.jsx)(Me.a,{})]}),Object(ze.jsx)(Be,{children:Object(ze.jsx)(Ce,{colorScheme:"white",variant:"outline",_hover:{bg:"white",color:"black"},children:"Contact Me"})})]})},Le=t(44),Te=(t(172),t(173),t(133)),Ye=t.n(Te),qe=t(134),Ve=t.n(qe),Ee=t(135),We=t.n(Ee),Fe=we.a.div(s||(s=Object(fe.a)(["\n  width: ",";\n  margin: auto;\n"])),(function(e){return e.width})),Ie=Object(we.a)(Ye.a)(j||(j=Object(fe.a)(["\n  margin-top: 20px;\n\n  ul li button:before {\n    font-size: 10px;\n    color: rgb(150, 150, 171);\n  }\n\n  li.slick-active button:before {\n    color: white;\n  }\n\n  .slick-list {\n    overflow: visible;\n  }\n\n  .slick-slide {\n    padding: 20px;\n  }\n"]))),Xe=we.a.div(d||(d=Object(fe.a)(["\n  height: 248px;\n  border-radius: 9px;\n  border: rgba(255, 255, 255, 0.14) solid 4px;\n  box-shadow: 0px 20px 43px 11px rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  position: relative;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 9px;\n  }\n\n  span {\n    position: absolute;\n    bottom: 0;\n    left: 15px;\n    z-index: 1;\n    font-weight: bold;\n    font-size: 20px;\n    text-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 1);\n  }\n\n  &:hover {\n    border: rgba(255, 255, 255, 1) solid 4px;\n    transform: scale(1.05);\n    box-shadow: 0px 40px 43px 11px rgba(0, 0, 0, 0.5);\n  }\n"]))),Re=Object(we.a)(Ve.a)(l||(l=Object(fe.a)(["\n  color: white;\n  position: absolute;\n  transform: scale(3) translateY(-5px) translateX(-24px);\n  transition: all 0.3s ease-in-out !important;\n\n  &:hover {\n    color: white;\n    transform: scale(3.5) translateY(-5px) translateX(-20px);\n  }\n"]))),Je=Object(we.a)(We.a)(b||(b=Object(fe.a)(["\n  z-index: 1;\n  color: white;\n  position: absolute;\n  transform: scale(3) translateY(-5px) translateX(24px);\n  color: white;\n\n  transition: all 0.3s ease-in-out !important;\n\n  &:hover {\n    color: white;\n    transform: scale(3.5) translateY(-5px) translateX(20px);\n  }\n"]))),Ne=function(){var e={infinite:!0,speed:500,centerMode:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,nextArrow:Object(ze.jsx)(Re,{}),prevArrow:Object(ze.jsx)(Je,{})},n=Object(He.useMediaPredicate)("(min-width: 800px)"),t=Object(He.useMediaPredicate)("(min-width: 400px)"),i=Object(He.useMediaPredicate)("(min-width: 330px)");return Object(ze.jsx)(Fe,{width:n?"776px":t?"400px":i?"350px":"320px",children:Object(ze.jsxs)(Ie,Object(Le.a)(Object(Le.a)({},e),{},{children:[Object(ze.jsxs)(Xe,{children:[Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:""}),Object(ze.jsx)("span",{children:"Tetris Arduino"})]}),Object(ze.jsxs)(Xe,{children:[Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:""}),Object(ze.jsx)("span",{children:"Tetris Arduino"})]}),Object(ze.jsxs)(Xe,{children:[Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:""}),Object(ze.jsx)("span",{children:"Tetris Arduino"})]})]}))})},_e=t(5),Ke=t(136),Qe=t.n(Ke),Ue=t(137),Ze=t.n(Ue),$e=we.a.div(x||(x=Object(fe.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),en=we.a.div(p||(p=Object(fe.a)(["\n  margin: 10px 10px;\n  width: 216px;\n  height: 216px;\n  background: black;\n  border-radius: 11px;\n  border: 3px solid rgba(255, 255, 255, 0.6);\n  border: 3px solid rgba(255, 255, 255, 0.6);\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  box-shadow: 0px 10px 43px 11px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n\n  &:before {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    border-radius: 6px;\n    background: url('https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')\n      center center;\n    opacity: 0.6;\n  }\n\n  &:hover {\n    border: 3px solid rgb(255, 255, 255);\n    transform: scale(1.05);\n    box-shadow: 0px 40px 43px 11px rgba(0, 0, 0, 0.5);\n  }\n\n  span {\n    z-index: 1;\n  }\n"]))),nn=we.a.img(h||(h=Object(fe.a)(["\n  position: absolute;\n  left: 10%;\n  width: 300px;\n"]))),tn=function(){var e=Object($.useState)({left:void 0,right:void 0}),n=Object(_e.a)(e,2),t=(n[0],n[1]);return Object($.useEffect)((function(){document.querySelector(".programming-button").getBoundingClientRect();t({left:0,right:0})}),[]),Object(ze.jsxs)($e,{children:[Object(ze.jsx)(ue.b,{to:"./programming",children:Object(ze.jsxs)(en,{className:"programming-button",children:[Object(ze.jsx)(Qe.a,{style:{fontSize:80}}),Object(ze.jsx)("span",{children:" Programming Portfolio "})]})}),Object(ze.jsxs)(en,{children:[Object(ze.jsx)(Ze.a,{style:{fontSize:80}}),Object(ze.jsx)("span",{children:" Video Editing Portfolio "})]}),Object(ze.jsx)(nn,{src:"./imgs/ClickHereProgramming.png"})]})},cn=t(222),rn=t(116),an=t.n(rn),on=we.a.div(g||(g=Object(fe.a)(["\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  overflow-x: hidden;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n    background-image: url('./imgs/bg.jpeg');\n    opacity: 40%;\n  }\n"]))),sn=we.a.div(O||(O=Object(fe.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n  span {\n    margin: 0 20px;\n  }\n"]))),jn=function(){return Object($.useLayoutEffect)((function(){window.scrollTo(0,0)})),Object(ze.jsx)(cn.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(ze.jsxs)(on,{children:[Object(ze.jsx)(Ne,{}),Object(ze.jsxs)(sn,{children:[Object(ze.jsx)(an.a,{}),Object(ze.jsx)("span",{children:"Highlighted Projects "}),Object(ze.jsx)(an.a,{})]}),Object(ze.jsx)(tn,{})]})})},dn=t(223),ln=we.a.div(u||(u=Object(fe.a)(["\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 20px;\n"])),(function(e){return e.rows})),bn=we.a.div(m||(m=Object(fe.a)(["\n  margin: auto;\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.3s;\n  &:after {\n    content: '';\n    border: 3px solid rgba(255, 255, 255, 0.1);\n    position: absolute;\n    top: -6px;\n    bottom: -6px;\n    left: -6px;\n    right: -6px;\n    border-radius: 50%;\n  }\n\n  img {\n    width: 70%;\n    height: 70%;\n    margin: auto;\n  }\n\n  &:hover {\n    transform: scale(1.05);\n\n    :after {\n      border: 3px solid rgba(255, 255, 255, 1);\n    }\n  }\n"]))),xn=function(){var e=Object(He.useMediaPredicate)("(min-width: 900px)"),n=Object(He.useMediaPredicate)("(min-width: 450px)");return Object(ze.jsxs)(ln,{rows:e?6:n?3:2,children:[Object(ze.jsx)(dn.a,{label:"Python",placement:"top",children:Object(ze.jsx)(bn,{children:Object(ze.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",alt:""})})}),Object(ze.jsx)(dn.a,{label:"Python",placement:"top",children:Object(ze.jsx)(bn,{children:Object(ze.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",alt:""})})}),Object(ze.jsx)(dn.a,{label:"Python",placement:"top",children:Object(ze.jsx)(bn,{children:Object(ze.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",alt:""})})}),Object(ze.jsx)(dn.a,{label:"Python",placement:"top",children:Object(ze.jsx)(bn,{children:Object(ze.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",alt:""})})}),Object(ze.jsx)(dn.a,{label:"Python",placement:"top",children:Object(ze.jsx)(bn,{children:Object(ze.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",alt:""})})}),Object(ze.jsx)(dn.a,{label:"Python",placement:"top",children:Object(ze.jsx)(bn,{children:Object(ze.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",alt:""})})})]})},pn=we.a.div(f||(f=Object(fe.a)(["\n  width: 80%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: repeat(",", minmax(0, 1fr));\n  grid-gap: 25px;\n  height: 200px;\n"])),(function(e){return e.columns})),hn=we.a.h1(w||(w=Object(fe.a)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  text-align: center;\n  font-size: 20px;\n"]))),gn=we.a.div(v||(v=Object(fe.a)(['\n  height: 200px;\n  transition: all 0.3s;\n  box-shadow: 0px 10px 43px 11px rgba(0, 0, 0, 0.3);\n  position: relative;\n  cursor: pointer;\n\n  img {\n    border-radius: 8px;\n    border: 4px solid rgba(255, 255, 255, 0.3);\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  span {\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: black;\n    opacity: 0.3;\n  }\n  &:hover {\n    transform: scale(1.05);\n    img {\n      border: 4px solid rgba(255, 255, 255, 1);\n    }\n\n    :before {\n      opacity: 0.1;\n    }\n    \n  }\n']))),On=function(){var e=Object(He.useMediaPredicate)("(min-width: 900px)"),n=Object(He.useMediaPredicate)("(min-width: 450px)"),t=Object(me.f)();return Object(ze.jsxs)(ze.Fragment,{children:[Object(ze.jsx)(hn,{children:" Programming Projects "}),Object(ze.jsxs)(pn,{columns:e?3:n?2:1,children:[Object(ze.jsxs)(gn,{onClick:function(){t.push("/programmingdetail")},children:[Object(ze.jsx)("span",{children:"Tetris Arduino"}),Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:""})]}),Object(ze.jsxs)(gn,{children:[Object(ze.jsx)("span",{children:"Tetris Arduino"}),Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:""})]}),Object(ze.jsxs)(gn,{children:[Object(ze.jsx)("span",{children:"Tetris Arduino"}),Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:""})]}),Object(ze.jsxs)(gn,{children:[Object(ze.jsx)("span",{children:"Tetris Arduino"}),Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:""})]}),Object(ze.jsxs)(gn,{children:[Object(ze.jsx)("span",{children:"Tetris Arduino"}),Object(ze.jsx)("img",{src:"https://images.unsplash.com/photo-1596998791568-386ef5297c2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:""})]})]})]})},un=we.a.div(y||(y=Object(fe.a)(["\n  margin-top: 15px;\n  margin-bottom: 30px;\n  width: full;\n  height: 318px;\n  border-bottom: 4px solid rgba(255, 255, 255, 0.14);\n  border-top: 4px solid rgba(255, 255, 255, 0.14);\n  box-shadow: 0 40px 43px 11px rgba(0, 0, 0, 0.5);\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),mn=we.a.div(P||(P=Object(fe.a)(["\n  min-height: 2000px;\n  position: relative;\n  z-index: 1;\n  overflow-x: hidden;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n    background-image: url('./imgs/bg.jpeg');\n    opacity: 40%;\n  }\n"]))),fn=we.a.div(k||(k=Object(fe.a)(["\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n"]))),wn=we.a.div(M||(M=Object(fe.a)(["\n  text-align: center;\n  font-size: 15px;\n  font-weight: bold;\n"]))),vn=we.a.div(H||(H=Object(fe.a)(["\n  height: 20vh;\n"]))),yn=function(){return Object($.useLayoutEffect)((function(){window.scrollTo(0,0)})),Object(ze.jsxs)(cn.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(ze.jsxs)(mn,{children:[Object(ze.jsx)(un,{children:Object(ze.jsx)("img",{src:"imgs/programming_bg.jpeg",alt:""})}),Object(ze.jsx)(fn,{children:"Programming Portfolio"}),Object(ze.jsx)(wn,{children:" Languages I use to develop"}),Object(ze.jsx)(xn,{}),Object(ze.jsx)(On,{})]}),Object(ze.jsx)(vn,{})]})},Pn=t(141),kn=t.n(Pn),Mn=t(140),Hn=t.n(Mn),zn=we.a.div(z||(z=Object(fe.a)(["\n  min-height: 2000px;\n  position: relative;\n  z-index: 1;\n  overflow-x: hidden;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n    background-image: url('./imgs/bg.jpeg');\n    opacity: 40%;\n  }\n"]))),Dn=we.a.div(D||(D=Object(fe.a)(["\n  width: 90%;\n  margin: auto;\n"]))),An=we.a.div(A||(A=Object(fe.a)(["\nmargin-top: 15px;\n  display: flex;\n"]))),Sn=we.a.h1(S||(S=Object(fe.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin-right: auto;\n"]))),Cn=we.a.div(C||(C=Object(fe.a)([""]))),Bn=we.a.p(B||(B=Object(fe.a)(["\n  margin-top: 20px;\n  font-size: 16px;\n"]))),Gn=Object(we.a)(ve.a)(G||(G=Object(fe.a)(["\n  margin-top: 20px;\n  &:hover {\n    color: black;\n  }\n"]))),Ln=Object(we.a)(ve.a)(L||(L=Object(fe.a)(["\n  &:hover {\n    background: transparent !important;\n    transform: translateX(10px);\n  }\n"]))),Tn=function(){Object($.useLayoutEffect)((function(){window.scrollTo(0,0)}));var e=Object(me.f)();return Object(ze.jsx)(zn,{children:Object(ze.jsx)(cn.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(ze.jsxs)(Dn,{children:[Object(ze.jsxs)(An,{children:[Object(ze.jsx)(Sn,{children:" Tetris Arduino "}),Object(ze.jsx)(Ln,{rightIcon:Object(ze.jsx)(Hn.a,{}),variant:"ghost",onClick:function(){e.goBack()},children:" Go back "})]}),Object(ze.jsx)(Ne,{}),Object(ze.jsx)(Cn,{}),Object(ze.jsx)(Bn,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, recusandae? Adipisci nam error dicta quasi nihil ad repudiandae quae perferendis veniam obcaecati rem commodi, laborum necessitatibus numquam dolore. Placeat, rem."}),Object(ze.jsxs)(Gn,{rightIcon:Object(ze.jsx)(kn.a,{}),variant:"outline",children:[" ","Code on Github"]})]})})})},Yn=t(229),qn=t(13),Vn=t(224),En=t(214),Wn=t(215),Fn=t(55),In=t(226),Xn=t(104),Rn=t(231),Jn=t(144),Nn=t.n(Jn),_n=we.a.div(T||(T=Object(fe.a)(["\n  background: ",";\n  border: 1px solid rgba(128, 128, 128, 0.3);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  width: 1100px;\n  padding: 10px 0;\n  span {\n    margin: 0 10px;\n  }\n"])),(function(e){return e.isDragging?"rgb(244,244,244)":"white"})),Kn=Object(we.a)(Nn.a)(Y||(Y=Object(fe.a)(["\n  margin: 0 20px;\n"]))),Qn=we.a.div(q||(q=Object(fe.a)(["\n  min-width: 450px;\n  display: flex;\n  align-items: center;\n"]))),Un=we.a.div(V||(V=Object(fe.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Zn=we.a.h1(E||(E=Object(fe.a)(["\n  font-size: 15px;\n  font-weight: bold;\n  margin-right: 10px;\n"]))),$n=Object(we.a)(ve.a)(W||(W=Object(fe.a)(["\n  margin: 0 20px;\n"]))),et=Object(we.a)(In.a)(F||(F=Object(fe.a)(["\n  margin-left: 20px;\n"]))),nt=Object(we.a)(Xn.a)(I||(I=Object(fe.a)(["\n  margin-left: auto;\n  font-size: 15px;\n"]))),tt=Object(we.a)(Rn.a)(X||(X=Object(fe.a)(["\n  font-size: 5px;\n"]))),it=Object(we.a)(ve.a)(R||(R=Object(fe.a)(["\n  margin-right: 20px;\n"]))),ct=function(e){var n=e.id,t=e.title,i=e.featured,c=e.project,r=e.hidden,a=e.isDragging,o=e.provided,s=Object($.useState)(!1),j=Object(_e.a)(s,2),d=j[0],l=j[1],b=ee.a.useRef(),x=Object(Vn.a)(),p=Object(ie.c)(),h=function(){return l(!1)};return Object(ze.jsxs)(_n,{isDragging:a,children:[Object(ze.jsxs)(Qn,{children:[Object(ze.jsx)("div",Object(Le.a)(Object(Le.a)({},o.dragHandleProps),{},{children:Object(ze.jsx)(Kn,{})})),Object(ze.jsxs)(Zn,{children:[" ",t]}),i&&Object(ze.jsx)(En.a,{colorScheme:"yellow",children:" Featured "}),r&&Object(ze.jsx)(En.a,{colorScheme:"red",children:" Hidden "}),"programming"===c?Object(ze.jsx)(En.a,{colorScheme:"blue",children:" programming "}):Object(ze.jsx)(En.a,{colorScheme:"green",children:" Video Editing "})]}),Object(ze.jsxs)(Un,{children:[Object(ze.jsxs)(nt,{onChange:function(){p(de(n))},value:c,size:"sm",children:[Object(ze.jsx)(tt,{value:"programming",children:" P"}),Object(ze.jsx)(tt,{value:"editing",children:" V "})]}),Object(ze.jsx)(et,{isChecked:!!i,onChange:function(){p(se(n))},size:"sm",children:"Featured"}),Object(ze.jsx)(et,{isChecked:!!r,onChange:function(){p(je(n))},size:"sm",children:"Hidden"}),Object(ze.jsxs)($n,{colorScheme:"blue",size:"sm",children:[" ","Edit"," "]}),Object(ze.jsx)(it,{colorScheme:"red",size:"sm",onClick:function(){return l(!0)},children:"Delete"}),Object(ze.jsx)(Wn.a,{isOpen:d,leastDestructiveRed:b,onClose:h,children:Object(ze.jsx)(Fn.f,{children:Object(ze.jsxs)(Wn.b,{style:{color:"black"},children:[Object(ze.jsx)(Fn.e,{fontSize:"lg",fontWeight:"bold",children:"Delete Project"}),Object(ze.jsx)(Fn.b,{children:"Are you sure you want to delete this project?"}),Object(ze.jsxs)(Fn.d,{children:[Object(ze.jsx)(ve.a,{ref:b,onClick:h,children:"Cancel"}),Object(ze.jsx)(ve.a,{colorScheme:"red",onClick:function(){return x({title:"Project Deleted",description:"The project has been deleted!",status:"success",duration:3e3,isClosable:!0}),console.log("p"+n),p(le(n)),void h()},ml:3,children:"Delete"})]})]})})})]})]})},rt=t(218),at=t(219),ot=t(106),st=t(82),jt=t(227),dt=t(217),lt=t(232),bt=we.a.div(J||(J=Object(fe.a)(["\n  border: 2px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),xt=function(){var e=Object($.useState)(""),n=Object(_e.a)(e,2),t=n[0],i=n[1],c=Object($.useState)(!1),r=Object(_e.a)(c,2),a=r[0],o=r[1],s=Object($.useState)(!1),j=Object(_e.a)(s,2),d=j[0],l=j[1],b=Object($.useState)(0),x=Object(_e.a)(b,2),p=x[0],h=x[1],g=Object(Vn.a)(),O=Object(ie.c)();return Object(ze.jsx)(bt,{children:Object(ze.jsx)(st.a,{children:Object(ze.jsxs)(jt.a,{mb:"5",direction:"column",children:[Object(ze.jsx)(dt.a,{mr:"auto",children:" Title "}),Object(ze.jsx)(lt.a,{type:"text",onBlur:function(e){return i(e.currentTarget.value)}}),Object(ze.jsxs)(rt.a,{children:[Object(ze.jsx)(In.a,{onChange:function(){return o(!a)},children:" Hidden "}),Object(ze.jsxs)(In.a,{ml:4,onChange:function(){return l(!d)},children:[" ","Featured"," "]}),Object(ze.jsx)(at.a,{}),Object(ze.jsxs)(ve.a,{colorScheme:"yellow",onClick:function(){g({title:"Project Created!",description:"A new project has been created!",status:"success",duration:3e3,isClosable:!0}),O(oe({id:p,name:t,featured:d,project:"programming",hidden:a})),h(p+1)},children:[" ","Add Project!"]})]})]})})})},pt=we.a.div(N||(N=Object(fe.a)(["\n  color: black;\n  background-color: white;\n  height: 1000vh;\n"]))),ht=we.a.div(_||(_=Object(fe.a)(["\n  margin-bottom: 10px;\n"]))),gt=we.a.h1(K||(K=Object(fe.a)(["\n  span {\n    font-size: 30px;\n    font-weight: bold;\n  }\n"]))),Ot=we.a.div(Q||(Q=Object(fe.a)(["\n  margin: auto;\n  border-radius: 4px;\n  padding: 30px 15px;\n  width: 90%;\n  border: 2px solid rgba(0, 0, 0, 0.1);\n"]))),ut=we.a.div(U||(U=Object(fe.a)(["\n  width: 80%;\n  margin: auto;\n"]))),mt=function(){var e=Object($.useState)(!1),n=Object(_e.a)(e,2),t=n[0],i=n[1],c=Object(ie.c)(),r=Object(ie.d)(xe);return Object(ze.jsxs)(pt,{children:[Object(ze.jsxs)(ut,{children:[Object(ze.jsxs)(rt.a,{align:"center",p:5,children:[Object(ze.jsx)(gt,{children:Object(ze.jsx)("span",{children:"Project Dashboard"})}),Object(ze.jsx)(at.a,{}),Object(ze.jsx)(ve.a,{colorScheme:"green",size:"sm",onClick:function(){i(!t)},children:t?Object(ze.jsx)("span",{children:"Close"}):Object(ze.jsx)("span",{children:"Add Project "})})]}),t&&Object(ze.jsx)(xt,{})]}),Object(ze.jsx)(ot.a,{onDragEnd:function(e){if(null!=e.destination&&null!=e.source){var n=e.destination.index,t=e.source.index,i=r.slice(0,Math.min(n,t)),a=r.slice(Math.max(n,t)+1,r.length),o=[];if(n>t){var s=r.slice(t+1,n+1);o=[].concat(Object(qn.a)(i),Object(qn.a)(s),[r[t]],Object(qn.a)(a))}else{var j=r.slice(n,t);o=[].concat(Object(qn.a)(i),[r[t]],Object(qn.a)(j),Object(qn.a)(a))}c(be(o))}},children:Object(ze.jsx)(ot.c,{droppableId:"hola",children:function(e){return Object(ze.jsxs)(Ot,Object(Le.a)(Object(Le.a)({ref:e.innerRef},e.droppableProps),{},{children:[r.length>0?r.map((function(e,n){return Object(ze.jsx)(ot.b,{draggableId:"d"+e.id,index:n,children:function(n,t){return Object(ze.jsx)(ht,Object(Le.a)(Object(Le.a)({},n.draggableProps),{},{ref:n.innerRef,children:Object(ze.jsx)(ct,{id:e.id,title:e.name,featured:e.featured,project:e.project,hidden:e.hidden,isDragging:t.isDragging,provided:n})}))}},e.id)})):Object(ze.jsx)("p",{children:" Nothing to show!"}),e.placeholder]}))}})})]})},ft=Object(ge.a)({fonts:{body:"Montserrat"},styles:{global:{body:{color:"white",bg:"black"}}}});function wt(){return Object(ze.jsx)(ze.Fragment,{children:Object(ze.jsxs)(Yn.a,{children:[Object(ze.jsx)(Ge,{},"1"),Object(ze.jsx)(me.a,{path:"/programming",children:Object(ze.jsx)(yn,{})},"2"),Object(ze.jsx)(me.a,{path:"/programmingdetail",children:Object(ze.jsx)(Tn,{})},"3"),Object(ze.jsx)(me.a,{exact:!0,path:"/",children:Object(ze.jsx)(jn,{})},"4"),Object(ze.jsx)(me.a,{exact:!0,path:"*",children:Object(ze.jsx)("h1",{children:" Error 404"})},"5")]})})}var vt=function(){return Object(ze.jsx)(Oe.a,{theme:ft,children:Object(ze.jsx)(ue.a,{children:Object(ze.jsxs)(me.c,{children:[Object(ze.jsx)(me.a,{exact:!0,path:"/dashboard",children:Object(ze.jsx)(mt,{})}),Object(ze.jsx)(me.a,{path:"/edit/:id"}),Object(ze.jsx)(me.a,{children:Object(ze.jsx)(wt,{})})]})})})};te.a.render(Object(ze.jsx)(ie.a,{store:he,children:Object(ze.jsxs)($.StrictMode,{children:[Object(ze.jsx)(Z.a,{}),Object(ze.jsx)(vt,{})]})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.0038ad52.chunk.js.map