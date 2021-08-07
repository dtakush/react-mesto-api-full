(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{17:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(19),s=n.n(o),i=n(8),r=(n(17),n(23)),u=n(2),l=n(3),p=c.a.createContext(),d=n.p+"static/media/logo.a307e1c4.svg",_=n(0);var h=function(e){var t=Object(l.h)(),n="/signup"===t.pathname,a="/signin"===t.pathname,c="/"===t.pathname;return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("img",{src:d,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"}),c&&Object(_.jsxs)("div",{className:"header__user-info",children:[Object(_.jsx)("p",{className:"header__email",children:e.loggedIn?e.userData.email:""}),Object(_.jsx)(i.b,{to:"/signin",className:"header__link header__sign-out",onClick:function(){e.signOut()},children:"\u0412\u044b\u0439\u0442\u0438"})]}),a&&Object(_.jsx)("div",{className:"header__user-info",children:Object(_.jsx)(i.b,{to:"/signup",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),n&&Object(_.jsx)("div",{className:"header__user-info",children:Object(_.jsx)(i.b,{to:"/signin",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},j=n.p+"static/media/editAvatar.a086f758.svg";var m=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,s=c.a.useContext(p),i=t.owner._id===s._id,r="card__delete ".concat(i?"card__delete_show":""),u=t.likes.some((function(e){return e._id===s._id})),l="card__like-image ".concat(u?"card__like-image_active":"");return Object(_.jsxs)("div",{className:"card",children:[Object(_.jsx)("button",{className:r,onClick:function(){o(t)}}),Object(_.jsx)("button",{className:"card__image-button",onClick:function(){n(t)},children:Object(_.jsx)("div",{className:"card__image",style:{backgroundImage:"url(".concat(t.link,")")}})}),Object(_.jsxs)("div",{className:"card__info-block",children:[Object(_.jsx)("h2",{className:"card__title",children:t.name}),Object(_.jsxs)("div",{className:"card__like",children:[Object(_.jsx)("div",{className:l,onClick:function(){a(t)}}),Object(_.jsx)("p",{className:"card__like-number",children:t.likes.length})]})]})]})};var b=function(e){var t=c.a.useContext(p);return Object(_.jsxs)("main",{className:"content",children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsxs)("div",{className:"profile__person",children:[Object(_.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar,children:Object(_.jsx)("div",{className:"profile__avatar-edit",children:Object(_.jsx)("img",{src:j,className:"profile__edit-icon",alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430"})})}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsxs)("div",{className:"profile__edit-info",children:[Object(_.jsx)("h1",{className:"profile__name",name:"name",children:t.name}),Object(_.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]}),Object(_.jsx)("p",{className:"profile__about",name:"about",children:t.about})]})]}),Object(_.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(_.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(_.jsx)(m,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var f=function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var O=function(e){return Object(_.jsxs)("section",{className:"entrance",name:e.name,children:[Object(_.jsx)("h2",{className:"entrance__title",children:e.title}),Object(_.jsxs)("form",{className:"entrance__form",id:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[e.children,Object(_.jsx)("button",{className:"entrance__submit",name:"entrance__submit",type:"submit",id:"entrance__submit",children:e.buttonTitle})]})]})};var g=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(u.a)(s,2),r=i[0],l=i[1];return Object(_.jsxs)(O,{name:"login",title:"\u0412\u0445\u043e\u0434",buttonTitle:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(t){t.preventDefault(),e.onLogin({email:a,password:r})},children:[Object(_.jsx)("input",{className:"entrance__input entrance__input_email",name:"email",type:"email",placeholder:"Email",id:"login__input_email",minLength:"2",maxLength:"40",onChange:function(e){o(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_email",id:"login__input_email-error"}),Object(_.jsx)("input",{className:"entrance__input entrance__input_password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"login__input_password",minLength:"2",maxLength:"40",onChange:function(e){l(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_password",id:"login__input_password-error"})]})};var x=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),r=Object(u.a)(s,2),l=r[0],p=r[1];return Object(_.jsxs)("div",{className:"register",children:[Object(_.jsxs)(O,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonTitle:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(t){t.preventDefault(),e.onRegister({email:a,password:l})},children:[Object(_.jsx)("input",{className:"entrance__input entrance__input_email",name:"email",type:"email",placeholder:"Email",id:"register__input_email",minLength:"2",maxLength:"40",onChange:function(e){o(e.target.value)},required:!0}),Object(_.jsx)("input",{className:"entrance__input entrance__input_password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"register__input_password",minLength:"2",maxLength:"40",onChange:function(e){p(e.target.value)},required:!0})]}),Object(_.jsx)(i.b,{to:"/signin",className:"register__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},v=n(24),N=n(25),k=function(e){var t=e.component,n=Object(N.a)(e,["component"]);return Object(_.jsx)(l.b,{children:function(){return n.loggedIn?Object(_.jsx)(t,Object(v.a)({},n)):Object(_.jsx)(l.a,{to:"./signin"})}})},C=n(21),S=n(22),y=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(C.a)(this,e),this.baseUrl=n,this.headers=a}return Object(S.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({link:e.link,name:e.name})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes/"),{method:t?"PUT":"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"updateHeaders",value:function(){this.headers={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}}]),e}())({baseUrl:"https://api.dtakush.mesto.student.nomoredomains.club",headers:{Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}),w="https://api.dtakush.mesto.student.nomoredomains.club";var A=function(e){return Object(_.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(_.jsxs)("div",{className:"popup__container",children:[Object(_.jsx)("button",{className:"popup__close popup__close-".concat(e.name),type:"button",onClick:e.onClose}),Object(_.jsx)("h2",{className:"popup__title",children:e.title}),Object(_.jsxs)("form",{className:"popup__form popup__form_".concat(e.name),name:"".concat(e.name,"-form"),id:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[e.children,Object(_.jsx)("button",{className:"popup__save-button",name:"".concat(e.name,"-popup-button"),id:"".concat(e.name,"-popup-button"),type:"submit",children:e.buttonTitle})]})]})})};var L=function(e){var t=c.a.useContext(p),n=c.a.useState(""),a=Object(u.a)(n,2),o=a[0],s=a[1],i=c.a.useState(""),r=Object(u.a)(i,2),l=r[0],d=r[1];return c.a.useEffect((function(){s(t.name),d(t.about)}),[t,e.isOpen]),Object(_.jsxs)(A,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:l})},children:[Object(_.jsx)("input",{value:o||"",name:"name",type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",className:"popup__input popup__input_name",id:"popup__input_name",minLength:"2",maxLength:"40",onChange:function(e){s(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_name",id:"popup__input_name-error"}),Object(_.jsx)("input",{value:l||"",name:"about",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_about",id:"popup__input_about",minLength:"2",maxLength:"200",onChange:function(e){d(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_about",id:"popup__input_about-error"})]})};var T=function(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(u.a)(s,2),r=i[0],l=i[1];return c.a.useEffect((function(){o(" "),l(" ")}),[e.isOpen]),Object(_.jsxs)(A,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:a,link:r})},children:[Object(_.jsx)("input",{name:"place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:a||"",className:"popup__input popup__input_place",id:"popup__input_place",minLength:"2",maxLength:"30",onChange:function(e){o(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_name",id:"popup__input_place-error"}),Object(_.jsx)("input",{name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430",value:r||"",className:"popup__input popup__input_link",id:"popup__input_link",onChange:function(e){l(e.target.value)},required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_link",id:"popup__input_link-error"})]})};var E=function(e){var t=c.a.useRef();return Object(_.jsxs)(A,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),n.target.reset()},children:[Object(_.jsx)("input",{ref:t,name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430",className:"popup__input popup__input_link",id:"avatar-popup__input_link",required:!0}),Object(_.jsx)("span",{className:"popup__error popup__error_link",id:"avatar-popup__input_link-error"})]})};var U=function(){return Object(_.jsx)(A,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:"\u0414\u0430"})};var I=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(_.jsx)("section",{className:"popup popup_card ".concat(n?"popup_opened":""),name:t.name,children:Object(_.jsx)("div",{className:"popup__container popup__container_card",children:Object(_.jsxs)("div",{className:"popup__pic",children:[Object(_.jsx)("button",{className:"popup__close popup__close_card",type:"button",onClick:a}),Object(_.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(_.jsx)("p",{className:"popup__text",children:t.name})]})})})};var D=function(e){return Object(_.jsx)("section",{className:"popup popup__auth-info popup__auth-info_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(_.jsxs)("div",{className:"popup__container popup__container_auth-info",children:[Object(_.jsx)("button",{className:"popup__close popup__close-".concat(e.name),type:"button",onClick:e.onClose}),Object(_.jsx)("div",{className:"popup__icon popup__icon_".concat(e.name)}),Object(_.jsx)("h2",{className:"popup__title popup__title_auth-info",children:e.title})]})})};var P=function(){var e=Object(l.g)(),t=c.a.useState({}),n=Object(u.a)(t,2),a=n[0],o=n[1],s=c.a.useState(!1),i=Object(u.a)(s,2),d=i[0],j=i[1],m=c.a.useState({}),O=Object(u.a)(m,2),v=O[0],N=O[1],C=c.a.useState(!1),S=Object(u.a)(C,2),A=S[0],P=S[1],R=c.a.useState(!1),q=Object(u.a)(R,2),J=q[0],B=q[1],F=c.a.useState(!1),H=Object(u.a)(F,2),z=H[0],G=H[1],M=c.a.useState(!1),K=Object(u.a)(M,2),Q=K[0],V=K[1],W=c.a.useState(!1),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=c.a.useState({name:"",link:""}),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(!1),ce=Object(u.a)(ae,2),oe=ce[0],se=ce[1],ie=c.a.useState([]),re=Object(u.a)(ie,2),ue=re[0],le=re[1];function pe(){var t,n=localStorage.getItem("jwt");console.log(n),n&&(t=n,fetch("".concat(w,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),401===e.status&&console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(t){t?(console.log(t),N({email:t.email,id:t._id}),j(!0),e.push("/")):localStorage.removeItem("jwt")})).catch((function(t){console.log("Attention! ".concat(t)),e.push("/signin")}))}function de(){V(!Q)}function _e(){P(!1),B(!1),G(!1),se(!1),V(!1),Z(!1)}return c.a.useEffect((function(){pe()}),[]),c.a.useEffect((function(){d&&y.getUserInfo().then((function(e){o(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[d]),c.a.useEffect((function(){d&&y.getInitialCards().then((function(e){le(e)})).catch((function(e){console.log("Attention! ".concat(e))}))}),[d]),Object(_.jsx)(p.Provider,{value:a,children:Object(_.jsxs)("div",{className:"page",children:[Object(_.jsx)(h,{loggedIn:d,userData:v,signOut:function(){j(!1),e.push("/signin"),localStorage.removeItem("jwt")}}),Object(_.jsxs)(l.d,{children:[Object(_.jsx)(k,{exact:!0,path:"/",component:b,loggedIn:d,onEditAvatar:function(){P(!A)},onEditProfile:function(){B(!J)},onAddPlace:function(){G(!z)},onCardClick:function(e){se(!oe),ne({name:e.name,link:e.link})},cards:ue,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){var n=ue.map((function(n){return n._id===e._id?t:n}));le(n)})).catch((function(e){console.log("Attention! ".concat(e))}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(){le(ue.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log("Attention! ".concat(e))}))}}),Object(_.jsx)(l.b,{path:"/signin",children:Object(_.jsx)(g,{onLogin:function(e){(function(e,t){return fetch("".concat(w,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){if(200===e.status)return e.json();400===e.status&&console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e.status&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),y.updateHeaders(),e})).catch((function(e){return console.log(e)}))})(e.email,e.password).then((function(e){console.log(e),e.token?pe():de()})).catch((function(e){console.log("Attention! ".concat(e))}))}})}),Object(_.jsx)(l.b,{path:"/signup",children:Object(_.jsx)(x,{onRegister:function(t){(function(e,t){return fetch("".concat(w,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){try{if(400!==e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t.email,t.password).then((function(t){t?(Z(!Y),e.push("/signin")):de()})).catch((function(e){console.log("Attention! ".concat(e))}))}})})]}),Object(_.jsx)(f,{}),Object(_.jsx)(L,{isOpen:J,onClose:_e,onUpdateUser:function(e){y.setUserInfo(e).then((function(e){o(e),_e()})).catch((function(e){console.log("Attention! ".concat(e))}))}}),Object(_.jsx)(T,{isOpen:z,onClose:_e,onAddCard:function(e){y.addCard(e).then((function(e){le([e].concat(Object(r.a)(ue))),_e()})).catch((function(e){console.log("Attention! ".concat(e))}))}}),Object(_.jsx)(E,{isOpen:A,onClose:_e,onUpdateAvatar:function(e){y.setNewAvatar(e).then((function(e){o(e),_e()})).catch((function(e){console.log("Attention! ".concat(e))}))}}),Object(_.jsx)(U,{}),Object(_.jsx)(I,{card:te,isOpen:oe,onClose:_e}),Object(_.jsx)(D,{name:"authOk",isOpen:Y,onClose:_e,title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),Object(_.jsx)(D,{name:"authCancel",isOpen:Q,onClose:_e,title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{children:Object(_.jsx)(P,{})})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.f5555cba.chunk.js.map