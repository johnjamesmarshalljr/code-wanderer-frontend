(this["webpackJsonpcode-wanderer-frontend"]=this["webpackJsonpcode-wanderer-frontend"]||[]).push([[0],{32:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),c=(r(32),r(1)),a=r.n(c),s=r(19),o=r.n(s),i=r(17),l=r(27),d=r(5),u=r(25),h=r(4);var p=r(14),j=r(9),b=r(10),m=r(12),O=r(11),g=Object(d.b)((function(e){return{categories:e.categories}}))((function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(p.b,{class:"header2",to:"/categories/".concat(e.category.id,"/resources"),children:Object(n.jsxs)(n.Fragment,{children:[" ",Object(n.jsx)("button",{class:"btn-one",children:e.category.name})," "]})})})})),f=Object(d.b)((function(e){return{categories:e.categories}}))((function(e){return Object(n.jsx)("div",{children:e.categories.map((function(e){return Object(n.jsx)(g,{category:e},e.id)}))})})),w=r(16),x=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){t.preventDefault();var r=t.target.dataset.categoryid,n=t.target.dataset.resourceid;e.props.deleteResource(r,n)},e}return Object(b.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("li",{children:[Object(n.jsxs)("a",{class:"Thx",href:this.props.resource.img_url,children:[Object(n.jsx)("iframe",{name:this.props.resource.name,src:this.props.resource.img_url,width:"100%",height:"450vw",frameborder:"0"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),this.props.resource.name]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{class:"btn-one",type:"button",onClick:this.handleClick,"data-resourceid":this.props.resource.id,"data-categoryid":this.props.resource.category_id,children:"Delete"})]},this.props.resource.id)})}}]),r}(c.Component),y=Object(d.b)(null,{deleteResource:function(e,t){return function(r){fetch("https://code-wanderer-backend.herokuapp.com/categories/".concat(e,"/resources/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r({type:"DELETE_RESOURCE",payload:e})}))}}})(x),k=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={name:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value)),e.filterResourcesFromInput()},e.filterResourcesFromInput=function(){return e.props.category.resources.filter((function(t){return t.name.toUpperCase().includes(e.state.name.toUpperCase())}))},e}return Object(b.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{class:"newnewnew",placeholder:"SEARCH",type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),Object(n.jsx)("ul",{children:this.filterResourcesFromInput().map((function(e){return Object(n.jsx)(y,{resource:e},e.id)}))})]})}}]),r}(a.a.Component),v=function(){return Object(n.jsxs)("div",{id:"Thx",children:[Object(n.jsx)("div",{class:"one",children:Object(n.jsx)("h1",{class:"one",children:"CODE WANDERER"})}),Object(n.jsx)("p",{children:"FOR CODE NEWBIES"}),Object(n.jsxs)("div",{class:"links",children:[Object(n.jsx)(p.b,{class:"header",to:"/",children:Object(n.jsx)("button",{class:"glow-on-hover",children:"Home"})}),Object(n.jsx)(p.b,{class:"header",to:"/categories/:id/resources/new",children:Object(n.jsx)("button",{class:"glow-on-hover",children:"Create"})}),Object(n.jsx)(p.b,{class:"header",to:"/categories",children:Object(n.jsx)("button",{class:"glow-on-hover",children:"View"})})]})]})},E=r(3);var C=function(){return Object(n.jsxs)("div",{class:"bton",children:[Object(n.jsx)("h2",{class:"neon",children:"INSPIRATION"}),Object(n.jsxs)("ul",{class:"home",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:Object(n.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya&v=CIe1DxrSrhs&feature=emb_title",target:"_blank",children:"RUBY"})}),Object(n.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/videoseries?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:Object(n.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?v=-MlNBTSg_Ww&feature=emb_title",target:"_blank",children:"REACT"})}),Object(n.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/-MlNBTSg_Ww",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:Object(n.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?v=OILrg4658JA&feature=emb_title",target:"_blank",children:"MUSIC"})}),Object(n.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/OILrg4658JA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:Object(n.jsx)("a",{class:"likeP",href:"https://www.youtube.com/watch?v=ObZwFExwzOo&feature=emb_title",target:"_blank",children:"TECH"})}),Object(n.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/ObZwFExwzOo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})]})]})},S=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={categoryId:"",name:"",img_url:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log("a"),e.props.addResource(e.state),console.log("g"),console.log(e.state);var r=e.state.categoryId;e.props.history.push("/categories/".concat(r,"/resources")),e.setState({categoryId:"",name:"",img_url:""})},e}return Object(b.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{class:"form",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsx)("p",{children:" ADD A RESOURCE!"}),Object(n.jsx)("br",{}),Object(n.jsxs)("select",{name:"categoryId",onChange:this.handleChange,value:this.state.categoryId,id:"category",children:[Object(n.jsx)("option",{children:"Category"}),this.props.categories.map((function(e){return Object(n.jsxs)("option",{value:e.id,children:[" ",e.name," "]},e.id)}))]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Name:"}),Object(n.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"URL: "}),Object(n.jsx)("input",{type:"text",name:"img_url",value:this.state.img_url,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit"})]})})}}]),r}(a.a.Component),_=Object(d.b)((function(e){return{categories:e.categories}}),{addResource:function(e){var t=Object(h.a)({},e),r=t.categoryId;return delete t.categoryId,t.category_id=r,console.log("b"),function(t){console.log("c"),fetch("https://code-wanderer-backend.herokuapp.com/categories/".concat(r,"/resources"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("d"),e.error?alert(e.error):t({type:"ADD_RESOURCE",payload:e})})),console.log("e")}}})(S),R=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[window.open("".concat(this.props.wanders.link)),window.location.assign("https://johnjamesmarshalljr.github.io/code-wanderer-frontend/")]})}}]),r}(c.Component),D=Object(d.b)((function(e){return{wanders:e.wanders}}))(R);var I=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isClicked:!1},e.handleClick=function(){e.props.shuffleWanders(e.props.wanders),e.setState({isClicked:!0})},e}return Object(b.a)(r,[{key:"render",value:function(){var e=!0===this.state.isClicked;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{class:"btn btn-two",onClick:this.handleClick,children:"WANDER"}),e?Object(n.jsx)(D,{}):null]})}}]),r}(c.Component),A=Object(d.b)(null,{shuffleWanders:function(e){return{type:"SHUFFLE_WANDERS",payload:e}}})(I),T=function(e){Object(m.a)(r,e);var t=Object(O.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(b.a)(r,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.fetchCategories()}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(v,{}),Object(n.jsx)(A,{wanders:[{id:1,name:"jsHolyGrail",link:"https://docs.google.com/document/d/13zS64bha7k0RT_zM2KgRLhDGMav01BIuJjdLMyHDfGA/edit"},{id:2,name:"htmlDomEvents",link:"https://www.w3schools.com/jsref/dom_obj_event.asp"},{id:3,name:"scrimba",link:"https://scrimba.com/allcourses"},{id:4,name:"serializers",link:"https://itnext.io/a-quickstart-guide-to-using-serializer-with-your-ruby-on-rails-api-d5052dea52c5"},{id:5,name:"expressionsVsStatements",link:"https://2ality.com/2012/09/expressions-vs-statements.html"},{id:6,name:"functionExpression",link:"https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function"},{id:7,name:"destructuring",link:"https://scrimba.com/scrim/cnVZVHE?pl=p7v3gCd"},{id:8,name:"jsProject",link:"https://medium.com/swlh/javascript-project-flatiron-school-bd7c1f3aebd7"},{id:9,name:"deployingHeroku",link:"https://medium.com/@siobhanpmahoney/deploying-a-react-frontend-rails-backend-project-to-heroku-4b2c4f6f630c"},{id:10,name:"components",link:"https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb"},{id:11,name:"justJava",link:"https://justjavascript.com/"},{id:12,name:"overreacted",link:"https://overreacted.io/"},{id:13,name:"sharkle",link:"https://sharkle.com/"},{id:14,name:"vizualizer",link:"http://iacopoapps.appspot.com/hopalongwebgl/"},{id:15,name:"electricLines",link:"https://codepen.io/hexapode/full/XJPKWY/"},{id:16,name:"dancingInstances",link:"https://guillaumegouessan.com/sketches/dancing-instances/"},{id:17,name:"insideFiber",link:"https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e"},{id:18,name:"understandingGit",link:"https://hackernoon.com/understanding-git-fcffd87c15a3"},{id:19,name:"framerMotion",link:"https://www.framer.com/motion/"},{id:20,name:"cSharpUnity",link:"https://unity3d.com/learning-c-sharp-in-unity-for-beginners"},{id:21,name:"sass",link:"https://sass-lang.com/"},{id:22,name:"flutter",link:"https://flutter.dev/"},{id:23,name:"flexBox",link:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},{id:24,name:"greenSock",link:"https://greensock.com/"},{id:25,name:"figma",link:"https://www.figma.com/"},{id:26,name:"express",link:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"},{id:27,name:"githubPages",link:"https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48"},{id:28,name:"buttonGenerator",link:"https://www.bestcssbuttongenerator.com/#/0"},{id:29,name:"coolPortfolio",link:"https://khang-nd.github.io/"},{id:30,name:"reactProjectBlog",link:"https://medium.com/@julianafogg/react-redux-portfolio-project-804ba6268ea0"},{id:31,name:"combineReducers",link:"https://egghead.io/lessons/react-redux-implementing-combinereducers-from-scratch"},{id:32,name:"carousel",link:"https://getbootstrap.com/docs/4.0/components/carousel/"},{id:33,name:"reactAndRails",link:"https://www.newline.co/fullstack-react/articles/how-to-get-create-react-app-to-work-with-your-rails-api/"}]}),Object(n.jsx)(E.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(C,Object(h.a)({},e))}}),Object(n.jsx)(E.a,{exact:!0,path:"/categories/:id/resources",render:function(t){var r=parseInt(t.match.params.id),c=e.props.categories.find((function(e){return e.id===r}));return c?Object(n.jsx)(k,{category:c}):Object(n.jsx)("div",{children:" Loading... "})}}),Object(n.jsx)(E.a,{exact:!0,path:"/categories",component:f}),Object(n.jsx)(E.a,{exact:!0,path:"/categories/:id/resources/new",render:function(e){return Object(n.jsx)(_,Object(h.a)({},e))}})]})}}]),r}(a.a.Component),F=Object(d.b)((function(e){return{categories:e.categories}}),{fetchCategories:function(){return function(e){fetch("https://code-wanderer-backend.herokuapp.com/categories/").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_CATEGORIES",payload:t})}))}}})(T),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,U=Object(i.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{categories:[],resources:[],wanders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return Object(h.a)(Object(h.a)({},e),{},{categories:t.payload});case"GET_RESOURCES":var r=t.payload;return Object(h.a)(Object(h.a)({},e),{},{resources:r.resources});case"ADD_RESOURCE":var n=e.categories.map((function(e){return e.id===t.payload.category_id?Object(h.a)(Object(h.a)({},e),{},{resources:[].concat(Object(u.a)(e.resources),[t.payload])}):e}));return Object(h.a)(Object(h.a)({},e),{},{categories:n,resources:[].concat(Object(u.a)(e.resources),[t.payload])});case"DELETE_RESOURCE":var c=e.categories.find((function(e){return e.id===t.payload.category_id})),a=c.resources.filter((function(e){return e.id!==t.payload.id}));c.resources=a;var s=e.categories.map((function(e){return e.id===c.id?c:e}));return Object(h.a)(Object(h.a)({},e),{},{categories:s});case"SHUFFLE_WANDERS":var o=t.payload,i=Math.floor(Math.random()*o.length),l=o[i];return Object(h.a)(Object(h.a)({},e),{},{wanders:l});default:return e}}),L(Object(i.a)(l.a)));o.a.render(Object(n.jsx)(d.a,{store:U,children:Object(n.jsx)(p.a,{children:Object(n.jsx)(F,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3dc8f4f5.chunk.js.map