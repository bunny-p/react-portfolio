(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a.p+"static/media/home_me.e10a1ab7.jpg"},function(e,t,a){e.exports=a.p+"static/media/univ_bs.726947bf.jpg"},function(e,t,a){e.exports=a.p+"static/media/univ_sk1.5422cb36.jpg"},function(e,t,a){e.exports=a.p+"static/media/univ_sk2.7af623e9.jpg"},function(e,t,a){e.exports=a.p+"static/media/univ_sk3.1052765f.jpg"},function(e,t,a){e.exports=a.p+"static/media/univ_sk4.6f7a429e.jpg"},function(e,t,a){e.exports=a.p+"static/media/univ_sk5.d9ae5b3d.jpg"},function(e,t,a){e.exports=a.p+"static/media/ap1.20d93362.jpg"},function(e,t,a){e.exports=a.p+"static/media/ap2.3869def5.jpg"},function(e,t,a){e.exports=a.p+"static/media/mcm1.81b0e56a.jpg"},function(e,t,a){e.exports=a.p+"static/media/mcm2.1258fe6b.jpg"},,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=(a(39),a(40),a(13)),s=a(9),o=a(2),m=a(3),u=a(4),d=a(5),p=a(20),v=a.n(p),E=(a(41),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=["HOME","PROJECT","ABOUT","CONTACT"].map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(v.a,{selector:"#scroll_".concat(t)},l.a.createElement("button",{className:"n-btn"},e)))}));return l.a.createElement("div",{className:"n_container"},l.a.createElement("nav",null,l.a.createElement("ul",null,e)))}}]),a}(n.Component)),h=(a(42),a(21)),S=a.n(h),f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"h_container",id:"scroll_0"},l.a.createElement("div",{className:"h-img-sec"},l.a.createElement("img",{className:"h-me",src:S.a,atl:"home_me"})),l.a.createElement("div",{className:"h-title-sec"},l.a.createElement("h1",null,l.a.createElement("p",{className:"h-title-fst"},'"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 '),l.a.createElement("p",{className:"h-title-sec"},'\ud55c\ubcf4\uc6d0\uc758 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc785\ub2c8\ub2e4!"'),l.a.createElement("hr",null)),l.a.createElement("p",{className:"h-desc"},"REACT.JS\ub97c \ud65c\uc6a9\ud55c \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc785\ub2c8\ub2e4."),l.a.createElement("p",{className:"h-desc-web"},"( Chome | Responsive Web )")))}}]),a}(n.Component),C=a(12),g=(a(43),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).mouseOverHandle=function(e){var t=e.target.id-1,a=n.state.skillList[t].desc.split("-");console.log(n.state.skillList[t].desc.split("-")),n.setState({skillDesc:a}),n.setState(n.toggleHoverState)},n.mouseOverHandle=n.mouseOverHandle.bind(Object(C.a)(n)),n.state={isHovering:!1,skillDesc:null,skillList:[{id:1,title:"JAVA",desc:"OOP\uc5d0 \ub300\ud55c \uc815\ud655\ud55c \uc774\ud574-API(Documentation)\uc774\ud574 \ubc0f \ud65c\uc6a9 \uac00\ub2a5-\uc0c1\uc18d, Capsulation \uac1c\ub150 \uc774\ud574 \ubc0f \uc0ac\uc6a9 \uac00\ub2a5-\uc870\uac74, \ubc18\ubcf5\ubb38 \ub4f1\uc744 \uc0ac\uc6a9\ud55c \uc54c\uace0\ub9ac\uc998 \uad6c\ud604-Thread \uae30\uc220 \uc801\uc6a9-MVC\uc5d0 \uae30\ubc18\ud55c \ud328\ud0a4\uc9d5, \ud074\ub798\uc2a4 \uc815\uc758-I/O \ubc0f Socket \ud1b5\uc2e0\uc5d0 \ub300\ud55c \uc774\ud574 \ubc0f \ud65c\uc6a9"},{id:2,title:"JSP",desc:"JSP \uc791\uc131 \uac00\ub2a5-JSTL \uc0ac\uc6a9\uc73c\ub85c View \ud398\uc774\uc9c0 \ub0b4\uc758 JAVA \ucf54\ub4dc \uc9c0\uc591"},{id:3,title:"JDBC, Servlet",desc:"SQL\ubb38 (CRUD) \uc744 \ud1b5\ud55c \ud14c\uc774\ube14 \uc0dd\uc131/\uc218\uc815/\uc0ad\uc81c/\uac80\uc0c9 \uac00\ub2a5-VO, DAO, Controller, View, Servlet\uc744 \ud65c\uc6a9\ud55c MVC \uad6c\ud604"},{id:4,title:"Spring / MyBatis",desc:"Spring MVC \uad6c\ud604-Setting \uff1e web.xml, bean \ub4f1\ub85d, annotation, pom.xml \ub4f1-Business Logic Layer\uc640 Presentation Layer \uad6c\ud604-MVC\uc5d0 \ub300\ud55c \uc815\ud655\ud55c \uc774\ud574-AOP \uc774\ud574/\uc791\uc131"},{id:5,title:"XML",desc:"XML \uc124\uc815-VO, DAO, Controller, Dispatcher-Servlet \ub4f1 XML \uc124\uc815\uc744 \ud1b5\ud55c MVC \uad6c\ud604"},{id:6,title:"JavaScript",desc:"View \ud398\uc774\uc9c0 \uc0c1\uc5d0\uc11c\uc758 \uc790\ubc14 \ucf54\ub4dc \uad6c\ud604 \ubc0f Ajax \uae30\uc220 \uc801\uc6a9"},{id:7,title:"jQuery",desc:"Selector, Event \ub4f1 \uad6c\ud604-Ajax, Json \uae30\uc220 \uc801\uc6a9-jQuery UI"},{id:8,title:"react.js",desc:"JSX, ES6, Virtual DOM, \ub2e8\ubc18\ud5a5 \ub370\uc774\ud130 \ud750\ub984 \uc9c0\ud5a5\uc5d0 \ub300\ud55c \uc774\ud574-\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc7ac\uc0ac\uc6a9\uc131, \ud655\uc7a5\uc131, \uacb0\ud569\uc131, \ucea1\uc290\ud654 \uc774\ud574 \ubc0f \ud65c\uc6a9 \uac00\ub2a5-REDUX\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc758\uc874\uc131\uc744 \ub0ae\ucd94\uace0, \uc720\uc9c0\ubcf4\uc218 \ud3b8\uc758\ub97c \uc704\ud55c \uad6c\ud604 \uac00\ub2a5-\ubd88\ubcc0\ud568\uc744 \uc9c0\ud0a4\uba70 \uc0c1\ud0dc \uad00\ub9ac \uad6c\ud604 \uac00\ub2a5"},{id:9,title:"HTML5, SCSS, Bootstrap",desc:" "}]},n}return Object(m.a)(a,[{key:"toggleHoverState",value:function(e){return{isHovering:!e.isHovering}}},{key:"render",value:function(){var e=this,t=this.state.skillList.map((function(t,a){return l.a.createElement("li",{key:a,id:"".concat(t.id),onMouseLeave:e.mouseOverHandle,onMouseEnter:function(t){e.mouseOverHandle(t)}},t.title)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"a_container",id:"scroll_2"},l.a.createElement("div",{className:"a_contents"},l.a.createElement("h1",null,"ABOUT ME!"),l.a.createElement("hr",{className:"a-title-line"}),l.a.createElement("div",{className:"a-contents-intro"},l.a.createElement("div",{className:"a-contents-desc"},"\uc548\ub155\ud558\uc2ed\ub2c8\uae4c!",l.a.createElement("br",null),"\ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub97c \uc9c0\ud5a5\ud558\ub294 \ud55c\ubcf4\uc6d0\uc785\ub2c8\ub2e4.",l.a.createElement("br",null),"\ub354 \ub098\uc740 \uacb0\uacfc\ub97c \uc704\ud574 \ub04a\uc784 \uc5c6\uc774 \uc0dd\uac01\ud558\ub294\uac8c \uc990\uac81\uc2b5\ub2c8\ub2e4.",l.a.createElement("br",null),"\ud56d\uc0c1 \uc2a4\uc2a4\ub85c\ub97c \uacc4\ubc1c\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \ub418\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."))),l.a.createElement("div",{className:"a-contents-skill"},l.a.createElement("p",{className:"skills-title"},"SKILLS :"),l.a.createElement("ul",null,t),l.a.createElement("hr",{class:"a-skill-line"}),this.state.isHovering&&this.state.skillDesc.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"a-contents-list-div"},l.a.createElement("p",{className:"a-contents-list",key:t},"\xb7 ",e,l.a.createElement("br",null))))})))))}}]),a}(n.Component)),b=(a(44),a(22)),j=a.n(b),A=a(23),O=a.n(A),M=a(24),y=a.n(M),k=a(25),N=a.n(k),J=a(26),_=a.n(J),x=a(27),I=a.n(x),L=a(28),P=a.n(L),H=a(29),U=a.n(H),V=a(30),F=a.n(V),T=a(31),R=a.n(T),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={pId:0,projectList:[{id:0,title:"\ubc31\uc11d\ub300\ud559\uad50 \ud3c9\uc0dd\uad50\uc721\uc6d0 \uc218\uac15\uc2e0\uccad \uc0ac\uc6a9\uc790/\uad00\ub9ac\uc790 \uc2dc\uc2a4\ud15c \uac1c\ubc1c",shorten_title:"\ubc31\uc11d\ub300\ud559\uad50-\ud3c9\uc0dd\uad50\uc721\uc6d0 \uc218\uac15\uc2e0\uccad",desc:"\ubc31\uc11d\ub300\ud559\uad50 \ud3c9\uc0dd\uad50\uc721\uc6d0 \uc218\uac15\uc2e0\uccad\uc744 \uc704\ud55c \uc0ac\uc774\ud2b8\ub85c \ud559\uc810\uc740\ud589\uc81c, \uc77c\ubc18, \ubbfc\uac04(\uc77c\ubc18/\ud2b9\uc218), \ud2b9\ubcc4 \uc218\uac15\uc2e0\uccad \uae30\ub2a5 \ubcc4\ub85c \uad6c\uc131\ud558\uc600\uc73c\uba70, \uad00\ub9ac\uc790\uac00 \uc27d\uac8c \uc218\uac15\uc2e0\uccad\uacfc \uad00\ub828\ub41c \uc0ac\uc774\ud2b8\uc758 \uc804\ubc18\uc801\uc778 \uae30\ub2a5\uc744 \ub530\ub85c \ucee8\ud2b8\ub864 \ud560 \uc218 \uc788\ub3c4\ub85d \uc5f0\ub3d9\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",period:"2017.11.13 ~ 2017.12.22",dev1:"JAVA, JSP, Oracle",dev2:"jQuery, JavaScript, HTML5, CSS2 & CSS3",role:"\uc804\ubc18\uc801\uc778 \ubc31 \uc624\ud53c\uc2a4 CRUD",result:"\uae30\uc874\uc5d0 \uc624\ub958\uac00 \ub9ce\uc558\ub358 \uad00\ub9ac\uc790 \ud648\ud398\uc774\uc9c0 \uac1c\uc120/\uc5f0\ub839\uce35\uc774 \ub192\uc740 \uc218\uac15\uc2e0\uccad \uc811\uc218\uc790\uc5d0 \ub9de\ucd98 \uac04\uc18c\ud654 \ud504\ub85c\uc138\uc2a4-\ubc30\ub108, \ud31d\uc5c5, \uc124\ubb38\uc870\uc0ac, \uac15\uc758 \ud3c9\uac00, \uc218\uac15\ub8cc \uac10\uba74 \ub4f1 \ubb38\uc11c \uc791\uc5c5\uc744 \ubaa8\ub450 \uc2dc\uc2a4\ud15c\ud654",img:j.a},{id:1,title:"\uc11c\uacbd\ub300\ud559\uad50 \ud3c9\uc0dd\uad50\uc721\uc6d0 \uc628\ub77c\uc778 \uc218\uac15\uc2e0\uccad",shorten_title:"\uc11c\uacbd\ub300\ud559\uad50-\ud3c9\uc0dd\uad50\uc721\uc6d0 \uc218\uac15\uc2e0\uccad",desc:"\uc11c\uacbd\ub300\ud559\uad50 \ud3c9\uc0dd\uad50\uc721\uc6d0 \uc628\ub77c\uc778 \uc218\uac15\uc2e0\uccad\uc740 \ud3c9\uc0dd\uad50\uc721\uc6d0 \ud559\uc0dd\ub4e4\uc758 \uc218\uac15\uc2e0\uccad\uc744 \uc704\ud55c \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \uae30\uc874 \ubd88\ud544\uc694\ud55c \ubd80\ubd84\ub4e4\uacfc \uae30\ub2a5 \uac1c\uc120\uc744 \uc704\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub4e4\uc758 \ud3b8\uc758\uc131\uc744 \uc704\ud574 UX\ub97c \uace0\ub824\ud558\uc5ec \uc2e0\uaddc \uac1c\ubc1c\ud558\uc600\uc2b5\ub2c8\ub2e4.",period:"2017.02.20 ~ 2017.03.21",dev1:"JAVA, JSP, Altibase, MySql",dev2:"jQuery, JavaScript, Bootstrap, HTML5, CSS2 & CSS3",role:"\ub2e8\ub3c5 \ud504\ub85c\uc81d\ud2b8, UI/UX, \ud504\ub860\ud2b8-\ubc31\ub2e8 \ucc98\ub9ac, \ub514\uc790\uc778, \ubc18\uc751\ud615, \ucffc\ub9ac \uc791\uc5c5",result:"\ubaa8\ubc14\uc77c, \ud0dc\ube14\ub9bf\uc73c\ub85c \uc218\uac15\uc2e0\uccad \ubc0f \ud655\uc778 \uac00\ub2a5. \ud3b8\ub9ac\uc131 \uc99d\uac00-\ud30c\uaca9\uc801\uc778 UI \ubcc0\ud654\ub85c \uc218\uac15\uc2e0\uccad \ub4f1\ub85d \ubc0f \ucc98\ub9ac \uc2dc\uac04 \uc808\uc57d",img:O.a},{id:2,title:"\uc11c\uacbd\ub300\ud559\uad50 \uc608\uc220\uc885\ud569\ud3c9\uc0dd\uad50\uc721\uc6d0 \ud3ec\ud0c8 \uc628\ub77c\uc778 \ucd9c\uacb0 \uac1c\ubc1c",shorten_title:"\uc11c\uacbd\ub300\ud559\uad50-\uc608\uc220\uc885\ud569\ud3c9\uc0dd\uad50\uc721\uc6d0 \ucd9c\uacb0",desc:"\uc11c\uacbd\ub300\ud559\uad50 \uc608\uc220\uc885\ud569\ud3c9\uc0dd\uad50\uc721\uc6d0 \ud3ec\ud0c8 \uc628\ub77c\uc778 \ucd9c\uacb0 \ud504\ub85c\uadf8\ub7a8\uc740 \uad50\uc218 \ubc0f \ud3c9\uc0dd\uad50\uc721\uc6d0 \uad00\ub9ac\uc790\ub4e4\uc774 \ud559\uc0dd\ub4e4\uc758 \uacfc\ubaa9 \ubcc4 \ucd9c\uacb0\uc744 \uad00\ub9ac\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4. \ube44\ud6a8\uc728\uc801\uc73c\ub85c \uac1c\ubc1c\ub41c \ud504\ub85c\uadf8\ub7a8\uc758 \ubb38\uc11c \uc2b9\uc778 \ucc98\ub9ac \ubc0f \uad00\ub9ac\ub97c \uac1c\uc120\ud558\uae30 \uc704\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",period:"2016.12.05 ~ 2017.02.13",dev1:"JAVA, JSP, Altibase, MySql",dev2:"Flash Player 9.0, Flex",role:"Flex \ud654\uba74\ub2e8 \ucc98\ub9ac, \ucffc\ub9ac CRUD \uc791\uc5c5",result:"\uae30\uc874\uc5d0\ub294 \ubb38\uc11c\ub85c \uc2b9\uc778 \ucc98\ub9ac. \uac1c\ubc1c \ud6c4 \ud6a8\uc728\uc801\uc778 \ub2e8\uacc4 \ubcc4 \ub2f4\ub2f9\uc790 \uc2b9\uc778\ucc98\ub9ac \ubc18\uc601 \ubc0f \uc2dc\uc2a4\ud15c\ud654-UI/UX \uac1c\uc120\uacfc Hierarchy \ubc18\uc601\uc73c\ub85c \uad50\uc218 \ubc0f \uad00\ub9ac\uc790\uc758 \uc791\uc5c5 \ud6a8\uc728 \uc99d\uac00",img:y.a},{id:3,title:"\uc11c\uacbd\ub300\ud559\uad50 \uc608\uc220\uc885\ud569\ud3c9\uc0dd\uad50\uc721\uc6d0 \uc628\ub77c\uc778 \uc785\ud559\uc6d0\uc11c\uc811\uc218 \uac1c\ubc1c",shorten_title:"\uc11c\uacbd\ub300\ud559\uad50-\uc608\uc220\uc885\ud569\ud3c9\uc0dd\uad50\uc721\uc6d0 \uc6d0\uc11c\uc811\uc218",desc:"\uc11c\uacbd\ub300\ud559\uad50 \uc608\uc220\uc885\ud569\ud3c9\uc0dd\uad50\uc721\uc6d0 \uc628\ub77c\uc778 \uc785\ud559\uc6d0\uc11c\uc811\uc218\ub294 \ud3c9\uc0dd\uad50\uc721\uc6d0 \ud559\uc0dd\ub4e4\uc774 \uc804\uae30/\ud6c4\uae30\uc5d0 \uc628\ub77c\uc778\uc73c\ub85c \uc6d0\uc11c\uc811\uc218\ud560 \uc218 \uc788\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4. \uae30\uc874\uc5d0 \ub099\ud6c4\ub418\uc5b4 \uc788\uc5c8\ub358 \uc785\ud559\uc6d0\uc11c\uc811\uc218 \ud398\uc774\uc9c0\ub97c \uc2e0\uaddc \uac1c\ubc1c\ud55c \uac83\uc73c\ub85c, \uc0ac\uc6a9\uc790\ub4e4\uc758 \ud3b8\uc758\uc131\uc744 \uc911\uc810\uc73c\ub85c UI \ubc0f \uae30\ub2a5 \uac1c\uc120\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",period:"2016.05.02 ~ 2016.11.24",dev1:"JAVA, JSP, Altibase, MySql",dev2:"jQuery, JavaScript, Bootstrap, HTML5, CSS2 & CSS3",role:"\ub2e8\ub3c5 \ud504\ub85c\uc81d\ud2b8, UI/UX, \ud504\ub860\ud2b8-\ubc31\ub2e8 \ucc98\ub9ac, \ub514\uc790\uc778, \ubc18\uc751\ud615, \ucffc\ub9ac \uc791\uc5c5.",result:"URL : https://apps.skuniv.ac.kr/lifeedu/secsemester/ UI\uc640 \ub514\uc790\uc778 \uac1c\uc120\uc73c\ub85c PC, \ud0dc\ube14\ub9bf, \ubaa8\ubc14\uc77c\uc5d0\uc11c \uac04\ud3b8\ud558\uac8c \uc0ac\uc6a9 \uac00\ub2a5-GA \uc124\uc815\ud558\uc5ec \ub370\uc774\ud130 \ubd84\uc11d/\ucd94\uc801\ud558\ub3c4\ub85d \ud558\uc5ec \uc5b4\ub5a4 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\ub294\uc9c0 \ucd94\uc801 \uac00\ub2a5-GA \ubd84\uc11d \uacb0\uacfc \uae30\uc874 \uc6d0\uc11c\uc811\uc218 \ucd5c\uc885 \ub4f1\ub85d\uae4c\uc9c0 \ud3c9\uade0 5~10\ubd84 \uc18c\uc694\ub418\uc5c8\uc73c\ub098,-\ub9ac\ub274\uc5bc \ud6c4 \ucd5c\uc885 \ub4f1\ub85d\uae4c\uc9c0 \ud3c9\uade0 1~2\ubd84 \uc18c\uc694-\ud55c\uad6d\uc778 70% \uc774\uc0c1\uc774 \uc0ac\uc6a9\ud558\ub294 \ub124\uc774\ubc84 \uac80\uc0c9 \ub178\ucd9c\uc744 \uc704\ud55c \ub124\uc774\ubc84 \uc2e0\ub514\ucf00\uc774\uc158 \uc5f0\ub3d9-op(open graph) \ud0dc\uadf8 \uc0ac\uc6a9\ud558\uc5ec \uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654. \uc6f9 \uac1c\ubc29\uc131../Slack \uc5f0\ub3d9\uc73c\ub85c \uc2e4\uc2dc\uac04\uc73c\ub85c \uc811\uc218\uc790 \ud655\uc778 \ubc0f \uc624\ub958 \ub300\ucc98 \uac00\ub2a5-\uba54\uc77c\uce68\ud504 \uc5f0\ub3d9\uc73c\ub85c \uc548\ub0b4 \uba54\uc77c\uacfc \uc9c0\uc18d\uc801\uc778 \ud64d\ubcf4 \uac00\ub2a5",img:N.a},{id:4,title:"\uc11c\uacbd\ub300\ud559\uad50 \uac1c\uc778\uc815\ubcf4\ubcf4\ud638\uc57d\uad00\uad00\ub9ac",shorten_title:"\uc11c\uacbd\ub300\ud559\uad50-\uac1c\uc778\uc815\ubcf4\ubcf4\ud638\uc57d\uad00\uad00\ub9ac",desc:"\uc11c\uacbd\ub300\ud559\uad50 \uac1c\uc778\uc815\ubcf4\ubcf4\ud638\uc57d\uad00\uad00\ub9ac\ub294 \uac01 \ubd80\uc11c \ubcc4\ub85c \ubd84\uc0b0\ub418\uc5b4 \ub530\ub85c \uad00\ub9ac\ub418\ub358 \uc57d\uad00\ub4e4\uc744 \ud558\ub098\ub85c \ud1b5\ud569\ud558\uc5ec \uc0dd\uc131, \ubc30\ud3ec \ub4f1 \uccb4\uacc4\uc801\uc73c\ub85c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",period:"2015.11.12 ~ 2016.03.10",dev1:"JAVA, JSP, Altibase, MySql",dev2:"jQuery, JavaScript, HTML5, XHTML, CSS2 & CSS3",role:"\uc11c\ube44\uc2a4 \ub85c\uc9c1 \uc801\uc6a9, \ud654\uba74 UI \ubc0f \ucd9c\ub825 \uc791\uc5c5",result:"\uad00\ub9ac\uc790\ub294 \uc5ec\ub7ec \ud559\ubd80/\ubd80\uc11c\uc5d0 \ub300\ud55c \uac1c\uc778\uc815\ubcf4\uc57d\uad00 \uc0dd\uc131/\uc218\uc815/\uc0ad\uc81c/\uc5c5\ub85c\ub4dc\ub97c \ud558\ub098\uc758 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uad00\ub9ac-\ud559\uc0dd/\uad50\uc218/\uad50\uc6d0\uc5d0 \ub300\ud55c \uac1c\uc778\uc815\ubcf4\uc57d\uad00 \ub3d9\uc758 \ub0b4\uc6a9\uc744 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uad00\ub9ac",img:_.a},{id:5,title:"\uc11c\uacbd\ub300\ud559\uad50 \ub4f1\uae30 \uc6b0\ud3b8 \uad00\ub9ac \uc2dc\uc2a4\ud15c \uad6c\ucd95",shorten_title:"\uc11c\uacbd\ub300\ud559\uad50-\ub4f1\uae30 \uc6b0\ud3b8 \uad00\ub9ac",desc:"\uc11c\uacbd\ub300\ud559\uad50 \ub4f1\uae30 \uc6b0\ud3b8 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc740 \uc6b0\ud3b8\ubb3c\uc774 \ubc30\uc1a1\ub420 \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \ud574\ub2f9 \uc6b0\ud3b8\ubb3c \ubbf8\uc218\ub839\uc790\uc5d0\uac8c SMS\ub97c \uc804\uc1a1\ud558\uba70, \uc218\ub839\uc790\ub294 \uc0ac\uc778\ud328\ub4dc\uc5d0 \uc0ac\uc778\uc744 \ud568\uc73c\ub85c\uc368, \uc885\uc774 \ub0ad\ube44\uc640 \uccb4\uacc4\uc801\uc73c\ub85c \uc6b0\ud3b8\ubb3c \uc218\ub839 \ubc0f \uad00\ub9ac\ub97c \ud560 \uc218 \uc788\ub294 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4. \uc218\ub3d9\uc801\uc73c\ub85c \uc0ac\ub78c\uc774 \ud558\ub358 \uc6b0\ud3b8\ubb3c \uad00\ub9ac\ub97c \uc2dc\uc2a4\ud15c\ud654 \ud568\uc73c\ub85c\uc368 \uc0ac\uc6a9\uc790\uc758 \uc2e0\ub8b0\uac10\uc744 \ub192\uc774\uace0, \ubc14\ucf54\ub4dc \uc2a4\uce90\ub108\uc758 \uc785\ub825\uc744 \uae30\ubcf8\uc73c\ub85c \ud3b8\uc758\uc131\uc744 \uac15\ud654\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",period:"2015.09.14 ~ 2015.10.30",dev1:"JAVA, JSP, Altibase, MySql",dev2:"JAVA, JSP, Altibase, MySql",role:"\uc11c\ube44\uc2a4 \ub85c\uc9c1 \uc801\uc6a9, canvas \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc778 insert/update \uc791\uc5c5",result:"\uae30\uc874 \uc6b0\ud3b8\ubb3c \uc791\uc5c5 \ucc98\ub9ac \ucd1d\ubb34\uacfc\uc5d0\uc11c \ub2e8 \ud55c\uba85\uc774 \ub2f4\ub2f9. \uc6b0\ud3b8 \uad00\ub9ac \uc77c \ucc98\ub9ac\ub85c \ub2e4\ub978 \uc5c5\ubb34\uc5d0 \ud53c\ud574-\ubc14\ucf54\ub4dc \uc2a4\uce90\ub108 \uc785\ub825\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc218\uc791\uc5c5\uc5d0\uc11c \uc790\ub3d9\ud654\ub85c \ud3b8\uc758\uc131 \uac15\ud654, \uc77c\uc758 \ud6a8\uc728\uc131\uc744 \ub192\uc784-SMS \uc804\uc1a1 \uae30\ub2a5 \ucd94\uac00. \uc6b0\ud3b8\ubb3c \ubbf8\uc218\ub839\uc790\uc5d0\uac8c \uc54c\ub9bc \uc11c\ube44\uc2a4//\uc6b0\ud3b8\ubb3c \uc218\ub839\uc778\uc758 \uc11c\uba85\uc740 \uc11c\uba85 \ud328\ub4dc\ub85c \ubc1b\ub3c4\ub85d \ud558\uc5ec \uc2dc\uc2a4\ud15c\ud654 \uad00\ub9ac \uac00\ub2a5",img:I.a},{id:6,title:"AMORE PACIFIC \ud504\ub85c\uc81d\ud2b8 - Chatter",shorten_title:"AMORE PACIFIC-Chatter",desc:"AMORE PACIFIC \uc758 Chatter \ud504\ub85c\uadf8\ub7a8\uc740 \uc77c\uc758 \ud2b9\uc131\uc0c1 PC \uc0ac\uc6a9\uc774 \uc5b4\ub824\uc6b4 \uc601\uc5c5 \uc0ac\uc6d0\uacfc \ud310\ub9e4 \uc0ac\uc6d0\uc774 \ubaa8\ubc14\uc77c \uc0c1\uc5d0\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \ucef4\ud50c\ub808\uc778, \uc5c5\ubb34, \ud310\ub9e4\uc2e4\uc801 \ub4f1\uc744 \uacf5\uc720\ud558\uae30 \uc704\ud55c \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.",period:"2015.07 ~ 2015.09",dev1:"SalesForce \uae30\ubc18\uc758 Cloud, Apex",dev2:"VisualForce, HTML5, jQuery, JavaScript",role:"UI, \uc11c\ubc84/\ud074\ub77c\uc774\uc5b8\ud2b8 \ub2e8 \uac1c\ubc1c",result:"\ubaa8\ubc14\uc77c\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5\ud558\ub3c4\ub85d \ud558\uc5ec \uc2e4\uc2dc\uac04\uc73c\ub85c \ucef4\ud50c\ub808\uc778/\uc5c5\ubb34/\ud310\ub9e4\uc2e4\uc801 \ub4f1 \uc804\ub2ec \uc6a9\uc774-\uce74\ud398, \ube14\ub85c\uadf8, \uce74\uce74\uc624\uc2a4\ud1a0\ub9ac \ub4f1 \ud30c\ud2b8 \ubcc4\ub85c \ubd84\uc0b0\ub418\uc5b4 \uc788\ub358 \uc2dc\uc2a4\ud15c \ud1b5\ud569",img:P.a},{id:7,title:"AMORE PACIFIC \ud504\ub85c\uc81d\ud2b8 - \uacf5\uc9c0\uc0ac\ud56d",shorten_title:"AMORE PACIFIC-\uacf5\uc9c0\uc0ac\ud56d",desc:"AMORE PACIFIC \uc758 \uacf5\uc9c0\uc0ac\ud56d \ud504\ub85c\uadf8\ub7a8\uc740 \uad6d\ub0b4/\ud574\uc678 \ud30c\ud2b8\uc758 \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud569\ud558\uc5ec, \ud558\ub098\uc758 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc5c5\ubb34\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uacf5\uc9c0\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, \ubaa8\ubc14\uc77c\uc5d0\uc11c\ub3c4 \uc2e4\uc2dc\uac04\uc73c\ub85c \uacf5\uc9c0 \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",period:"2015.07 ~ 2015.09",dev1:"SalesForce \uae30\ubc18\uc758 Cloud, Apex",dev2:"VisualForce, HTML5, jQuery, JavaScript",role:"UI, \uc11c\ubc84/\ud074\ub77c\uc774\uc5b8\ud2b8 \ub2e8 \uac1c\ubc1c",result:" \ubd84\uc0b0\ub418\uc5b4\uc788\ub358 \uc5c5\ubb34 \ubcc4, \uad6d\ub0b4/\ud574\uc678 \ud30c\ud2b8 \uc2dc\uc2a4\ud15c \ud1b5\ud569\ud558\uc5ec \uad00\ub9ac \uc6a9\uc774/Hierarchy \uc801\uc6a9-\ubaa8\ubc14\uc77c\uc5d0\uc11c \uc2e4\ud589 \uac00\ub2a5. \ucd9c\uadfc\uc804/\ud6c4, \ub9e4\uc7a5\uc5d0\uc11c \uc2e4\uc2dc\uac04\uc73c\ub85c \uacf5\uc9c0 \ud655\uc778 \uac00\ub2a5-\ud310\ub9e4 \uc2e4\uc801 \ub4f1 \uadf8\ub798\ud504\ud654\ud558\uc5ec \uc2dc\uac01\uc801\uc73c\ub85c \uc811\uadfc \uac00\ub2a5",img:U.a},{id:8,title:"MCM \ud504\ub85c\uc81d\ud2b8 - \ud68c\uc758\uc2e4 \uc608\uc57d",shorten_title:"MCM-\ud68c\uc758\uc2e4 \uc608\uc57d",desc:"MCM \uc758 \ud68c\uc758\uc2e4 \uc608\uc57d \ud504\ub85c\uadf8\ub7a8\uc740 \ud68c\uc758\uc2e4 \uc608\uc57d \ubc0f \uc6d0\uac70\ub9ac \ud654\uc0c1/\uc74c\uc131 \ud68c\uc758 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. \uc5c5\ubb34\uc0c1 \ud55c \uc7a5\uc18c\uc5d0 \ubaa8\uc774\uae30 \ud798\ub4e0 \uc810\uc744 \uace0\ub824\ud558\uc5ec \uc6d0\uac70\ub9ac \ud654\uc0c1/\uc74c\uc131 \ud68c\uc758\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.",period:"2015.03 ~ 2015.04",dev1:"SalesForce \uae30\ubc18\uc758 Cloud, Apex",dev2:"VisualForce, ExtJS, HTML5, jQuery, JavaScript",role:"UI, \uc11c\ubc84/\ud074\ub77c\uc774\uc5b8\ud2b8 \ub2e8 \uac1c\ubc1c",result:"\ud504\ub85c\uadf8\ub7a8\ud654 \ud558\uc5ec \ud6a8\uc728\uc801\uc778 \ud68c\uc758\uc2e4 \uc608\uc57d \uac00\ub2a5/\uc6d0\uac70\ub9ac \ud654\uc0c1/\uc74c\uc131 \ud68c\uc758 \uac00\ub2a5",img:F.a},{id:9,title:"MCM \ud504\ub85c\uc81d\ud2b8 - Selling Campaign",shorten_title:"MCM-Selling Campaign",desc:"MCM \uc758 Selling Campaign \uc740 \ub9e4\uc7a5\uc5d0 \ubc30\uce58\ud560 \uc81c\ud488\uc744 \uad6c\ub9e4\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\ub9cc \uc788\ub2e4\uba74, \uc2dc\uac04\uc5d0 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uace0 \uad6c\ub9e4 \ubc0f \uad00\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.",period:"2015.01 ~ 2015.02",dev1:"SalesForce \uae30\ubc18\uc758 Cloud, Apex",dev2:"VisualForce, HTML5, jQuery, JavaScript",role:"UI, \uc11c\ubc84/\ud074\ub77c\uc774\uc5b8\ud2b8 \ub2e8 \uac1c\ubc1c",result:" \ubc31\ud654\uc810 \ub9e4\ub2c8\uc800\uac00 \uc0c8 \uc81c\ud488 \uad6c\uc785 \ud6c4 \ub9e4\uc7a5\uc5d0 \ubc30\uce58\uae4c\uc9c0 \ubb38\uc11c\ub85c \uc791\uc5c5\ud55c \uac83\uc744 \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \uad00\ub9ac/\uad6c\ub9e4 \uc774\ub825 \uad00\ub9ac-\uc2e4\uc2dc\uac04\uc73c\ub85c \uad6c\ub9e4 \uae08\uc561/\uc81c\ud488 \uc0ac\uc9c4 \ud655\uc778 \uac00\ub2a5",img:R.a}]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=0,t=null,a=null,n=null,r=null,c=null,s=null,o=null,m=this.state.projectList;console.log(m);for(var u=[],d=0;d<m.length;){e=m[d].id,t=m[d].title,a=m[d].desc,n=m[d].period,r=m[d].dev1,c=m[d].dev2,s=m[d].role,o=m[d].result;var p=m[d].shorten_title.split("-");console.log(p),u.push(l.a.createElement("div",{className:"p-figure",key:m[d].id,id:m[d].id},l.a.createElement(i.b,{className:"link-detail",to:{pathname:"/project/".concat(e),state:{id:e,title:t,desc:a,period:n,dev1:r,dev2:c,role:s,result:o}}},l.a.createElement("div",{className:"p-content-img"},l.a.createElement("img",{src:m[d].img,alt:m[d].shorten_title}),l.a.createElement("div",{className:"p-content-desc"},p.map((function(e,t){return l.a.createElement("h5",{key:t},e)}))))))),d++}return l.a.createElement("div",{id:"scroll_1",className:"p-container"},l.a.createElement("ul",null,l.a.createElement("li",null,u)))}}]),a}(n.Component),w=(a(50),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"c_container",id:"scroll_3"},l.a.createElement("h1",null,"I hope to meet you soon"),l.a.createElement("hr",null),l.a.createElement("div",{className:"c_contents"},l.a.createElement("div",{className:"contents-desc"},l.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694! \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ud55c\ubcf4\uc6d0\uc785\ub2c8\ub2e4."),l.a.createElement("dl",null,l.a.createElement("dt",null,"E-Mail :"),l.a.createElement("dd",null,"hymnnn28@gmail.com"),l.a.createElement("dt",null,"Github :"),l.a.createElement("dd",null,l.a.createElement("a",{href:"https://github.com/bunny-p/react-portfolio"},"bunny-p"))))))}}]),a}(n.Component)),Q=(a(51),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(t.state),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location,t=this.props.location.state.result.split("-");return e.state?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d_container"},l.a.createElement("h3",null,e.state.title),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-content"},l.a.createElement("p",null,e.state.desc),l.a.createElement("h5",{className:"d-title-result"},"Result"),l.a.createElement("ul",null,t.map((function(e,t){return l.a.createElement("li",{key:t},e)})))),l.a.createElement("div",{className:"d-content-desc"},l.a.createElement("h5",{className:"d-title-period"},"Period :"),l.a.createElement("p",null,e.state.period),l.a.createElement("h5",{className:"d-title-dev1"},"Server :"),l.a.createElement("p",null,e.state.dev1),l.a.createElement("h5",{className:"d-title-dev2"},"Client :"),l.a.createElement("p",null,e.state.dev2),l.a.createElement("h5",{className:"d-title-role"},"Role :"),l.a.createElement("p",null,e.state.role)))):null}}]),a}(n.Component)),B=(a(52),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"f_container"},"Last Update 2020.04.22  |  Chrome  |  REACT Portfolio  |  Responsive Web")}}]),a}(n.Component));var X=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(s.a,{path:"/",exact:!0,component:E}),l.a.createElement(s.a,{path:"/",exact:!0,component:f}),l.a.createElement(s.a,{path:"/",exact:!0,component:D}),l.a.createElement(s.a,{path:"/",exact:!0,component:g}),l.a.createElement(s.a,{path:"/",exact:!0,component:w}),l.a.createElement(s.a,{path:"/project/:id",exact:!0,component:Q}),l.a.createElement(s.a,{path:"/",exact:!0,component:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53);c.a.render(l.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[34,1,2]]]);
//# sourceMappingURL=main.428f8404.chunk.js.map