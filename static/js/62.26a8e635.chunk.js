(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[62],{62:function(e,t,n){"use strict";n.r(t),n.d(t,{Home:function(){return M}});var r=n(434),a=n(791),s="section_section__+6LE3",o="section_title__XzOLY",i=n(184),u=function(e){var t=e.title,n=e.children;return(0,i.jsxs)("section",{className:s,children:[(0,i.jsx)("h2",{className:o,children:t}),n]})},c=n(439),l=n(429),f=n.n(l),h="form_form__sP2jI",p="form_input__Hf2Sl",d="form_button__uA2lI";function m(e){var t=e.onSubmit,n=(0,a.useState)(""),r=(0,c.Z)(n,2),s=r[0],o=r[1],u=(0,a.useState)(""),l=(0,c.Z)(u,2),m=l[0],x=l[1],v=f().generate(),_=f().generate(),g=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":x(r)}};return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,m),o(""),x("")},className:h,children:[(0,i.jsxs)("label",{htmlFor:v,children:["Name"," ",(0,i.jsx)("input",{type:"text",name:"name",value:s,onChange:g,id:v,className:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)("label",{htmlFor:_,children:["Number"," ",(0,i.jsx)("input",{type:"tel",name:"number",value:m,onChange:g,className:p,id:_,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)("button",{type:"submit",className:d,children:"Add contact"})]})}var x="filter_filter__N-06B",v=function(e){var t=e.value,n=e.onChange;return(0,i.jsxs)("label",{children:["Find contacts by name "," ",(0,i.jsx)("input",{type:"text",value:t,onChange:n,className:x})]})},_="list_list__UTbzE",g="list_item__Srv+M",b="list_button__VAbQf",j=function(e){var t=e.contacts,n=e.onDeleteContact;return(0,i.jsx)("ul",{className:_,children:t.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,i.jsxs)("li",{className:g,children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{children:"\ud83d\udc64"})," ",r,": ",a]}),(0,i.jsx)("button",{type:"button",onClick:function(){return n(t)},className:b,children:"Delete"})]},t)}))})},w=n(960),C=function(e){return e.filter},N=function(e){var t=e.contacts,n=e.filter,r=t.items;if(!n)return r;var a=n.toLowerCase();return r.filter((function(e){return e.name.toLowerCase().includes(a)}))},y=n(808),k="app_div__GYaoV",A="app_message__OTDF6";function M(){var e=(0,r.v9)(N),t=(0,r.v9)(C),n=(0,r.I0)();(0,a.useEffect)((function(){n((0,w.yF)())}),[n]);var s=Boolean(e.length);return(0,i.jsxs)("div",{className:k,children:[(0,i.jsx)(u,{title:"Phonebook",children:(0,i.jsx)(m,{onSubmit:function(e,t){n((0,w.v6)({name:e,number:t}))}})}),(0,i.jsxs)(u,{title:"Contacts",children:[(0,i.jsx)(v,{value:t,onChange:function(e){var t=e.target;n((0,y.T)(t.value))}}),s?(0,i.jsx)(j,{contacts:e,onDeleteContact:function(e){n((0,w.in)(e))}}):(0,i.jsx)("p",{className:A,children:"There are no contacts in the phonebook."})]})]})}},429:function(e,t,n){"use strict";e.exports=n(274)},857:function(e,t,n){"use strict";var r,a,s,o=n(408),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){s=!1}function c(e){if(e){if(e!==r){if(e.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,u()}}else r!==i&&(r=i,u())}function l(){return s||(s=function(){r||c(i);for(var e,t=r.split(""),n=[],a=o.nextValue();t.length>0;)a=o.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||i},characters:function(e){return c(e),r},seed:function(e){o.seed(e),a!==e&&(u(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},98:function(e,t,n){"use strict";var r,a,s=n(226);n(857);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=s(7),t+=s(e),r>0&&(t+=s(r)),t+=s(n)}},226:function(e,t,n){"use strict";var r=n(857),a=n(139),s=n(483);e.exports=function(e){for(var t,n=0,o="";!t;)o+=s(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return o}},274:function(e,t,n){"use strict";var r=n(857),a=n(98),s=n(46),o=n(347)||0;function i(){return a(o)}e.exports=i,e.exports.generate=i,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=s},46:function(e,t,n){"use strict";var r=n(857);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},139:function(e){"use strict";var t,n="object"===typeof window&&(window.crypto||window.msCrypto);t=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},408:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},347:function(e){"use strict";e.exports=0},483:function(e){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),s="";;)for(var o=e(a),i=a;i--;)if((s+=t[o[i]&r]||"").length===+n)return s}}}]);
//# sourceMappingURL=62.26a8e635.chunk.js.map