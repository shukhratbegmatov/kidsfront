(this["webpackJsonpkids-sport"]=this["webpackJsonpkids-sport"]||[]).push([[36],{325:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return O}));var s=n(9),a=n(2),c=n(1),o=n(0),r=n.n(o),i=(n(49),n(80),r.a.createContext()),l=function(){return Object(o.useContext)(i)},_="Main",u="Level",j="Question",b="Result",d="Wait",m=function(e,t){switch(t.type){default:return e;case u:return Object(a.a)(Object(a.a)({},e),{},{section:u});case j:return Object(a.a)(Object(a.a)({},e),{},{section:j});case b:return Object(a.a)(Object(a.a)({},e),{},{section:b});case d:return Object(a.a)(Object(a.a)({},e),{},{section:d});case _:return Object(a.a)(Object(a.a)({},e),{},{section:_})}},O=function(e){var t=e.children,n=Object(o.useState)(0),a=Object(s.a)(n,2),r=a[0],l=a[1],O=Object(o.useState)(0),x=Object(s.a)(O,2),p=x[0],h=x[1],g=Object(o.useReducer)(m,{section:_}),f=Object(s.a)(g,2),y=f[0],v=f[1];return Object(c.jsx)(i.Provider,{value:{section:y.section,allCoins:r,allLevels:p,gameLoadLevel:function(){v({type:u})},gameLoadQuestion:function(){v({type:j})},gameLoadResult:function(){return v({type:b})},gameLoadWait:function(){return v({type:d})},gameLoadMain:function(){return v({type:_})},gameUpdateCoin:function(){l(r+1)},gameUpdateLevel:function(){h(p+1)}},children:t})}},545:function(e,t,n){e.exports={light:"styeSportGame_light__3mGMz",selected:"styeSportGame_selected__2x27z",success:"styeSportGame_success__1CLN_",failure:"styeSportGame_failure__2m4h8"}},562:function(e,t,n){e.exports={showel:"style_showel__oy24D",background_image:"style_background_image__3VO5B",main:"style_main__3AM_j",path:"style_path__3V0lB",link:"style_link__2QXfP",dot:"style_dot__Krr83",current:"style_current__3FdK6",yesno:"style_yesno__16kam",yesornotext:"style_yesornotext__2LmB_",longtext:"style_longtext__uXDEF",level:"style_level__jTqy2",level_text:"style_level_text__2eezz",nums:"style_nums__2FEES",nums_notact:"style_nums_notact__3tGtH",choosen:"style_choosen__JGsfH",choosen_text:"style_choosen_text__uvmm9",choosen_num:"style_choosen_num__3sIcM",game_container:"style_game_container__6ot7a",boys_girls_block:"style_boys_girls_block__2KFw_",boy_and_girl:"style_boy_and_girl__1XiVy",boy:"style_boy__1FvoK",girl:"style_girl__1vaEb",start_btn:"style_start_btn__2CcB2",img_start:"style_img_start__3PNCL",level_header:"style_level_header__3p6tN"}},641:function(e,t,n){e.exports={showel:"style_showel__2XyZg",time_container:"style_time_container__1pBt4",finish:"style_finish__1HI4b",margin_right_btn:"style_margin_right_btn__3R5O9",margin_left_btn:"style_margin_left_btn__1ylcE",time_block:"style_time_block__3uI0Y",time:"style_time__3yzBx",time_number:"style_time_number__d2Bbf",question_block:"style_question_block__3L4jV",question_text:"style_question_text__2pNDS",answer_question:"style_answer_question__EC10s",answer_btns_block:"style_answer_btns_block__mL-Gq",display_for_low:"style_display_for_low__D7hwe",action_buttons_block:"style_action_buttons_block__1T-_U",questions_block:"style_questions_block__3TZQQ",asnwer_block:"style_asnwer_block__1WOkQ",img_cards:"style_img_cards__FrKwD",game_container:"style_game_container__icvvB",answer_question_block:"style_answer_question_block__FA6M3",action_yes:"style_action_yes__3hwKZ",finish_button:"style_finish_button__15HO6",no_button:"style_no_button__3J2Xd",time_all_elements:"style_time_all_elements__idPEJ",display_none_for_low:"style_display_none_for_low__14x0k",margin_button_btn:"style_margin_button_btn__3pSJf"}},703:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n(325),o=n(286),r=n(562),i=n.n(r),l=n(540),_=n(480),u=n(11),j=n.n(u),b=n(22),d=n(9),m=n(468),O=n.p+"static/media/SportGameBg.e6778365.png",x=n(322),p=n(49),h=n(80),g=n(382),f=(n(354),n(282)),y=n.n(f),v=n(279),k=n(127),N=function(){var e=Object(p.c)(h.a.gameRequests.createSession),t=Object(d.a)(e,2),n=t[0],a=(t[1],Object(k.a)().t),o=Object(c.b)(),r=Object(x.c)(),l=Object(v.b)(),_=function(){var e=Object(b.a)(j.a.mark((function e(){var t,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.gameLoadLevel(),t=s=y()().format("YYYY-MM-DD h:mm:ss"),e.prev=2,e.next=5,n({start_time:t,end_time:s,type:x.a});case 5:return a=e.sent,r.createSession(a.data.guid),e.next=9,r.loadRandomQuestion(a.data.guid);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),l.ServerError(!0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsx)(s.Fragment,{children:n.isLoading?Object(s.jsx)(g.a,{}):Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{className:"".concat(i.a.boys_girls_block," align-self-end ").concat(i.a.showel),children:[Object(s.jsx)("img",{src:O,alt:"gamesport",className:i.a.img_start}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("button",{className:"".concat(i.a.start_btn),onClick:_,children:a("game.general.start")})})]})})})},w=n(469),S=n(641),C=n.n(S),L=n(353),B=n(324),q=n.n(B),Q=n(545),U=n.n(Q),E=n(289),P=n(308),R=n(374),F=n(383),M=n(389),I=n(384),T=function(){var e=Object(p.c)(h.a.gameRequests.checkAnswer),t=Object(d.a)(e,1)[0],n=Object(p.c)(h.a.gameRequests.skipQuestion),r=Object(d.a)(n,1)[0],i=Object(a.useState)(122),l=Object(d.a)(i,2),_=l[0],u=l[1],m=Object(a.useState)(null),O=Object(d.a)(m,2),f=O[0],N=O[1],S=Object(a.useState)(null),B=Object(d.a)(S,2),Q=B[0],T=B[1],G=Object(k.a)().t,Y=Object(o.f)(),D=Object(c.b)(),J=Object(x.c)(),K=Object(v.b)();Object(a.useEffect)((function(){_>0&&setTimeout((function(){return u(_-1)}),1e3)}));var W=function(){var e=Object(b.a)(j.a.mark((function e(n,s){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(s),e.prev=1,e.next=4,t({answer:s,session:J.SESSION,question:J.QUESTION});case 4:a=e.sent,T(a.data.correct_answer),!0===a.data.completed?setTimeout(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.gameLoadResult(),D.gameUpdateLevel(),D.gameUpdateCoin();case 3:case"end":return e.stop()}}),e)}))),2e3):setTimeout(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.loadRandomQuestion(J.SESSION);case 2:D.gameUpdateCoin(),N(null),T(null);case 5:case"end":return e.stop()}}),e)}))),2e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),K.ServerError(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r({session:J.SESSION,question:n});case 3:if(!e.sent.data.is_skipped){e.next=13;break}return D.gameLoadQuestion(),e.next=8,J.loadRandomQuestion(J.SESSION);case 8:N(null),T(null),Y.ClosePopUp(),e.next=15;break;case 13:Y.ClosePopUp(),Y.OpenPopUpBackButton();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),K.ServerError(!0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,n){return e.apply(this,arguments)}}();return J.LoadingRandomQuestion?Object(s.jsx)(g.a,{}):Object(s.jsx)(E.a,{children:Object(s.jsx)(w.a,{children:Object(s.jsxs)("div",{className:"position-relative ".concat(C.a.questions_block),children:[Object(s.jsxs)("div",{className:"d-flex flex-column-container container  ".concat(C.a.time_container),children:[Object(s.jsxs)("div",{className:"mr-auto p-2 ".concat(C.a.time_block),children:[Object(s.jsx)("p",{className:C.a.time,children:G("game.general.time")}),J.LoadingRandomQuestion,Object(s.jsx)("p",{className:C.a.time_number,children:y()().startOf("day").second(_).format("mm:ss")})]}),Object(s.jsxs)("div",{className:"p-2 ".concat(C.a.question_block),children:[Object(s.jsx)("p",{className:"".concat(C.a.question_text),children:G("game.general.is_it_correct")}),Object(s.jsx)("p",{className:"".concat(C.a.answer_question," ").concat(C.a.display_none_for_low),children:J.randomQus.contents.length>0?Object(s.jsx)(s.Fragment,{children:J.randomQus.contents[0].title}):Object(s.jsx)(s.Fragment,{children:G("game.general.no_questions")})})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"".concat(C.a.answer_question," ").concat(C.a.display_for_low),children:J.randomQus.contents.length>0?Object(s.jsx)(s.Fragment,{children:J.randomQus.contents[0].title}):Object(s.jsx)(s.Fragment,{children:G("game.general.no_questions")})})}),Object(s.jsx)("div",{className:"d-flex justify-content-center ".concat(C.a.answer_btns_block),children:J.randomQus.answers.map((function(e,t){var n=U.a.light,a=!1;return f&&(a=!0),e.guid===f?n=f===Q?U.a.success:f&&null===Q?U.a.selected:U.a.failure:f&&T!==e.guid&&Q===e.guid&&(n=U.a.success),Object(s.jsx)("div",{className:"".concat(C.a.margin_right_btn," ").concat(C.a.margin_button_btn),children:Object(s.jsx)(L.a,{classes:"".concat(n," "),text:"".concat(e.contents[0].title),onClick:function(t){return W(t,e.guid)},disabled:a})},e.guid)}))}),Object(s.jsxs)("div",{className:"d-flex justify-content-md-center flex-md-row flex-column ".concat(C.a.action_buttons_block),children:[Object(s.jsxs)("div",{className:"".concat(C.a.finish," text-center"),children:[Object(s.jsx)(L.a,{classes:q.a.light_blue,text:G("game.general.leave"),onClick:Y.OpenPopUpFinishButton}),Y.status===o.b&&Object(s.jsx)(P.a,{headerContent:G("game.general.terminate"),onClickNoButton:Y.ClosePopUp,onClickYesButton:function(){D.gameLoadResult(),Y.ClosePopUp()},children:Object(s.jsx)(I.a,{})})]}),Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)(L.a,{classes:q.a.light_blue,text:G("game.general.skip"),onClick:Y.OpenPopUpNextButton}),Y.status===o.a&&Object(s.jsx)(R.a,{OnBackClick:Y.ClosePopUp,children:Object(s.jsx)(F.a,{number:2})}),Y.status===o.d&&Object(s.jsx)(P.a,{onClickNoButton:Y.ClosePopUp,onClickYesButton:function(e){return z(e,J.randomQus.guid)},children:Object(s.jsx)(M.a,{number:2})})]})]})]})})})},G=n(543),Y=n(484),D=(n(307),function(){var e=Object(c.b)(),t=Object(k.a)().t;return Object(s.jsx)(E.a,{children:Object(s.jsx)(Y.a,{onClickNext:function(){e.gameLoadWait()},onClickReplay:function(){e.gameLoadMain()},gameType:x.a,typeWord:t("game.general.sport_test")})})}),J=n(544),K=(n(352),function(){var e=Object(p.c)(h.a.gameRequests.skipSession),t=Object(d.a)(e,1)[0],n=Object(x.c)(),a=Object(c.b)(),r=Object(o.f)(),i=Object(v.b)(),l=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.SESSION){e.next=13;break}return e.prev=1,e.next=4,t({session:n.SESSION});case 4:e.sent.data.is_skipped?a.gameLoadMain():r.OpenPopUpBackButton(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i.ServerError(!0);case 11:e.next=14;break;case 13:a.gameLoadMain();case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{children:Object(s.jsxs)(E.a,{children:[Object(s.jsx)(J.a,{onFinishButton:function(){r.OpenPopUpFinishButton()},onNextButton:function(){r.OpenPopUpNextButton()}}),r.status===o.b&&Object(s.jsx)(P.a,{onClickYesButton:a.gameLoadMain,onClickNoButton:r.ClosePopUp,children:Object(s.jsx)(I.a,{})}),r.status===o.a&&Object(s.jsx)(R.a,{OnBackClick:r.ClosePopUp,children:Object(s.jsx)(F.a,{number:5})}),r.status===o.d&&Object(s.jsx)(P.a,{onClickNoButton:r.ClosePopUp,onClickYesButton:function(e){return l(e)},children:Object(s.jsx)(M.a,{number:5})})]})})}),W=n(482),z=n(483),X=n(50),A=function(){var e,t=Object(c.b)(),n=Object(p.e)(["playerLevel",t.allLevels],h.a.gameRequests.currentPlayerLevel);if(n.isSuccess&&(e=n.data.data.filter((function(e){return e.type===x.a}))),e){for(var a=[],o=1;o<=10;o++)e.length>o?a.push(Object(s.jsx)("span",{className:" ".concat(i.a.nums," "),children:o},o)):a.push(Object(s.jsx)("span",{className:" ".concat(i.a.nums," ").concat(i.a.nums_notact),children:o},o));return a}},H=function(){var e=Object(c.b)(),t=Object(v.b)(),n=Object(k.a)().t,a=Object(p.e)(["playercoins",e.allCoins],h.a.gameRequests.currentPlayerCoins);return Object(s.jsxs)("div",{className:"".concat(i.a.main),children:[Object(s.jsx)("img",{src:l.a,alt:"bg",className:i.a.background_image}),Object(s.jsx)("div",{className:"container-fluid p-0 ".concat(i.a.path),children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"d-flex flex-row ml-n2",children:[Object(s.jsx)(X.b,{to:"/",className:i.a.link,children:n("classes.main")}),Object(s.jsx)("div",{className:i.a.dot}),Object(s.jsx)("span",{className:i.a.link,children:n("header.games")}),Object(s.jsx)("div",{className:i.a.dot}),Object(s.jsx)("span",{className:i.a.current,children:n("game.general.sport_test")})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h1",{className:i.a.yesornotext,children:n("game.general.sport_test")})}),Object(s.jsxs)("div",{className:"row ".concat(i.a.level_header),children:[Object(s.jsx)("p",{className:"col-xl-6  col-lg-12  p-0 pr-3 ".concat(i.a.longtext),children:n("game.guess.instructions")}),Object(s.jsx)("div",{className:"col-xl-3 col-md-6 p-0",children:Object(s.jsx)("div",{className:i.a.level,children:Object(s.jsx)("div",{className:i.a.level_text,children:Object(s.jsxs)("p",{children:[n("game.general.level"),A()]})})})}),Object(s.jsx)("div",{className:"col-xl-1 col-md-1 p-1"}),Object(s.jsx)("div",{className:"col-xl-2 col-md-4 p-0",children:Object(s.jsxs)("div",{className:"".concat(i.a.choosen," d-flex flex-row justify-content-center"),children:[Object(s.jsx)("div",{className:"mr-2 mt-2",children:Object(s.jsx)("img",{src:_.a})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{className:i.a.choosen_text,children:[n("profile.number_of_coins"),":"]})}),Object(s.jsx)("div",{className:"ml-2 ".concat(i.a.choosen_text),children:a.isSuccess?Object(s.jsxs)("span",{children:[" "," "+a.data.data.coins]}):Object(s.jsx)("span",{children:"0"})})]})})]}),{Main:Object(s.jsx)(N,{}),Level:Object(s.jsx)(G.a,{loadQuestion:e.gameLoadQuestion}),Question:Object(s.jsx)(T,{}),Result:Object(s.jsx)(D,{}),Wait:Object(s.jsx)(K,{})}[e.section]]})}),Object(s.jsx)(W.a,{status:t.error,OnBackClick:function(){return window.location.reload()},children:Object(s.jsx)(z.a,{})})]})},V=n(45),Z=n(14);t.default=function(){var e=Object(V.c)((function(e){return e.auth})).accessToken;return Object(a.useEffect)((function(){window.scrollTo(0,0),document.getElementById("viewport").setAttribute("content","width=550")})),e?Object(s.jsx)(c.a,{children:Object(s.jsx)(v.a,{children:Object(s.jsx)(o.e,{children:Object(s.jsx)(x.b,{children:Object(s.jsx)(H,{})})})})}):Object(s.jsx)(Z.a,{to:"/login"})}}}]);