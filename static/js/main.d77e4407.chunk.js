(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://media3.giphy.com/media/31WUHsDVyi0iADyjLu/giphy.gif?cid=790b76115d3f9f9e6b6d44534558834e&rid=giphy.gif"},{id:2,image:"https://media3.giphy.com/media/pjwHYT6a3MdggZlvrk/giphy.gif?cid=790b76115d3f9fa56d44764c6fad89ae&rid=giphy.gif"},{id:3,image:"https://media1.giphy.com/media/1eEH7dQ2xwN95RwGQf/giphy.gif?cid=790b76115d3f9fc6532f35433220fefa&rid=giphy.gif"},{id:4,image:"https://media2.giphy.com/media/ZcbO1SXOB4JezA63fX/giphy.gif?cid=790b76115d3f9fd2394c6d4377c82996&rid=giphy.gif"},{id:5,image:"https://media0.giphy.com/media/321G0t7tpNvMsxcRYo/giphy.gif?cid=790b76115d3f9fdd47354d447797d54d&rid=giphy.gif"},{id:6,image:"https://media2.giphy.com/media/Bo1qPnmDTw6C9QvET5/giphy.gif?cid=790b76115d3f9fe9316154312eb1c4c8&rid=giphy.gif"},{id:7,image:"https://media1.giphy.com/media/fiq3wWeSTd7UqKMM9O/giphy.gif?cid=790b76115d3f9ff47a36424b67c74c53&rid=giphy.gif"},{id:8,image:"https://media2.giphy.com/media/495RY6A78syA4qT7ig/giphy.gif?cid=790b76115d3fa0026956436e6baba771&rid=giphy.gif"},{id:9,image:"https://media0.giphy.com/media/3LsQTitns7bVTL2AHO/giphy.gif?cid=790b76115d3fa01b6d4c664251589571&rid=giphy.gif"},{id:10,image:"https://media3.giphy.com/media/7zYkQUXL8Y1H2gA8c1/giphy.gif?cid=790b76115d3fa029344d773349cd40d3&rid=giphy.gif"},{id:11,image:"https://media2.giphy.com/media/65Tsx3Am8lyGlwVgcb/giphy.gif?cid=790b76115d3fa0366c2e36533685ae6d&rid=giphy.gif"},{id:12,image:"https://media0.giphy.com/media/5QKnOASbDsHshTqhz4/giphy.gif?cid=790b76115d3fa0662f6b795032ce89b0&rid=giphy.gif"}]},,,,,,,,function(e,i,a){e.exports=a(18)},,,,,,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var t=a(0),c=a.n(t),r=a(3),d=a.n(r),n=(a(15),a(4)),s=a(5),o=a(7),g=a(6),m=a(8);a(16);var h=function(e){return c.a.createElement("div",{onClick:function(){e.clickCharacter(e.id)},className:"col-lg-4 col-md-6 flex-container"},c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"view"},c.a.createElement("img",{src:e.image,className:"card-img-top",alt:e.id}),c.a.createElement("div",{class:"mask rgba-white-slight"}))))};a(17);var f=function(e){return c.a.createElement("nav",{className:"navbar nav fixed-top navbar-light bg-info justify-content-between sticky"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-light"},e.children),c.a.createElement("span",{className:"text-light"},e.message),c.a.createElement("span",{className:"text-light"},"Top Score: ",e.topScore),c.a.createElement("span",{className:"text-light"},"Score: ",e.score)))},p=a(1),l=function(e){function i(){var e,a;Object(n.a)(this,i);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(g.a)(i)).call.apply(e,[this].concat(c)))).state={characters:p,score:0,topScore:0,clicked:!1},a.clickCharacter=function(e){var i=a.state.characters.filter(function(i){return i.id===e})[0];if(i.clicked)a.state.characters.forEach(function(e){e.clicked=!1}),a.setState({characters:p,score:0});else{i.clicked=!0;var t=a.state.score+1,c=Math.max(a.state.topScore,t);a.setState({characters:a.state.characters,score:t,topScore:c})}},a}return Object(m.a)(i,e),Object(s.a)(i,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f,{score:this.state.score,topScore:this.state.topScore,message:12===this.state.score?"YOU WON!":""},"Memory Game"),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.characters.sort(function(e,i){return Math.random()-.5}).map(function(i){return c.a.createElement(h,{clickCharacter:e.clickCharacter,id:i.id,image:i.image})}))))}}]),i}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d77e4407.chunk.js.map