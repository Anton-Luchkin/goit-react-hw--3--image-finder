(this["webpackJsonpgoit-react-hw--3-image-finder"]=this["webpackJsonpgoit-react-hw--3-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2vQGq",Modal:"Modal_Modal__2Nu66"}},22:function(e,t,a){e.exports={wrapper:"Wrapper_wrapper__3qteC"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3eTLb"}},24:function(e,t,a){e.exports={Button:"Button_Button__2SQzq"}},26:function(e,t,a){e.exports={App:"App_App__1j0Tx"}},28:function(e,t,a){e.exports=a(72)},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2fnqj",SearchForm:"Searchbar_SearchForm__2_Q8x",SearchFormButton:"Searchbar_SearchFormButton__aVYTw",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2WJMR",SearchFormInput:"Searchbar_SearchFormInput__1Z99m"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(11),i=a(3),u=a(4),s=a(6),m=a(5),h=a(21),g=a.n(h),p=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return g.a.get("https:pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=16457509-c82a76dcc46c9cf626ac69878&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},d=a(22),f=a.n(d),y=function(e){var t=e.children;return r.a.createElement("div",{className:f.a.wrapper},t)},v=a(7),S=a.n(v),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.currentTarget;e.setState({query:a.value})},e.handleSubmit=function(t){var a=e.state.query;t.preventDefault(),e.props.onSubmit(a),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("header",{className:S.a.Searchbar},r.a.createElement("form",{className:S.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:S.a.SearchFormButton},r.a.createElement("span",{className:S.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:S.a.SearchFormInput,type:"text",placeholder:"Search images and photos",value:e,onChange:this.handleChange})))}}]),a}(n.Component),_=a(27),I=a(9),E=a.n(I),w=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL,o=e.onClickImage;return r.a.createElement("li",{className:E.a.ImageGalleryItem},r.a.createElement("img",{src:t,alt:a,className:E.a.ImageGalleryItemImage,onClick:function(){return o(n)}}))},k=a(23),C=a.n(k),O=function(e){var t=e.hits,a=e.onClickImage;return r.a.createElement("ul",{className:C.a.ImageGallery},t.map((function(e){var t=e.id,n=Object(_.a)(e,["id"]);return r.a.createElement(w,Object.assign({key:t,onClickImage:a},n))})))},j=a(24),F=a.n(j),G=function(e){var t=e.onClick,a=e.onScroll;return r.a.createElement("button",{type:"button",onClick:t,onScroll:a,className:F.a.Button},"Load more")},M=a(25),B=a.n(M),N=a(10),x=a.n(N),L=document.querySelector("#modal-root"),Q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(r.a.createElement("div",{className:x.a.Overlay,onClick:this.handleBackdropClick},r.a.createElement("div",{className:x.a.Modal},this.props.children)),L)}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,largeImage:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null})},e.fetchHits=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),p(n).then((function(t){e.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e.scrollGallery=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.activeImage=function(t){e.setState({largeImage:t}),e.toggleModal()},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.searchQuery!==t.searchQuery&&this.fetchHits()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,n=e.error,o=e.showModal,c=e.largeImage,l=t.length>0&&!a;return r.a.createElement(y,null,n&&r.a.createElement("h2",null,n),r.a.createElement(b,{onSubmit:this.onChangeQuery}),r.a.createElement(O,{hits:t,onClickImage:this.activeImage}),a&&r.a.createElement(B.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),o&&r.a.createElement(Q,{onClose:this.toggleModal},r.a.createElement("img",{src:c,alt:"#"})),l&&r.a.createElement(G,{onClick:this.fetchHits,onScroll:this.scrollGallery()}))}}]),a}(n.Component),P=(a(71),a(26)),A=a.n(P);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,{className:A.a.App})),document.getElementById("root"))},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__IJhUT",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1Shmx"}}},[[28,1,2]]]);
//# sourceMappingURL=main.66190f7c.chunk.js.map