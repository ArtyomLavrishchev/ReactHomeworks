(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={menu:"Header_menu__39ALR",menuActive:"Header_menuActive__1uBaR",checkbox:"Header_checkbox__wzcUR",label:"Header_label__MXkVA",fake:"Header_fake__2RAsG",nav:"Header_nav__2pks-",item:"Header_item__2-t26",activeLink:"Header_activeLink__2UChZ",wrapper:"Header_wrapper__1SP9H"}},,,,function(e,a,t){e.exports={message:"Message_message__2ORxs",ava:"Message_ava__AwFPb",triangle:"Message_triangle__2sNHZ",item:"Message_item__33KbZ",name:"Message_name__ff4xr",messageText:"Message_messageText__2PHuh",time:"Message_time__3HCdE"}},,function(e,a,t){e.exports={affairs:"affair_affairs__2BRKi",title:"affair_title__2idi9",name:"affair_name__3P0ID",priority:"affair_priority__3UBPs",but:"affair_but__O8av5"}},,,function(e,a,t){e.exports={greeting:"Greeting_greeting__10Twb",button:"Greeting_button__2WFrB"}},function(e,a,t){e.exports={item:"SuperInputText_item__1X3jS",superInput:"SuperInputText_superInput__3sR30",errorInput:"SuperInputText_errorInput__30LeD",error:"SuperInputText_error__Ssder"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__l3e9g",spanClassName:"SuperCheckbox_spanClassName__1XmHd",label:"SuperCheckbox_label__1y08q",fake:"SuperCheckbox_fake__1aGif",text:"SuperCheckbox_text__1NWg6"}},,function(e,a,t){e.exports={wrapper:"Junior_wrapper__a2xJj"}},,function(e,a,t){e.exports={default:"SuperButton_default__3ai0G",red:"SuperButton_red__232aW"}},function(e,a,t){e.exports={blue:"HW4_blue__2Y_oN",column:"HW4_column__Fl5UV"}},,,,,,,function(e,a,t){e.exports={App:"App_App__17box"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__OEoz_"}},function(e,a,t){e.exports={span:"HW6_span__3i75j",sdcs:"HW6_sdcs__221Tw"}},function(e,a,t){e.exports={err:"Error_err__1ml5u"}},,,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),l=t.n(c),i=(t(37),t(26)),s=t.n(i),o=t(2),u=t(8),m=t(3),_=t.n(m),d=t(1),p=t(7),f=t.n(p);var E=function(e){return r.a.createElement("div",{className:f.a.message},r.a.createElement("div",{className:f.a.ava},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:f.a.triangle}),r.a.createElement("div",{className:f.a.item},r.a.createElement("div",{className:f.a.name},e.name),r.a.createElement("div",{className:f.a.messageText},e.message),r.a.createElement("div",{className:f.a.time},e.time)))},v="https://i.pinimg.com/736x/c3/d7/85/c3d7852f50c1cb91986d4eaba6e614e2.jpg",b="\u0410\u0440\u0442\u0451\u043c",h="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",g="22:00";var k=function(){return r.a.createElement("div",null,"homeworks 1",r.a.createElement(E,{avatar:v,name:b,message:h,time:g}))},N=t(9),C=t.n(N),x=t(6),j=t(18),O=t.n(j),S=function(e){var a=e.red,t=e.className,n=Object(x.a)(e,["red","className"]),c="".concat(a&&O.a.red," ").concat(O.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},n))};var w=function(e){return r.a.createElement("div",{className:C.a.title},r.a.createElement("span",{className:C.a.name},e.affair.name),r.a.createElement("span",{className:C.a.priority},e.affair.priority),r.a.createElement(S,{className:C.a.but,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"\u2718"))};var y=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:C.a.affairs},a,r.a.createElement("span",null,r.a.createElement(S,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(S,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(S,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(S,{onClick:function(){e.setFilter("low")}},"Low")))},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(H),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("all"),i=Object(o.a)(l,2),s=i[0],u=i[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,s);return r.a.createElement("div",null,"homeworks 2",r.a.createElement(y,{data:m,setFilter:u,deleteAffairCallback:function(e){return c(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},T=t(31),I=t(12),P=t.n(I),F=t(13),B=t.n(F),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,i=e.className,s=e.spanClassName,o=e.setError,u=Object(x.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","setError"]),m="".concat(B.a.error," ").concat(s||""),_="".concat(l?B.a.errorInput:B.a.superInput," ").concat(l?"":i);return r.a.createElement("div",{className:B.a.item},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value),o&&o("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},className:_},u)),r.a.createElement("div",{className:m},l&&r.a.createElement("span",null,l)))},M=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,c=e.error,l=e.totalUsers,i=c?P.a.error:P.a.textArea;return r.a.createElement("div",{className:P.a.greeting},r.a.createElement(U,{value:a,onChange:t,className:i,error:c,onEnter:n}),r.a.createElement("div",{className:P.a.button},r.a.createElement(S,{red:!!c,onClick:n},"Add"),r.a.createElement("span",null,l)))},J=function(e){var a=e.users,t=e.addUserCallback,c=Object(n.useState)(""),l=Object(o.a)(c,2),i=l[0],s=l[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),_=m[0],d=m[1],p=a.length;return r.a.createElement("div",null,r.a.createElement(M,{name:i,setNameCallback:function(e){d(""),s(e.currentTarget.value)},addUser:function(){t(i),s(""),i?alert("Hello ".concat(i," !")):d("Enter your name!")},error:_,totalUsers:p}))},L=t(45);var W=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,"homeworks 3",r.a.createElement(J,{users:t,addUserCallback:function(e){var a=[{_id:Object(L.a)(),name:e}].concat(Object(T.a)(t));e&&c(a)}}))},R=t(19),D=t.n(R),G=t(14),K=t.n(G),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,c=e.spanClassName,l=e.children,i=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(n||""),o="".concat(c||K.a.text);return r.a.createElement("label",{className:K.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},i)),r.a.createElement("span",{className:K.a.fake}),l&&r.a.createElement("span",{className:o},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),s=i[0],u=i[1],m=function(){u(t?"":"error"),s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},_=Object(n.useState)(!1),d=Object(o.a)(_,2),p=d[0],f=d[1];return r.a.createElement("div",null,"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(U,{value:t,onChangeText:c,onEnter:m,error:s,setError:u,className:D.a.blue}),r.a.createElement(S,{red:!0,onClick:m},"delete"),r.a.createElement(X,{checked:p,onChangeChecked:f},"some text"),r.a.createElement(X,{checked:p,onChange:function(e){return f(e.currentTarget.checked)}})))},z=t(16),V=t.n(z),q=t(27),Y=t.n(q),$=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(x.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),i=Object(n.useState)(!1),s=Object(o.a)(i,2),u=s[0],m=s[1],_=c||{},d=_.children,p=_.onDoubleClick,f=_.className,E=Object(x.a)(_,["children","onDoubleClick","className"]),v="".concat(Y.a.editableSpan," ").concat(f);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:v},E),d||l.value))};function Q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Q("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=t(28),te=t.n(ae);var ne=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,"homeworks 6",r.a.createElement("div",{className:te.a.span},r.a.createElement("div",null,r.a.createElement($,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(S,{onClick:function(){Q("editable-span-value",t)}},"save"),r.a.createElement(S,{onClick:function(){var e=ee("editable-span-value",t);c(e)}},"restore")))};var re=function(){return r.a.createElement("div",{className:V.a.wrapper},r.a.createElement(k,null),r.a.createElement(A,null),r.a.createElement(W,null),r.a.createElement(Z,null),r.a.createElement(ne,null))},ce=t(29),le=t.n(ce);var ie=function(){return r.a.createElement("div",{className:le.a.err},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var se=function(){return r.a.createElement("div",{className:V.a.wrapper})};var oe=function(){return r.a.createElement("div",null)},ue="/pre-junior",me="/junior",_e="/junior_PLUS";var de=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:ue})}}),r.a.createElement(d.b,{path:ue,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(d.b,{path:me,render:function(){return r.a.createElement(se,null)}}),r.a.createElement(d.b,{path:_e,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(ie,null)}})))};var pe=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l="".concat(t?_.a.menuActive:_.a.menu);return r.a.createElement("div",{className:_.a.wrapper},r.a.createElement("div",{className:l},r.a.createElement("label",{className:_.a.label},r.a.createElement("input",{type:"checkbox",onClick:function(){c(!t)},className:_.a.checkbox}),r.a.createElement("span",{className:_.a.fake})),r.a.createElement("nav",{className:_.a.nav},r.a.createElement("div",{className:_.a.item},r.a.createElement(u.b,{to:ue,activeClassName:_.a.activeLink},"PreJunior")),r.a.createElement("div",{className:_.a.item},r.a.createElement(u.b,{to:me,activeClassName:_.a.activeLink},"Junior")),r.a.createElement("div",{className:_.a.item},r.a.createElement(u.b,{to:_e,activeClassName:_.a.activeLink},"Junior+")))))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(pe,null),r.a.createElement(de,null)))};var Ee=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.11309c58.chunk.js.map