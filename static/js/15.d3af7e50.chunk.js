"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[15],{1015:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,o,i,s=t(8152),l=t(168),c=t(6031),d=c.ZP.article(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),u=t(2791),p=c.ZP.form(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  border: 1px solid grey;\n  padding: 20px;\n"]))),x=c.ZP.button(o||(o=(0,l.Z)(["\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n  &:hover {\n    box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);\n    transition: 300ms;\n    background-color: blue;\n  }\n"]))),h=(c.ZP.input(i||(i=(0,l.Z)(["\n  margin-bottom: 20px;\n  margin-left: 10px;\n  &:hover,\n  &:focus {\n    transition: 250ms;\n    background-color: #add8e6;\n  }\n"]))),t(4017)),m=t(184);function f(){var n=(0,h.wY)().data,e=(0,h.Ol)(),t=(0,s.Z)(e,1)[0],r=(0,u.useState)(""),a=(0,s.Z)(r,2),o=a[0],i=a[1],l=(0,u.useState)(""),c=(0,s.Z)(l,2),d=c[0],f=c[1],b=function(n){switch(n.target.name){case"name":return i(n.target.value);case"number":return f(n.target.value);default:throw new Error}},g=function(e){n.some((function(n){return n.name.toLocaleLowerCase()===o.toLocaleLowerCase()}))?alert("".concat(o," is already in contacts")):t(e)},Z=function(){i(""),f("")};return(0,m.jsxs)(p,{onSubmit:function(n){n.preventDefault(),g({name:o,number:d}),Z()},children:[(0,m.jsxs)("label",{children:["Name",(0,m.jsx)("input",{type:"text",name:"name",value:o,autocomplete:"off",onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{children:["Number",(0,m.jsx)("input",{type:"tel",name:"number",placeholder:"+380*********",value:d,autoComplete:"off",onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)(x,{type:"submit",children:"Add contact"})]})}var b,g,Z,v=function(n){var e=n.value,t=n.onChange;return(0,m.jsxs)("label",{children:["Find contacts by name",(0,m.jsx)("input",{type:"text",name:"filter",value:e,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},j=c.ZP.button(b||(b=(0,l.Z)(["\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-left: 10px;\n  cursor: pointer;\n  &:hover {\n    box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);\n    transition: 300ms;\n    background-color: blue;\n  }\n"]))),w=(c.ZP.ul(g||(g=(0,l.Z)(["\n  padding: 0px;\n"]))),c.ZP.li(Z||(Z=(0,l.Z)(["\n  width: 100%;\n  font-size: 14px;\n  padding: 8px;\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n  &:hover {\n    background-color: #00bfff;\n  }\n"])))),C=t(7425),k=function(n){var e=n.contact,t=(0,h.wY)().isUninitialized,r=(0,h.zr)(),a=(0,s.Z)(r,2),o=a[0],i=a[1].isLoading;return(0,m.jsxs)(w,{children:[e.name,": ",e.number,(0,m.jsx)(j,{disabled:t,onClick:function(){return o(e.id)},children:i?"Deleting":(0,m.jsx)(C.kAP,{})})]})},y=t(4739),z=t(5048),A=function(n){var e=n.filter,t=(0,h.wY)(),r=t.data,a=t.isFetching,o=t.refetch,i=t.isError,s=(0,z.v9)(y.Z.getIsLoggedIn),l=r&&!a&&!i&&s&&o;return(0,m.jsx)(m.Fragment,{children:l&&(0,m.jsx)("ul",{children:r.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){return(0,m.jsx)(k,{contact:n},n.id)}))})})};function P(){var n=(0,u.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1];return(0,m.jsxs)(d,{children:[(0,m.jsx)("h1",{children:"Phonebook"}),(0,m.jsx)(f,{}),(0,m.jsx)("h2",{children:"Contacts"}),(0,m.jsx)(v,{value:t,onChange:function(n){r(n.target.value)}}),(0,m.jsx)(A,{filter:t})]})}}}]);
//# sourceMappingURL=15.d3af7e50.chunk.js.map